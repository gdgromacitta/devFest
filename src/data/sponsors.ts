export interface Sponsor {
  name: string;
  logo: string;
  website: string;
  tier: 'Main'|'Platinum' | 'Gold' | 'Silver';
}

export const sponsors: Sponsor[] = [
  {
    name: "Google",
    logo: "/sponsor/googleLogo.png",
    website: "https://google.com",
    tier: "Main"
  },
  {
    name: "Immobiliare Labs",
    logo: "/sponsor/immoLogo.png",
    website: "https://labs.immobiliare.it/",
    tier: "Platinum"
  },
  {
    name: "Ready2Use",
    logo: "/sponsor/readyLogo.png",
    website: "https://r2u.it/",
    tier: "Gold"
  },
  {
    name: "Bizzy Now",
    logo: "/sponsor/bizzylogo.png",
    website: "https://www.bizzynow.com/",
    tier: "Silver"
  },
  {
    name: "DatWave",
    logo: "/sponsor/datLogo.png",
    website: "https://datwave.ai/",
    tier: "Silver"
  },
];

