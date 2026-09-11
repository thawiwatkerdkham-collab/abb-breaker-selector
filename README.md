# ABB Breaker Price Finder

Web app for selecting ABB MCCB/ACB using technical data from the ABB 2024 catalog and prices from the ABB 2026 Thailand price list.

## Project structure

```text
abb-breaker-selector/
├─ data/
│  └─ breakers.json
├─ public/
│  └─ index.html
├─ README.md
├─ render.yaml
├─ server.js
├─ start.bat
└─ start_web.bat
```

## Run on Windows

1. Install Node.js.
2. Double-click `start_web.bat`, or run `start.bat`.
3. Open `http://localhost:3000`.

## Deploy on Render

Create a Web Service connected to this GitHub repository.

- Runtime: Node
- Build Command: leave blank
- Start Command: `node server.js`

## Data

- Technical data: ABB catalog 2024
- Price data: ABB Thailand price list 2026
- Ics values remain displayed as kA in the table.
- The Ics filter dropdown uses `% Icu` options: 25%, 50%, 75%, 100% Icu.

Verify current ABB catalog/pricing and application requirements before using a result for an actual design or purchase.
