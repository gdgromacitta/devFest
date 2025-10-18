export interface Talk {
  title: string;
  speaker: string;
  description: string;
  time: string;
  duration: string;
}

export interface Track {
  name: string;
  description: string;
  talkIds: number[];
}

// All talks in one array
export const talks: Talk[] = [
  {
    title: "AI in the Browser: Am I Still Waiting for It?",
    description: "AI is everywhere; no day goes by without a new AI agent being created. But what about browsers? Is a browser a good place to run AI?\r\nLet’s see what is possible to do in our Browser offline or online and learn how we can improve our applications, avoid expensive bills and let our users pay the energy bill for the AI 😉",
    speaker: "Luca Del Puppo",
    time: "",
    duration: "45"
  },
  {
    title: "One codebase to rule them all: Cross-Platform apps with Kotlin and Compose Multiplatform",
    description: "What if you could write your app's logic and UI once, and run it natively across Android, iOS, desktop, and the web—without sacrificing performance or flexibility? With Kotlin Multiplatform and Compose Multiplatform, this vision is becoming a reality. In this talk, we’ll explore how Compose empowers developers to share not only business logic but also rich, responsive user interfaces across platforms. We’ll look at the architecture, tooling, benefits, and challenges of building apps with a single codebase—while keeping that native feel users expect.",
    speaker: "Andrea Della Porta",
    time: "",
    duration: "45"
  },
  {
    title: "customElements & beyond: a lean way to build reactive apps in vanillaJS",
    description: "You know when people tell you that without a framework you can't build a \"real\" app? Well… spoiler alert: that’s a lie.\r\nCustom Elements are no longer a toy for old-school HTML addicted, they're the gateway to a whole new way of building apps: lightweight, accessible, and blazing fast.\r\nAnd the best part? No endless npm install marathons required.\r\n\r\nIn this talk we’ll explore cutting-edge browser APIs like Observable Signals, Constructable Stylesheets, and more, showing how to make your native components do their magic like they’re powered by a framework… but without the framework.\r\n\r\nIt’s a journey into reactivity, semantics, and the future of the web, because vanillaJS isn’t old school, it’s the next level.",
    speaker: "Emiliano Pisu",
    time: "",
    duration: "45"
  },
  {
    title: "Pokedex a confronto - DevEx e Web Vitals tra Svelte, React e Angular",
    description: "Nel panorama dei framework frontend, dominato da giganti come React e Angular, Svelte si sta facendo strada con un approccio rivoluzionario basato sulla compilazione. Ma è davvero il più veloce? E come si fa a convincere qualcuno a provarlo? La risposta è una sola: sporcandosi le mani.\r\n\r\nPer scoprirlo, ho realizzato un'unica applicazione, la PokedexApp, sviluppandola con tutte e tre le tecnologie. Questo mi ha permesso di confrontare Svelte, React e Angular non solo sulla carta, ma sul campo.\r\n\r\nIn questo approfondimento, analizzeremo aspetti cruciali come:\r\n\r\nEsperienza di Sviluppo (DevExp): Come cambia l'approccio alla programmazione con Svelte, e quanto è più semplice e intuitivo?\r\n\r\nPerformance: Misureremo i risultati con parametri oggettivi come i Core Web Vitals, direttamente dalla PokedexApp. Vedremo come la compilazione di Svelte affronta il runtime e il build-time, e come si confronta con meccanismi come la change detection di Angular e il Virtual DOM di React.\r\n\r\nVolevo trovare un modo per parlarvi di questo strumento che in Italia è poco conosciuto. Sfrutterò dei confronti con gli storici.\r\n\r\nSe siete pronti a navigare nel vasto mare dei framework frontend e a mettere in discussione le vostre certezze, unitevi a me. La domanda è: Svelte è il futuro? Scopriamolo insieme e apriamo il dibattito\r\n",
    speaker: "Michele Scarpa",
    time: "",
    duration: "45"
  },
  {
    title: "Mille modi di orchestrare Microfrontend",
    description: "Quando un frontend si ingrandisce diventa pesante e toccare un pezzo di codice da una parte potrebbe far rompere qualcosa dalla parte opposta. Sarebbe belo evitarlo e al contempo mantenere sempre la stessa velocità di sviluppo evitando regressioni e segregando parti di codice? Benvenuti nel mondo dei microfrontend!\r\nIn questo talk faremo un viaggio che ti mostrerà tutti i passaggi per create un progetto strutturato a microfrontend con React, Vite Module Federation e Lerna su un monorepo. \r\nMa non basta! Spesso ci troviamo nella situazione in cui dobbiamo condividere questi microfrontend tra diversi progetti, e qui entrano in gioco i Web Components distribuiti su singoli repo, il nostro alleato segreto per superare queste sfide.\r\nE per finire vedremo anche qualche tips per mettere in produzione in maniera sicura i vostri microfrontend",
    speaker: "Lorenzo De Francesco",
    time: "",
    duration: "45"
  },
  {
    title: "I didn’t know my Android native app could run on iOS - Compose Multiplatform in action!",
    description: "What if you, as an Android developer, could suddenly develop for iOS without learning a new language or framework? This isn't a fantasy; it's the reality made possible by Compose Multiplatform.\r\n\r\nEven libraries designed exclusively for Android, such as androidx.lifecycle, now work on iOS. Often right out of the box!\r\n\r\nDuring this talk, we will explore the basics of Kotlin Multiplatform (KMP) and Compose Multiplatform (CMP). Then, we will take a real native Android application, built entirely with Kotlin and Jetpack Compose, and methodically migrate it to run on iOS, changing only a few lines of code.",
    speaker: "Fabio Catinella",
    time: "",
    duration: "45"
  },
  {
    title: "E se le macchine, come l'uomo, evolvessero?",
    description: "La neuroevoluzione è un approccio alternativo alla classica backpropagazione per l'addestramento delle reti neurali. Essa, se propriamente utilizzata, apporta vantaggi rispetto ai più comuni approcci di design di una rete neurale: riduzione della probabilità di overfitting e underfitting, scoparsa dei problemi di gradient vanishing e explosion, costruzione incrementale, ottima e del tutto automatica di una architettura di rete. Questo apre nuove frontiere nel Deep Learning facendo sì che non solo le macchine siano sempre più vicine all'uomo nell'eseguire task complessi, ma anche nel modo di apprenderli tramite meccanismi evolutivi spontanei.",
    speaker: "Luca Di Vita",
    time: "",
    duration: "45"
  },
  {
    title: "Somebody call the 137!",
    description: "In the world of Kubernetes, understanding the termination of pods is crucial for managing containerized applications. Overseeing why pods terminate is essential for ensuring stability and reliability. In this session, Serena will dive into the details of most common and sad exit codes terminations, explore their underlying causes, discuss how to diagnose pods and provide best practices for prevention.",
    speaker: "Serena Sensini",
    time: "",
    duration: "45"
  },
  {
    title: "A2A, MCP and security concerns",
    description: "In the evolving landscape of autonomous systems, Agent-to-Agent and Model Context Protocol are foundational. Crucially, the efficacy and reliability of AI agents, particularly those driven by sophisticated models, depend on the integrity of their operational environment, managed through those protocols.\r\n\r\nThis talk critically examines the security concerns arising at the intersection of A2A communication and the Model Context Protocol. We will dissect vulnerabilities such as Context Poisoning, Contextual Data Leakage, Model Evasion, and evaluate approaches on how to mitigate or totally avoid them, if and when possible, in a DevSecOps way.\r\n",
    speaker: "Gregorio Palamà",
    time: "",
    duration: "45"
  },
  {
    title: "Debito tecnologico e come affrontarlo - In fuga dai problemi progettuali",
    description: "Tutti noi programmatori dobbiamo approcciarci al risolvere problemi, piccoli o grandi che siano. \r\nAlcuni di questi problemi sono inaspettati, altri attesi. \r\nCome programmatori il nostro lavoro sarebbe, quando possibile, quello di risolverli. \r\nCome esseri umani, talvolta, fuggiamo da essi senza accorgerci di ciò che potrebbero diventare più avanti.\r\nNessun programmatore, in quanto essere umano, sarà mai un programmatore perfetto che sa tutto.\r\nInevitabilmente sarà portato a prendere delle decisioni obbligate dalla sua momentanea ignoranza o dalle circostanze o da chi lo circonda.\r\nInsieme vedremo cos'è il debito tecnologico raccontandovi la storia di un mio progetto, di come si sono formati dei problemi, alcuni calati dall'alto, altri figli del mio stesso operato, altri deliberatamente ignorati.",
    speaker: "Danilo Macchion",
    time: "",
    duration: "45"
  },
  {
    title: "K-nearest-neighbor query e come usarla su Firebase",
    description: "Negli ultimi anni, le ricerche semantiche basate su intelligenza artificiale sono passate da teoria accademica a strumenti pronti all'uso.\r\n\r\nIn questo talk esploreremo come integrare la ricerca vettoriale in progetti Firebase, partendo dai concetti fondamentali fino all'implementazione concreta. Vedremo come salvare gli embedding, configurare un indice, ed eseguire query basate sulla similarità.",
    speaker: "Camillo Bucciarelli",
    time: "",
    duration: "45"
  },
  {
    title: "Better Call RAL",
    description: "Tutti parlano di tecnologia, quasi nessuno parla di soldi.\r\nEppure, la RAL è il vero bug che separa la soddisfazione lavorativa dal burnout.\r\n\r\nIn Better Call RAL parliamo di negoziazione, mercato e consapevolezza del proprio valore nel mondo tech, senza tabù.\r\nScopriremo insieme come trovare le offerte giuste, capire se sei pagato/a il giusto, prepararti a una trattativa, e smettere di accettare “siamo una famiglia” come benefit principale.\r\n\r\nUn talk pensato per chiunque voglia smettere di subire il mercato e iniziare a giocare da protagonista.\r\nCon esempi reali, aneddoti tragicomici dal mondo del recruiting, e qualche meme per ricordarci che sì, parlare di soldi può anche essere divertente.\r\n\"SAY MY RAL\"",
    speaker: "Guido Penta",
    time: "",
    duration: "45"
  },
  {
    title: "Docker Happy Hour: Builda e Brinda",
    description: "Docker è uno strumento potente per creare ambienti virtuali leggeri, perfetto per lo sviluppo e il deploy di applicazioni moderne.\r\nIn questo workshop partiremo dalle basi: capiremo cos’è Docker, perché può essere preferito alle classiche macchine virtuali, e come si usa davvero nella pratica.\r\n\r\nVedremo come impacchettare una nostra applicazione tramite il Dockerfile e come eseguirla tramite il Docker Compose.\r\nÈ pensato per chi ha poca (o nessuna) esperienza con Docker, ma vuole iniziare con il piede giusto... e magari con un cicchetto in mano.",
    speaker: "Vittorio Terreran",
    time: "",
    duration: "45"
  },
  {
    title: "Estrarre informazioni strutturate dalle immagini con Pydantic AI e FastAPI",
    description: "Il ruolo del Computer Vision Engineer in un’azienda di prodotto sta cambiando: i modelli di visione tradizionali restano fondamentali, ma sempre più spesso vengono affiancati da LLM capaci di interpretare immagini e testo insieme, per estrarre conoscenza ad alto livello.\r\nIn questo talk racconterò come stiamo evolvendo questo approccio in Immobiliare.it, integrando modelli di deep learning classici con LLM “vision-enabled” per estrarre informazioni strutturate dalle immagini degli immobili.\r\nVedremo come con Pydantic AI e FastAPI sia possibile creare in modo semplice una piccola API che riceve un’immagine, interroga un modello generativo e restituisce dati validati e tipizzati.\r\nUn talk su come l’intelligenza artificiale visiva sta diventando più conversazionale e su come noi, ingegneri, possiamo imparare a parlarle meglio.",
    speaker: "Egon Ferri",
    time: "",
    duration: "45"
  },
  {
    title: "Bringing Fictional Characters to Life with Open Source LLMs",
    description: "Tired of generic chatbots? In this session, we’ll create a truly unique AI agent. We’ll go through the process of running an LLM on your own machines, building a chat agent from the ground up, and imbuing it with the personality of your favorite fictional character. In addition, thanks to Retrieval Augmented Generation (RAG) and voice cloning, our character will sound as awesome as it acts. We’ll use only open source tools and a sprinklr of Docker.",
    speaker: "Alfredo Morresi",
    time: "",
    duration: "45"
  },
  {
    title: "Harmonies from the Future: A Journey into Electronic Music Creation with AI",
    description: "🎵 Let's explore the future of music through the lens of artificial intelligence!\r\n\r\nThe world of sound is experiencing a \"silent\" revolution, with technology redrawing the boundaries of what is possible. Join me in an engaging session where we will explore together how synthesizer programming and the new frontiers of AI are coming together to generate melodies that capture the heart and soul.\r\n\r\n🤖  We'll delve into:\r\nArtificial Intelligence and Music: An overview of the latest innovations in the use of AI in music creation.\r\n\r\nSynthesizer Programming: Hands-on exploration of how to set up and program audio synthesizers to generate realistic, immersive sounds.\r\n\r\nAutonomous Generation: Discover how AI can not only replicate, but also autonomously create musical pieces that resonate with authenticity and emotion.",
    speaker: "Antonio Di Marino",
    time: "",
    duration: "45"
  },
  {
    title: "Should you learn Rust as your next programming language?",
    description: "Are you tired of having to choose between performance and safety? Would you love to write concurrent code without the headache of data races? \r\n\r\nThis session shows you that you don’t need to compromise anymore. \r\n\r\nWe'll explore how Rust offers the speed of C++ while ensuring memory safety through its innovative ownership system. You'll see how its compiler acts like a personal mentor, and why developers around the world have voted it the most admired programming language. \r\n\r\nBy the end, you’ll probably be convinced to try Rust.",
    speaker: "Francesco Ciulla",
    time: "",
    duration: "45"
  },
  {
    title: "C tua",
    description: "Ce ne deve fregà quarcosa der C? Stamio nel dumila e rotti e ancora dovemo traffica' chii puntatori (mejo le puntarelle!)? Mo ce stanno Rast, Go e compagnia bella, sticazzi der C, no? E 'nvece ve vojo ricconta' la storia de 'sto linguaggio e perché nun se lo potemo leva' da 'li cojoni tanto facilmente. Puro si nu' lo sai, so sempre C tua!",
    speaker: "Paolo Caressa",
    time: "",
    duration: "45"
  },
  {
    title: "JavaScript per l’IoT",
    description: "Hai mai pensato a quanto possa essere semplice creare applicazioni IoT con JavaScript? In questo talk, scopriremo come l'ecosistema vastissimo di JavaScript lo renda la scelta ideale per sviluppare soluzioni IoT dinamiche e scalabili.\r\nAttraverso esempi pratici e una live demo, vedrai come dare nuova vita a quella schedina elettronica che sta facendo polvere nel tuo cassetto, trasformandola in un dispositivo connesso e funzionale.",
    speaker: "Soumaya Erradi",
    time: "",
    duration: "45"
  },
  {
    title: "AI Generativa con Google Gemini, VEO3 e Nano Banana",
    description: "L'intelligenza artificiale generativa sta trasformando lo sviluppo software, ma come possiamo integrarla in modo efficace e sicuro nelle nostre applicazioni web? \r\nQuesto talk risponde alla domanda, offrendo una guida pratica all'ecosistema Gemini di Google, pensato per sviluppatori moderni.\r\n\r\nGemini non è un singolo modello, ma una famiglia di modelli di intelligenza artificiale multimodale. Questo significa che può comprendere e elaborare non solo testo, ma anche immagini, video e audio. \r\nLe capacità di Gemini sono vaste: dalla generazione di codice alla sintesi di documenti, dalla creazione di contenuti creativi all'analisi di dati complessi.\r\nOltre ai modelli principali, Google ha introdotto strumenti specializzati che estendono le capacità di Gemini come VEO3 per la generazione di video (con audio) di altissima qualità e Nano Banana per la generazione e la modifica di immagini.\r\n\r\nUna sessione molto pratica, con poca teoria e moltissimi esempi pratici in NodeJS, Angular e NextJS, utilizzando sia la comunicazione con API REST ma soprattutto con due degli SDK più utilizzati: Google Gen AI e Firebase Genkit\r\n",
    speaker: "Fabio Biondi",
    time: "",
    duration: "45",
  }
];

// Tracks reference talks by their index in the talks array

export const tracks: Track[] = [
  {
    name: "Stanza 1",
    description: "Tutto sullo sviluppo lato client",
    talkIds: [0, 1, 2, 3, 4, 5, 6]
  },
  {
    name: "AI & Backend",
    description: "Talk su AI e infrastrutture",
    talkIds: [7, 8, 9, 10, 11, 12, 13]
  },
  {
    name: "Cloud & DevOps",
    description: "Infrastructure as Code e deployment",
    talkIds: [14, 15, 16, 17, 18, 19]
  }
];
