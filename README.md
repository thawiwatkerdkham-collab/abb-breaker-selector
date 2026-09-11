# ABB Breaker Selector

Web app for selecting ABB MCCB/ACB using current, voltage, poles, trip unit, Icu, Ics and budget.

## Project structure

```text
abb-breaker-selector/
├─ data/
│  └─ breakers.json
├─ public/
│  └─ index.html
├─ README.md
├─ server.js
├─ start.bat
└─ render.yaml
```

## Run on Windows

1. Install Node.js.
2. Double-click `start.bat`, or run `node server.js`.
3. Open `http://localhost:3000`.

## Deploy on Render

Create a **Web Service** connected to this GitHub repository.

- Runtime: Node
- Build Command: leave blank
- Start Command: `node server.js`

The server uses Render's `PORT` environment variable automatically, serves the UI from `public/`, and serves the catalog from `data/breakers.json`.

## Data

Edit `data/breakers.json` to update the breaker catalog. The browser loads it from `/data/breakers.json` when the app starts.

> The catalog data in this prototype comes from the original Breaker Selector prototype. Verify current ABB catalog/pricing and application requirements before using a result for an actual design or purchase.
