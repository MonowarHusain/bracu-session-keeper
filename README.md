# BRACU Session Keeper Pro 🛡️

![Chrome Extension](https://img.shields.io/badge/Chrome-Extension-blue?style=for-the-badge&logo=googlechrome)
![Manifest V3](https://img.shields.io/badge/Manifest-V3-green?style=for-the-badge)
![Privacy First](https://img.shields.io/badge/Privacy-First-success?style=for-the-badge&logo=shield)
![Open Source](https://img.shields.io/badge/Open-Source-orange?style=for-the-badge&logo=github)
![License](https://img.shields.io/badge/License-MIT-purple?style=for-the-badge)

A lightweight, privacy-first Manifest V3 Chrome extension designed to seamlessly maintain active Google Workspace sessions for institutional accounts, preventing disruptive automatic sign-outs.

---

## 📌 The Problem

Institutional Google Workspace policies often enforce strict session limits on web browsers. These usually come in two forms:

### Idle Timeouts
The system signs you out if it detects no mouse or keyboard activity — even when you are actively reading documents, watching lectures, or running code in another window.

### Hard 24-Hour Limits
A forced server-side token expiration occurs exactly 24 hours after login, regardless of user activity.

These policies create frustrating, unexpected logouts that interrupt workflow during research, development, assignments, or long study sessions.

---

# 🛠️ The Solution

**BRACU Session Keeper Pro** acts as an automated, zero-overhead background guardian.

### ✅ Defeating Idle Timeouts
The extension uses a background **Service Worker** to send a tiny automated heartbeat request to Google authentication endpoints every 2 minutes, helping maintain the active session state.

### ✅ Monitoring Token Health
It continuously monitors authentication responses. If the server returns:

- `401 Unauthorized`
- `302 Redirect`

the extension instantly detects that the session has expired.

### ✅ Early-Warning Notification System
Instead of discovering the logout after losing work or failing to save changes, the extension immediately sends a desktop notification the moment the session becomes invalid.

---

# ✨ Key Features

- **Manifest V3 Architecture**  
  Built using Chrome’s modern extension framework with ephemeral background Service Workers for minimal resource usage.

- **Smart Polling System**  
  Uses the `chrome.alarms` API for precise and efficient background execution.

- **Live Status Dashboard**  
  Clean popup interface displaying:
  - Current connection state
  - Last successful heartbeat timestamp
  - Session monitoring status

- **Native Desktop Alerts**  
  Uses the `chrome.notifications` API to instantly alert the user when re-authentication is required.

- **Lightweight & Efficient**  
  Sleeps when idle, consuming virtually no CPU and negligible memory.

---

# 🔒 Privacy & Data Security Policy

This extension is strictly local and completely private.

## ✅ No Data Collection
The extension does **NOT**:

- Read emails
- Access Google Drive files
- Monitor browsing history
- Collect credentials
- Store personal information

## ✅ No Telemetry or Tracking
There are:

- No analytics
- No tracking scripts
- No external databases
- No third-party APIs

## ✅ How the Heartbeat Works
The extension only requests a minimal authentication feed endpoint (`feed/atom`) and checks the returned HTTP status code:

- `200 OK` → Session active
- `401 / 302` → Session expired

The response body is never parsed, stored, or transmitted.

## ✅ Open Source
The entire codebase is:

- Human-readable
- Unminified
- Fully auditable

---

# 🚀 Installation (Developer Mode)

Since this is a custom utility extension, it must be loaded manually through Chrome Developer Mode.

## 1. Clone the Repository

```bash
git clone https://github.com/MonowarHusain/bracu-session-keeper.git
```

## 2. Open Chrome Extensions Page

Navigate to:

```text
chrome://extensions/
```

## 3. Enable Developer Mode

Turn ON the **Developer mode** toggle located in the top-right corner.

## 4. Load the Extension

- Click **Load unpacked**
- Select the cloned `bracu-session-keeper` directory

## 5. Optional

Pin the extension to the Chrome toolbar for quick access to the live status dashboard.

---

# 💻 Tech Stack

- JavaScript (ES6+)
- HTML5
- CSS3

## Chrome Extension APIs Used

- `chrome.alarms`
- `chrome.storage.local`
- `chrome.notifications`
- `chrome.action`

---

# 📂 Project Structure

```text
bracu-session-keeper/
│
├── manifest.json
├── background.js
├── popup.html
├── popup.js
├── popup.css
├── icons/
│   ├── icon16.png
│   ├── icon48.png
│   └── icon128.png
│
└── README.md
```

---

# ⚠️ Disclaimer

This project is intended strictly for educational and productivity purposes.

Users are responsible for ensuring compliance with their institution’s IT policies and acceptable-use guidelines.

---

# 👨‍💻 Developer

## Monowar Husain

Undergraduate Student  
Department of Computer Science & Engineering  
BRAC University

📧 Contact: `monowar.husain@g.bracu.ac.bd`

---

# ⭐ Support the Project

If you found this project useful:

- Star the repository
- Share feedback
- Contribute improvements
- Open issues or pull requests

---

# 📜 License

This project is licensed under the MIT License.
