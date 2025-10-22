export interface Sponsor {
  name: string;
  logo: string;
  website: string;
  tier: 'Main'|'Platinum' | 'Gold' | 'Silver' | 'Partner';
  text: string;
}

export const sponsors: Sponsor[] = [
  {
    name: "Google",
    logo: "/sponsor/googleLogo.png",
    website: "https://google.com",
    tier: "Main",
    text: ""
  },
  {
    name: "Immobiliare Labs",
    logo: "/sponsor/immoLogo.png",
    website: "https://labs.immobiliare.it/",
    tier: "Platinum",
    text: ""
  },
  {
    name: "Ready2Use",
    logo: "/sponsor/readyLogo.png",
    website: "https://r2u.it/",
    tier: "Gold",
    text: ""
  },
  {
    name: "Bizzy Now",
    logo: "/sponsor/bizzylogo.png",
    website: "https://www.bizzynow.com/",
    tier: "Silver",
    text: ""
  },
  {
    name: "DatWave",
    logo: "/sponsor/datLogo.png",
    website: "https://datwave.ai/",
    tier: "Silver",
    text: ""
  },
  {
    name: "SharpCoding",
    logo: "/sponsor/sharpCoding.png",
    website: "https://sharpcoding.it/",
    tier: "Partner",
    text: "Main"
  },
  {
    name: "BacatoTech",
    logo: "/sponsor/bacaroTech.png",
    website: "https://bacarotech.github.io/",
    tier: "Partner",
    text: "Media"
  },
];

