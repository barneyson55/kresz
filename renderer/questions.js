window.KRESZ_QUESTIONS = [
  {
    id: 'oneway_basic',
    sceneId: 'oneway_basic',
    typeLabel: 'Egyirányú kereszteződés',
    difficulty: 'alap',
    pace: 'normál',
    timeLimitMs: 0,
    question: 'Egyirányú utcák egyenrangú kereszteződésében haladsz (A). B balról érkezik. Mi a helyes haladási sorrend?',
    options: [
      { text: 'A jármű (te) halad elsőként.', correct: true },
      { text: 'B jármű halad elsőként.', correct: false },
      { text: 'Egyszerre haladhattok, mert egyirányú az út.', correct: false },
      { text: 'Mindketten megálltok és egyeztettek.', correct: false }
    ],
    description:
      'Két egyirányú út kereszteződik, jelzés nincs. Egyenrangú kereszteződésben a jobbkéz-szabály érvényes: elsőbbséget kell adni a jobbról érkező járműnek. B számára A jobbról érkezik, ezért B köteles elsőbbséget adni.',
    definitions: [
      {
        term: 'Egyenrangú kereszteződés',
        text: 'Jelzéssel nem szabályozott kereszteződés, ahol a jobbkéz-szabály az elsőbbségi rend.'
      },
      {
        term: 'Jobbkéz-szabály',
        text: 'Elsőbbséget kell adni a jobbról érkező járműnek.'
      }
    ],
    legend: ['A – Te', 'B – Személyautó']
  },
  {
    id: 'oneway_yield',
    sceneId: 'oneway_yield',
    typeLabel: 'Egyirányú főút',
    difficulty: 'középhaladó',
    pace: 'normál',
    timeLimitMs: 0,
    question: 'Egyirányú főút keresztezéséhez érsz mellékútról, "Elsőbbségadás kötelező" táblával. B a főúton halad. Mit teszel?',
    options: [
      { text: 'Megadom az elsőbbséget B-nek, majd én haladok.', correct: true },
      { text: 'Elindulhatok, mert a főút egyirányú.', correct: false },
      { text: 'Csak akkor adok elsőbbséget, ha B közel van.', correct: false },
      { text: 'Megállok, amíg a kereszteződés teljesen üres lesz.', correct: false }
    ],
    description:
      'Elsőbbségadás kötelező tábla esetén a főúton haladóknak mindenképp elsőbbséget kell adni. Az egyirányúság nem változtat az elsőbbségi renden.',
    definitions: [
      {
        term: 'Elsőbbségadás kötelező',
        text: 'A jelzőtábla hatálya alatt elsőbbséget kell adni a keresztezett úton érkező járműveknek.'
      }
    ],
    legend: ['A – Te', 'B – Főúton haladó jármű']
  },
  {
    id: 'oneway_turn_ped',
    sceneId: 'oneway_turn_ped',
    typeLabel: 'Kanyarodás egyirányú úton',
    difficulty: 'haladó',
    pace: 'normál',
    timeLimitMs: 0,
    question: 'Egyirányú úton haladsz, jobbra kanyarodnál. A zebra előtt gyalogos (P) lép le, melletted kerékpáros (C) egyenesen halad. Mi a helyes?',
    options: [
      { text: 'Megállok, elengedem a gyalogost és a kerékpárost, majd kanyarodok.', correct: true },
      { text: 'Először én kanyarodok, mert már bent vagyok a kereszteződésben.', correct: false },
      { text: 'Csak a gyalogosnak adok elsőbbséget, a kerékpárosnak nem.', correct: false },
      { text: 'A kerékpárosnak kell megállnia, mert én kanyarodom.', correct: false }
    ],
    description:
      'Kanyarodáskor elsőbbséget kell adni a keresztezett úton áthaladó gyalogosnak, és a veled azonos irányban egyenesen haladó kerékpárosnak is. A helyes lépés: megállás és mindkettő elengedése.',
    definitions: [
      {
        term: 'Kanyarodó jármű',
        text: 'Az útirányt változtató jármű elsőbbséget ad a keresztező úton áthaladó gyalogosnak és a mellette egyenesen haladó kerékpárosnak.'
      }
    ],
    legend: ['A – Te', 'C – Kerékpáros', 'P – Gyalogos']
  },
  {
    id: 'railway_overtake',
    sceneId: 'railway_overtake',
    typeLabel: 'Gyors helyzet',
    difficulty: 'haladó',
    pace: 'gyors',
    timeLimitMs: 12000,
    question: 'Gyorsan közeledsz egy vasúti átjáróhoz. Előtted lassú jármű (B). A fénysorompó fehér villogó jelzést ad. Mit teszel?',
    options: [
      { text: 'Nem előzök, sebességet csökkentek, és készen állok a megállásra.', correct: true },
      { text: 'Előzök, mert a fehér villogó jelzés szabad utat jelez.', correct: false },
      { text: 'Megállás nélkül, változatlan tempóval áthajtok.', correct: false },
      { text: 'Előzök és csak az átjáró után lassítok.', correct: false }
    ],
    description:
      'Vasúti átjáróban és az átjáró előtt 30 méteren belül előzni tilos. Fehér villogó jelzésnél is fokozottan körültekintően, mérsékelt sebességgel kell megközelíteni az átjárót, és fel kell készülni a megállásra.',
    definitions: [
      {
        term: 'Vasúti átjáró',
        text: 'A vasút és a közút szintbeli kereszteződése.'
      },
      {
        term: 'Előzés tilalma',
        text: 'Az átjáróban és az átjáró előtt 30 méteren belül előzni tilos.'
      }
    ],
    legend: ['A – Te', 'B – Előtted haladó jármű']
  }
];
