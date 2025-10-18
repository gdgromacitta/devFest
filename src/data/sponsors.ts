export interface Sponsor {
  name: string;
  logo: string;
  website: string;
  tier: 'Main'|'Platinum' | 'Gold' | 'Silver';
}

export const sponsors: Sponsor[] = [
  {
    name: "Google",
    logo: "/devFest/sponsor/googleLogo.png",
    website: "https://google.com",
    tier: "Main"
  },
  {
    name: "Immobiliare Labs",
    logo: "/devFest/sponsor/immoLogo.png",
    website: "https://labs.immobiliare.it/",
    tier: "Platinum"
  },
  {
    name: "Ready2Use",
    logo: "/devFest/sponsor/readyLogo.png",
    website: "https://r2u.it/",
    tier: "Gold"
  },
  {
    name: "Bizzy Now",
    logo: "/devFest/sponsor/bizzylogo.png",
    website: "https://www.bizzynow.com/",
    tier: "Silver"
  },
  {
    name: "DatWave",
    logo: "/devFest/sponsor/datLogo.png",
    website: "https://datwave.ai/",
    tier: "Silver"
  },
];

