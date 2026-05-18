type FaqItem = { q: string; a: string };

type SeedComparison = {
  title: string;
  slug: string;
  categorySlug: string;
  seoTitle: string;
  metaDescription: string;
  intro: string;
  content: string;
  faq: FaqItem[];
  offerSlugs: string;
};

export const COMPARISONS: SeedComparison[] = [
  {
    title: "Beste Geschäftskonten für Selbstständige",
    slug: "beste-geschaeftskonten-fuer-selbststaendige",
    categorySlug: "geschaeftskonten",
    seoTitle: "Beste Geschäftskonten für Selbstständige im Vergleich",
    metaDescription:
      "Vergleiche Geschäftskonten für Selbstständige und Freelancer: Kontoführungsgebühren, Karten, Buchhaltungs-Anbindung und Online-Eröffnung.",
    intro:
      "Ein eigenes Geschäftskonto trennt Privates von Geschäftlichem und ist Pflicht für Kapitalgesellschaften – für Solo-Selbstständige zumindest dringend empfohlen. In diesem Vergleich findest du Geschäftskonten mit kostenloser Kontoführung, schneller Online-Eröffnung und Anbindung an deine Buchhaltung.",
    content:
      "## Worauf solltest du achten?\n\n- **Kontoführungsgebühr**: Viele Online-Anbieter sind im Basis-Tarif kostenlos.\n- **Karten**: Inklusive Debit- oder Mastercard – manche Anbieter berechnen Extra-Kosten.\n- **Buchhaltungs-Anbindung**: Direkte Schnittstelle zu deiner Buchhaltungs­software spart Stunden.\n- **Bareinzahlungen**: Wer Bargeld einzahlen muss, sollte auf passende Bargeldservices achten.\n- **Service**: Online-Banken bieten meist nur digitalen Support. Klassische Banken haben Filialen.\n\n## Für wen lohnt sich welcher Anbieter?\n\nReine Online-Selbstständige fahren mit digitalen Geschäftskonten meist günstiger. Wer regelmäßig Bargeld einzahlt oder einen festen Ansprechpartner wünscht, sollte einen klassischen Anbieter mit Filialnetz prüfen. Achte zusätzlich auf Limits für Überweisungen und das Postversand-Tempo neuer Karten.\n\n## Hinweis\n\nDieser Vergleich ist keine Bankberatung. Prüfe vor Eröffnung die aktuellen Konditionen direkt beim Anbieter und gleiche sie mit deinem persönlichen Bedarf ab.",
    faq: [
      {
        q: "Brauche ich als Solo-Selbstständiger ein Geschäftskonto?",
        a: "Rechtlich ist es für Einzelunternehmer in Deutschland nicht zwingend Pflicht. Steuerlich und organisatorisch ist die Trennung von privatem und geschäftlichem Zahlungs­verkehr aber sehr empfehlenswert.",
      },
      {
        q: "Was kostet ein Geschäftskonto?",
        a: "Basis-Tarife reiner Online-Anbieter sind häufig kostenlos. Premium-Tarife mit mehr Karten, Bargeldservices oder Versicherungen kosten zwischen 10 und 30 € im Monat.",
      },
      {
        q: "Kann ich später wechseln?",
        a: "Ja, ein Wechsel ist jederzeit möglich. Plane jedoch genug Zeit für die Umstellung von Dauer­aufträgen, Lastschriften und Rechnungsvorlagen ein.",
      },
      {
        q: "Was ist mit der GmbH?",
        a: "Für eine GmbH oder UG ist ein Geschäftskonto auf den Firmennamen zwingend erforderlich.",
      },
    ],
    offerSlugs: "geschaeftskonto-anbieter-a,geschaeftskonto-anbieter-b,geschaeftskonto-anbieter-c",
  },
  {
    title: "Beste Kreditkarten für Selbstständige",
    slug: "beste-kreditkarten-fuer-selbststaendige",
    categorySlug: "kreditkarten",
    seoTitle: "Beste Kreditkarten für Selbstständige im Vergleich",
    metaDescription:
      "Business-Kreditkarten mit Spesenmanagement, Bonus­programmen und Versicherungen – passend für Selbstständige und Freelancer.",
    intro:
      "Eine Business-Kreditkarte hilft beim Spesenmanagement, bietet Versicherungs­leistungen und ist oft die sauberste Lösung, um Ausgaben aus dem Privatkonto fernzuhalten. Hier vergleichen wir Karten für Selbstständige und Freelancer.",
    content:
      "## Worauf achten?\n\n- **Jahresgebühr**: Manche Karten sind im ersten Jahr kostenfrei.\n- **Versicherungspaket**: Reise- und Mietwagen­versicherungen sind ein häufiger Mehrwert.\n- **Spesenmanagement**: Digitale Beleg­zuordnung spart Buchhaltungs­zeit.\n- **Akzeptanz**: Mastercard und Visa sind weltweit am verbreitetsten.\n- **Cashback**: Bonus­programme rechnen sich erst ab gewissen Umsätzen.",
    faq: [
      { q: "Brauche ich eine Business-Kreditkarte?", a: "Nicht zwingend – aber für Online-Käufe, Auslands­zahlungen und Spesenmanagement ist sie oft die einfachste Lösung." },
      { q: "Was kostet eine Business-Kreditkarte?", a: "Zwischen 0 € (oft im ersten Jahr) und 100–200 € Jahresgebühr für Premium-Karten." },
      { q: "Welche Versicherungen sind sinnvoll?", a: "Reise­krankenversicherung und Mietwagen­versicherung können nützlich sein, ersetzen aber keine eigenständige Police." },
    ],
    offerSlugs: "kreditkarte-anbieter-a,kreditkarte-anbieter-b",
  },
  {
    title: "Beste Buchhaltungssoftware",
    slug: "beste-buchhaltungssoftware",
    categorySlug: "buchhaltungssoftware",
    seoTitle: "Beste Buchhaltungssoftware für Selbstständige 2026",
    metaDescription:
      "Online-Buchhaltung im Vergleich: ELSTER-Anbindung, Belegerfassung, Rechnungen und Steuerberater-Schnittstelle.",
    intro:
      "Buchhaltungssoftware spart Selbstständigen jede Woche Zeit: Rechnungen schreiben, Belege erfassen, USt-Voranmeldung übermitteln und am Jahresende die EÜR sauber abschließen. Wir vergleichen Cloud-Buchhaltungs­tools, die zu Solo-Selbstständigen und kleinen Teams passen.",
    content:
      "## Was eine gute Buchhaltung können sollte\n\n- **GoBD-Konformität**: Pflicht für die Aufbewahrung von Belegen.\n- **ELSTER-Übermittlung**: USt-Voranmeldung direkt aus der Software.\n- **Belegerkennung**: Beleg fotografieren, Software schlägt Kategorisierung vor.\n- **Schnittstelle zum Steuerberater**: Datev-, BWA- oder GoBD-Export.\n- **Bankanbindung**: Automatischer Abgleich mit dem Geschäfts­konto.\n\n## Hinweis\n\nFür komplexere Fälle (GmbH, Lohnbuchhaltung, internationale Geschäfte) ist die Zusammenarbeit mit einem Steuerberater dringend zu empfehlen. Buchhaltungs­software ersetzt keine Steuerberatung.",
    faq: [
      { q: "Brauche ich Buchhaltungs­software als EÜR-Rechner?", a: "Nicht zwingend, aber sie spart enorm Zeit, vermeidet Fehler und macht die Zusammenarbeit mit dem Steuerberater leichter." },
      { q: "Was kostet Buchhaltungs­software?", a: "Solo-Tarife starten oft bei 10–15 € pro Monat. Tarife mit Bankanbindung und mehr Belegen kosten 20–40 €." },
      { q: "Was ist GoBD?", a: "Die Grundsätze zur ordnungsmäßigen Führung und Aufbewahrung von Büchern. Buchhaltungs­software sollte GoBD-konform arbeiten." },
    ],
    offerSlugs: "buchhaltungssoftware-a,buchhaltungssoftware-b",
  },
  {
    title: "Beste Rechnungsprogramme",
    slug: "beste-rechnungsprogramme",
    categorySlug: "buchhaltungssoftware",
    seoTitle: "Beste Rechnungsprogramme für Selbstständige",
    metaDescription:
      "Rechnungs­programme im Vergleich: Vorlagen, Kunden­verwaltung, Mahnwesen, EÜR-Vorbereitung und mobile App.",
    intro:
      "Rechnungs­programme sind die schlanke Variante einer Buchhaltungs­software: Sie helfen dir, schnell professionelle Rechnungen zu erstellen, Kunden zu verwalten und ein einfaches Mahnwesen zu führen.",
    content:
      "## Vorteile gegenüber Word-Vorlagen\n\n- **Konsistente Nummerierung**: Automatisch fortlaufend.\n- **Kundenstamm**: Adressen werden gespeichert.\n- **Mahnwesen**: Erinnerungen und Mahnungen mit wenigen Klicks.\n- **EÜR-Vorbereitung**: Umsätze und Belege werden automatisch erfasst.\n- **Mobile App**: Rechnungen unterwegs schreiben.",
    faq: [
      { q: "Was muss auf einer Rechnung stehen?", a: "Pflichtangaben sind u. a. vollständige Adresse, Steuernummer/USt-ID, Rechnungs­datum, Leistung, Nettobetrag, USt-Satz und -Betrag sowie Rechnungs­nummer. Details siehe § 14 UStG." },
      { q: "Brauche ich GoBD-Konformität?", a: "Ja. Rechnungen müssen über 10 Jahre revisions­sicher aufbewahrt werden." },
      { q: "Reicht ein Rechnungs­programm aus?", a: "Wenn du wenig Aufwand hast, ja. Für mehr Belege, Bankabgleich und USt-Voranmeldung empfehlen sich vollwertige Buchhaltungs­tools." },
    ],
    offerSlugs: "buchhaltungssoftware-a,buchhaltungssoftware-b",
  },
  {
    title: "Beste Steuer-Tools für Selbstständige",
    slug: "beste-steuer-tools-fuer-selbststaendige",
    categorySlug: "steuer-tools",
    seoTitle: "Beste Steuer-Tools für Selbstständige im Vergleich",
    metaDescription:
      "Steuer-Software für Selbstständige: ELSTER-Anbindung, Schritt-für-Schritt-Anleitung und Tipps zum Steuern sparen.",
    intro:
      "Steuer-Tools helfen Selbstständigen, ihre Einkommen­steuer­erklärung Schritt für Schritt zu erstellen und direkt an ELSTER zu übermitteln. Sie ersetzen keinen Steuerberater bei komplexen Fällen, sind aber für viele Solo-Selbstständige ausreichend.",
    content:
      "## Wann reicht ein Steuer-Tool aus?\n\n- Du bist Solo-Selbstständig mit überschaubaren Einnahmen und Ausgaben.\n- Du hast keine internationale Tätigkeit.\n- Du musst keine Lohnsteuer-Abrechnungen vornehmen.\n\n## Wann lieber Steuerberater?\n\n- Du hast eine GmbH, UG oder mehrere Beteiligungen.\n- Du arbeitest international oder mit komplexen Verträgen.\n- Du beschäftigst Personal.\n\n## Hinweis\n\nDie Inhalte sind keine Steuerberatung. Bitte im Zweifel einen Steuerberater hinzuziehen.",
    faq: [
      { q: "Was kostet ein Steuer-Tool?", a: "In der Regel 30–60 € pro Steuerjahr." },
      { q: "Kann ich damit auch die USt-Voranmeldung machen?", a: "Viele Tools bieten das an. Alternativ direkt aus deiner Buchhaltungs­software." },
      { q: "Ersetzt es einen Steuerberater?", a: "Nein. Für komplexe Fälle ist ein Steuerberater die richtige Wahl." },
    ],
    offerSlugs: "steuer-tool-a",
  },
  {
    title: "Beste Shopify-Tools",
    slug: "beste-shopify-tools",
    categorySlug: "shopify-tools",
    seoTitle: "Beste Shopify-Apps und Tools im Vergleich",
    metaDescription:
      "Shopify-Apps für Conversion, Marketing und Logistik – Tools, die deinen Onlineshop messbar verbessern.",
    intro:
      "Shopify-Apps können den Umsatz deines Onlineshops messbar erhöhen – wenn du die richtigen wählst. Wir zeigen Tools für Conversion-Optimierung, E-Mail-Marketing, Bewertungen und Logistik.",
    content:
      "## Welche Shopify-Apps lohnen sich?\n\n- **Conversion-Tools**: Pop-ups, Exit-Intent, Empfehlungen.\n- **Bewertungs-Apps**: User-Generated Content.\n- **E-Mail- und SMS-Marketing**: Wiederkehrende Käufer aktivieren.\n- **Versand- und Steuer-Apps**: Automatisierung bei internationalem Versand.\n\n## Vorsicht\n\nZu viele Apps können die Performance deines Shops verlangsamen. Teste regelmäßig deine Ladezeit.",
    faq: [
      { q: "Wie viele Apps sind sinnvoll?", a: "So wenige wie möglich, aber so viele wie nötig. Performance und Wartung zählen." },
      { q: "Wie teste ich Apps?", a: "Die meisten Apps haben kostenlose Testphasen. Lege KPIs vor dem Test fest." },
    ],
    offerSlugs: "shopify-tool-a,shopify",
  },
  {
    title: "Beste Website-Builder",
    slug: "beste-website-builder",
    categorySlug: "website-builder",
    seoTitle: "Beste Website-Builder im Vergleich",
    metaDescription:
      "Homepage-Baukästen im Vergleich – Templates, SEO, Domains und Preise für Selbstständige.",
    intro:
      "Mit modernen Homepage-Baukästen erstellst du in wenigen Stunden eine professionelle Website – ohne Programmier­kenntnisse. Wir zeigen, welche Tools für Selbstständige besonders gut geeignet sind.",
    content:
      "## Worauf achten?\n\n- **Templates**: Modern und mobil-optimiert?\n- **SEO-Funktionen**: Meta-Tags, Sitemap, Geschwindigkeit.\n- **Domains und E-Mail**: Inklusive oder separat?\n- **Exportierbarkeit**: Wie schwer ist ein Wechsel?\n\n## Hinweis\n\nHomepage-Baukästen sind ein Vendor-Lock-In. Ein Wechsel ist oft aufwendig.",
    faq: [
      { q: "Was kostet ein Website-Builder?", a: "Ab ca. 10 € pro Monat inkl. Hosting und Domain." },
      { q: "WordPress oder Website-Builder?", a: "WordPress bietet mehr Flexibilität, Builder mehr Geschwindigkeit. Hängt von deinen Anforderungen ab." },
    ],
    offerSlugs: "website-builder-a",
  },
  {
    title: "Beste Hosting-Anbieter",
    slug: "beste-hosting-anbieter",
    categorySlug: "hosting-und-domains",
    seoTitle: "Beste Hosting-Anbieter im Vergleich",
    metaDescription:
      "Webhosting im Vergleich – SSD-Speicher, WordPress-Installation, kostenlose SSL und Support.",
    intro:
      "Ein guter Hosting-Anbieter sorgt für schnelle Ladezeiten, sicheres SSL und einfache WordPress-Installation. Hier findest du Hosting-Tarife für Selbstständige und kleine Unternehmen.",
    content:
      "## Worauf achten?\n\n- **Geschwindigkeit**: SSD und gutes Caching.\n- **SSL inklusive**: Pflicht für DSGVO und Vertrauen.\n- **Backups**: Tägliche Backups gehören dazu.\n- **Support**: Deutscher Support hilft bei Notfällen.\n- **Vertragslaufzeit**: Kurze Laufzeiten geben Flexibilität.",
    faq: [
      { q: "Was kostet Hosting?", a: "Einsteiger-Tarife ab ca. 3–5 € pro Monat. Managed WordPress-Hosting ab 15–20 €." },
      { q: "Brauche ich einen eigenen Server?", a: "Für die meisten Selbstständigen reicht Webhosting. VPS oder Cloud erst, wenn der Traffic steigt." },
    ],
    offerSlugs: "hosting-anbieter-a",
  },
  {
    title: "Beste CRM-Systeme",
    slug: "beste-crm-systeme",
    categorySlug: "crm-systeme",
    seoTitle: "Beste CRM-Systeme im Vergleich",
    metaDescription:
      "CRM-Software im Vergleich – Kontakte, Pipeline, Marketing-Automation und Reporting für Selbstständige und KMU.",
    intro:
      "Ein CRM-System (Customer Relationship Management) hält Kontakte, Pipeline und Kommunikation an einem Ort. Wir vergleichen CRM-Tools für Solo-Selbstständige bis zu kleinen Vertriebs­teams.",
    content:
      "## Was bringt ein CRM?\n\n- **Kontakte sortieren**: Wer ist Lead, wer Kunde?\n- **Pipeline**: Welche Deals stehen wo?\n- **Notizen und Tasks**: Nichts vergessen.\n- **Automationen**: Standard-Abläufe als Workflows.\n- **Reporting**: Welche Aktivitäten zahlen sich aus?",
    faq: [
      { q: "Brauche ich ein CRM als Solo-Selbstständiger?", a: "Sobald du mehr als 20–30 aktive Kontakte hast, lohnt sich ein CRM." },
      { q: "Was kostet ein CRM?", a: "Free-Pläne reichen oft aus. Premium-Tarife starten bei 15–50 € pro Nutzer und Monat." },
    ],
    offerSlugs: "crm-tool-a",
  },
  {
    title: "Beste E-Mail-Marketing-Tools",
    slug: "beste-e-mail-marketing-tools",
    categorySlug: "e-mail-marketing",
    seoTitle: "Beste E-Mail-Marketing-Tools im Vergleich",
    metaDescription:
      "Newsletter-Tools im Vergleich – DSGVO, DOI, Automatisierungen und Anmelde­formulare für Selbstständige.",
    intro:
      "Newsletter sind eines der profitabelsten Marketing­kanäle – wenn man die richtigen Tools nutzt. Wir vergleichen E-Mail-Marketing-Software mit DSGVO-konformem Hosting in der EU.",
    content:
      "## Worauf achten?\n\n- **DOI (Double-Opt-In)**: Pflicht für deutsches E-Mail-Marketing.\n- **EU-Hosting**: Vereinfacht DSGVO.\n- **Automatisierungen**: Willkommens­strecken, Geburtstags­mails.\n- **Formulare**: Anmelde- und Pop-up-Formulare.\n- **Auswertungen**: Öffnungs- und Klickraten, A/B-Tests.",
    faq: [
      { q: "Was kostet ein Newsletter-Tool?", a: "Free-Pläne bis ca. 1.000 Kontakte sind üblich. Danach 10–50 € pro Monat." },
      { q: "Wie viele Newsletter pro Monat?", a: "1–2 hochwertige Newsletter pro Monat sind ein guter Start." },
    ],
    offerSlugs: "e-mail-marketing-tool-a",
  },
  {
    title: "Beste Versicherungen für Selbstständige",
    slug: "beste-versicherungen-fuer-selbststaendige",
    categorySlug: "versicherungen",
    seoTitle: "Versicherungen für Selbstständige im Vergleich",
    metaDescription:
      "Berufshaftpflicht, Krankenversicherung, Rechtsschutz und mehr – die wichtigsten Versicherungen für Selbstständige.",
    intro:
      "Welche Versicherungen brauchen Selbstständige wirklich? Wir geben einen Überblick über die wichtigsten Policen und zeigen, wo sich ein Vergleich besonders lohnt.",
    content:
      "## Pflicht oder Empfehlung\n\n- **Krankenversicherung**: Pflicht für jeden in Deutschland.\n- **Berufs­haftpflicht**: Für viele Berufe stark empfohlen, teilweise Pflicht (z. B. Architekten, Ärzte, Anwälte).\n- **Berufs­unfähigkeit**: Schützt deine Arbeitskraft.\n- **Rechtsschutz**: Hilfreich bei Streit mit Kunden oder Auftraggebern.\n- **Inhalts­versicherung**: Schützt Büroausstattung.\n\n## Hinweis\n\nDieser Vergleich ist keine Versicherungs­beratung. Lass dich vor Abschluss von einem unabhängigen Makler beraten.",
    faq: [
      { q: "Welche Versicherung ist die wichtigste?", a: "Eine Berufs­haftpflicht – sie schützt vor existenzbedrohenden Forderungen Dritter." },
      { q: "Was ist mit der Berufs­unfähigkeit?", a: "Sehr wichtig, je früher abgeschlossen, desto günstiger." },
    ],
    offerSlugs: "versicherungsvergleich-anbieter-a",
  },
  {
    title: "Private Krankenversicherung Vergleich",
    slug: "private-krankenversicherung-vergleich",
    categorySlug: "versicherungen",
    seoTitle: "Private Krankenversicherung Vergleich für Selbstständige",
    metaDescription:
      "PKV-Vergleich für Selbstständige – Voraussetzungen, Kosten, Tarife und worauf du vor dem Wechsel achten solltest.",
    intro:
      "Die Private Krankenversicherung (PKV) kann für Selbstständige attraktiv sein – sie kann aber auch teurer werden als die GKV, wenn die Tarife nicht zur Lebensphase passen. Hier findest du die wichtigsten Vergleichs­rechner.",
    content:
      "## Vorteile PKV\n\n- Bessere Leistungen je nach Tarif\n- Schnellere Termine möglich\n- Beitrag in jungen Jahren oft günstiger\n\n## Nachteile PKV\n\n- Beitrag steigt im Alter\n- Rückkehr in die GKV schwer\n- Kinder müssen separat versichert werden\n\n## Hinweis\n\nDie Entscheidung für die PKV ist langfristig. Bitte nutze eine unabhängige Beratung.",
    faq: [
      { q: "Wer darf in die PKV?", a: "Selbstständige, Beamte und Angestellte ab einer bestimmten Einkommens­grenze." },
      { q: "Was kostet die PKV?", a: "Abhängig von Alter, Tarif und Gesundheits­zustand – meist 250–700 € pro Monat." },
    ],
    offerSlugs: "pkv-vergleich-a",
  },
  {
    title: "Kfz-Versicherung Vergleich",
    slug: "kfz-versicherung-vergleich",
    categorySlug: "versicherungen",
    seoTitle: "Kfz-Versicherung Vergleich – privat und gewerblich",
    metaDescription:
      "Kfz-Versicherung vergleichen – Haftpflicht, Teilkasko und Vollkasko für private und gewerbliche Fahrzeuge.",
    intro:
      "Kfz-Versicherungen unterscheiden sich oft um mehrere hundert Euro pro Jahr. Ein jährlicher Vergleich kann sich für Selbstständige mit Firmenwagen besonders lohnen.",
    content:
      "## Versicherungsarten\n\n- **Haftpflicht**: Pflicht.\n- **Teilkasko**: Schützt vor Diebstahl, Wild, Glasbruch.\n- **Vollkasko**: Zusätzlich Eigenschäden.\n\n## Tipps\n\n- Wechsel zum 30.11. ist klassisch, Sonderkündigung nach Beitrags­erhöhung möglich.\n- Werkstatt­bindung kann Beitrag senken.\n- Fahrleistung ehrlich angeben.",
    faq: [
      { q: "Wann kann ich wechseln?", a: "Klassisch zum Jahreswechsel mit Stichtag 30.11., bei Beitrags­erhöhung Sonderkündigungs­recht." },
      { q: "Lohnt sich Vollkasko?", a: "Vor allem bei jungen, hochwertigen Fahrzeugen. Bei älteren Autos meist nicht." },
    ],
    offerSlugs: "kfz-versicherung-a",
  },
  {
    title: "DSL-Vergleich",
    slug: "dsl-vergleich",
    categorySlug: "tools-fuer-selbststaendige",
    seoTitle: "DSL- und Glasfaser-Vergleich für Homeoffice",
    metaDescription:
      "DSL- und Glasfaser-Anbieter im Vergleich für Selbstständige und Homeoffice – Geschwindigkeit, Vertragslaufzeit und Preis.",
    intro:
      "Stabiles Internet ist die Grundvoraussetzung für jedes Homeoffice. In diesem Vergleich findest du Hinweise zu DSL, Kabel- und Glasfaser-Anschlüssen und worauf du achten solltest.",
    content:
      "## Worauf achten?\n\n- **Verfügbarkeit**: Glasfaser bevorzugen, wenn verfügbar.\n- **Bandbreite**: Mindestens 50 MBit/s für Videocalls.\n- **Upload**: Wichtig für Cloud-Backups und Streaming.\n- **Service-Reaktionszeiten**: Bei Ausfall kritisch.\n\n## Hinweis\n\nDie konkreten Tarife ändern sich häufig – bitte aktuelle Konditionen beim Anbieter prüfen.",
    faq: [
      { q: "Wie schnell sollte mein Internet sein?", a: "Für Videocalls mindestens 50/10 MBit/s. Für mehrere parallele Streams mehr." },
      { q: "Wann lohnt sich Glasfaser?", a: "Wenn du regelmäßig große Dateien hoch- oder herunterlädst, sich Glasfaser lohnt." },
    ],
    offerSlugs: "",
  },
  {
    title: "Strom- und Gasvergleich",
    slug: "strom-und-gasvergleich",
    categorySlug: "tools-fuer-selbststaendige",
    seoTitle: "Strom- und Gasvergleich für Privat und Gewerbe",
    metaDescription:
      "Strom- und Gasanbieter vergleichen – Tarife, Bonus­zahlungen und Wechselservice.",
    intro:
      "Ein Strom- und Gasvergleich kann jährlich mehrere hundert Euro sparen. Auch Gewerbetarife lohnen sich – besonders für Werkstätten, Studios und kleine Büros.",
    content:
      "## Worauf achten?\n\n- **Preisgarantie**: Mindestens 12 Monate empfohlen.\n- **Boni**: Einmalige Boni nicht überbewerten.\n- **Ökostrom**: Achte auf echte Zertifikate.\n- **Kündigungsfrist**: Kurz und transparent.\n\n## Hinweis\n\nKeine Energie­beratung. Nutze offizielle Vergleichs­rechner und prüfe alle Konditionen vor Abschluss.",
    faq: [
      { q: "Wie oft sollte ich vergleichen?", a: "Einmal pro Jahr. Viele Tarife verlängern sich automatisch zu schlechteren Konditionen." },
      { q: "Was ist ein Bonus?", a: "Eine Einmal­zahlung im ersten Vertragsjahr – beim Vergleich realistisch einrechnen." },
    ],
    offerSlugs: "",
  },
  {
    title: "Beste Scanner für Selbstständige",
    slug: "beste-scanner-fuer-selbststaendige",
    categorySlug: "homeoffice-und-buero",
    seoTitle: "Beste Dokumentenscanner für Selbstständige",
    metaDescription:
      "Scanner für GoBD-konforme Belegarchivierung – Geschwindigkeit, Doppelseiten-Scan, OCR und Software.",
    intro:
      "Ein guter Scanner ist die Basis für digitale Buchhaltung und papierloses Büro. Wir vergleichen Geräte für Selbstständige mit Fokus auf Beleg- und Vertragsverwaltung.",
    content:
      "## Worauf achten?\n\n- **Einzug**: Automatischer Dokumenten­einzug spart Zeit.\n- **Doppelseiten-Scan**: Wichtig für Verträge.\n- **OCR**: Macht PDFs durchsuchbar.\n- **Geschwindigkeit**: Seiten pro Minute.\n- **Software**: Cloud-Anbindung und Buchhaltungs­export.",
    faq: [
      { q: "Reicht das Smartphone?", a: "Für gelegentliche Belege ja. Für viele Dokumente lohnt sich ein dedizierter Scanner." },
      { q: "Was ist GoBD?", a: "Eine Regelung, wie elektronische Belege aufzubewahren sind – Scanner sollten GoBD-fähige Software unterstützen." },
    ],
    offerSlugs: "scanner-anbieter-a",
  },
  {
    title: "Beste Drucker für Büro und Homeoffice",
    slug: "beste-drucker-fuer-buero-und-homeoffice",
    categorySlug: "homeoffice-und-buero",
    seoTitle: "Beste Drucker für Büro und Homeoffice",
    metaDescription:
      "Drucker im Vergleich – Laser oder Tinte, Multifunktion, Folgekosten und WLAN-Anbindung.",
    intro:
      "Welcher Drucker passt zu deinem Homeoffice? Wir vergleichen Laser- und Tinten­drucker, Multifunktions­geräte und achten besonders auf Folgekosten pro Seite.",
    content:
      "## Laser oder Tinte?\n\n- **Laser**: Günstig pro Seite, scharfes Schriftbild, wenig Wartung.\n- **Tinte**: Bessere Fotos, Anschaffung günstig, höhere Tintenkosten.\n\n## Worauf achten?\n\n- WLAN und AirPrint\n- Doppelseitiger Druck\n- Folgekosten pro Seite\n- Scanner integriert?",
    faq: [
      { q: "Welcher Drucker für die Steuer­unterlagen?", a: "Schwarzweiß-Laser mit Duplex spart langfristig Kosten." },
      { q: "Kompatible Toner kaufen?", a: "Häufig deutlich günstiger und gut. Garantie­hinweise beachten." },
    ],
    offerSlugs: "",
  },
  {
    title: "Beste Headsets für Online-Meetings",
    slug: "beste-headsets-fuer-online-meetings",
    categorySlug: "homeoffice-und-buero",
    seoTitle: "Beste Headsets für Online-Meetings und Calls",
    metaDescription:
      "Headsets für Videocalls, Dolmetscher und Homeoffice – Sprach­qualität, Akku, ANC und Kompatibilität.",
    intro:
      "Ein gutes Headset entscheidet darüber, wie professionell du in Online-Meetings wirkst. Wir vergleichen Modelle für Dolmetscher, Coaches und alle, die viel telefonieren.",
    content:
      "## Worauf achten?\n\n- **Mikrofon**: Klar und mit Geräusch­unterdrückung.\n- **Akku**: 10+ Stunden für ganze Tage.\n- **ANC**: Aktive Geräusch­unterdrückung schützt die Konzentration.\n- **Kompatibilität**: USB-C, Bluetooth oder USB-A?",
    faq: [
      { q: "USB oder Bluetooth?", a: "Bluetooth ist flexibler, USB stabiler. Für Dolmetscher empfehlen wir Kabel." },
      { q: "Lohnt sich ANC?", a: "Ja, vor allem im Großraumbüro oder im Homeoffice mit Kindern." },
    ],
    offerSlugs: "headset-anbieter-a",
  },
  {
    title: "Beste Tools für Dolmetscher und Übersetzer",
    slug: "beste-tools-fuer-dolmetscher-und-uebersetzer",
    categorySlug: "tools-fuer-dolmetscher-und-uebersetzer",
    seoTitle: "Beste Tools für Dolmetscher und Übersetzer",
    metaDescription:
      "CAT-Tools, Plattformen und Hardware für Dolmetscher und Übersetzer im Vergleich.",
    intro:
      "Dolmetscher und Übersetzer brauchen verlässliche Werkzeuge – von CAT-Tools über Glossare bis zu spezieller Hardware für Remote-Einsätze. Hier findest du eine Auswahl bewährter Lösungen.",
    content:
      "## Welche Tools brauchst du?\n\n- **CAT-Tool**: Translation Memory, Terminologie, QA.\n- **Glossar-Software**: Schnellzugriff während Dolmetsch­einsätzen.\n- **Plattformen für Remote-Dolmetschen**\n- **Hardware**: Headset, zweite Internet­leitung, Notfall-Hotspot.",
    faq: [
      { q: "Brauche ich ein CAT-Tool?", a: "Für Übersetzer fast immer. Für reine Dolmetscher eher Terminologie-Tools." },
      { q: "Welche Plattform für Remote-Dolmetschen?", a: "Hängt vom Auftraggeber ab. Mehrere Konten parallel sind üblich." },
    ],
    offerSlugs: "cat-tool-anbieter-a,dolmetscher-plattform-a",
  },
  {
    title: "Beste Apps für Selbstständige",
    slug: "beste-apps-fuer-selbststaendige",
    categorySlug: "tools-fuer-selbststaendige",
    seoTitle: "Beste Apps für Selbstständige – Produktivität und Business",
    metaDescription:
      "Die besten Apps für Selbstständige – Buchhaltung, Notizen, Zeit­erfassung, Cloud-Speicher und mehr.",
    intro:
      "Welche Apps gehören aufs Smartphone von Selbstständigen? Wir empfehlen Tools für Buchhaltung, Notizen, Zeit­erfassung, Cloud-Speicher und Reise­abrechnung.",
    content:
      "## Empfehlungen\n\n- Buchhaltungs-App fürs schnelle Beleg-Scannen\n- Notiz-App für Ideen und Recherche\n- Zeit­erfassungs-App für Stunden­nachweise\n- Cloud-Speicher mit guter Suche\n- VPN für sicheres Arbeiten unterwegs",
    faq: [
      { q: "Welche App ist die wichtigste?", a: "Eine zuverlässige Buchhaltungs- oder Beleg-App – sie spart langfristig die meiste Zeit." },
      { q: "Iphone oder Android?", a: "Beide Plattformen werden von den meisten Tools gut unterstützt." },
    ],
    offerSlugs: "projektmanagement-tool-a,terminbuchungs-tool-a",
  },
  {
    title: "Beste Projektmanagement-Tools",
    slug: "beste-projektmanagement-tools",
    categorySlug: "tools-fuer-selbststaendige",
    seoTitle: "Beste Projektmanagement-Tools im Vergleich",
    metaDescription:
      "PM-Tools im Vergleich – Kanban, Aufgaben, Automationen und Team­funktionen für Selbstständige und Teams.",
    intro:
      "Projekt­management-Tools helfen Selbst­ständigen, Aufgaben zu strukturieren, Teams zu koordinieren und Abläufe zu automatisieren. Hier ein Überblick über bewährte Lösungen.",
    content:
      "## Worauf achten?\n\n- **Flexibilität**: Kanban, Listen, Kalender.\n- **Automationen**: Wiederkehrende Aufgaben.\n- **Teamfähigkeit**: Rollen, Rechte, Kommentare.\n- **Mobile App**\n\n## Hinweis\n\nDas beste Tool ist das, das du wirklich nutzt. Komplexe Tools nur, wenn du sie wirklich brauchst.",
    faq: [
      { q: "Trello oder etwas anderes?", a: "Trello ist einsteiger­freundlich. Für komplexere Workflows lohnen sich andere Lösungen." },
      { q: "Kostenloser oder bezahlter Plan?", a: "Free-Pläne reichen Solo-Selbstständigen oft aus." },
    ],
    offerSlugs: "projektmanagement-tool-a",
  },
  {
    title: "Beste Terminbuchungs-Tools",
    slug: "beste-terminbuchungs-tools",
    categorySlug: "tools-fuer-selbststaendige",
    seoTitle: "Beste Terminbuchungs-Tools im Vergleich",
    metaDescription:
      "Online-Termin­buchung im Vergleich – Kalender-Integration, Zahlungen und Erinnerungen.",
    intro:
      "Online-Termin­buchung spart Zeit und reduziert Telefonate. Wir vergleichen Tools, die zu Coaches, Beratern, Dolmetschern und Dienstleistern passen.",
    content:
      "## Worauf achten?\n\n- **Kalender-Integration**: Google, Microsoft.\n- **Erinnerungen**: SMS und E-Mail.\n- **Zahlung**: Direkt im Buchungs­prozess.\n- **Mehrere Personen**: Team-Termine.\n- **Sprachen**: Internationale Kunden?",
    faq: [
      { q: "Was kostet ein Terminbuchungs-Tool?", a: "Free-Pläne reichen oft aus. Premium-Tarife starten ab ca. 8 € pro Monat." },
      { q: "Brauche ich Zahlungs­anbindung?", a: "Nur, wenn du vor dem Termin kassieren willst." },
    ],
    offerSlugs: "terminbuchungs-tool-a",
  },
  {
    title: "Beste Online-Zahlungsanbieter",
    slug: "beste-online-zahlungsanbieter",
    categorySlug: "tools-fuer-selbststaendige",
    seoTitle: "Beste Online-Zahlungsanbieter im Vergleich",
    metaDescription:
      "Zahlungs­anbieter im Vergleich – Karten­zahlung, SEPA, Rechnungs-Links und Gebühren.",
    intro:
      "Wer online verkauft oder Rechnungen ausstellt, braucht einen Zahlungs­anbieter. Wir vergleichen Lösungen für Coaches, Onlineshops und Dienstleister.",
    content:
      "## Worauf achten?\n\n- **Gebühren pro Transaktion**\n- **Auszahlungs­fristen**\n- **Akzeptierte Zahlungsarten**\n- **Integration in Shop / Tool**\n- **Internationale Zahlungen**",
    faq: [
      { q: "Welche Gebühren sind üblich?", a: "1,4 % bis 2,9 % plus fixe Beträge sind übliche Bandbreiten." },
      { q: "Sind Auszahlungen sofort?", a: "Meist innerhalb von 1–3 Werktagen." },
    ],
    offerSlugs: "zahlungsanbieter-a",
  },
  {
    title: "Beste KI-Tools für Selbstständige",
    slug: "beste-ki-tools-fuer-selbststaendige",
    categorySlug: "tools-fuer-selbststaendige",
    seoTitle: "Beste KI-Tools für Selbstständige",
    metaDescription:
      "KI-Tools für Selbstständige im Vergleich – Texte, Bilder, Recherche und Automatisierungen.",
    intro:
      "Künstliche Intelligenz spart Selbstständigen Stunden pro Woche – wenn die Tools richtig eingesetzt werden. Hier eine Auswahl bewährter KI-Tools.",
    content:
      "## Wofür eignet sich KI?\n\n- **Texte**: Entwürfe, Korrekturen, Übersetzungen.\n- **Recherche**: Schnelle Übersichten – immer mit Quellen prüfen.\n- **Bilder**: Social-Media-Grafiken, Mockups.\n- **Automationen**: E-Mail-Antworten, Zusammenfassungen.\n\n## Hinweis\n\nKI ersetzt keine Fachexpertise. Inhalte immer prüfen, vor allem in rechtlichen oder steuerlichen Fragen.",
    faq: [
      { q: "Sind KI-Inhalte rechtssicher?", a: "Nicht automatisch. Inhalte müssen immer geprüft werden – KI ist kein Rechts- oder Steuerberater." },
      { q: "Was kostet KI?", a: "Free-Pläne reichen oft. Premium-Tarife starten bei 10–20 € pro Monat." },
    ],
    offerSlugs: "ki-tool-a",
  },
  {
    title: "Beste Dokumentenmanagement-Tools",
    slug: "beste-dokumentenmanagement-tools",
    categorySlug: "tools-fuer-selbststaendige",
    seoTitle: "Beste Dokumentenmanagement-Tools (DMS) im Vergleich",
    metaDescription:
      "DMS für Selbstständige – GoBD, OCR, Volltextsuche, Versionierung und Cloud-Backup.",
    intro:
      "Ein Dokumenten­management-System (DMS) speichert Belege, Verträge und Korrespondenz revisions­sicher und durchsuchbar. Wir zeigen Lösungen für Selbstständige.",
    content:
      "## Worauf achten?\n\n- **OCR**: Macht PDFs durchsuchbar.\n- **GoBD-Konformität**: Pflicht für Belege.\n- **Versionierung**: Rückverfolgbarkeit.\n- **Cloud-Backup**\n- **Rollen und Rechte**",
    faq: [
      { q: "Brauche ich ein DMS?", a: "Sobald du mehr als 1000 Belege hast oder mit Kunden Verträge archivierst, lohnt es sich." },
      { q: "Was ist GoBD?", a: "Eine Regelung für die Aufbewahrung von Belegen – DMS sollten GoBD-konform arbeiten." },
    ],
    offerSlugs: "dokumentenmanagement-a",
  },
];
