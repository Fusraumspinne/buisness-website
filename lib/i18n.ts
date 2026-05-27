export type Language = "de" | "en";

export const translations = {
  de: {
    nav: {
      about: "Über mich",
      services: "Leistungen",
      projects: "Arbeiten",
      contact: "Kontakt",
    },
    hero: {
      bgText: "SOFTWARE",
      tagline: "Independent Studio",
      line1: "We build",
      line2: "sharp",
      line3: "software.",
      desc: "Spezialisiert auf High-End Web-Applikationen und exzellente User Interfaces. Kein Bullshit. Keine Templates.",
      cta: "Start a dialog",
      scroll: "Scroll"
    },
    about: {
      tag: "Available for Projects",
      role: "Full-Stack Web Developer",
      section1Title: "Über Mich",
      section1Desc: "Hi! Ich bin Marvin, ein Full-Stack Webentwickler aus Deutschland mit über 5 Jahren Erfahrung. Ich spezialisiere mich auf moderne, rasend schnelle und skalierbare Web-Applikationen mit Technologien wie Next.js, PostgreSQL, Supabase und Docker.",
      quoteTitle: "Maßgeschneidert & Skalierbar.",
      quoteDesc: "Ob responsive Portfolios, Custom Web-Apps, komplexe Dashboards oder Backend-Systeme – ich baue Lösungen, die exakt auf den Use Case zugeschnitten sind. Kein Baukasten, sondern echte digitale Produkte von der Code-Architektur bis hin zum Deployment Setup.",
      expTitle: "Erfahrung",
      expDesc: "Durch intensive Projektarbeit und Praktika in Softwareunternehmen habe ich tiefe Einblicke in professionelle Entwickler-Workflows gewonnen – Frontend, Backend sowie System Integration.",
      expItems: [
        { label: "Web Development", time: "5+ Jahre" },
        { label: "Frontend (React, Next.js)", time: "Pro Level" },
        { label: "Backend (Node, Postgres)", time: "Intermediate" }
      ],
      workflowTitle: "Arbeitsweise",
      workflowItems: [
        { num: "01 / KONZEPT", title: "Strategie & UX", desc: "Wir analysieren das Problem bis auf den Grund. Keine Zeile Code wird geschrieben, bevor Architektur und User Journey absolut präzise definiert sind." },
        { num: "02 / UMSETZUNG", title: "Engineering", desc: "Full-Stack Entwicklung mit modernen Technologien. Kompromissloser Fokus auf Performance, saubere Systemstrukturen und High-End UI-Animationen." },
        { num: "03 / STAGING", title: "Transparente Live-Previews", desc: "Keine Blackbox-Entwicklung. Sie erhalten bereits frühzeitig im Prozess einen passwortgeschützten Staging-Link. So können Sie den Fortschritt jederzeit live auf allen Geräten mittesten." },
        { num: "04 / QUALITÄT", title: "Zero-Bug Garantie", desc: "Mein Stack ist auf Zuverlässigkeit ausgelegt. Sollten nach dem finalen Handover und Live-Gang dennoch technische Fehler in meinem Code auftreten innnerhalb von einem Monat, behebe ich diese anstandslos – völlig kostenlos." }
      ],
      skillsTitle: "Skills & Tech Stack",
      skillsDesc: "Mein Stack ist konsequent auf Performance und Entwickler-Experience ausgerichtet. Fully typed, Edge-ready und absolut verlässlich im Production-Einsatz.",
      frontendTitle: "Frontend & UI",
      backendTitle: "Backend & Cloud"
    },
    benefits: {
      tag: "Business Value",
      title1: "Impact.",
      title2: "Kein Zufall.",
      desc: "Wir bauen keine Software um der Software willen. Das Ziel ist immer ein messbarer Mehrwert für Ihr Business und eine makellose Experience.",
      items: [
        { num: "01", title: "Conversion & Wachstum", text: "Eine performante Landing Page ist kein einfaches Aushängeschild, sondern ein digitaler Vertriebler. Optimiertes UI/UX-Design und psychologische Nutzerführung generieren messbar mehr Kundenanfragen." },
        { num: "02", title: "Maximale Effizienz", text: "Komplexe manuelle Prozesse kosten Zeit und Geld. Maßgeschneiderte Web-Apps automatisieren Ihre Workflows, vernetzen Datensätze zentral und minimieren den administrativen Aufwand drastisch." }
      ]
    },
    services: {
      title1: "Zwei",
      title2: "Disziplinen.",
      desc: "Klarer Fokus. Vollständige Transparenz. Jedes Setup wird exklusiv und maßgeschneidert entwickelt. Keine fertigen Templates.",
      arch: "Enthaltene Architektur",
      s1: {
        title: "Landing Pages & Websites",
        tagline: "Digitale Aushängeschilder, die Markenwert aufbauen. Rasend schnell, SEO-optimiert und hochgradig interaktiv.",
        timeline: "ab 3 Tage",
        budget: "ab 150 €",
        features: ["Custom landing & portfolio sites", "Responsive clean UI/UX", "Smooth animations & interactions", "Multi-Language support", "Content management integration", "Contact forms & lead capture", "Performance-Optimierung", "Deployment & hosting setup"]
      },
      s2: {
        title: "SaaS & Web App",
        tagline: "Komplexe SaaS-Lösungen, Dashboards und Plattformen. Fokus auf Datensicherheit, Skalierung und Logik.",
        timeline: "ab 2 Wochen",
        budget: "ab 500 €",
        features: ["Fully custom web applications", "Complex database structures", "Secure Role-Based Auth", "Third-party API integration", "Real-time features (WebSockets)", "Analytics dashboards", "DSGVO-compliant data handling", "Scalable serverless deployment"]
      }
    },
    projects: {
      tag: "Showcase",
      title1: "Ausgewählte",
      title2: "Arbeiten.",
      count: "03 Projects",
      value: "Project Value",
      items: [
        { id: 1, title: "CRM System", category: "Custom Web App", price: "~ 1000 €", desc: "Ein komplexes, maßgeschneidetes CRM-System mit umfangreichen Funktionen und diversen Integrationen von Technologien und Funktionen, um die Verwaltung von Akten und Kunden zu optimieren.", image: "/CRMSystem.png" },
        { id: 2, title: "Burger Shop", category: "Landing Page", price: "~ 150 €", desc: "Eine visuell auffällige Landing Page mit starker Markenidentität, Custom Animations und Neon-Akzenten für ein einzigartiges Erlebnis, das die Aufmerksamkeit der Kunden auf sich zieht.", image: "/BurgerShop.png" },
        { id: 3, title: "Lead Managing Tool", category: "Custom Web App", price: "~ 750 €", desc: "Ein Tool zur Lead-Einreichung und Verwaltung mit täglichen Reports und verschiedenen Nutzerrollen, um Effizienz und Übersicht zu steigern.", image: "/LeadTool.png" }
      ]
    },
    reviews: {
      tag: "Testimonials",
      title1: "Client",
      title2: "Feedback.",
      items: [
        { text: "Marvin hat unsere Vision nicht nur technisch perfekt umgesetzt, sondern auch konzeptionell auf ein neues Level gehoben. Absolute Empfehlung.", role: "B2B SaaS Platform" },
        { text: "Die Geschwindigkeit und Präzision, mit der hier gearbeitet wird, ist beeindruckend. Unsere Corporate Site lädt rasend schnell und das Design sticht heraus.", role: "Architekturbüro" }
      ]
    },
    faq: {
      tag: "Questions",
      title: "FAQ.",
      desc: "Alles Wichtige zum Ablauf, zu den Projekt-Voraussetzungen und technischen Rahmenbedingungen. Noch Fragen offen? Einfach kontaktieren.",
      items: [
        { question: "Was benötigst du von mir, um zu starten?", answer: "In der Regel reicht eine kurze Beschreibung des Projekts, vorhandener Content (erste Texte, Bilder, Logo) und idealerweise ein paar Beispiele von Websites, die Ihnen gefallen. Den Rest erarbeiten wir in einem kurzen Setup-Call." },
        { question: "Hilfst du auch beim Design, wenn ich keines habe?", answer: "Absolut! Ich fungiere nicht nur als reiner Entwickler. Ich entwerfe moderne, cleane und konvertierende User Interfaces basierend auf Ihrer Marke und bespreche die UX-Strategie im Detail mit Ihnen, bevor wir in den Code gehen." },
        { question: "Kümmerst du dich um Hosting und Deployment?", answer: "Ja, der Live-Gang ist inklusive. Ich richte das komplette Hosting (in der Regel über Vercel) ein, verknüpfe Ihre Domain und sorge dafür, dass die Seite von Tag eins an weltweit performant, sicher und SSL-verschlüsselt läuft." },
        { question: "Wie viele Anpassungen / Revisions sind möglich?", answer: "Bei kleinen Projekten und Landing Pages sind standardmäßig 3 Feedback-Runden für das Design inklusive. Wir definieren Meilensteine, damit das Projekt immer in die richtige Richtung läuft und böse Überraschungen ausgeschlossen sind." }
      ]
    },
    cta: {
      tag: "Start the process",
      title1: "Let's build something",
      title2: "unreasonable.",
      btn: "Get in touch"
    }
  },
  en: {
    nav: {
      about: "About",
      services: "Services",
      projects: "Work",
      contact: "Contact",
    },
    hero: {
      bgText: "SOFTWARE",
      tagline: "Independent Studio",
      line1: "We build",
      line2: "sharp",
      line3: "software.",
      desc: "Specialized in high-end web applications and exceptional user interfaces. No bullshit. No templates.",
      cta: "Start a dialog",
      scroll: "Scroll"
    },
    about: {
      tag: "Available for Projects",
      role: "Full-Stack Web Developer",
      section1Title: "About Me",
      section1Desc: "Hi! I am Marvin a full-stack web developer from Germany with over 5 years of experience. I specialize in modern, blazing fast, and scalable web applications using technologies like Next.js, PostgreSQL, Supabase, and Docker.",
      quoteTitle: "Tailored & Scalable.",
      quoteDesc: "Whether responsive portfolios, custom web apps, complex dashboards, or backend systems – I build solutions tailored exactly to your use case. No site builders, just real digital products from code architecture to deployment setup.",
      expTitle: "Experience",
      expDesc: "Through intensive project work and internships in software companies, I have gained deep insights into professional developer workflows – frontend, backend, and system integration.",
      expItems: [
        { label: "Web Development", time: "5+ Years" },
        { label: "Frontend (React, Next.js)", time: "Pro Level" },
        { label: "Backend (Node, Postgres)", time: "Intermediate" }
      ],
      workflowTitle: "Workflow",
      workflowItems: [
        { num: "01 / CONCEPT", title: "Strategy & UX", desc: "We analyze the problem down to the core. No line of code is written before architecture and user journey are precisely defined." },
        { num: "02 / EXECUTION", title: "Engineering", desc: "Full-stack development with modern technologies. Uncompromising focus on performance, clean system structures, and high-end UI animations." },
        { num: "03 / STAGING", title: "Transparent Live-Previews", desc: "No black box development. You will receive a password-protected staging link early directly during the process. This way you can track the progress live on all devices." },
        { num: "04 / QUALITY", title: "Zero-Bug Guarantee", desc: "My stack is built for reliability. Should any technical errors occur in my code after final handover and deployment within one month, I will fix them without hesitation – completely free of charge." }
      ],
      skillsTitle: "Skills & Tech Stack",
      skillsDesc: "My stack is strictly aimed at performance and developer experience. Fully typed, edge-ready, and absolutely reliable in production.",
      frontendTitle: "Frontend & UI",
      backendTitle: "Backend & Cloud"
    },
    benefits: {
      tag: "Business Value",
      title1: "Impact.",
      title2: "No Coincidence.",
      desc: "We don't build software just for the sake of it. The goal is always a measurable added value for your business and a flawless experience.",
      items: [
        { num: "01", title: "Conversion & Growth", text: "A performant landing page is not a simple billboard, but a digital sales rep. Optimized UI/UX design and psychological user guidance generate measurably more customer inquiries." },
        { num: "02", title: "Maximum Efficiency", text: "Complex manual processes cost time and money. Custom web apps automate your workflows, connect data sets centrally, and drastically minimize administrative effort." }
      ]
    },
    services: {
      title1: "Two",
      title2: "Disciplines.",
      desc: "Clear focus. Complete transparency. Every setup is exclusively and custom-developed. No pre-built templates.",
      arch: "Included Architecture",
      s1: {
        title: "Landing Pages & Websites",
        tagline: "Digital flagships that build brand value. Blazing fast, SEO-optimized, and highly interactive.",
        timeline: "from 3 Days",
        budget: "from 150 €",
        features: ["Custom landing & portfolio sites", "Responsive clean UI/UX", "Smooth animations & interactions", "Multi-Language support", "Content management integration", "Contact forms & lead capture", "Performance optimization", "Deployment & hosting setup"]
      },
      s2: {
        title: "SaaS & Web App",
        tagline: "Complex SaaS solutions, dashboards, and platforms. Focus on data security, scalability, and logic.",
        timeline: "from 2 Weeks",
        budget: "from 500 €",
        features: ["Fully custom web applications", "Complex database structures", "Secure Role-Based Auth", "Third-party API integration", "Real-time features (WebSockets)", "Analytics dashboards", "GDPR-compliant data handling", "Scalable serverless deployment"]
      }
    },
    projects: {
      tag: "Showcase",
      title1: "Selected",
      title2: "Work.",
      count: "03 Projects",
      value: "Project Value",
      items: [
        { id: 1, title: "CRM System", category: "Custom Web App", price: "~ 1000 €", desc: "A complex, customized CRM system with extensive functions and various technology integrations to optimize file and customer administration.", image: "/Platzhalter.png" },
        { id: 2, title: "Burger Shop", category: "Landing Page", price: "~ 150 €", desc: "A visually striking landing page with strong brand identity, custom animations, and neon accents for a unique experience that grabs customer attention.", image: "/Platzhalter.png" },
        { id: 3, title: "Lead Managing Tool", category: "Custom Web App", price: "~ 750 €", desc: "A tool for lead submission and management with daily reports and different user roles to increase efficiency and clarity.", image: "/Platzhalter.png" }
      ]
    },
    reviews: {
      tag: "Testimonials",
      title1: "Client",
      title2: "Feedback.",
      items: [
        { text: "Marvin not only implemented our vision perfectly on a technical level but also elevated it conceptually. Absolute recommendation.", role: "B2B SaaS Platform" },
        { text: "The speed and precision of the work here are impressive. Our corporate site loads incredibly fast and the design stands out.", role: "Architecture Firm" }
      ]
    },
    faq: {
      tag: "Questions",
      title: "FAQ.",
      desc: "Everything you need to know about the process, project requirements, and technical framework. Still have questions? Just contact me.",
      items: [
        { question: "What do you need from me to start?", answer: "Usually, a brief description of the project, available content (initial texts, images, logo) and ideally some examples of websites you like are enough. We'll work out the rest in a short setup call." },
        { question: "Do you also help with the design if I don't have one?", answer: "Absolutely! I don't just act as a pure developer. I design modern, clean, and converting user interfaces based on your brand and discuss the UX strategy in detail with you before we dive into the code." },
        { question: "Do you handle hosting and deployment?", answer: "Yes, going live is included. I'll set up the entire hosting (usually via Vercel), connect your domain, and ensure that the site runs fast, securely, and SSL-encrypted worldwide from day one." },
        { question: "How many adjustments / revisions are allowed?", answer: "For small projects and landing pages, 3 feedback rounds for the design are included by default. We define milestones so the project always heads in the right direction and nasty surprises are excluded." }
      ]
    },
    cta: {
      tag: "Start the process",
      title1: "Let's build something",
      title2: "unreasonable.",
      btn: "Get in touch"
    }
  }
};
