/**
 * contentGenerator
 *
 * Hilfsfunktionen, mit denen der Admin neue Content-Ideen aus den vorhandenen
 * Demo-Datenbeständen ableiten kann. Generiert lokal aus Templates – kein
 * externer KI-Aufruf. Du kannst die Vorschläge in Marketing-Entwürfe übernehmen.
 */

const HOOKS = [
  "3 Fehler, die jeder Selbstständige am Anfang macht",
  "So sparst du dieses Jahr über 1.000 € Bürokosten",
  "Diese 5 Tools nutze ich seit 2 Jahren",
  "Geschäftskonto in 10 Minuten – meine Erfahrung",
  "Steuer-Tools im Vergleich – was wirklich Zeit spart",
  "Hör auf, das manuell zu machen",
  "Was kostet eigentlich gute Software für Selbstständige?",
  "Wenn du nur ein Tool wählen kannst – nimm dieses",
];

export function generateContentIdeas(opts: { topic: string; count?: number }): string[] {
  const { topic } = opts;
  const count = opts.count ?? 10;
  const templates = [
    `${topic}: Die 5 besten Optionen 2026`,
    `${topic} im Vergleich – Vor- und Nachteile`,
    `So findest du das richtige ${topic} in 3 Schritten`,
    `${topic} für Einsteiger – Schritt-für-Schritt-Anleitung`,
    `${topic}: 7 Fehler, die du vermeiden solltest`,
    `Kostenlose vs. kostenpflichtige Lösungen für ${topic}`,
    `${topic}: Was Selbstständige wirklich brauchen`,
    `Erfahrungsberichte: ${topic} im Alltag`,
    `${topic}: Worauf du bei den Kosten achten musst`,
    `${topic} im Test – worauf wir besonders geachtet haben`,
  ];
  return templates.slice(0, count);
}

export function suggestSocialHooks(topic: string): string[] {
  return HOOKS.map((h) => `${h} – Thema: ${topic}`);
}

export type WeeklyReport = {
  startedAt: string;
  topPages: Array<{ slug: string; clicks: number }>;
  topOffers: Array<{ name: string; clicks: number }>;
  newClicks: number;
  missingAffiliate: number;
  seoIssues: number;
  ideas: string[];
  nextSteps: string[];
};
