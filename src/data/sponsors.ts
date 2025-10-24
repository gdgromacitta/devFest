export interface Sponsor {
  name: string;
  logo: string;
  website: string;
  tier: 'Main'|'Platinum' | 'Gold' | 'Silver' | 'Partner' | 'Community' | 'GDG' | 'Activity';
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
  {
    name: "GDG Basilicata",
    logo: "/sponsor/gdgs/GDG Basilicata 2.png",
    website: "https://gdg.community.dev/gdg-basilicata/",
    tier: "GDG",
    text: ""
  },
  {
    name: "GDG Cloud Modena",
    logo: "/sponsor/gdgs/GDG Cloud Modena logo v2.1.png",
    website: "https://gdg.community.dev/gdg-cloud-modena/",
    tier: "GDG",
    text: ""
  },
  {
    name: "GDG Venezia",
    logo: "/sponsor/gdgs/GDG Venezia.png",
    website: "https://gdg.community.dev/gdg-venezia/",
    tier: "GDG",
    text: ""
  },
  {
    name: "GDG Bari",
    logo: "/sponsor/gdgs/GDGBari.png",
    website: "https://gdg.community.dev/gdg-bari/",
    tier: "GDG",
    text: ""
  },
  {
    name: "GDG Firenze",
    logo: "/sponsor/gdgs/GDGFirenze.png",
    website: "https://gdg.community.dev/gdg-firenze/",
    tier: "GDG",
    text: ""
  },
  {
    name: "GDG Torino",
    logo: "/sponsor/gdgs/GDGTorino.png",
    website: "https://gdg.community.dev/gdg-torino/",
    tier: "GDG",
    text: ""
  },
  {
    name: "GDG Catania",
    logo: "/sponsor/gdgs/GDGCatania.png",
    website: "https://gdg.community.dev/gdg-catania/",
    tier: "GDG",
    text: ""
  },
  {
    name: "GDG Vicenza",
    logo: "/sponsor/gdgs/GDGVicenza.png",
    website: "https://gdg.community.dev/gdg-vicenza/",
    tier: "GDG",
    text: ""
  },
  {
    name: "GDG Cloud Milano",
    logo: "/sponsor/gdgs/gdgCloudMilano.png",
    website: "https://gdg.community.dev/gdg-cloud-milano/",
    tier: "GDG",
    text: ""
  },
  {
    name: "GDG Genova",
    logo: "/sponsor/gdgs/gdgGenova.png",
    website: "https://gdg.community.dev/gdg-genova/",
    tier: "GDG",
    text: ""
  },
  {
    name: "GDG Milano",
    logo: "/sponsor/gdgs/gdgMilano.png",
    website: "https://gdg.community.dev/gdg-milano/",
    tier: "GDG",
    text: ""
  },
  {
    name: "GDG Pisa",
    logo: "/sponsor/gdgs/gdgPisa.png",
    website: "https://gdg.community.dev/gdg-pisa/",
    tier: "GDG",
    text: ""
  },
  {
    name: "Golang",
    logo: "/sponsor/community/golang.png",
    website: "https://golang.org/",
    tier: "Community",
    text: ""
  },
  {
    name: "PyDataRomaCapitale",
    logo: "/sponsor/community/pydata.png",
    website: "https://pydata.org/",
    tier: "Community",
    text: ""
  },
  {
    name: "RomaJS",
    logo: "/sponsor/community/romaJS.png",
    website: "https://romajs.org/",
    tier: "Community",
    text: ""
  },
  {
    name: "The Red Code",
    logo: "/sponsor/community/theRedCode_logo.png",
    website: "https://theredcode.it/",
    tier: "Community",
    text: ""
  },
  {
    name: "Scry Studios",
    logo: "/sponsor/activity/scrystudios.png",
    website: "https://scrystudios.com",
    tier: "Activity",
    text: ""
  },
  {
    name: "Welyk",
    logo: "/sponsor/activity/welyk.png",
    website: "https://welyk.com",
    tier: "Activity",
    text: ""
  },
];

