/**
 * Visuelles System pro Kategorie: Farb-Akzent + Gradient + Glyph.
 *
 * Wichtig: Tailwind scannt den Quellcode nach literalen Klassennamen.
 * Deshalb sind alle Klassen hier als vollständige Strings hinterlegt
 * (kein dynamisches Zusammensetzen), damit sie im Build erhalten bleiben.
 */

export type CategoryVisual = {
  /** Tailwind-Gradient für Icon-Kacheln/Banner */
  gradient: string;
  /** weicher Hintergrund (z. B. Karten-Fläche) */
  soft: string;
  /** Textfarbe für Akzente */
  text: string;
  /** Glyph (selbst gezeichnetes Unicode-Symbol) */
  glyph: string;
};

const DEFAULT_VISUAL: CategoryVisual = {
  gradient: "from-brand-500 to-brand-700",
  soft: "bg-brand-50",
  text: "text-brand-700",
  glyph: "●",
};

const MAP: Record<string, CategoryVisual> = {
  "geschaeftskonto-kreditkarten": { gradient: "from-sky-500 to-blue-700", soft: "bg-sky-50", text: "text-sky-700", glyph: "₿" },
  "finanzierung-kredite": { gradient: "from-blue-500 to-indigo-700", soft: "bg-blue-50", text: "text-blue-700", glyph: "◑" },
  "buchhaltung-steuern": { gradient: "from-emerald-500 to-teal-700", soft: "bg-emerald-50", text: "text-emerald-700", glyph: "▦" },
  "versicherungen": { gradient: "from-green-500 to-emerald-700", soft: "bg-green-50", text: "text-green-700", glyph: "⛨" },
  "shopify-e-commerce": { gradient: "from-orange-500 to-pink-600", soft: "bg-orange-50", text: "text-orange-600", glyph: "▣" },
  "website-hosting-domains": { gradient: "from-violet-500 to-blue-700", soft: "bg-violet-50", text: "text-violet-700", glyph: "▩" },
  "energie-internet-telekom": { gradient: "from-indigo-500 to-violet-700", soft: "bg-indigo-50", text: "text-indigo-700", glyph: "◉" },
  "homeoffice-buero": { gradient: "from-amber-500 to-orange-600", soft: "bg-amber-50", text: "text-amber-700", glyph: "▮" },
  "business-tools": { gradient: "from-brand-600 to-emerald-600", soft: "bg-brand-50", text: "text-brand-700", glyph: "✦" },
  "marketing-kundengewinnung": { gradient: "from-pink-500 to-rose-600", soft: "bg-pink-50", text: "text-pink-600", glyph: "◈" },
  "recht-vertraege": { gradient: "from-slate-500 to-slate-700", soft: "bg-slate-50", text: "text-slate-700", glyph: "⚖" },
  "produktivitaet-organisation": { gradient: "from-indigo-500 to-brand-700", soft: "bg-indigo-50", text: "text-indigo-700", glyph: "✓" },
  "reise-mobilitaet": { gradient: "from-cyan-500 to-teal-600", soft: "bg-cyan-50", text: "text-cyan-700", glyph: "✈" },
  "weiterbildung-onlinekurse": { gradient: "from-purple-500 to-violet-700", soft: "bg-purple-50", text: "text-purple-700", glyph: "◆" },
  "dolmetscher-uebersetzer-tools": { gradient: "from-teal-500 to-emerald-700", soft: "bg-teal-50", text: "text-teal-700", glyph: "文" },
  "immobilien-umzug-haushalt": { gradient: "from-emerald-500 to-green-700", soft: "bg-emerald-50", text: "text-emerald-700", glyph: "⌂" },
};

export function getCategoryVisual(slug: string): CategoryVisual {
  return MAP[slug] ?? DEFAULT_VISUAL;
}

export const SLOGAN = "Vergleichen. Entscheiden. Sparen.";
