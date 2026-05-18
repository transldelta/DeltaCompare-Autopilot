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
];
