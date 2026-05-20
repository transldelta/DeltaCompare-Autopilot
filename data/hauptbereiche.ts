/**
 * 16 Hauptbereiche von DeltaVergleich mit ihren Unter-Themen.
 * Dient als Single Source of Truth für Kategorien und Vergleichsseiten-Stubs.
 */

export type SubTopic = {
  /** Sichtbarer Name */
  name: string;
  /** Stabiler Slug (ohne "beste-" Präfix) */
  slug: string;
  /** Was hilft den Lesern, das richtige Tool zu finden? */
  focus: string;
};

export type Hauptbereich = {
  name: string;
  slug: string;
  description: string;
  icon: string;
  subtopics: SubTopic[];
};

export const HAUPTBEREICHE: Hauptbereich[] = [
  {
    name: "Business-Tools für Selbstständige",
    slug: "business-tools",
    description:
      "Tools, die Solo-Selbstständige produktiver machen – von Projektmanagement und CRM bis zu KI-Assistenten und digitalen Signaturen.",
    icon: "Wrench",
    subtopics: [
      { name: "Rechnungsprogramme", slug: "rechnungsprogramme", focus: "Rechnungs­stellung, Mahnwesen, EÜR-Vorbereitung" },
      { name: "Projektmanagement-Tools", slug: "projektmanagement-tools", focus: "Aufgaben, Boards, Automationen, Team-Kollaboration" },
      { name: "Terminbuchungs-Tools", slug: "terminbuchungs-tools", focus: "Online-Buchung, Kalender-Integration, Zahlung" },
      { name: "CRM-Systeme", slug: "crm-systeme", focus: "Kontakte, Pipelines, Marketing-Automation, Reporting" },
      { name: "E-Mail-Marketing-Tools", slug: "e-mail-marketing-tools", focus: "Newsletter, Automatisierungen, DOI, DSGVO" },
      { name: "KI-Tools für Selbstständige", slug: "ki-tools-fuer-selbststaendige", focus: "Texte, Recherche, Bilder, Automation" },
      { name: "Dokumentenmanagement-Tools", slug: "dokumentenmanagement-tools", focus: "OCR, Volltextsuche, GoBD, Versionierung" },
      { name: "Digitale Signatur", slug: "digitale-signatur", focus: "Rechtssicheres Unterschreiben, eIDAS, QES" },
      { name: "Cloud-Speicher", slug: "cloud-speicher", focus: "Sync, Backup, Team-Zugriff, EU-Server" },
      { name: "Passwortmanager", slug: "passwortmanager", focus: "Sichere Passwörter, 2FA, Team-Funktionen" },
    ],
  },
  {
    name: "Buchhaltung & Steuern",
    slug: "buchhaltung-steuern",
    description:
      "Buchhaltungs-Software, Steuer-Tools und Lösungen für die Belegerfassung – vom Kleinunternehmer bis zur GmbH.",
    icon: "Calculator",
    subtopics: [
      { name: "Buchhaltungssoftware", slug: "buchhaltungssoftware", focus: "EÜR, GoBD, Bankanbindung, Steuerberater-Export" },
      { name: "Steuer-Software", slug: "steuer-software", focus: "ELSTER, Steuererklärung, Sparpotenzial" },
      { name: "Umsatzsteuer-Tools", slug: "umsatzsteuer-tools", focus: "USt-Voranmeldung, ZM, OSS-Verfahren" },
      { name: "Einnahmen-Ausgaben-Rechnung", slug: "einnahmen-ausgaben-rechnung", focus: "EÜR, Excel-Alternative, Anlagen­verzeichnis" },
      { name: "Kassenbuch-Tools", slug: "kassenbuch-tools", focus: "GoBD, TSE, Kassenführung" },
      { name: "Belegscanner", slug: "belegscanner", focus: "OCR, Buchhaltungs-Integration, GoBD" },
      { name: "Steuerberater-Vermittlung", slug: "steuerberater-vermittlung", focus: "Online-Berater, Festpreise, regionale Berater" },
      { name: "Lohnabrechnung", slug: "lohnabrechnung", focus: "Mitarbeiter, Minijobs, Sozialversicherung" },
      { name: "Cloud-Buchhaltung", slug: "cloud-buchhaltung", focus: "Mobile App, Belege scannen, Team-Zugriff" },
      { name: "Tools für Kleinunternehmer und Freiberufler", slug: "tools-kleinunternehmer-freiberufler", focus: "§19 UStG, einfache Rechnungen, EÜR" },
    ],
  },
  {
    name: "Geschäftskonto & Kreditkarten",
    slug: "geschaeftskonto-kreditkarten",
    description:
      "Geschäftskonten, Firmenkarten und Ausgabenmanagement – für Solo-Selbstständige, Freelancer, GmbH und UG.",
    icon: "Banknote",
    subtopics: [
      { name: "Geschäftskonten für Selbstständige", slug: "geschaeftskonten-fuer-selbststaendige", focus: "Kostenlose Konten, Buchhaltungs-Integration, Online-Eröffnung" },
      { name: "Geschäftskonten für GmbH und UG", slug: "geschaeftskonten-gmbh-ug", focus: "Pflicht-Konto, Einzahlungs­bestätigung, Buchhaltungs-Schnittstelle" },
      { name: "Kostenlose Geschäftskonten", slug: "kostenlose-geschaeftskonten", focus: "Wirklich gebührenfrei, Bedingungen, Limits" },
      { name: "Kreditkarten für Selbstständige", slug: "kreditkarten-fuer-selbststaendige", focus: "Bonus­programme, Versicherungen, Spesenmanagement" },
      { name: "Virtuelle Kreditkarten", slug: "virtuelle-kreditkarten", focus: "Online-Käufe, Abo-Verwaltung, Einmal-Kartennummern" },
      { name: "Debitkarten für Business", slug: "debitkarten-fuer-business", focus: "Sofortige Belastung, Kontrolle, kein Kreditrahmen" },
      { name: "Firmenkarten", slug: "firmenkarten", focus: "Mitarbeiter­karten, Spesenrichtlinien, Limits" },
      { name: "Ausgabenmanagement", slug: "ausgabenmanagement", focus: "Belege, Spesen, Genehmigungs-Workflows" },
      { name: "Business-Banking-Apps", slug: "business-banking-apps", focus: "Mobile-First, Push-Belege, Buchhaltungs-Sync" },
      { name: "Konten mit Buchhaltungsintegration", slug: "konten-mit-buchhaltungsintegration", focus: "Lexoffice, sevDesk, DATEV, FastBill" },
    ],
  },
  {
    name: "Versicherungen für Selbstständige",
    slug: "versicherungen",
    description:
      "Berufshaftpflicht, Krankenversicherung, Berufsunfähigkeit, Rechtsschutz und mehr – sinnvoll für Selbstständige.",
    icon: "Shield",
    subtopics: [
      { name: "Berufshaftpflicht-Versicherung", slug: "berufshaftpflicht", focus: "Vermögens­schäden, branchen­spezifische Deckung" },
      { name: "Betriebshaftpflicht", slug: "betriebshaftpflicht", focus: "Personen- und Sachschäden im Betrieb" },
      { name: "Rechtsschutzversicherung", slug: "rechtsschutzversicherung", focus: "Vertragsrecht, Forderungs­einzug, Arbeitsrecht" },
      { name: "Private Krankenversicherung", slug: "private-krankenversicherung", focus: "PKV-Tarife, Wechsel, Beitrag­sentwicklung" },
      { name: "Gesetzliche Krankenversicherung für Selbstständige", slug: "gkv-fuer-selbststaendige", focus: "Beitrag, Mindesteinkommen, freiwillige Versicherung" },
      { name: "Krankentagegeld", slug: "krankentagegeld", focus: "Absicherung bei längerer Krankheit" },
      { name: "Altersvorsorge für Selbstständige", slug: "altersvorsorge-selbststaendige", focus: "Rürup, ETF, betriebliche Vorsorge" },
      { name: "Unfallversicherung", slug: "unfallversicherung", focus: "Beruflich und privat, Leistungs­arten" },
      { name: "Cyberversicherung", slug: "cyberversicherung", focus: "Datenpanne, Hacking, Erpressung" },
      { name: "Kfz-Versicherung", slug: "kfz-versicherung", focus: "Haftpflicht, Teilkasko, Vollkasko, Firmenwagen" },
      { name: "Private Haftpflichtversicherung", slug: "private-haftpflichtversicherung", focus: "Privat & beruflich abgrenzen, Familien­tarife" },
    ],
  },
  {
    name: "Shopify & E-Commerce-Tools",
    slug: "shopify-e-commerce",
    description:
      "Apps und Tools für Onlineshops – Shopify, WooCommerce, Etsy, Amazon. Zahlung, Versand, Marketing, Bewertungen.",
    icon: "ShoppingBag",
    subtopics: [
      { name: "Shopify-Apps", slug: "shopify-apps", focus: "Conversion, Marketing, Logistik, Reviews" },
      { name: "Zahlungsanbieter", slug: "zahlungsanbieter", focus: "Karten, Klarna, SEPA, Wallets" },
      { name: "Dropshipping-Tools", slug: "dropshipping-tools", focus: "Lieferanten, Automation, Auftrags­abwicklung" },
      { name: "Print-on-Demand", slug: "print-on-demand", focus: "Mockups, Versand, Produktauswahl" },
      { name: "Produktrecherche-Tools", slug: "produktrecherche-tools", focus: "Trends, Margen, Wettbewerb" },
      { name: "Bewertungs-Apps für Shops", slug: "bewertungs-apps-shops", focus: "UGC, Sterne, Trust" },
      { name: "E-Mail-Marketing für Shops", slug: "e-mail-marketing-fuer-shops", focus: "Warenkorb-Abbruch, Welcome-Strecken" },
      { name: "Warenwirtschaft", slug: "warenwirtschaft", focus: "Lager, Bestellungen, Multi-Channel" },
      { name: "Versandsoftware", slug: "versandsoftware", focus: "Labels, Carrier-Anbindung, Sendungs­verfolgung" },
      { name: "Retourenmanagement", slug: "retourenmanagement", focus: "Self-Service, Refund, Logistik" },
      { name: "Etsy-Tools", slug: "etsy-tools", focus: "SEO, Listing-Optimierung, Analyse" },
      { name: "Amazon-Seller-Tools", slug: "amazon-seller-tools", focus: "Keyword, PPC, Reviews, FBA" },
    ],
  },
  {
    name: "Website, Hosting & Domains",
    slug: "website-hosting-domains",
    description:
      "Webhosting, Website-Builder, Domains, SEO- und Sicherheits-Tools – die technische Basis deiner Online-Präsenz.",
    icon: "Server",
    subtopics: [
      { name: "Webhosting", slug: "webhosting", focus: "SSD, Geschwindigkeit, deutscher Support" },
      { name: "WordPress-Hosting", slug: "wordpress-hosting", focus: "Managed, Caching, Updates" },
      { name: "Website-Builder", slug: "website-builder", focus: "Drag-and-Drop, Templates, SEO" },
      { name: "Domain-Anbieter", slug: "domain-anbieter", focus: "Preis, Übertragung, DNS-Funktionen" },
      { name: "Landingpage-Builder", slug: "landingpage-builder", focus: "Conversion, A/B-Tests, Integrationen" },
      { name: "SEO-Tools", slug: "seo-tools", focus: "Keyword, Backlinks, Audits" },
      { name: "Page-Speed-Tools", slug: "page-speed-tools", focus: "Core Web Vitals, Optimierung" },
      { name: "Cookie-Consent-Tools", slug: "cookie-consent-tools", focus: "DSGVO, TTDSG, Customisation" },
      { name: "Website-Sicherheit", slug: "website-sicherheit", focus: "WAF, Malware-Scan, Brute-Force-Schutz" },
      { name: "Backup-Tools", slug: "backup-tools", focus: "Automatisch, Off-Site, Wiederherstellung" },
      { name: "CDN-Anbieter", slug: "cdn-anbieter", focus: "Caching, Geschwindigkeit, DDoS-Schutz" },
    ],
  },
  {
    name: "Homeoffice & Büro",
    slug: "homeoffice-buero",
    description:
      "Ausstattung für produktives Homeoffice und Büro – Möbel, Hardware und Ergonomie.",
    icon: "Briefcase",
    subtopics: [
      { name: "Bürostühle", slug: "buerostuehle", focus: "Ergonomie, Lordosen­stütze, Langzeit-Sitzen" },
      { name: "Höhenverstellbare Schreibtische", slug: "hoehenverstellbare-schreibtische", focus: "Stehen vs. Sitzen, Belastbarkeit, Memory" },
      { name: "Monitore", slug: "monitore", focus: "Auflösung, Größe, Höhenverstellung" },
      { name: "Drucker", slug: "drucker", focus: "Laser/Tinte, Folgekosten, Duplex" },
      { name: "Dokumentenscanner", slug: "dokumentenscanner", focus: "Einzug, OCR, GoBD, Geschwindigkeit" },
      { name: "Headsets für Online-Meetings", slug: "headsets-online-meetings", focus: "Geräusch­unterdrückung, Akku, Komfort" },
      { name: "Mikrofone fürs Homeoffice", slug: "mikrofone-homeoffice", focus: "USB, Sprach­qualität, Plug-and-Play" },
      { name: "Webcams", slug: "webcams", focus: "Auflösung, Autofokus, Lichtanpassung" },
      { name: "Aktenvernichter", slug: "aktenvernichter", focus: "DIN-Sicherheitsstufen, Volumen, Datenschutz" },
      { name: "Dokumententaschen", slug: "dokumententaschen", focus: "Schutz, Sortierung, Mobilität" },
      { name: "Büroorganisation", slug: "buero-organisation", focus: "Ablage, Beschriftung, Workflow" },
      { name: "Ergonomie-Produkte", slug: "ergonomie-produkte", focus: "Maus, Tastatur, Stehmatten" },
    ],
  },
  {
    name: "Dolmetscher- und Übersetzer-Business-Tools",
    slug: "dolmetscher-uebersetzer-tools",
    description:
      "Spezialwerkzeuge für Dolmetscher und Übersetzer – CAT-Tools, Plattformen, Hardware und Kundenverwaltung.",
    icon: "Languages",
    subtopics: [
      { name: "Dolmetscher-Software", slug: "dolmetscher-software", focus: "Remote-Dolmetschen, Booth-Software, Konferenzen" },
      { name: "Übersetzungssoftware", slug: "uebersetzungssoftware", focus: "Maschinelle Übersetzung, Post-Editing, Hybrid" },
      { name: "CAT-Tools", slug: "cat-tools", focus: "Translation Memory, Terminologie, QA" },
      { name: "Terminplanung für Dolmetscher", slug: "terminplanung-dolmetscher", focus: "Auftrags­verwaltung, Kalender, Reise­planung" },
      { name: "Rechnungsprogramme für Dolmetscher", slug: "rechnungsprogramme-dolmetscher", focus: "JVEG, Auslandseinsätze, Mehrwert­steuer" },
      { name: "Headsets für Video-Dolmetschen", slug: "headsets-video-dolmetschen", focus: "Sprach­klarheit, ANC, kabelgebunden" },
      { name: "Mikrofone für Dolmetschen", slug: "mikrofone-dolmetschen", focus: "Klang­qualität, Anschluss, mobile Nutzung" },
      { name: "Mobile Scanner", slug: "mobile-scanner", focus: "Behördentermine, schnelle Belege, OCR" },
      { name: "Dokumentenmanagement für Übersetzer", slug: "dokumentenmanagement-uebersetzer", focus: "Vertraulichkeit, Versionierung, GoBD" },
      { name: "Kundenverwaltung für Dolmetscher", slug: "kundenverwaltung-dolmetscher", focus: "CRM-Light, Auftrags­historie, Glossare" },
      { name: "Tools für Behördeneinsätze", slug: "tools-behoerden-einsaetze", focus: "Datenschutz, JVEG, Rechnungs­abwicklung" },
    ],
  },
  {
    name: "Finanzierung & Kredite",
    slug: "finanzierung-kredite",
    description:
      "Geschäftskredite, Privatkredite, Förderungen, Leasing und Factoring – für Wachstum und Liquidität.",
    icon: "PiggyBank",
    subtopics: [
      { name: "Geschäftskredite", slug: "geschaeftskredite", focus: "Zinsen, Laufzeit, Sicherheiten" },
      { name: "Privatkredite", slug: "privatkredite", focus: "Effektivzins, Bonität, Sondertilgung" },
      { name: "Kreditvergleich", slug: "kreditvergleich", focus: "Banken im direkten Vergleich" },
      { name: "Sofortkredite", slug: "sofortkredite", focus: "Schnelle Auszahlung, digitale Beantragung" },
      { name: "Förderkredite", slug: "foerderkredite", focus: "KfW, ERP, Landes­programme" },
      { name: "Leasing", slug: "leasing", focus: "Kfz, IT, Bilanzwirkung, Restwert" },
      { name: "Factoring", slug: "factoring", focus: "Liquidität, Forderungs­verkauf, Gebühren" },
      { name: "Liquiditätsplanung", slug: "liquiditaetsplanung", focus: "Cashflow, Forecasting, Tools" },
      { name: "Bonitätsprüfung", slug: "bonitaetspruefung", focus: "Schufa, Creditreform, B2B-Auskunft" },
      { name: "Kreditkarten mit Kreditrahmen", slug: "kreditkarten-mit-kreditrahmen", focus: "Echte Kredit­karten, Zinsen, Limit" },
    ],
  },
  {
    name: "Energie, Internet & Telekommunikation",
    slug: "energie-internet-telekom",
    description:
      "Strom, Gas, DSL, Glasfaser, Mobilfunk und Cloud-Telefonie – auch für Büro und Homeoffice.",
    icon: "Plug",
    subtopics: [
      { name: "Stromvergleich", slug: "stromvergleich", focus: "Ökostrom, Preisgarantie, Wechsel­bonus" },
      { name: "Gasvergleich", slug: "gasvergleich", focus: "Preise, Vertragsdauer, Anbieter­wechsel" },
      { name: "DSL-Vergleich", slug: "dsl-vergleich", focus: "Geschwindigkeit, Vertrag, Verfügbarkeit" },
      { name: "Glasfaser-Vergleich", slug: "glasfaser-vergleich", focus: "Anschluss, Bandbreite, Anbieter" },
      { name: "Mobilfunk-Tarife", slug: "mobilfunk-tarife", focus: "Daten, EU-Roaming, LTE/5G" },
      { name: "Business-Handytarife", slug: "business-handytarife", focus: "Mitarbeiter­karten, Gruppen, SLA" },
      { name: "Internet für Homeoffice", slug: "internet-homeoffice", focus: "Geschwindigkeit, Stabilität, Backup-Verbindung" },
      { name: "Router & Netzwerk", slug: "router-netzwerk", focus: "Wi-Fi 6, Mesh, Sicherheit" },
      { name: "VPN-Dienste", slug: "vpn-dienste", focus: "Datenschutz, Geschwindigkeit, Server" },
      { name: "Cloud-Telefonie", slug: "cloud-telefonie", focus: "VoIP, Nebenstellen, Mobile App" },
    ],
  },
  {
    name: "Weiterbildung & Online-Kurse",
    slug: "weiterbildung-onlinekurse",
    description:
      "Plattformen und Kurse für deinen beruflichen Sprung – von Business und Marketing bis zu Sprachen und KI.",
    icon: "GraduationCap",
    subtopics: [
      { name: "Business-Kurse", slug: "business-kurse", focus: "Selbstständigkeit, Vertrieb, Strategie" },
      { name: "Sprachkurse", slug: "sprachkurse", focus: "Apps, Live-Lehrer, Zertifikate" },
      { name: "KI-Kurse", slug: "ki-kurse", focus: "Praxis, Prompting, Tool-Einsatz" },
      { name: "Buchhaltungskurse", slug: "buchhaltungskurse", focus: "Grundlagen, EÜR, Tools" },
      { name: "Marketingkurse", slug: "marketingkurse", focus: "SEO, Social, Ads, Funnel" },
      { name: "Shopify-Kurse", slug: "shopify-kurse", focus: "Setup, Marketing, Skalierung" },
      { name: "Steuerkurse für Selbstständige", slug: "steuerkurse-selbststaendige", focus: "USt, EÜR, Praxis" },
      { name: "Dolmetscher-Fortbildungen", slug: "dolmetscher-fortbildungen", focus: "Fachgebiete, Zertifikate, Praxis" },
      { name: "Zertifikatskurse", slug: "zertifikatskurse", focus: "Anerkannte Abschlüsse, Online" },
      { name: "Lernplattformen", slug: "lernplattformen", focus: "Abo, Themen­vielfalt, Mobile" },
    ],
  },
  {
    name: "Marketing & Kundengewinnung",
    slug: "marketing-kundengewinnung",
    description:
      "SEO, Social Media, Newsletter, Werbung und Design – Tools, mit denen Selbstständige Sichtbarkeit aufbauen.",
    icon: "Megaphone",
    subtopics: [
      { name: "SEO-Tools", slug: "seo-tools-marketing", focus: "Keyword, Audit, Backlinks" },
      { name: "Social-Media-Tools", slug: "social-media-tools", focus: "Planung, Veröffentlichung, Analytics" },
      { name: "Newsletter-Tools", slug: "newsletter-tools", focus: "DOI, Automatisierung, Templates" },
      { name: "Landingpage-Tools", slug: "landingpage-tools", focus: "Conversion, A/B-Tests, Integrationen" },
      { name: "Bewertungsmanagement", slug: "bewertungsmanagement", focus: "Reviews einsammeln, anzeigen, schlechte Bewertungen managen" },
      { name: "Google-Business-Tools", slug: "google-business-tools", focus: "GMB-Optimierung, Posts, Insights" },
      { name: "Werbeanzeigen-Tools", slug: "werbeanzeigen-tools", focus: "Kampagnen­verwaltung, Reporting" },
      { name: "Content-Planer", slug: "content-planer", focus: "Redaktionsplan, Team-Workflow" },
      { name: "Design-Tools", slug: "design-tools", focus: "Grafiken, Templates, Branding" },
      { name: "Canva-Alternativen", slug: "canva-alternativen", focus: "Open Source, Pro-Features, Pricing" },
    ],
  },
  {
    name: "Recht & Verträge",
    slug: "recht-vertraege",
    description:
      "Rechtssichere Vorlagen, Datenschutz-Tools, Mahnwesen und Online-Rechtsberatung – damit du sauber arbeitest.",
    icon: "Scale",
    subtopics: [
      { name: "Vertragsvorlagen", slug: "vertragsvorlagen", focus: "AGB, NDA, Werkvertrag" },
      { name: "Datenschutz-Tools", slug: "datenschutz-tools", focus: "DSGVO-Doku, Auftrags­verarbeitung" },
      { name: "Impressum-Generatoren", slug: "impressum-generatoren", focus: "TMG-konforme Erstellung" },
      { name: "AGB-Generatoren", slug: "agb-generatoren", focus: "Online-Shops, Dienstleister" },
      { name: "Cookie-Banner-Tools", slug: "cookie-banner-tools", focus: "DSGVO, TTDSG, Customisation" },
      { name: "Digitale Signaturen", slug: "digitale-signaturen", focus: "eIDAS, QES, Workflow" },
      { name: "Online-Rechtsberatung", slug: "online-rechtsberatung", focus: "Festpreise, Erstberatung, Spezialisten" },
      { name: "Forderungsmanagement", slug: "forderungsmanagement", focus: "Mahnungen, Inkasso, Klage" },
      { name: "Mahnwesen-Software", slug: "mahnwesen-software", focus: "Mehrstufig, automatisch, freundlich" },
      { name: "Inkasso-Services", slug: "inkasso-services", focus: "Erfolgsbasiert, transparent, B2B" },
    ],
  },
  {
    name: "Produktivität & Organisation",
    slug: "produktivitaet-organisation",
    description:
      "Tools, mit denen du Aufgaben, Termine, Notizen und Zeit besser organisierst – inklusive KI-Assistenten.",
    icon: "ListChecks",
    subtopics: [
      { name: "Kalender-Apps", slug: "kalender-apps", focus: "Synchronisation, Geräte, Teamfunktionen" },
      { name: "Notiz-Apps", slug: "notiz-apps", focus: "Suche, Tags, Offline-Fähigkeit" },
      { name: "Aufgabenmanagement", slug: "aufgabenmanagement", focus: "To-Do, Prioritäten, Erinnerungen" },
      { name: "Projektplanung", slug: "projektplanung", focus: "Meilensteine, Gantt, Boards" },
      { name: "Zeiterfassung", slug: "zeiterfassung", focus: "Stunden­nachweis, Mitarbeiter, Projekte" },
      { name: "Automatisierungstools", slug: "automatisierungstools", focus: "Zapier-Alternativen, Workflows, Integrationen" },
      { name: "Team-Kommunikation", slug: "team-kommunikation", focus: "Chat, Video, Kanäle" },
      { name: "Dateiablage", slug: "dateiablage", focus: "Sync, Berechtigungen, Teamordner" },
      { name: "Workflow-Tools", slug: "workflow-tools", focus: "BPM, Approvals, No-Code" },
      { name: "KI-Assistenten", slug: "ki-assistenten", focus: "Chatbots, Schreibhilfe, Recherche" },
    ],
  },
  {
    name: "Reise & Mobilität für Selbstständige",
    slug: "reise-mobilitaet",
    description:
      "Geschäftsreisen, Mobilität und alles rund um Buchung, Abrechnung und Fahrtenbuch.",
    icon: "Plane",
    subtopics: [
      { name: "Mietwagenvergleich", slug: "mietwagenvergleich", focus: "Preise, Anbieter, Versicherungen" },
      { name: "Bahn- und Reise-Tools", slug: "bahn-reise-tools", focus: "Sparpreise, Pendler, BahnCard" },
      { name: "Hotelbuchung", slug: "hotelbuchung", focus: "Business-Hotels, Treue­programme, flexible Stornierung" },
      { name: "Reiseversicherungen", slug: "reiseversicherungen", focus: "Auslandskrankenschutz, Annulierung" },
      { name: "Tankkarten", slug: "tankkarten", focus: "Rabatte, Abrechnung, Akzeptanz" },
      { name: "Fahrtenbuch-Apps", slug: "fahrtenbuch-apps", focus: "Finanzamt-konform, GPS, Steuer-Export" },
      { name: "Kilometerabrechnung", slug: "kilometerabrechnung", focus: "Pauschal, Reisekosten, Vorlagen" },
      { name: "Mobile Arbeitsausstattung", slug: "mobile-arbeitsausstattung", focus: "Laptop-Taschen, Powerbanks, Adapter" },
      { name: "Reise-Kreditkarten", slug: "reise-kreditkarten", focus: "Auslands­einsatz, Versicherungen, Lounges" },
      { name: "Parkplatz-Apps", slug: "parkplatz-apps", focus: "Zahlung, Verfügbarkeit, Quittung" },
    ],
  },
  {
    name: "Immobilien, Umzug & Haushalt",
    slug: "immobilien-umzug-haushalt",
    description:
      "Dienstleistungen rund um Wohnung, Haus, Umzug und Haushalt – auch für das Homeoffice.",
    icon: "Home",
    subtopics: [
      { name: "Immobilienbewertung", slug: "immobilienbewertung", focus: "Marktwert, Online-Gutachten, Verkauf" },
      { name: "Umzugsunternehmen", slug: "umzugsunternehmen", focus: "Angebot einholen, Versicherung, Bewertungen" },
      { name: "Entrümpelung", slug: "entruempelung", focus: "Festpreis, Verwertung, Termin" },
      { name: "Reinigungsdienste", slug: "reinigungsdienste", focus: "Regelmäßig, Endreinigung, Versicherung" },
      { name: "Handwerker-Vermittlung", slug: "handwerker-vermittlung", focus: "Angebote, Bewertungen, Termine" },
      { name: "Möbelvergleich", slug: "moebelvergleich", focus: "Preise, Qualität, Lieferung" },
      { name: "Smart-Home-Produkte", slug: "smart-home-produkte", focus: "Zentrale, Sicherheit, Kompatibilität" },
      { name: "Haushaltshelfer", slug: "haushaltshelfer", focus: "Plattformen, legale Anstellung" },
      { name: "Versicherungen für Wohnung und Haus", slug: "versicherungen-wohnung-haus", focus: "Hausrat, Wohngebäude, Glasbruch" },
      { name: "Energieberatung", slug: "energieberatung", focus: "Förderungen, Modernisierung, Sanierung" },
    ],
  },
];
