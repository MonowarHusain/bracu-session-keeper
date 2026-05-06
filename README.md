# BRACU Session Keeper Pro 🛡️

A lightweight, manifest V3 Chrome extension designed to maintain active Google Workspace sessions for institutional accounts.

## 📌 The Problem
Institutional Google Workspace policies often enforce strict, fixed 24-hour session limits on web browsers. This causes frustrating, unprompted logouts during critical workflow periods.

## 🛠️ The Solution
This extension acts as a persistent background service worker that:
- Sends automated, low-overhead heartbeat requests to Google's authentication servers.
- Monitors response headers to detect precise token expiration (e.g., catching `401 Unauthorized` or `302 Found` redirects).
- Provides real-time status UI and OS-level desktop notifications the exact moment a hard server-side expiration occurs.

## 🚀 Installation (Developer Mode)
1. Clone this repository: `git clone https://github.com/YOUR_USERNAME/bracu-session-keeper.git`
2. Open Google Chrome and navigate to `chrome://extensions/`
3. Enable **Developer mode** in the top right corner.
4. Click **Load unpacked** and select the cloned directory.

## 👨‍💻 Author
**Monowar Husain**  
*Feedback:* [monowar.husain@g.bracu.ac.bd](mailto:monowar.husain@g.bracu.ac.bd)
