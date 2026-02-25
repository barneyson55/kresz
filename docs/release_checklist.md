# Release Checklist

Cél: kiszámítható, visszagörgethető kiadás minden verzióhoz.

## 1) Verzióemelés
- [ ] Döntsd el a verzió típust (patch/minor/major) a változás szerint.
- [ ] Frissítsd a `package.json` `version` mezőjét.
- [ ] Ellenőrizd, hogy a README/STATUS/TODO hivatkozások konzisztensen tükrözik a kiadási állapotot.

## 2) QA kapu (release csak zöld állapotban)
- [ ] Függőségek telepítése: `npm ci`.
- [ ] Alap ellenőrzés: `npm run start` (manuális smoke: app indulás, kezdőképernyő, legalább 1 kérdés betöltés).
- [ ] Dokumentáció ellenőrzése: release jegyzet + változások listája friss.

## 3) Rollback terv
- [ ] Tag-eld a kiadást (`vX.Y.Z`) és őrizd meg az előző stabil taget.
- [ ] Hiba esetén visszaállás az előző stabil tagre.
- [ ] Rollback után rövid incidens-jegyzet: ok, hatás, megelőzés.

## 4) Release Notes sablon

```md
## vX.Y.Z - YYYY-MM-DD

### Added
- ...

### Changed
- ...

### Fixed
- ...

### Risks / Known issues
- ...

### Rollback
- Előző stabil: vA.B.C
```

## 5) Kiadás lezárása
- [ ] Commit + push megtörtént.
- [ ] Tag push megtörtént.
- [ ] Rövid státuszfrissítés a `STATUS.md`-ben.
