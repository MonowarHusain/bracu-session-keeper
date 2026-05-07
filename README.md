# BRACU Session Keeper Pro 🛡️

![Status](https://img.shields.io/badge/Status-FAILED%20/%20ARCHIVED-red)
![License](https://img.shields.io/badge/License-MIT-green)
![Security](https://img.shields.io/badge/Privacy-First-blue)

A lightweight, privacy-focused Manifest V3 Chrome extension designed to maintain active Google Workspace sessions.

## 📌 Project Post-Mortem
This project was initially designed to prevent forced logouts on institutional Google Workspace accounts (specifically BRAC University) by maintaining a background heartbeat and automating re-authentication.

### 🚫 Reason for Failure
While the extension successfully prevents **Idle Timeouts** via a `fetch` heartbeat, it cannot bypass Google's cryptographically enforced 24-hour **Token Time-to-Live (TTL)**. 

Attempts to engineer an automated recovery loop (via injected content scripts and DOM manipulation) were abandoned because:

1.  **Chrome Security Model:** Chrome strictly prohibits password managers from autofilling background, non-user-focused tabs to prevent malicious credential scraping.
2.  **Anti-Bot Defenses:** Synthetic DOM interactions (such as `button.click()`) on the Google SSO portal trigger enterprise-grade anti-automation locks (reCAPTCHA/verification challenges), instantly halting the automation.

### 📝 Final Assessment
Because a fully autonomous, self-healing session cannot be achieved without severely compromising local security or violating upstream anti-bot policies, the project is considered a failure regarding its primary objective and has been archived.

---

### 👨‍💻 Developer
**Monowar Husain** *Undergraduate Student, Computer Science and Engineering*

### ⚖️ License
This project is licensed under the **MIT License**.
