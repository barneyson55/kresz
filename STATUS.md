# STATUS

Last triage: 2026-02-15 (UTC)

## Stack
- Electron desktop app (Node.js + renderer JS)
- Content-driven quiz/scenario files (`renderer/questions.js`, `renderer/scenes.js`)

## Runnable check
- Command:
  - `node --check main/main.js`
  - `node --check main/preload.js`
  - `node --check renderer/app.js`
  - `node --check renderer/questions.js`
  - `node --check renderer/scenes.js`
- Result:
  - ✅ PASS (syntax checks pass)

## First top-level task
- Add content integrity validation (every `sceneId` referenced by questions exists; answer metadata is consistent) to reduce regression risk as scenarios grow.
