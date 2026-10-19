# Safari Night

A tiny Safari Web Extension that gives every site a local, automatic dark mode, with a per-site toggle.

- Inverts light pages with a CSS filter (images and video are flipped back so they look normal).
- Leaves pages that already have a dark background alone.
- Popup: a global on/off switch and a toggle for the current site.
- No network requests; settings live in `browser.storage.local`.

## Layout

- `web/` — the extension itself (`manifest.json`, `content.js`, `popup.html`, `popup.js`)
- `native/` — the Xcode macOS app wrapper Safari needs to install the extension

## Build

Open `native/Safari Night/Safari Night.xcodeproj` in Xcode, select the "Safari Night" scheme, and run. Then enable the extension in Safari → Settings → Extensions.
