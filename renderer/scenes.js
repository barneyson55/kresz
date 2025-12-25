window.KRESZ_SCENES = {
  oneway_basic: `
    <svg viewBox="0 0 700 420" role="img" aria-label="Egyirányú kereszteződés alaphelyzet">
      <rect class="road" x="0" y="150" width="700" height="120" rx="12" />
      <rect class="road" x="300" y="0" width="120" height="420" rx="12" />
      <line class="lane" x1="0" y1="210" x2="700" y2="210" />
      <line class="lane" x1="360" y1="0" x2="360" y2="420" />
      <g>
        <line class="arrow" x1="80" y1="210" x2="160" y2="210" />
        <polygon class="arrow-head" points="160,210 146,202 146,218" />
      </g>
      <g>
        <line class="arrow" x1="360" y1="320" x2="360" y2="245" />
        <polygon class="arrow-head" points="360,245 352,259 368,259" />
      </g>
      <rect class="car car-a" x="330" y="320" width="80" height="44" rx="8" />
      <text class="car-label" x="370" y="342" dominant-baseline="middle" text-anchor="middle">A</text>
      <rect class="car car-b" x="120" y="178" width="80" height="44" rx="8" />
      <text class="car-label" x="160" y="200" dominant-baseline="middle" text-anchor="middle">B</text>
    </svg>
  `,
  oneway_yield: `
    <svg viewBox="0 0 700 420" role="img" aria-label="Egyirányú főút és mellékút elsőbbségadással">
      <rect class="road" x="0" y="150" width="700" height="120" rx="12" />
      <rect class="road" x="300" y="210" width="120" height="210" rx="12" />
      <line class="lane" x1="0" y1="210" x2="700" y2="210" />
      <g>
        <line class="arrow" x1="80" y1="210" x2="160" y2="210" />
        <polygon class="arrow-head" points="160,210 146,202 146,218" />
      </g>
      <g>
        <line class="arrow" x1="360" y1="370" x2="360" y2="300" />
        <polygon class="arrow-head" points="360,300 352,314 368,314" />
      </g>
      <polygon class="sign" points="420,250 450,300 390,300" />
      <rect class="car car-a" x="330" y="330" width="80" height="44" rx="8" />
      <text class="car-label" x="370" y="352" dominant-baseline="middle" text-anchor="middle">A</text>
      <rect class="car car-b" x="200" y="178" width="80" height="44" rx="8" />
      <text class="car-label" x="240" y="200" dominant-baseline="middle" text-anchor="middle">B</text>
    </svg>
  `,
  oneway_turn_ped: `
    <svg viewBox="0 0 700 420" role="img" aria-label="Jobbra kanyarodás gyalogossal és kerékpárossal">
      <rect class="road" x="0" y="140" width="700" height="120" rx="12" />
      <rect class="road" x="470" y="140" width="120" height="280" rx="12" />
      <line class="lane" x1="0" y1="200" x2="700" y2="200" />
      <g>
        <line class="arrow" x1="90" y1="200" x2="170" y2="200" />
        <polygon class="arrow-head" points="170,200 156,192 156,208" />
      </g>
      <path class="arrow" d="M400 200 C450 200 470 220 470 270" />
      <polygon class="arrow-head" points="470,270 462,254 478,254" />
      <g>
        <rect class="crosswalk" x="470" y="150" width="16" height="60" />
        <rect class="crosswalk" x="495" y="150" width="16" height="60" />
        <rect class="crosswalk" x="520" y="150" width="16" height="60" />
        <rect class="crosswalk" x="545" y="150" width="16" height="60" />
      </g>
      <rect class="car car-a" x="330" y="168" width="80" height="44" rx="8" />
      <text class="car-label" x="370" y="190" dominant-baseline="middle" text-anchor="middle">A</text>
      <circle class="bike" cx="420" cy="230" r="18" />
      <text class="car-label" x="420" y="230" dominant-baseline="middle" text-anchor="middle">C</text>
      <circle class="pedestrian" cx="510" cy="170" r="14" />
      <text class="car-label" x="510" y="170" dominant-baseline="middle" text-anchor="middle">P</text>
    </svg>
  `,
  railway_overtake: `
    <svg viewBox="0 0 700 420" role="img" aria-label="Vasúti átjáró előtti helyzet">
      <rect class="road" x="0" y="150" width="700" height="120" rx="12" />
      <line class="lane" x1="0" y1="210" x2="700" y2="210" />
      <line class="rail" x1="340" y1="110" x2="340" y2="330" />
      <line class="rail" x1="360" y1="110" x2="360" y2="330" />
      <line class="rail-sleeper" x1="320" y1="130" x2="380" y2="130" />
      <line class="rail-sleeper" x1="320" y1="160" x2="380" y2="160" />
      <line class="rail-sleeper" x1="320" y1="190" x2="380" y2="190" />
      <line class="rail-sleeper" x1="320" y1="220" x2="380" y2="220" />
      <line class="rail-sleeper" x1="320" y1="250" x2="380" y2="250" />
      <line class="rail-sleeper" x1="320" y1="280" x2="380" y2="280" />
      <g>
        <line class="rail" x1="420" y1="130" x2="470" y2="180" />
        <line class="rail" x1="470" y1="130" x2="420" y2="180" />
      </g>
      <rect class="car car-b" x="240" y="178" width="80" height="44" rx="8" />
      <text class="car-label" x="280" y="200" dominant-baseline="middle" text-anchor="middle">B</text>
      <rect class="car car-a" x="120" y="178" width="80" height="44" rx="8" />
      <text class="car-label" x="160" y="200" dominant-baseline="middle" text-anchor="middle">A</text>
    </svg>
  `
};
