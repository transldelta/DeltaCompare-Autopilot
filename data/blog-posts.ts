export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  category: string;
  content: string;
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "geschaeftskonto-fuer-selbststaendige",
    title: "Geschäftskonto für Selbstständige – das musst du wissen",
    description:
      "Warum ein Geschäftskonto für Selbstständige sinnvoll ist, was es kosten darf und worauf du achten solltest.",
    category: "Geschäftskonten",
    content:
      "## Warum ein Geschäftskonto?\n\nEin eigenes Geschäftskonto trennt geschäftliche und private Zahlungen sauber. Das spart Zeit bei der Buchhaltung und sieht auch gegenüber Kunden professioneller aus.\n\n## Was sollte ein Geschäftskonto können?\n\n- Kostenlose Kontoführung im Basistarif\n- Mastercard oder Debitkarte\n- Anbindung an Buchhaltungssoftware\n- Schnelle Online-Eröffnung\n- Mobile App\n\n## Worauf du achten solltest\n\nViele günstige Konten verlangen Gebühren für Bareinzahlungen oder zusätzliche Karten. Lies das Preis- und Leistungs­verzeichnis genau durch.\n\n## Hinweis\n\nDieser Ratgeber ist keine Bankberatung. Konditionen ändern sich – prüfe immer direkt beim Anbieter.",
  },
  {
    slug: "buchhaltung-fuer-einsteiger",
    title: "Buchhaltung für Einsteiger – so startest du sauber",
    description:
      "Die wichtigsten Buchhaltungs­pflichten für Selbstständige in Deutschland – verständlich erklärt.",
    category: "Buchhaltung",
    content:
      "## EÜR statt Bilanz\n\nDie meisten Solo-Selbstständigen erstellen eine Einnahmen-Überschuss-Rechnung (EÜR). Sie ist deutlich einfacher als eine doppelte Buchführung.\n\n## Belege richtig sammeln\n\n- Belege digital ablegen (GoBD-konform)\n- 10 Jahre aufbewahren\n- Beleg sofort dem Vorgang zuordnen\n\n## Tools, die helfen\n\nBuchhaltungs­software mit App spart enorm Zeit. Belege werden sofort gescannt und der Buchung zugeordnet.\n\n## Hinweis\n\nKeine Steuerberatung. Für komplexere Fragen ist ein Steuerberater die richtige Wahl.",
  },
  {
    slug: "versicherungen-selbststaendige",
    title: "Versicherungen für Selbstständige – was wirklich nötig ist",
    description:
      "Welche Versicherungen Selbstständige brauchen, was optional ist und worauf du beim Abschluss achten solltest.",
    category: "Versicherungen",
    content:
      "## Pflichtversicherungen\n\nNur die Krankenversicherung ist in Deutschland Pflicht. Berufs­haftpflicht ist nur in bestimmten Berufen vorgeschrieben.\n\n## Empfohlene Versicherungen\n\n- Berufs­haftpflicht\n- Berufs­unfähigkeits­versicherung\n- Rechtsschutz\n- Inhalts­versicherung\n\n## Worauf achten?\n\nLeistungs­ausschlüsse, Selbstbehalt und Vertragslaufzeit sind die wichtigsten Punkte. Lass dich von einem unabhängigen Makler beraten.\n\n## Hinweis\n\nKeine Versicherungsberatung. Bitte vor Abschluss individuell prüfen lassen.",
  },
  {
    slug: "shopify-shop-starten",
    title: "Shopify-Shop starten – die ersten Schritte",
    description:
      "So eröffnest du in wenigen Stunden deinen ersten Shopify-Shop. Plus: Welche Apps wirklich helfen.",
    category: "E-Commerce",
    content:
      "## Erste Schritte\n\n1. Shopify-Konto eröffnen\n2. Theme wählen und anpassen\n3. Produkte anlegen\n4. Zahlungs- und Versand­arten einrichten\n5. Rechtstexte einfügen (Impressum, Datenschutz, AGB, Widerruf)\n\n## Empfohlene Apps\n\n- Bewertungen\n- E-Mail-Marketing\n- SEO-Optimierung\n- Versand­etiketten\n\n## Häufige Stolperfallen\n\nDie Rechtstexte sind in Deutschland ein wichtiges Thema. Bitte rechtlich prüfen lassen.",
  },
  {
    slug: "homeoffice-einrichten",
    title: "Homeoffice einrichten – die wichtigsten Tools",
    description:
      "Mit dieser Ausstattung wird dein Homeoffice produktiv – ergonomisch, leise und steuerlich nutzbar.",
    category: "Homeoffice",
    content:
      "## Hardware\n\n- Höhenverstellbarer Schreibtisch\n- Ergonomischer Stuhl\n- Zweiter Monitor\n- Headset mit ANC\n- Webcam in guter Qualität\n\n## Software\n\n- Cloud-Speicher\n- Buchhaltungs-App\n- Notiz-App\n- VPN\n\n## Steuer\n\nViele Anschaffungen lassen sich steuerlich absetzen. Für die genaue Behandlung Steuerberater fragen.",
  },
  {
    slug: "dolmetscher-business-aufbauen",
    title: "Dolmetscher-Business aufbauen – Tools und Strukturen",
    description:
      "So organisierst du dich als Dolmetscher: Tools für Buchungen, Glossare, Rechnungen und Kunden­akquise.",
    category: "Dolmetschen",
    content:
      "## Akquise\n\nLanding-Pages pro Sprachpaar und Fachgebiet konvertieren am besten. Empfehlungen sind langfristig der wichtigste Kanal.\n\n## Tools\n\n- Termin­buchungs-Tool\n- Buchhaltungs-Software\n- Glossar-Tool\n- Plattformen für Remote-Dolmetschen\n\n## Hardware\n\n- Headset mit guter Sprach­qualität\n- Zweite Internet­leitung als Backup\n- Stabile Webcam",
  },
  {
    slug: "guenstiges-geschaeftskonto-finden",
    title: "Günstiges Geschäftskonto finden – worauf es wirklich ankommt",
    description: "Was ein günstiges Geschäftskonto ausmacht und welche versteckten Kosten du vor der Eröffnung prüfen solltest.",
    category: "Geschäftskonten",
    content:
      "## Was bedeutet \"günstig\" überhaupt?\n\nViele Geschäftskonten werben mit „0 € Kontoführung“, berechnen aber für Bargeld­einzahlungen, Echtzeit­überweisungen oder zusätzliche Karten Gebühren. Lies das Preis- und Leistungs­verzeichnis Zeile für Zeile.\n\n## Worauf achten?\n\n- Kontoführungsgebühr im Basistarif\n- Kosten pro Überweisung (SEPA, Echtzeit)\n- Preise für Karten und Bargeldservices\n- Buchhaltungs-Anbindung\n- Kündigungsfrist\n\n## Hinweis\n\nKeine Bank-Beratung. Konditionen ändern sich – immer aktuell beim Anbieter prüfen.",
  },
  {
    slug: "kostenlose-kreditkarte-fuer-selbststaendige",
    title: "Kostenlose Kreditkarte für Selbstständige – gibt es das wirklich?",
    description: "Welche kostenlosen Business-Kreditkarten existieren, was sie taugen und wo die Haken versteckt sind.",
    category: "Kreditkarten",
    content:
      "## Wirklich kostenlos oder nur im ersten Jahr?\n\nViele Business-Karten sind nur im ersten Jahr kostenlos. Achte auf die Folgekosten und mögliche Mindestumsätze pro Monat.\n\n## Was kostenlose Karten meist NICHT bieten\n\n- Reise-/Mietwagen­versicherungen\n- Concierge-Services\n- Lounge-Zugang\n- Großzügige Cashback-Programme\n\n## Wann lohnt sich eine kostenpflichtige Karte?\n\nWenn du regelmäßig reist, große Beträge buchst oder Versicherungs­leistungen wirklich nutzt.",
  },
  {
    slug: "buchhaltungssoftware-vergleich-2026",
    title: "Buchhaltungssoftware Vergleich 2026 – die wichtigsten Kriterien",
    description: "So findest du die passende Buchhaltungssoftware: Funktionen, Schnittstellen, Preise und worauf du achten musst.",
    category: "Buchhaltung",
    content:
      "## Funktionen\n\n- GoBD-konforme Belegarchivierung\n- USt-Voranmeldung via ELSTER\n- Bankanbindung\n- Mahnwesen\n- Steuerberater-Export (z. B. DATEV)\n\n## Preis-Modelle\n\nMonatsabo ist Standard. Achte auf Jahreszahlungs-Rabatte und Funktions­unterschiede zwischen Tarifen.\n\n## Hinweis\n\nKeine Steuerberatung. Bei komplexen Fällen Steuerberater einbeziehen.",
  },
  {
    slug: "versicherung-fuer-selbststaendige-uebersicht",
    title: "Versicherung für Selbstständige – Übersicht 2026",
    description: "Welche Versicherungen für Selbstständige wirklich wichtig sind und worauf du beim Abschluss achten solltest.",
    category: "Versicherungen",
    content:
      "## Pflicht oder Empfehlung\n\n- Krankenversicherung: Pflicht\n- Berufshaftpflicht: für viele Berufe stark empfohlen, teilweise Pflicht\n- Berufsunfähigkeit: langfristig wichtig\n- Rechtsschutz: hilfreich bei Streit mit Auftraggebern\n\n## Worauf achten\n\n- Leistungs­ausschlüsse\n- Selbstbehalt\n- Vertragslaufzeit\n- Schadens­abwicklung\n\n## Hinweis\n\nKeine Versicherungsberatung. Unabhängigen Makler einbeziehen.",
  },
  {
    slug: "dsl-vergleich-tipps",
    title: "DSL-Vergleich – Tipps für Homeoffice und Büro",
    description: "Worauf du beim DSL- und Glasfaser-Vergleich achten solltest, wenn du dein Geschäft von zuhause führst.",
    category: "Internet",
    content:
      "## Bandbreite\n\nFür Videocalls reicht meist 50/10 MBit/s. Wer regelmäßig große Dateien lädt, sollte 250+ MBit/s wählen.\n\n## Vertragslaufzeit\n\nKurze Laufzeiten und Sonderkündigungs­rechte bei Beitrags­änderungen sind ideal.\n\n## Backup-Verbindung\n\nMobile Hotspots oder LTE-Router als Backup verhindern Ausfälle.",
  },
  {
    slug: "stromvergleich-fuer-selbststaendige",
    title: "Stromvergleich für Selbstständige – Privat- vs. Gewerbetarif",
    description: "Wann sich ein Gewerbetarif für dein Homeoffice oder Büro lohnt und wie du seriös vergleichst.",
    category: "Energie",
    content:
      "## Privat oder Gewerbe?\n\nFür kleines Homeoffice meist Privattarif. Für Werkstätten, Studios oder größere Büros lohnt ein Gewerbetarif.\n\n## Worauf achten\n\n- Preisgarantie mindestens 12 Monate\n- Boni nicht überbewerten\n- Echte Ökostrom-Zertifikate prüfen\n- Kurze Kündigungsfrist\n\n## Hinweis\n\nKeine Energieberatung. Vergleich nur über seriöse Rechner.",
  },
  {
    slug: "kreditvergleich-fuer-selbststaendige",
    title: "Kreditvergleich für Selbstständige – worauf es ankommt",
    description: "So findest du seriöse Konditionen für Geschäfts- oder Privatkredite. Plus: Warum Bonität so wichtig ist.",
    category: "Kredit",
    content:
      "## Effektivzins ist entscheidend\n\nNominalzinsen sehen oft gut aus, aber der Effektivzins enthält alle Kosten. Vergleiche immer den effektiven Jahreszins.\n\n## Sondertilgung\n\nOhne Vorfälligkeits­entschädigung tilgen können spart auf lange Sicht viel Geld.\n\n## Hinweis\n\nKeine Anlage- oder Finanzberatung. Vor Vertragsabschluss unabhängige Beratung einholen.",
  },
  {
    slug: "steuerprogramm-fuer-selbststaendige",
    title: "Steuerprogramm für Selbstständige – brauche ich das?",
    description: "Wann ein Steuerprogramm reicht und wann der Steuerberater die bessere Wahl ist.",
    category: "Steuer",
    content:
      "## Wann reicht ein Steuerprogramm?\n\n- Solo-Selbstständig, übersichtliche EÜR\n- Keine internationale Tätigkeit\n- Kein Personal\n\n## Wann lieber Steuerberater?\n\n- GmbH/UG\n- Internationale Geschäfte\n- Lohnabrechnung\n- Komplexe Verträge\n\n## Hinweis\n\nKeine Steuerberatung. Im Zweifel Steuerberater einbeziehen.",
  },
  {
    slug: "shopify-kosten-uebersicht",
    title: "Shopify-Kosten 2026 – komplette Übersicht",
    description: "Welche monatlichen und versteckten Kosten Shopify wirklich erzeugt und wo du sparen kannst.",
    category: "E-Commerce",
    content:
      "## Monatliche Kosten\n\n- Tarif: 29–399 USD/Monat\n- Apps: oft 10–80 USD/Monat\n- Themes: einmalig 0–350 USD\n- Transaktions­gebühren ohne Shopify Payments\n\n## Hidden Costs\n\n- Domain\n- E-Mail-Tool\n- Versand-Apps\n- Bewertungs-App\n\n## Tipps zum Sparen\n\nApps regelmäßig prüfen und ungenutzte deaktivieren. Performance-Test machen.",
  },
  {
    slug: "website-erstellen-kosten",
    title: "Website erstellen – realistische Kosten im Überblick",
    description: "Was kostet eine professionelle Website wirklich? Domain, Hosting, Builder, Designer und SEO im Vergleich.",
    category: "Website",
    content:
      "## Die wichtigsten Kostenblöcke\n\n- Domain: ca. 10–20 € pro Jahr\n- Hosting: 3–30 € pro Monat\n- Builder oder CMS: 0–50 € pro Monat\n- Designer oder Vorlage: 0–3000 €\n- SEO-Tools: 0–100 € pro Monat\n\n## Selbstbau vs. Agentur\n\nSelbstbau für Solo-Selbstständige meist ausreichend. Agentur ab 5-stelligen Projekten sinnvoll.\n\n## Hinweis\n\nRechtstexte und DSGVO-Setup nicht vergessen – auch das kostet Zeit oder Geld.",
  },
];
