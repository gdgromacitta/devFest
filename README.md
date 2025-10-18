# 🎉 DevFest Roma 2025

Sito statico per l'evento **DevFest Roma 2025** realizzato con [Astro](https://astro.build) e [Tailwind CSS](https://tailwindcss.com).

## 🚀 Caratteristiche

- ⚡ **Veloce e performante**: Astro genera HTML statico per prestazioni ottimali
- 📱 **Responsive**: Design mobile-first che funziona su tutti i dispositivi
- 🎨 **Design moderno**: Colori ispirati a Google DevFest (blu, verde, giallo, rosso)
- 🧩 **Componenti modulari**: Facile da personalizzare e estendere
- 📊 **SEO Ottimizzato**: Meta tag, Open Graph e struttura semantica
- 🎯 **Dati separati**: Tracks e sponsor gestiti tramite file TypeScript

## 📁 Struttura del progetto

```
/
├── public/
│   └── logo.svg           # Logo placeholder
├── src/
│   ├── components/
│   │   ├── Header.astro   # Header con navigazione
│   │   ├── Footer.astro   # Footer con link e social
│   │   ├── SponsorGrid.astro  # Griglia sponsor
│   │   └── TracksList.astro   # Lista delle track
│   ├── data/
│   │   ├── tracks.ts      # Dati delle track e talk
│   │   └── sponsors.ts    # Dati degli sponsor
│   ├── layouts/
│   │   └── Layout.astro   # Layout base della pagina
│   └── pages/
│       └── index.astro    # Homepage
├── astro.config.mjs       # Configurazione Astro
├── tailwind.config.cjs    # Configurazione Tailwind
├── tsconfig.json          # Configurazione TypeScript
└── package.json
```

## 🛠️ Installazione

### Prerequisiti

- Node.js 18+ installato sul tuo sistema
- npm (incluso con Node.js)

### Passi per l'installazione

1. **Clona o scarica il progetto** (se ancora non l'hai fatto)

2. **Installa le dipendenze:**

```bash
npm install
```

## 📦 Comandi disponibili

Tutti i comandi vanno eseguiti dalla root del progetto, dal terminale:

| Comando                | Azione                                           |
| :--------------------- | :----------------------------------------------- |
| `npm install`          | Installa le dipendenze                           |
| `npm run dev`          | Avvia il server di sviluppo su `localhost:4321` |
| `npm run build`        | Crea il build di produzione in `./dist/`         |
| `npm run preview`      | Visualizza in anteprima il build locale          |

## 🚀 Come iniziare

1. **Avvia il server di sviluppo:**

```bash
npm run dev
```

2. **Apri il browser** su [http://localhost:4321](http://localhost:4321)

3. **Inizia a personalizzare!**

## ✏️ Personalizzazione

### Modificare i dati delle Track

Modifica il file `src/data/tracks.ts` per aggiungere o modificare le track e i talk:

```typescript
export const tracks: Track[] = [
  {
    name: "Nome Track",
    description: "Descrizione della track",
    talks: [
      {
        title: "Titolo del talk",
        speaker: "Nome Speaker",
        time: "10:00"
      }
    ]
  }
];
```

### Modificare gli Sponsor

Modifica il file `src/data/sponsors.ts` per gestire gli sponsor:

```typescript
export const sponsors: Sponsor[] = [
  {
    name: "Nome Azienda",
    logo: "URL del logo",
    website: "https://example.com",
    tier: "platinum" // o "gold" o "silver"
  }
];
```

### Cambiare i colori

I colori DevFest sono definiti in `tailwind.config.cjs`:

```javascript
colors: {
  devfest: {
    blue: '#4285F4',
    red: '#EA4335',
    yellow: '#FBBC04',
    green: '#34A853',
  },
}
```

### Sostituire il logo

Sostituisci il file `public/logo.svg` con il tuo logo personalizzato.

### Modificare la mappa

Nel file `src/pages/index.astro`, nella sezione Location, sostituisci l'URL dell'iframe di Google Maps con le coordinate del tuo venue.

## 🌐 Build e Deploy

### Creare il build di produzione

```bash
npm run build
```

Il sito statico verrà generato nella cartella `dist/`.

### Deploy

Puoi fare il deploy su qualsiasi servizio di hosting statico:

- **Netlify**: Trascina la cartella `dist/` su [netlify.com/drop](https://app.netlify.com/drop)
- **Vercel**: Collega il repository GitHub e Vercel farà il deploy automaticamente
- **GitHub Pages**: Puoi usare GitHub Actions per il deploy automatico
- **Cloudflare Pages**: Supporto nativo per Astro

## 📚 Risorse

- [Documentazione Astro](https://docs.astro.build)
- [Documentazione Tailwind CSS](https://tailwindcss.com/docs)
- [Google DevFest](https://developers.google.com/community/devfest)

## 📄 Licenza

Questo progetto è open source e disponibile sotto licenza MIT.

## 🤝 Contribuire

Contributi, issue e feature request sono benvenuti!

---

Realizzato con ❤️ per DevFest Roma 2025

