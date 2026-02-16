window.KRESZ_QUESTION_TEMPLATES = [
  {
    id: 'oneway_basic_left',
    category: 'oneway',
    sceneId: 'oneway_basic_left',
    typeLabel: 'Egyiranyu keresztezodes',
    difficulty: 'alap',
    pace: 'normal',
    timeLimitMs: 0,
    questionVariants: [
      'Egyiranyu utcak jelzes nelkuli keresztezodeseben haladsz (A). B balrol erkezik. Mi a helyes haladasi sorrend?',
      'Ket egyiranyu ut keresztezodik, nincs elsosegi jelzes. Te (A) a jobbkez-szabaly szerint kinek adsz elsoseget?'
    ],
    options: [
      { text: 'A jarmu halad elsokent.', correct: true },
      { text: 'B jarmu halad elsokent.', correct: false },
      { text: 'Egyszerre haladhattok.', correct: false },
      { text: 'Mindketten megalltok es egyeztettek.', correct: false }
    ],
    description:
      'Ket egyiranyu ut keresztezodik, jelzes nincs. Egyenrangu keresztezodesben a jobbkez-szabaly ervenyes: elsoseget kell adni a jobbrol erkezo jarmunek. B szamara A jobbrol erkezik, ezert B koteles elsoseget adni.',
    definitions: [
      {
        term: 'Egyenrangu keresztezodes',
        text: 'Jelzessel nem szabalyozott keresztezodes, ahol a jobbkez-szabaly az elsosegi rend.'
      },
      {
        term: 'Jobbkez-szabaly',
        text: 'Elsoseget kell adni a jobbrol erkezo jarmunek.'
      }
    ],
    legend: ['A - Te', 'B - Szemelyauto']
  },
  {
    id: 'oneway_basic_right',
    category: 'oneway',
    sceneId: 'oneway_basic_right',
    typeLabel: 'Egyiranyu keresztezodes',
    difficulty: 'alap',
    pace: 'normal',
    timeLimitMs: 0,
    questionVariants: [
      'Jelzes nelkuli keresztezodesben haladsz (A). B jobbrol erkezik. Ki halad elsokent?',
      'Egyiranyu utcak keresztezodeseben jobbrol jon B. Mi a helyes sorrend?'
    ],
    options: [
      { text: 'B jarmu halad elsokent, A megadja az elsoseget.', correct: true },
      { text: 'A jarmu halad elsokent, mert egyiranyu az ut.', correct: false },
      { text: 'Egyszerre haladhattok.', correct: false },
      { text: 'A jarmu halad elsokent, mert B balrol jonne.', correct: false }
    ],
    description:
      'Jelzes nelkuli keresztezodesben a jobbkez-szabaly ervenyes. A jarmunek elsoseget kell adni a jobbrol erkezo B jarmunek.',
    definitions: [
      {
        term: 'Jobbkez-szabaly',
        text: 'Elsoseget kell adni a jobbrol erkezo jarmunek.'
      }
    ],
    legend: ['A - Te', 'B - Szemelyauto']
  },
  {
    id: 'oneway_yield',
    category: 'oneway',
    sceneId: 'oneway_yield',
    typeLabel: 'Egyiranyu fout',
    difficulty: 'kozephalado',
    pace: 'normal',
    timeLimitMs: 0,
    questionVariants: [
      'Egyiranyu fout keresztezesehez ersz mellekutrol, "Elsobbsegadas kotelezo" tablaval. B a fouton halad. Mit teszel?',
      'Mellekutrol erkezel "Elsobbsegadas kotelezo" tablaval. B a fouton halad. Mi a helyes lepes?'
    ],
    options: [
      { text: 'Megadom az elsoseget B-nek, majd en haladok.', correct: true },
      { text: 'Elindulhatok, mert a fout egyiranyu.', correct: false },
      { text: 'Csak akkor adok elsoseget, ha B kozel van.', correct: false },
      { text: 'Megallok, amig a keresztezodes teljesen ures lesz.', correct: false }
    ],
    description:
      'Elsobbsegadas kotelezo tabla eseten a fouton haladoknak mindenkepp elsoseget kell adni. Az egyiranyusag nem valtoztat az elsosegi renden.',
    definitions: [
      {
        term: 'Elsobbsegadas kotelezo',
        text: 'A jelzotabla hatalya alatt elsoseget kell adni a keresztezett uton erkezo jarmuveknek.'
      }
    ],
    legend: ['A - Te', 'B - Fouton halado jarmu']
  },
  {
    id: 'oneway_stop',
    category: 'oneway',
    sceneId: 'oneway_stop',
    typeLabel: 'Egyiranyu fout',
    difficulty: 'kozephalado',
    pace: 'normal',
    timeLimitMs: 0,
    questionVariants: [
      'STOP tablahoz ersz mellekutrol egyiranyu foutra. B a fouton halad. Mi a helyes?',
      'STOP tabla jelzi a mellekutat. B a fouton halad. Hogyan jarsz el?'
    ],
    options: [
      { text: 'Megallok a STOP vonalnal, korulnezek, majd B utan haladok.', correct: true },
      { text: 'Lassitok es athajtok, ha nem latok jarmuvet.', correct: false },
      { text: 'Elobb athajtok, mert B messze van.', correct: false },
      { text: 'Csak akkor allok meg, ha B kozel erkezik.', correct: false }
    ],
    description:
      'STOP tabla eseten kotelezo a teljes megallas, majd az elsoseg megadasa a fouton haladoknak. Csak biztos meggyozodes utan lehet tovabbhaladni.',
    definitions: [
      {
        term: 'STOP tabla',
        text: 'Kotelezo a megallas es az elsoseg megadasa.'
      }
    ],
    legend: ['A - Te', 'B - Fouton halado jarmu']
  },
  {
    id: 'oneway_turn_ped',
    category: 'oneway',
    sceneId: 'oneway_turn_ped',
    typeLabel: 'Kanyarodas egyiranyu uton',
    difficulty: 'halado',
    pace: 'normal',
    timeLimitMs: 0,
    questionVariants: [
      'Egyiranyu uton haladsz, jobbra kanyarodnal. A zebra elott gyalogos (P) lep le, melletted kerekparos (C) egyenesen halad. Mi a helyes?',
      'Jobbra kanyarodnal egyiranyu uton. Gyalogos lep a zebrara, kerekparos halad melletted. Mit teszel?'
    ],
    options: [
      { text: 'Megallok, elengedem a gyalogost es a kerekparost, majd kanyarodok.', correct: true },
      { text: 'Eloszor en kanyarodok, mert mar bent vagyok a keresztezodesben.', correct: false },
      { text: 'Csak a gyalogosnak adok elsoseget, a kerekparosnak nem.', correct: false },
      { text: 'A kerekparosnak kell megallnia, mert en kanyarodom.', correct: false }
    ],
    description:
      'Kanyarodaskor elsoseget kell adni a keresztezett uton athalado gyalogosnak, es a veled azonos iranyban egyenesen halado kerekparosnak is. A helyes lepes: megallas es mindketto elengedese.',
    definitions: [
      {
        term: 'Kanyarodo jarmu',
        text: 'Az utiranyt valtoztato jarmu elsoseget ad a keresztezo uton athalado gyalogosnak es a mellette egyenesen halado kerekparosnak.'
      }
    ],
    legend: ['A - Te', 'C - Kerekparos', 'P - Gyalogos']
  },
  {
    id: 'oneway_turn_bike',
    category: 'oneway',
    sceneId: 'oneway_turn_bike',
    typeLabel: 'Kanyarodas kerekparsav mellett',
    difficulty: 'kozephalado',
    pace: 'normal',
    timeLimitMs: 0,
    questionVariants: [
      'Jobbra kanyarodnal egyiranyu uton, a jobb oldalon kerekparsavban C erkezik. Mi a helyes?',
      'Egyiranyu uton jobbra fordulsz. Kerekparos halad a kerekparsavban. Hogyan jarsz el?'
    ],
    options: [
      { text: 'Megvarom a kerekparost, es csak utana kanyarodom.', correct: true },
      { text: 'Elobb kanyarodok, mert a kerekpar lassabb.', correct: false },
      { text: 'A kerekparosnak kell megallnia, mert en jobbra fordulok.', correct: false },
      { text: 'Csak akkor adok elsoseget, ha a kerekparos mar a kanyarban van.', correct: false }
    ],
    description:
      'A kanyarodo jarmu koteles elsoseget adni a mellette egyenesen halado kerekparosnak, meg akkor is, ha kerekparsavban kozlekedik.',
    definitions: [
      {
        term: 'Kerekparsav',
        text: 'A kerekparosok szamara kijelolt haladasi sav az uttesten.'
      }
    ],
    legend: ['A - Te', 'C - Kerekparos']
  },
  {
    id: 'oneway_merge',
    category: 'oneway',
    sceneId: 'oneway_merge',
    typeLabel: 'Egyiranyu savmegszunes',
    difficulty: 'halado',
    pace: 'normal',
    timeLimitMs: 0,
    questionVariants: [
      'Egyiranyu uton a bal sav megszunik. A bal savban (A) haladsz, B a jobb savban. Mi a helyes?',
      'A bal sav veget er, B a folyamatos savban halad. Kie az elsoseg?'
    ],
    options: [
      { text: 'A jarmu elsoseget ad B-nek, es a megszuno savbol besorol.', correct: true },
      { text: 'B jarmu ad elsoseget, mert jobb oldalon halad.', correct: false },
      { text: 'Mindketten gyorsitanak, es az erkezesi sorrend dont.', correct: false },
      { text: 'Egyszerre sorolhattok be, nincs elsosegi rend.', correct: false }
    ],
    description:
      'Savmegszunesnel a megszuno savban halado jarmunek kell elsoseget adnia a folyamatos savban haladoknak, es biztonsagosan besorolnia.',
    definitions: [
      {
        term: 'Savmegszunes',
        text: 'Amikor egy forgalmi sav veget er, a megszuno savban halado jarmunek kell elsoseget adnia.'
      }
    ],
    legend: ['A - Megszuno sav', 'B - Folyamatos sav']
  },
  {
    id: 'oneway_no_entry',
    category: 'oneway',
    sceneId: 'oneway_no_entry',
    typeLabel: 'Egyiranyu behajtas',
    difficulty: 'alap',
    pace: 'normal',
    timeLimitMs: 0,
    questionVariants: [
      'Egyiranyu uthoz erkezel, "Behajtani tilos" tabla lathato. Mi a helyes?',
      '"Behajtani tilos" tabla jelzi a forgalmi iranyt. Hogyan jarsz el?'
    ],
    options: [
      { text: 'Nem hajtok be, masik iranyt keresek.', correct: true },
      { text: 'Ovatosan behajtok, ha nincs jarmu.', correct: false },
      { text: 'Rovid szakaszon behajtok, majd megfordulok.', correct: false },
      { text: 'Behajtok, mert csak ideiglenes tabla.', correct: false }
    ],
    description:
      'A "Behajtani tilos" tabla egyertelmuen jelzi, hogy a jarmuvel az adott iranybol tilos behajtani az egyiranyu utra.',
    definitions: [
      {
        term: 'Behajtani tilos',
        text: 'Az adott iranybol a jarmu forgalom szamara tilos a behajtas.'
      }
    ],
    legend: ['A - Te', 'Tilto tabla - Behajtani tilos']
  },
  {
    id: 'oneway_overtake_right',
    category: 'oneway',
    sceneId: 'oneway_overtake_right',
    typeLabel: 'Egyiranyu elozes',
    difficulty: 'kozephalado',
    pace: 'normal',
    timeLimitMs: 0,
    questionVariants: [
      'Egyiranyu uton ket sav van. B jobbrol elozne A-t. Megengedett?',
      'Ketsavos egyiranyu uton B a jobb savbol elozne. Mi a helyes?'
    ],
    options: [
      { text: 'Igen, egyiranyu uton jobbrol is elozhet, ha biztonsagos.', correct: true },
      { text: 'Nem, jobbrol elozni mindenhol tilos.', correct: false },
      { text: 'Csak akkor megengedett, ha B kerekpar.', correct: false },
      { text: 'Csak lakott teruleten kivul megengedett.', correct: false }
    ],
    description:
      'Egyiranyu uton a jarmuvek jobbrol is elozhetnek, ha az elozes biztonsagosan vegrehajthato es nem tiltja jelzes.',
    definitions: [
      {
        term: 'Elozes egyiranyu uton',
        text: 'Egyiranyu uton az elozes jobbrol is tortenhet, ha biztonsagos.'
      }
    ],
    legend: ['A - Elol halado', 'B - Jobbrol elozo']
  },
  {
    id: 'railway_overtake',
    category: 'timed',
    sceneId: 'railway_overtake',
    typeLabel: 'Gyors helyzet',
    difficulty: 'halado',
    pace: 'gyors',
    timeLimitMs: 20000,
    questionVariants: [
      'Gyorsan kozeledsz egy vasuti atjarohoz. Elotted lassu jarmu (B). A fenysorompo feher villogo jelzest ad. Mit teszel?',
      'Nagyobb sebesseggel kozeledsz vasuti atjarohoz, elotted B halad. Feher villogo jelzes latszik. Mi a helyes?'
    ],
    options: [
      { text: 'Nem elozok, sebesseget csokkentek, es keszen allok a megallasra.', correct: true },
      { text: 'Elozok, mert a feher villogo jelzes szabad utat jelez.', correct: false },
      { text: 'Megallas nelkul, valtozatlan tempoval athajtok.', correct: false },
      { text: 'Elozok es csak az atjaro utan lassitok.', correct: false }
    ],
    description:
      'Vasuti atjaroban es az atjaro elott 30 meteren belul elozni tilos. Feher villogo jelzesnel is fokozottan korultekintoen, mersekelt sebesseggel kell megkozeliteni az atjarot, es fel kell keszulni a megallasra.',
    definitions: [
      {
        term: 'Vasuti atjaro',
        text: 'A vasut es a kozut szintbeli keresztezodese.'
      },
      {
        term: 'Elozes tilalma',
        text: 'Az atjaroban es az atjaro elott 30 meteren belul elozni tilos.'
      }
    ],
    legend: ['A - Te', 'B - Elotted halado jarmu']
  },
  {
    id: 'hazard_chain',
    category: 'timed',
    sceneId: 'hazard_chain',
    typeLabel: 'Veszelyhelyzet',
    difficulty: 'halado',
    pace: 'gyors',
    timeLimitMs: 25000,
    questionVariants: [
      'Nagyobb sebessegnel hirtelen akadaly jelenik meg elotted. Mi a helyes cselekvesi sorrend?',
      'Veszelyes helyzet: az uton akadaly bukkan fel. Hogyan reagalsz helyesen?'
    ],
    options: [
      { text: 'Gazelvetel, hatarozott fekezes, a jarmu stabilan tartasa, biztonsagos kiteres.', correct: true },
      { text: 'Azonnali kormanyrantas fekezes nelkul.', correct: false },
      { text: 'Gazadas es gyors kiteres, fek nelkul.', correct: false },
      { text: 'Veszvillogo bekapcsolasa, majd folyamatos gyorsitas.', correct: false }
    ],
    description:
      'Hirtelen veszely eseten a biztonsagos eljaras: gazelvetel, hatarozott fekezes (ABS-szel is), a jarmu stabilan tartasa es csak akkor kiteres, ha biztonsagosan vegrehajthato.',
    definitions: [
      {
        term: 'Veszhelyzeti fekezes',
        text: 'Hatarozott fekezes a jarmu stabilan tartasaval, a forgalmi helyzet folyamatos figyelesevel.'
      }
    ],
    legend: ['A - Te', 'Veszely - akadaly az uton']
  },
  {
    id: 'emergency_vehicle',
    category: 'timed',
    sceneId: 'emergency_vehicle',
    typeLabel: 'Gyors helyzet',
    difficulty: 'kozephalado',
    pace: 'gyors',
    timeLimitMs: 20000,
    questionVariants: [
      'Megkulonbozteto jelzest hasznalo jarmu (E) kozelit mogotted egyiranyu uton. Mi a helyes?',
      'Szirenas jarmu erkezik mogotted egyiranyu uton. Hogyan jarsz el?'
    ],
    options: [
      { text: 'Jobbra huzodom, szukseg eseten megallok, es szabad utat biztositok.', correct: true },
      { text: 'Gyorsitok, hogy minel elobb eltunjek elole.', correct: false },
      { text: 'Megallok a sav kozepen, hogy jobban lasson.', correct: false },
      { text: 'Nem valtoztatok, mert egyiranyu az ut.', correct: false }
    ],
    description:
      'Megkulonbozteto jelzest hasznalo jarmunek elsoseget kell adni: jobbra huzodva, szukseg eseten megallva biztositani kell a szabad elhaladast.',
    definitions: [
      {
        term: 'Megkulonbozteto jelzes',
        text: 'A szirena es fenyjelzest hasznalo jarmunek elsoseget kell biztositani.'
      }
    ],
    legend: ['A - Te', 'E - Szirenas jarmu']
  }
];
