# KRESZ Oktato ? interaktiv Electron alkalmazas

Magyar nyelvu, vizualis, minimalista KRESZ-oktato app, amely a bonyolultabb egyiranyu keresztezodeseket es gyors utemu kozlekedesi helyzeteket gyakoroltatja. A feladatok ujraprobalhatok, a helyes valasz automatikus tovabblepest indit.

## Fo jellemzok
- Interaktiv, vizualis feladatok SVG illusztraciokkal.
- Egyiranyu keresztezodesek: alap -> osszetett feladatsorok.
- Gyors utemu szituaciok idozitovel (pl. vasuti atjaro elotti dontes).
- Hibas valasz utan azonnal ujraprobalhato, helyes valasz utan automatikus tovabblepes.
- Magyar nyelvu kerdesek, leirasok es definiciok.

## Kepernyo felepitese
- **Felul (kozepen):** a kerdes.
- **Kozepen (bal):** a valos helyzet illusztracioja (SVG).
- **Kozepen (jobb):** valaszlehetosegek (1-4 billentyuvel is valaszthato).
- **Alul:** a helyzet reszletes leirasa, idobeli/terbeli magyarazatok, definiciok.

## Gyors inditas (Windows)
### Kezi futtatas
```bash
npm install
npm run start
```

### Gyorsbillentyu (AutoHotkey v2)
A projekt tartalmaz egy AHK v2 scriptet, amely a `Ctrl+Alt+F10` billentyure inditja az appot.

1. Telepitsd az AutoHotkey v2-t.
2. Futtasd a `kresz-hotkey.ahk` fajlt.
3. Nyomd meg: `Ctrl+Alt+F10`.

A script a `run-kresz.bat` fajlt inditja, amely elvegzi a `npm install`, `npm rebuild`, majd a futtatast.

### Repo klonozas (Windows)
A `clone-kresz.bat` a GitHub repot klonozza. Opcionalisan celmappat is megadhatsz.

```bat
clone-kresz.bat D:\dev\kresz
```

Klonozas utan futtasd a `run-kresz.bat` fajlt a celmappabol.

## Projektstruktura
- `main/` - Electron fofolyamat (`main.js`, `preload.js`)
- `renderer/` - UI (HTML/CSS/JS), illusztraciok es logika
- `renderer/scenes.js` - SVG jelenetek
- `renderer/questions.js` - kerdesek es valaszok
- `run-kresz.bat` - telepites + rebuild + futtatas
- `update-kresz.bat` - repo frissites + ujratelepites
- `clone-kresz.bat` - repo klonozas
- `kresz-hotkey.ahk` - gyorsbillentyu (AutoHotkey v2)

## Uj feladat hozzaadasa
1. Keszits uj SVG jelenetet a `renderer/scenes.js` fajlban (uj `sceneId`).
2. Adj hozza uj kerdest a `renderer/questions.js` fajlban, a `sceneId` hivatkozasaval.
3. Toltsd ki a leirast es a definiciokat a pontos, felreerthetetlen magyarazathoz.

## Licenc
- A projekt MIT licenc alatt all - lasd `LICENSE`.
- Harmadik feltol szarmazo osszetevok - lasd `THIRD_PARTY_NOTICES.md`.

## Megjegyzes a betutipusokrol
A felulet Google Fonts betutipusokat hasznal (IBM Plex Sans, Space Grotesk). Ha offline kornyezetben futtatnad, erdemes ezeket lokalisan beagyazni.
