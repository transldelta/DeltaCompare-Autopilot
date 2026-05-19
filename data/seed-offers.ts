type SeedOffer = {
  name: string;
  slug: string;
  categorySlug: string;
  network: string;
  affiliateLink: string;
  trackingId: string;
  commissionType: string;
  estimatedCommission: string;
  shortDescription: string;
  longDescription: string;
  advantages: string;
  disadvantages: string;
  priceNote: string;
  rating: number;
  logoUrl: string;
  buttonText: string;
  status: string;
  isFeatured: boolean;
};

const demo = (slug: string) => `DEMO_LINK_ERSETZEN:${slug}`;

export const OFFERS: SeedOffer[] = [
  // === Geschäftskonten ===
  {
    name: "Geschäftskonto Anbieter A",
    slug: "geschaeftskonto-anbieter-a",
    categorySlug: "geschaeftskonto-kreditkarten",
    network: "Awin",
    affiliateLink: demo("geschaeftskonto-anbieter-a"),
    trackingId: "",
    commissionType: "Lead",
    estimatedCommission: "60–90 € pro abgeschlossener Kontoeröffnung",
    shortDescription:
      "Digitales Geschäftskonto mit kostenloser Kontoführung, Mastercard und Buchhaltungs-Anbindung.",
    longDescription:
      "Online-Geschäftskonto für Selbstständige und kleine Unternehmen mit schneller Online-Eröffnung, kostenloser Kontoführung im Basistarif, Mastercard sowie Schnittstellen zu gängigen Buchhaltungs-Tools. Geeignet für Solo-Selbstständige und Freelancer, die ihr Banking digital erledigen möchten.",
    advantages:
      "Kostenlose Kontoführung im Basistarif|Mastercard inklusive|Anbindung an Buchhaltungssoftware|Schnelle Online-Eröffnung|App mit Live-Benachrichtigungen",
    disadvantages:
      "Bareinzahlungen oft kostenpflichtig|Premium-Funktionen nur in höheren Tarifen|Kundenservice nur digital",
    priceNote: "Basistarif kostenlos – höhere Tarife mit Zusatzleistungen kostenpflichtig.",
    rating: 4.3,
    logoUrl: "",
    buttonText: "Konto eröffnen",
    status: "active",
    isFeatured: true,
  },
  {
    name: "Geschäftskonto Anbieter B",
    slug: "geschaeftskonto-anbieter-b",
    categorySlug: "geschaeftskonto-kreditkarten",
    network: "financeAds",
    affiliateLink: demo("geschaeftskonto-anbieter-b"),
    trackingId: "",
    commissionType: "Lead",
    estimatedCommission: "ca. 80 € pro Abschluss",
    shortDescription:
      "Klassisches Geschäftskonto mit Filialnetz, Bargeld-Optionen und Beratung.",
    longDescription:
      "Klassisches Geschäftskonto mit Möglichkeit zur persönlichen Beratung, Filialzugang und Bargeldservices. Geeignet für Selbstständige, die regelmäßig Bargeld einzahlen oder einen festen Ansprechpartner möchten.",
    advantages:
      "Persönliche Beratung möglich|Bargeldservices|Etablierte Bank|Solides Filialnetz",
    disadvantages: "Höhere Grundgebühr|Weniger digital als reine Online-Anbieter",
    priceNote: "Monatliche Kontoführungsgebühr – Konditionen je nach Tarif.",
    rating: 4.0,
    logoUrl: "",
    buttonText: "Mehr erfahren",
    status: "active",
    isFeatured: false,
  },
  {
    name: "Geschäftskonto Anbieter C",
    slug: "geschaeftskonto-anbieter-c",
    categorySlug: "geschaeftskonto-kreditkarten",
    network: "Awin",
    affiliateLink: demo("geschaeftskonto-anbieter-c"),
    trackingId: "",
    commissionType: "Lead",
    estimatedCommission: "ca. 50 € pro Abschluss",
    shortDescription:
      "Modernes Online-Geschäftskonto mit Integration in Buchhaltung und Steuer-Tools.",
    longDescription:
      "Vollständig digitales Geschäftskonto mit Fokus auf Selbstständige und Solo-Unternehmer. Bietet integrierte Belegverwaltung, Steuer-Schätzungen und Anbindung an gängige Buchhaltungsprogramme.",
    advantages:
      "Integrierte Belegverwaltung|Steuer-Schätzungen|Schnelle Eröffnung|Faire Tarifstaffel",
    disadvantages: "Bargeldhandling teuer|Premium-Funktionen kostenpflichtig",
    priceNote: "Basistarif kostengünstig, Premium-Tarif mit erweitertem Funktionsumfang.",
    rating: 4.4,
    logoUrl: "",
    buttonText: "Konto vergleichen",
    status: "active",
    isFeatured: false,
  },

  // === Kreditkarten ===
  {
    name: "Kreditkarte Anbieter A",
    slug: "kreditkarte-anbieter-a",
    categorySlug: "geschaeftskonto-kreditkarten",
    network: "Awin",
    affiliateLink: demo("kreditkarte-anbieter-a"),
    trackingId: "",
    commissionType: "Lead",
    estimatedCommission: "ca. 40 € pro Beantragung",
    shortDescription:
      "Business-Kreditkarte mit Spesenmanagement, Versicherungspaket und ohne Jahresgebühr im ersten Jahr.",
    longDescription:
      "Business-Kreditkarte für Selbstständige mit digitalem Spesenmanagement, Reisever­sicherungen und integrierter Buchhaltungs-Anbindung. Im ersten Jahr keine Jahresgebühr.",
    advantages:
      "Kein Jahresentgelt im 1. Jahr|Spesenmanagement|Reiseversicherungen|Buchhaltungs-Export",
    disadvantages: "Ab dem 2. Jahr Jahresgebühr|Bonusprogramm eingeschränkt",
    priceNote: "Im ersten Jahr kostenfrei, danach Jahresgebühr.",
    rating: 4.2,
    logoUrl: "",
    buttonText: "Karte beantragen",
    status: "active",
    isFeatured: true,
  },
  {
    name: "Kreditkarte Anbieter B",
    slug: "kreditkarte-anbieter-b",
    categorySlug: "geschaeftskonto-kreditkarten",
    network: "financeAds",
    affiliateLink: demo("kreditkarte-anbieter-b"),
    trackingId: "",
    commissionType: "Lead",
    estimatedCommission: "ca. 35 € pro Beantragung",
    shortDescription:
      "Kreditkarte mit Cashback-Programm und kostenloser Partnerkarte.",
    longDescription:
      "Kreditkarte mit Cashback-Programm, kostenloser Partnerkarte und Reise­service. Geeignet für Selbstständige, die regelmäßig geschäftlich reisen.",
    advantages: "Cashback|Partnerkarte gratis|Reise-Service|Weltweite Akzeptanz",
    disadvantages: "Mindestjahresumsatz für Cashback|Wechselkursaufschläge möglich",
    priceNote: "Konditionen abhängig vom Tarif.",
    rating: 4.0,
    logoUrl: "",
    buttonText: "Karte vergleichen",
    status: "active",
    isFeatured: false,
  },

  // === Kredite ===
  {
    name: "Geschäftskredit Anbieter A",
    slug: "geschaeftskredit-anbieter-a",
    categorySlug: "finanzierung-kredite",
    network: "financeAds",
    affiliateLink: demo("geschaeftskredit-anbieter-a"),
    trackingId: "",
    commissionType: "Lead",
    estimatedCommission: "Provision pro vermitteltem Kredit",
    shortDescription:
      "Vergleichsportal für Geschäftskredite mit schneller Online-Anfrage.",
    longDescription:
      "Plattform zum Vergleich von Geschäfts- und Investitionskrediten. Selbstständige können Konditionen anfragen und unverbindlich Angebote prüfen. Hinweis: keine Finanz- oder Anlageberatung.",
    advantages: "Mehrere Banken im Vergleich|Online-Anfrage|Schnelle Vorab-Einschätzung",
    disadvantages: "Schufa-Abfrage möglich|Konditionen bonitätsabhängig",
    priceNote: "Konditionen abhängig von Bonität und Laufzeit.",
    rating: 4.1,
    logoUrl: "",
    buttonText: "Kredit anfragen",
    status: "active",
    isFeatured: false,
  },

  // === Versicherungen ===
  {
    name: "Versicherungsvergleich Anbieter A",
    slug: "versicherungsvergleich-anbieter-a",
    categorySlug: "versicherungen",
    network: "Tarifcheck",
    affiliateLink: demo("versicherungsvergleich-anbieter-a"),
    trackingId: "",
    commissionType: "Lead",
    estimatedCommission: "abhängig von Versicherungsart",
    shortDescription:
      "Vergleichsrechner für Berufshaftpflicht, Rechtsschutz und Krankenversicherung für Selbstständige.",
    longDescription:
      "Umfassendes Vergleichsportal für die wichtigsten Versicherungen von Selbstständigen. Hinweis: keine Versicherungsberatung im Sinne des VVG – bitte vor Abschluss individuell prüfen lassen.",
    advantages: "Mehrere Versicherer auf einen Blick|Schnelle Online-Rechner|Kostenlos",
    disadvantages: "Konditionen nicht für jeden Beruf gleich|Detailfragen nur mit Makler klärbar",
    priceNote: "Tarife abhängig vom Berufsfeld und persönlichen Angaben.",
    rating: 4.3,
    logoUrl: "",
    buttonText: "Versicherung vergleichen",
    status: "active",
    isFeatured: true,
  },
  {
    name: "Private Krankenversicherung Vergleich A",
    slug: "pkv-vergleich-a",
    categorySlug: "versicherungen",
    network: "CHECK24",
    affiliateLink: demo("pkv-vergleich-a"),
    trackingId: "",
    commissionType: "Lead",
    estimatedCommission: "ca. 100–250 € pro qualifiziertem Lead",
    shortDescription:
      "Vergleichsrechner für die Private Krankenversicherung (PKV) für Selbstständige.",
    longDescription:
      "PKV-Vergleichsrechner mit Möglichkeit, persönliche Tarif­empfehlungen anzufordern. Hinweis: Wechsel in die PKV ist eine langfristige Entscheidung – bitte unabhängige Beratung in Anspruch nehmen.",
    advantages: "Mehrere Anbieter auf einen Blick|Tarif-Empfehlung möglich|Kostenlos",
    disadvantages: "Kein Ersatz für individuelle Beratung|Spätere Rückkehr in GKV schwierig",
    priceNote: "Beitrag abhängig von Alter, Gesundheit und Tarif.",
    rating: 4.0,
    logoUrl: "",
    buttonText: "PKV-Tarife vergleichen",
    status: "active",
    isFeatured: false,
  },
  {
    name: "Kfz-Versicherungsvergleich A",
    slug: "kfz-versicherung-a",
    categorySlug: "versicherungen",
    network: "CHECK24",
    affiliateLink: demo("kfz-versicherung-a"),
    trackingId: "",
    commissionType: "Lead",
    estimatedCommission: "ca. 20–70 € pro Abschluss",
    shortDescription:
      "Kfz-Versicherungsvergleich für private und gewerbliche Fahrzeuge.",
    longDescription:
      "Kostenloser Kfz-Versicherungs­vergleich mit individueller Tarif-Empfehlung. Geeignet für Selbstständige mit Firmenwagen.",
    advantages: "Schneller Vergleich|Viele Versicherer|Online-Abschluss möglich",
    disadvantages: "Tarife jährlich variieren|Schadensfälle beeinflussen Konditionen",
    priceNote: "Beitrag abhängig von Region, Fahrzeug, Fahrleistung.",
    rating: 4.2,
    logoUrl: "",
    buttonText: "Kfz vergleichen",
    status: "active",
    isFeatured: false,
  },

  // === Buchhaltungssoftware ===
  {
    name: "Buchhaltungssoftware A",
    slug: "buchhaltungssoftware-a",
    categorySlug: "buchhaltung-steuern",
    network: "PartnerStack",
    affiliateLink: demo("buchhaltungssoftware-a"),
    trackingId: "",
    commissionType: "Recurring",
    estimatedCommission: "20–30 % wiederkehrend",
    shortDescription:
      "Cloud-Buchhaltung für Selbstständige mit ELSTER-Anbindung, Rechnungen und automatischer Belegerkennung.",
    longDescription:
      "Online-Buchhaltungs­software für Selbstständige, Freelancer und kleine Unternehmen. Bietet Rechnungs­stellung, GoBD-konforme Belegverwaltung, USt-Voranmeldung via ELSTER und Steuerberater-Schnittstelle.",
    advantages: "ELSTER-Anbindung|Beleg-Scan per App|Steuerberater-Export|GoBD-konform",
    disadvantages: "Monatliche Kosten|Einarbeitung notwendig",
    priceNote: "Ab ca. 10–30 € pro Monat je nach Tarif.",
    rating: 4.5,
    logoUrl: "",
    buttonText: "Kostenlos testen",
    status: "active",
    isFeatured: true,
  },
  {
    name: "Buchhaltungssoftware B",
    slug: "buchhaltungssoftware-b",
    categorySlug: "buchhaltung-steuern",
    network: "PartnerStack",
    affiliateLink: demo("buchhaltungssoftware-b"),
    trackingId: "",
    commissionType: "Recurring",
    estimatedCommission: "ca. 25 % wiederkehrend",
    shortDescription:
      "Rechnungsprogramm mit einfacher Bedienung für Solo-Selbstständige.",
    longDescription:
      "Schlankes Rechnungs- und Buchhaltungs-Tool für Solo-Selbstständige. Fokus auf einfache Bedienung, schnelle Rechnungs­stellung und EÜR-Vorbereitung.",
    advantages: "Einfache Bedienung|Schnelle Rechnungs­erstellung|EÜR-Vorbereitung|Mobile App",
    disadvantages: "Weniger Funktionen für GmbH|Keine Lohnbuchhaltung",
    priceNote: "Monatlich kündbar, günstiger Einstiegstarif.",
    rating: 4.3,
    logoUrl: "",
    buttonText: "Tarife ansehen",
    status: "active",
    isFeatured: false,
  },

  // === Steuer-Tools ===
  {
    name: "Steuer-Tool A",
    slug: "steuer-tool-a",
    categorySlug: "buchhaltung-steuern",
    network: "Awin",
    affiliateLink: demo("steuer-tool-a"),
    trackingId: "",
    commissionType: "Sale",
    estimatedCommission: "ca. 20 % vom Verkaufspreis",
    shortDescription:
      "Steuersoftware mit Schritt-für-Schritt-Anleitung und ELSTER-Übermittlung.",
    longDescription:
      "Steuersoftware für Selbstständige und Angestellte. Führt durch die Steuererklärung, prüft auf Sparpotenzial und übermittelt direkt an ELSTER.",
    advantages: "Sparpotenzial-Prüfung|ELSTER-Anbindung|Vorausgefüllte Steuererklärung möglich",
    disadvantages: "Jährlicher Kauf nötig|Kein Ersatz für Steuerberater bei komplexen Fällen",
    priceNote: "Jahreslizenz, einmalig pro Steuerjahr.",
    rating: 4.4,
    logoUrl: "",
    buttonText: "Steuer-Tool sichern",
    status: "active",
    isFeatured: false,
  },

  // === Shopify / E-Commerce ===
  {
    name: "Shopify-Tool A",
    slug: "shopify-tool-a",
    categorySlug: "shopify-e-commerce",
    network: "Shopify",
    affiliateLink: demo("shopify-tool-a"),
    trackingId: "",
    commissionType: "Recurring",
    estimatedCommission: "20 % wiederkehrend",
    shortDescription:
      "Conversion-Tool für Shopify-Stores mit Heatmaps, Pop-ups und A/B-Tests.",
    longDescription:
      "App für Shopify-Stores mit Funktionen für Conversion-Optimierung: Heatmaps, Pop-ups, Exit-Intent, A/B-Tests und Empfehlungslogik.",
    advantages: "Einfach zu installieren|Wiederkehrende Provision|Native Shopify-App",
    disadvantages: "Monatliche Kosten|Performance bei vielen Apps prüfen",
    priceNote: "Monatlich, je nach Store-Größe.",
    rating: 4.2,
    logoUrl: "",
    buttonText: "App ansehen",
    status: "active",
    isFeatured: true,
  },
  {
    name: "Shopify",
    slug: "shopify",
    categorySlug: "shopify-e-commerce",
    network: "Shopify",
    affiliateLink: demo("shopify"),
    trackingId: "",
    commissionType: "Recurring",
    estimatedCommission: "Anteil am Plan",
    shortDescription:
      "Marktführende E-Commerce-Plattform für Onlineshops jeder Größe.",
    longDescription:
      "Shopify ist eine der bekanntesten E-Commerce-Plattformen weltweit. Bietet Hosting, Themes, App-Store und Zahlungs­abwicklung. Geeignet von Solo-Unternehmer bis Mittelstand.",
    advantages: "Großer App-Store|Skalierbar|Sicher gehostet|Viele Zahlungs­optionen",
    disadvantages: "Monatliche Kosten|Transaktions­gebühren ohne Shopify Payments|Themes teilweise kostenpflichtig",
    priceNote: "Ab ca. 29 USD / Monat je nach Plan.",
    rating: 4.6,
    logoUrl: "",
    buttonText: "Shopify testen",
    status: "active",
    isFeatured: true,
  },

  // === Website-Builder ===
  {
    name: "Website-Builder A",
    slug: "website-builder-a",
    categorySlug: "website-hosting-domains",
    network: "Awin",
    affiliateLink: demo("website-builder-a"),
    trackingId: "",
    commissionType: "Sale",
    estimatedCommission: "ca. 30–60 € pro Abschluss",
    shortDescription:
      "Homepage-Baukasten mit Drag-and-Drop, Templates und SEO-Hilfen.",
    longDescription:
      "Homepage-Baukasten mit modernen Templates, Drag-and-Drop-Editor und integriertem Hosting. Geeignet für Selbstständige und kleine Unternehmen.",
    advantages: "Drag-and-Drop|Viele Templates|Inkl. Hosting|SEO-Funktionen",
    disadvantages: "Eingeschränkte Code-Anpassung|Vendor-Lock-In",
    priceNote: "Tarife monatlich, oft Rabatt im ersten Jahr.",
    rating: 4.1,
    logoUrl: "",
    buttonText: "Website starten",
    status: "active",
    isFeatured: false,
  },

  // === Hosting ===
  {
    name: "Hosting Anbieter A",
    slug: "hosting-anbieter-a",
    categorySlug: "website-hosting-domains",
    network: "Awin",
    affiliateLink: demo("hosting-anbieter-a"),
    trackingId: "",
    commissionType: "Sale",
    estimatedCommission: "ca. 40 € pro Abschluss",
    shortDescription:
      "Webhosting mit SSD-Speicher, kostenloser Domain im ersten Jahr und einfacher WordPress-Installation.",
    longDescription:
      "Webhosting-Anbieter mit Fokus auf Selbstständige und kleine Unternehmen. Bietet SSD-Speicher, WordPress-1-Klick-Installation, kostenloses SSL und E-Mail-Postfächer.",
    advantages: "Schnelle Server|1-Klick-WordPress|Kostenloses SSL|Deutscher Support",
    disadvantages: "Erneuerungspreis höher|Backups oft kostenpflichtig",
    priceNote: "Ab ca. 3–10 € / Monat, je nach Tarif.",
    rating: 4.3,
    logoUrl: "",
    buttonText: "Hosting wählen",
    status: "active",
    isFeatured: true,
  },

  // === CRM ===
  {
    name: "CRM Tool A",
    slug: "crm-tool-a",
    categorySlug: "business-tools",
    network: "HubSpot",
    affiliateLink: demo("crm-tool-a"),
    trackingId: "",
    commissionType: "Recurring",
    estimatedCommission: "15–30 % wiederkehrend",
    shortDescription:
      "CRM-System mit kostenlosem Einstiegsplan, Kontaktverwaltung und Vertriebs-Pipeline.",
    longDescription:
      "CRM-System mit umfangreichem kostenlosem Einstiegs­paket. Enthält Kontakt­verwaltung, Pipeline-Management, einfache Marketing-Automation und Reporting. Gut für Solo-Selbstständige bis kleine Vertriebsteams.",
    advantages: "Großzügiger Free-Plan|Pipeline-Management|Marketing-Module verfügbar|Skalierbar",
    disadvantages: "Premium-Features schnell teuer|Komplex bei großen Teams",
    priceNote: "Free-Plan, Premium-Module kostenpflichtig.",
    rating: 4.4,
    logoUrl: "",
    buttonText: "Kostenlos starten",
    status: "active",
    isFeatured: true,
  },

  // === E-Mail-Marketing ===
  {
    name: "E-Mail-Marketing Tool A",
    slug: "e-mail-marketing-tool-a",
    categorySlug: "marketing-kundengewinnung",
    network: "PartnerStack",
    affiliateLink: demo("e-mail-marketing-tool-a"),
    trackingId: "",
    commissionType: "Recurring",
    estimatedCommission: "20 % wiederkehrend",
    shortDescription:
      "Newsletter-Tool mit Automatisierungen, DSGVO-konformem Hosting und Anmeldeformularen.",
    longDescription:
      "Newsletter-Software mit Drag-and-Drop-Editor, Automatisierungen, DOI-konformer Anmeldung und Auswertungen. Geeignet für Selbstständige, Coaches und kleine Online-Shops.",
    advantages: "DOI-Anmeldung|Drag-and-Drop|Automatisierungen|DSGVO-konform",
    disadvantages: "Größere Listen kostenpflichtig|Tiefere Automationen brauchen Einarbeitung",
    priceNote: "Free-Plan bis zu einer bestimmten Listengröße, danach skalierend.",
    rating: 4.3,
    logoUrl: "",
    buttonText: "Newsletter starten",
    status: "active",
    isFeatured: false,
  },

  // === Homeoffice / Büro ===
  {
    name: "Scanner Anbieter A",
    slug: "scanner-anbieter-a",
    categorySlug: "homeoffice-buero",
    network: "Awin",
    affiliateLink: demo("scanner-anbieter-a"),
    trackingId: "",
    commissionType: "Sale",
    estimatedCommission: "ca. 3–6 % vom Verkaufspreis",
    shortDescription:
      "Dokumentenscanner für GoBD-konforme Belegarchivierung im Homeoffice.",
    longDescription:
      "Kompakter Dokumentenscanner mit automatischem Einzug, beidseitigem Scannen und OCR-Software. Geeignet für Selbstständige zur Belegarchivierung.",
    advantages: "Schnelles Scannen|Doppelseitig|OCR-Software|Kompakt",
    disadvantages: "Anschaffungspreis|Software-Lizenzen teils zusätzlich",
    priceNote: "Einmalige Anschaffung.",
    rating: 4.4,
    logoUrl: "",
    buttonText: "Scanner ansehen",
    status: "active",
    isFeatured: false,
  },
  {
    name: "Headset Anbieter A",
    slug: "headset-anbieter-a",
    categorySlug: "homeoffice-buero",
    network: "Awin",
    affiliateLink: demo("headset-anbieter-a"),
    trackingId: "",
    commissionType: "Sale",
    estimatedCommission: "ca. 3–5 %",
    shortDescription:
      "Headset für Online-Meetings mit Geräusch­unterdrückung und langer Akku­laufzeit.",
    longDescription:
      "Headset speziell für Online-Meetings und Dolmetscher­einsätze. Bietet aktive Geräusch­unterdrückung, hohe Sprachqualität und lange Akkulaufzeit.",
    advantages: "Klare Sprache|ANC|Langer Akku|Komfortabel",
    disadvantages: "Premium-Preis|Software-Updates nur über Hersteller",
    priceNote: "Einmalige Anschaffung.",
    rating: 4.5,
    logoUrl: "",
    buttonText: "Headset vergleichen",
    status: "active",
    isFeatured: false,
  },

  // === Tools für Selbstständige ===
  {
    name: "Projektmanagement-Tool A",
    slug: "projektmanagement-tool-a",
    categorySlug: "business-tools",
    network: "PartnerStack",
    affiliateLink: demo("projektmanagement-tool-a"),
    trackingId: "",
    commissionType: "Recurring",
    estimatedCommission: "20 % wiederkehrend",
    shortDescription:
      "Projektmanagement-Tool mit Boards, Aufgaben, Automationen und Team-Funktionen.",
    longDescription:
      "Flexibles Projektmanagement-Tool mit Kanban-Boards, Aufgaben, Automationen und Vorlagen. Skaliert von Solo-Selbstständigen bis zu Teams.",
    advantages: "Flexible Boards|Automationen|Mobile App|Vorlagen",
    disadvantages: "Premium-Funktionen kostenpflichtig|Bei großer Teamgröße komplex",
    priceNote: "Free-Plan vorhanden, Pro-Tarife monatlich.",
    rating: 4.5,
    logoUrl: "",
    buttonText: "PM-Tool testen",
    status: "active",
    isFeatured: true,
  },
  {
    name: "Terminbuchungs-Tool A",
    slug: "terminbuchungs-tool-a",
    categorySlug: "business-tools",
    network: "PartnerStack",
    affiliateLink: demo("terminbuchungs-tool-a"),
    trackingId: "",
    commissionType: "Recurring",
    estimatedCommission: "20 % wiederkehrend",
    shortDescription:
      "Online-Terminbuchung mit Kalender-Integration für Coaches, Berater und Dienstleister.",
    longDescription:
      "Tool für Online-Terminbuchung mit Kalender-Integration, Erinnerungen und Zahlungs­anbindung. Praktisch für Coaches, Berater, Dolmetscher.",
    advantages: "Kalender-Integration|Erinnerungen|Zahlungs­anbindung|Mehrsprachig",
    disadvantages: "Premium-Funktionen kostenpflichtig|Free-Plan limitiert",
    priceNote: "Free-Plan vorhanden, Pro-Tarife monatlich.",
    rating: 4.4,
    logoUrl: "",
    buttonText: "Tool ansehen",
    status: "active",
    isFeatured: false,
  },
  {
    name: "Zahlungsanbieter A",
    slug: "zahlungsanbieter-a",
    categorySlug: "business-tools",
    network: "Direkt",
    affiliateLink: demo("zahlungsanbieter-a"),
    trackingId: "",
    commissionType: "Sale",
    estimatedCommission: "abhängig vom Programm",
    shortDescription:
      "Online-Zahlungsanbieter mit Karten­zahlung, SEPA und Rechnungs-Links.",
    longDescription:
      "Zahlungs­dienstleister für Online-Geschäfte, Coaches und Freelancer. Bietet Karten­zahlung, SEPA, Rechnungs­links und Integration in Onlineshops.",
    advantages: "Schnelle Einrichtung|Karten­zahlung|SEPA|Rechnungs-Links",
    disadvantages: "Transaktionsgebühren|Auszahlungs­fristen prüfen",
    priceNote: "Transaktions­gebühr pro Zahlung.",
    rating: 4.3,
    logoUrl: "",
    buttonText: "Zahlungs­anbieter ansehen",
    status: "active",
    isFeatured: false,
  },
  {
    name: "KI-Tool A für Selbstständige",
    slug: "ki-tool-a",
    categorySlug: "business-tools",
    network: "PartnerStack",
    affiliateLink: demo("ki-tool-a"),
    trackingId: "",
    commissionType: "Recurring",
    estimatedCommission: "20–30 % wiederkehrend",
    shortDescription:
      "KI-Assistent für Texte, E-Mails und Marketing-Inhalte.",
    longDescription:
      "KI-Tool zur Unterstützung bei Texten, E-Mails, Social-Media-Posts und Recherche. Hilft Selbstständigen, Routine­arbeiten schneller zu erledigen.",
    advantages: "Spart Zeit|Viele Vorlagen|API-Anbindung|Mehrsprachig",
    disadvantages: "Inhalte immer prüfen|Datenschutz bei sensiblen Inhalten beachten",
    priceNote: "Free-Plan + Premium-Tarife.",
    rating: 4.3,
    logoUrl: "",
    buttonText: "KI-Tool testen",
    status: "active",
    isFeatured: false,
  },
  {
    name: "Dokumentenmanagement A",
    slug: "dokumentenmanagement-a",
    categorySlug: "business-tools",
    network: "PartnerStack",
    affiliateLink: demo("dokumentenmanagement-a"),
    trackingId: "",
    commissionType: "Recurring",
    estimatedCommission: "ca. 20 % wiederkehrend",
    shortDescription:
      "GoBD-konformes Dokumentenmanagement-System mit OCR und Volltextsuche.",
    longDescription:
      "Dokumentenmanagement-System mit OCR, Volltextsuche, Versionierung und Cloud-Backup. Geeignet für Selbstständige, die Belege langfristig archivieren.",
    advantages: "OCR|Volltextsuche|Versionierung|Cloud-Backup",
    disadvantages: "Monatliche Kosten|Einarbeitung notwendig",
    priceNote: "Monatliche Tarife, abhängig vom Volumen.",
    rating: 4.2,
    logoUrl: "",
    buttonText: "DMS ansehen",
    status: "active",
    isFeatured: false,
  },

  // === Dolmetscher / Übersetzer ===
  {
    name: "CAT-Tool Anbieter A",
    slug: "cat-tool-anbieter-a",
    categorySlug: "dolmetscher-uebersetzer-tools",
    network: "Direkt",
    affiliateLink: demo("cat-tool-anbieter-a"),
    trackingId: "",
    commissionType: "Sale",
    estimatedCommission: "abhängig vom Programm",
    shortDescription:
      "Computer-Aided-Translation-Tool mit Translation Memory, Terminologie und QA-Funktionen.",
    longDescription:
      "CAT-Tool für professionelle Übersetzer mit Translation Memory, Terminologie­verwaltung und QA-Funktionen. Geeignet für Selbstständige im Übersetzungsbereich.",
    advantages: "Translation Memory|Terminologie|QA-Funktionen|Viele Dateiformate",
    disadvantages: "Lernkurve|Einmal- oder Abo-Kosten",
    priceNote: "Lizenzmodell oder Abo, je nach Anbieter.",
    rating: 4.4,
    logoUrl: "",
    buttonText: "CAT-Tool ansehen",
    status: "active",
    isFeatured: true,
  },
  {
    name: "Dolmetscher-Plattform A",
    slug: "dolmetscher-plattform-a",
    categorySlug: "dolmetscher-uebersetzer-tools",
    network: "Direkt",
    affiliateLink: demo("dolmetscher-plattform-a"),
    trackingId: "",
    commissionType: "Lead",
    estimatedCommission: "abhängig vom Programm",
    shortDescription:
      "Plattform für Remote-Dolmetschen mit Buchungsverwaltung und Video­konferenz-Anbindung.",
    longDescription:
      "Plattform für Remote-Dolmetschen mit Buchungs­verwaltung, Video­konferenz-Anbindung und Abrechnungs­funktion. Geeignet für freiberufliche Dolmetscher.",
    advantages: "Buchungs­verwaltung|Video­konferenz|Abrechnungs­funktion",
    disadvantages: "Provision je Auftrag|Verfügbarkeit der Plattform prüfen",
    priceNote: "Provision je Auftrag oder Abo.",
    rating: 4.1,
    logoUrl: "",
    buttonText: "Plattform ansehen",
    status: "active",
    isFeatured: false,
  },
];
