import Link from "next/link";

type Tile = {
  title: string;
  desc: string;
  href: string;
  glyph: string;
  gradient: string;
};

/**
 * Kuratierte, große Kategorie-Kacheln für die Startseite.
 * Verlinken auf reale Kategorie-/Vergleichsseiten.
 */
const TILES: Tile[] = [
  { title: "Finanzen & Konten", desc: "Geschäftskonten, Kreditkarten, Kredite", href: "/kategorien/geschaeftskonto-kreditkarten", glyph: "₿", gradient: "from-sky-500 to-blue-700" },
  { title: "Versicherungen", desc: "Haftpflicht, Kranken, Kfz, Rechtsschutz", href: "/kategorien/versicherungen", glyph: "⛨", gradient: "from-green-500 to-emerald-700" },
  { title: "Strom, Gas & Internet", desc: "Tarife clever vergleichen", href: "/kategorien/energie-internet-telekom", glyph: "◉", gradient: "from-indigo-500 to-violet-700" },
  { title: "Handy & Telekommunikation", desc: "Mobilfunk, DSL, Glasfaser", href: "/vergleich/dsl-vergleich", glyph: "▤", gradient: "from-violet-500 to-purple-700" },
  { title: "Shopping & Angebote", desc: "Shops, Zahlung, E-Commerce-Tools", href: "/kategorien/shopify-e-commerce", glyph: "▣", gradient: "from-orange-500 to-pink-600" },
  { title: "Reisen & Mobilität", desc: "Mietwagen, Bahn, Reise-Tools", href: "/kategorien/reise-mobilitaet", glyph: "✈", gradient: "from-cyan-500 to-teal-600" },
  { title: "Haushalt & Alltag", desc: "Umzug, Handwerker, Energie", href: "/kategorien/immobilien-umzug-haushalt", glyph: "⌂", gradient: "from-emerald-500 to-green-700" },
  { title: "Business & Tools", desc: "Buchhaltung, CRM, Projektmanagement", href: "/kategorien/business-tools", glyph: "✦", gradient: "from-brand-600 to-emerald-600" },
  { title: "Software & digitale Dienste", desc: "Hosting, Website, Produktivität", href: "/kategorien/website-hosting-domains", glyph: "▩", gradient: "from-blue-500 to-indigo-700" },
  { title: "Weiterbildung", desc: "Online-Kurse, Sprachen, KI", href: "/kategorien/weiterbildung-onlinekurse", glyph: "◆", gradient: "from-purple-500 to-violet-700" },
];

export default function CategoryTiles() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {TILES.map((t) => (
        <Link
          key={t.title}
          href={t.href}
          className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br ${t.gradient} p-6 text-white shadow-card transition-all duration-200 hover:-translate-y-1 hover:shadow-cardHover`}
        >
          {/* dekorative Formen */}
          <span className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full bg-white/15 transition group-hover:scale-125" />
          <span className="pointer-events-none absolute -bottom-10 -left-6 h-24 w-24 rounded-full bg-black/10" />
          <span className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-white/20 text-2xl backdrop-blur">
            {t.glyph}
          </span>
          <h3 className="relative mt-5 text-lg font-bold">{t.title}</h3>
          <p className="relative mt-1 text-sm text-white/85">{t.desc}</p>
          <span className="relative mt-4 inline-flex items-center gap-1 text-sm font-semibold">
            Vergleichen
            <span className="transition group-hover:translate-x-1">→</span>
          </span>
        </Link>
      ))}
    </div>
  );
}
