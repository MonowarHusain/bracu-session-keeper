function updateUI() {
    chrome.storage.local.get(["lastPing", "status"], (data) => {
        if (data.lastPing) {
            document.getElementById("lastPing").innerText = data.lastPing;

            const statusElement = document.getElementById("status");
            statusElement.innerText = data.status || "Active";

            // Add red styling if the session expired
            if (data.status && data.status.includes("Expired")) {
                statusElement.classList.add("error");
            } else {
                statusElement.classList.remove("error");
            }
        }
    });
}

// Initial call and refresh every second
updateUI();
setInterval(updateUI, 1000);