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
    logo: "/devFest/sponsor/googleLogo.png",
    website: "https://google.com",
    tier: "Main",
    text: ""
  },
  {
    name: "Immobiliare Labs",
    logo: "/devFest/sponsor/immoLogo.png",
    website: "https://labs.immobiliare.it/",
    tier: "Platinum",
    text: ""
  },
  {
    name: "Ready2Use",
    logo: "/devFest/sponsor/readyLogo.png",
    website: "https://r2u.it/",
    tier: "Gold",
    text: ""
  },
  {
    name: "Bizzy Now",
    logo: "/devFest/sponsor/bizzylogo.png",
    website: "https://www.bizzynow.com/",
    tier: "Silver",
    text: ""
  },
  {
    name: "DatWave",
    logo: "/devFest/sponsor/datLogo.png",
    website: "https://datwave.ai/",
    tier: "Silver",
    text: ""
  },
  {
    name: "SharpCoding",
    logo: "/devFest/sponsor/sharpCoding.png",
    website: "https://sharpcoding.it/",
    tier: "Partner",
    text: "Main"
  },
  {
    name: "BacatoTech",
    logo: "/devFest/sponsor/bacaroTech.png",
    website: "https://bacarotech.github.io/",
    tier: "Partner",
    text: "Media"
  },
  {
    name: "GDG Basilicata",
    logo: "/devFest/sponsor/gdgs/GDG Basilicata 2.png",
    website: "https://gdg.community.dev/gdg-basilicata/",
    tier: "GDG",
    text: ""
  },
  {
    name: "GDG Cloud Modena",
    logo: "/devFest/sponsor/gdgs/GDG Cloud Modena logo v2.1.png",
    website: "https://gdg.community.dev/gdg-cloud-modena/",
    tier: "GDG",
    text: ""
  },
  {
    name: "GDG Venezia",
    logo: "/devFest/sponsor/gdgs/GDG Venezia.png",
    website: "https://gdg.community.dev/gdg-venezia/",
    tier: "GDG",
    text: ""
  },
  {
    name: "GDG Bari",
    logo: "/devFest/sponsor/gdgs/GDGBari.png",
    website: "https://gdg.community.dev/gdg-bari/",
    tier: "GDG",
    text: ""
  },
  {
    name: "GDG Firenze",
    logo: "/devFest/sponsor/gdgs/GDGFirenze.png",
    website: "https://gdg.community.dev/gdg-firenze/",
    tier: "GDG",
    text: ""
  },
  {
    name: "GDG Torino",
    logo: "/devFest/sponsor/gdgs/GDGTorino.png",
    website: "https://gdg.community.dev/gdg-torino/",
    tier: "GDG",
    text: ""
  },
  {
    name: "GDG Catania",
    logo: "/devFest/sponsor/gdgs/GDGCatania.png",
    website: "https://gdg.community.dev/gdg-catania/",
    tier: "GDG",
    text: ""
  },
  {
    name: "GDG Vicenza",
    logo: "/devFest/sponsor/gdgs/GDGVicenza.png",
    website: "https://gdg.community.dev/gdg-vicenza/",
    tier: "GDG",
    text: ""
  },
  {
    name: "GDG Cloud Milano",
    logo: "/devFest/sponsor/gdgs/gdgCloudMilano.png",
    website: "https://gdg.community.dev/gdg-cloud-milano/",
    tier: "GDG",
    text: ""
  },
  {
    name: "GDG Genova",
    logo: "/devFest/sponsor/gdgs/gdgGenova.png",
    website: "https://gdg.community.dev/gdg-genova/",
    tier: "GDG",
    text: ""
  },
  {
    name: "GDG Milano",
    logo: "/devFest/sponsor/gdgs/gdgMilano.png",
    website: "https://gdg.community.dev/gdg-milano/",
    tier: "GDG",
    text: ""
  },
  {
    name: "GDG Pisa",
    logo: "/devFest/sponsor/gdgs/gdgPisa.png",
    website: "https://gdg.community.dev/gdg-pisa/",
    tier: "GDG",
    text: ""
  },
  {
    name: "Golang",
    logo: "/devFest/sponsor/community/golang.png",
    website: "https://golang.org/",
    tier: "Community",
    text: ""
  },
  {
    name: "PyDataRomaCapitale",
    logo: "/devFest/sponsor/community/pydata.png",
    website: "https://pydata.org/",
    tier: "Community",
    text: ""
  },
  {
    name: "RomaJS",
    logo: "/devFest/sponsor/community/romaJS.png",
    website: "https://romajs.org/",
    tier: "Community",
    text: ""
  },
  {
    name: "The Red Code",
    logo: "/devFest/sponsor/community/theRedCode_logo.png",
    website: "https://theredcode.it/",
    tier: "Community",
    text: ""
  },
  {
    name: "Scry Studios",
    logo: "/devFest/sponsor/activity/scrystudios.png",
    website: "https://scrystudios.com",
    tier: "Activity",
    text: ""
  },
  {
    name: "Welyk",
    logo: "/devFest/sponsor/activity/welyk.png",
    website: "https://welyk.com",
    tier: "Activity",
    text: ""
  },
];

