export interface Sponsor {
  name: string;
  logo: string;
  website: string;
  tier: 'Main'|'Platinum' | 'Gold' | 'Silver' | 'Partner' | 'Community';
  text: string;
}

export const sponsors: Sponsor[] = [
  {
    name: "Google",
    logo: "/devfest/sponsor/googleLogo.png",
    website: "https://google.com",
    tier: "Main",
    text: ""
  },
  {
    name: "Immobiliare Labs",
    logo: "/devfest/sponsor/immoLogo.png",
    website: "https://labs.immobiliare.it/",
    tier: "Platinum",
    text: ""
  },
  {
    name: "Ready2Use",
    logo: "/devfest/sponsor/readyLogo.png",
    website: "https://r2u.it/",
    tier: "Gold",
    text: ""
  },
  {
    name: "Bizzy Now",
    logo: "/devfest/sponsor/bizzylogo.png",
    website: "https://www.bizzynow.com/",
    tier: "Silver",
    text: ""
  },
  {
    name: "DatWave",
    logo: "/devfest/sponsor/datLogo.png",
    website: "https://datwave.ai/",
    tier: "Silver",
    text: ""
  },
  {
    name: "SharpCoding",
    logo: "/devfest/sponsor/sharpCoding.png",
    website: "https://sharpcoding.it/",
    tier: "Partner",
    text: "Main"
  },
  {
    name: "BacatoTech",
    logo: "/devfest/sponsor/bacaroTech.png",
    website: "https://bacarotech.github.io/",
    tier: "Partner",
    text: "Media"
  },
  {
    name: "GDG Basilicata",
    logo: "/devfest/sponsor/gdgs/GDG Basilicata 2.png",
    website: "https://gdg.community.dev/gdg-basilicata/",
    tier: "Community",
    text: ""
  },
  {
    name: "GDG Cloud Modena",
    logo: "/devfest/sponsor/gdgs/GDG Cloud Modena logo v2.1.png",
    website: "https://gdg.community.dev/gdg-cloud-modena/",
    tier: "Community",
    text: ""
  },
  {
    name: "GDG Venezia",
    logo: "/devfest/sponsor/gdgs/GDG Venezia.png",
    website: "https://gdg.community.dev/gdg-venezia/",
    tier: "Community",
    text: ""
  },
  {
    name: "GDG Bari",
    logo: "/devfest/sponsor/gdgs/GDGBari.png",
    website: "https://gdg.community.dev/gdg-bari/",
    tier: "Community",
    text: ""
  },
  {
    name: "GDG Firenze",
    logo: "/devfest/sponsor/gdgs/GDGFirenze.png",
    website: "https://gdg.community.dev/gdg-firenze/",
    tier: "Community",
    text: ""
  },
  {
    name: "GDG Torino",
    logo: "/devfest/sponsor/gdgs/GDGTorino.png",
    website: "https://gdg.community.dev/gdg-torino/",
    tier: "Community",
    text: ""
  },
  {
    name: "GDG Catania",
    logo: "/devfest/sponsor/gdgs/GDGCatania.png",
    website: "https://gdg.community.dev/gdg-catania/",
    tier: "Community",
    text: ""
  },
  {
    name: "GDG Vicenza",
    logo: "/devfest/sponsor/gdgs/GDGVicenza.png",
    website: "https://gdg.community.dev/gdg-vicenza/",
    tier: "Community",
    text: ""
  },
];

