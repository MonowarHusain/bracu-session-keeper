// Create an alarm every 5 minutes
chrome.runtime.onInstalled.addListener(() => {
    chrome.alarms.create("keepAlive", { periodInMinutes: 5 });
});

// When the alarm fires, ping Google
chrome.alarms.onAlarm.addListener((alarm) => {
    if (alarm.name === "keepAlive") {
        console.log("Pinging Google to keep session alive...");
        // Fetch a small resource from Gmail to keep the session cookie fresh
        fetch("https://mail.google.com/mail/u/0/feed/atom")
            .then(response => console.log("Ping status:", response.status))
            .catch(err => console.error("Ping failed:", err));
    }
});