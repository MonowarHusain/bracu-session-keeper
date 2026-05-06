// Function to perform the ping and update the UI storage
async function performPing() {
    const now = new Date().toLocaleTimeString();
    try {
        const response = await fetch("https://mail.google.com/mail/u/0/feed/atom");

        if (response.status === 200) {
            console.log(`[${now}] Ping Status: 200 (Connected)`);
            chrome.storage.local.set({ lastPing: now, status: "Connected" });
        } else if (response.status === 401 || response.status === 302) {
            console.warn(`[${now}] Ping Status: ${response.status} (Expired)`);
            chrome.storage.local.set({ lastPing: now, status: "Expired! Re-login needed." });

            // Send a desktop notification so you know immediately
            chrome.notifications.create({
                type: 'basic',
                iconUrl: 'icon.png', // Just remove this line if you don't add an icon.png to the folder
                title: 'BRACU Session Expired',
                message: 'Your Google Workspace session has ended. Please sign in again.'
            });
        } else {
            chrome.storage.local.set({ lastPing: now, status: `Error: ${response.status}` });
        }
    } catch (err) {
        console.error(`[${now}] Ping Failed:`, err);
        chrome.storage.local.set({ lastPing: now, status: "Network Error / Offline" });
    }
}

// Fire immediately when the extension starts/reloads
chrome.runtime.onInstalled.addListener(() => {
    console.log("Session Keeper Pro Installed. Starting Heartbeat...");
    chrome.alarms.create("keepAlive", { periodInMinutes: 2 });
    performPing();
});

// Listen for the alarm
chrome.alarms.onAlarm.addListener((alarm) => {
    if (alarm.name === "keepAlive") {
        performPing();
    }
});