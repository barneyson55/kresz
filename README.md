# KRESZ Oktató – interaktív Electron alkalmazás

Magyar nyelvű, vizuális, minimalista KRESZ-oktató app, amely a bonyolultabb egyirányú kereszteződéseket és gyors ütemű közlekedési helyzeteket gyakoroltatja. A feladatok újrapróbálhatók, a helyes válasz automatikus továbblépést indít.

## Fő jellemzők
- Interaktív, vizuális feladatok SVG illusztrációkkal.
- Egyirányú kereszteződések: alap → összetett feladatsorok.
- Gyors ütemű szituációk időzítővel (pl. vasúti átjáró előtti döntés).
- Hibás válasz után azonnal újrapróbálható, helyes válasz után automatikus továbblépés.
- Magyar nyelvű kérdések, leírások és definíciók.

## Képernyő felépítése
- **Felül (középen):** a kérdés.
- **Középen (bal):** a valós helyzet illusztrációja (SVG).
- **Középen (jobb):** válaszlehetőségek (1–4 billentyűvel is választható).
- **Alul:** a helyzet részletes leírása, időbeli/térbeli magyarázatok, definíciók.

## Gyors indítás (Windows)
### Kézi futtatás
```bash
npm install
npm run start
```

### Gyorsbillentyű (AutoHotkey v2)
A projekt tartalmaz egy AHK v2 scriptet, amely a `Ctrl+Alt+F10` billentyűre indítja az appot.

1. Telepítsd az AutoHotkey v2-t.
2. Futtasd a `kresz-hotkey.ahk` fájlt.
3. Nyomd meg: `Ctrl+Alt+F10`.

A script a `run-kresz.bat` fájlt indítja, amely elvégzi a `npm install`, `npm rebuild`, majd a futtatást.

### Repo klónozás (Windows)
A `clone-kresz.bat` a GitHub repót klónozza. Opcionálisan célmappát is megadhatsz.

```bat
clone-kresz.bat D:\dev\kresz
```

Klónozás után futtasd a `run-kresz.bat` fájlt a célmappából.

## Projektstruktúra
- `main/` - Electron főfolyamat (`main.js`, `preload.js`)
- `renderer/` - UI (HTML/CSS/JS), illusztrációk és logika
- `renderer/scenes.js` - SVG jelenetek
- `renderer/questions.js` - kérdések és válaszok
- `run-kresz.bat` - telepítés + rebuild + futtatás
- `clone-kresz.bat` - repo klónozás
- `kresz-hotkey.ahk` - gyorsbillentyű (AutoHotkey v2)

## Új feladat hozzáadása
1. Készíts új SVG jelenetet a `renderer/scenes.js` fájlban (új `sceneId`).
2. Adj hozzá új kérdést a `renderer/questions.js` fájlban, a `sceneId` hivatkozásával.
3. Töltsd ki a leírást és a definíciókat a pontos, félreérthetetlen magyarázathoz.

## Licenc
- A projekt MIT licenc alatt áll - lásd `LICENSE`.
- Harmadik féltől származó összetevők - lásd `THIRD_PARTY_NOTICES.md`.

## Megjegyzés a betűtípusokról
A felület Google Fonts betűtípusokat használ (IBM Plex Sans, Space Grotesk). Ha offline környezetben futtatnád, érdemes ezeket lokálisan beágyazni.
