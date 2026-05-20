import Link from "next/link";
import Hero from "@/components/Hero";
import CategoryCard from "@/components/CategoryCard";
import OfferCard from "@/components/OfferCard";
import TrustBadges from "@/components/TrustBadges";
import FAQ from "@/components/FAQ";
import { SectionHeader, CTASection, IconTile } from "@/components/ui";
import { prisma } from "@/lib/prisma";
import { safe } from "@/lib/safe";
import { AFFILIATE_DISCLOSURE_TEXT } from "@/lib/affiliate";

export const dynamic = "force-dynamic";

const WHY = [
  { glyph: "◎", title: "Unabhängig & transparent", text: "Wir kennzeichnen Affiliate-Links klar und bewerten Anbieter nach Eignung – nicht nach Provisionshöhe." },
  { glyph: "▣", title: "Auf Selbstständige fokussiert", text: "Vom Geschäftskonto bis zum CAT-Tool: Inhalte für den echten Business-Alltag." },
  { glyph: "✦", title: "Schnell zur Entscheidung", text: "Klare Vergleichstabellen, Vor- und Nachteile auf einen Blick, ohne Werbe-Überladung." },
];

const FOR_WHOM = [
  { glyph: "▮", title: "Selbstständige", text: "Konten, Tools und Versicherungen für den Solo-Alltag." },
  { glyph: "✦", title: "Freiberufler", text: "Buchhaltung, Steuer-Tools und Absicherung." },
  { glyph: "▣", title: "Kleine Unternehmen", text: "CRM, E-Mail-Marketing, Hosting und mehr." },
  { glyph: "◈", title: "E-Commerce-Starter", text: "Shopify, Zahlungsanbieter, Versand und Tools." },
  { glyph: "文", title: "Dolmetscher & Übersetzer", text: "CAT-Tools, Headsets, Plattformen und Abrechnung." },
];

export default async function HomePage() {
  const [categories, featuredOffers, topComparisons] = await Promise.all([
    safe(() => prisma.category.findMany({
      where: { status: "active" },
      include: { _count: { select: { offers: true } } },
      orderBy: { name: "asc" },
    }), [], "home.categories"),
    safe(() => prisma.offer.findMany({
      where: { status: "active", isFeatured: true },
      take: 4,
      orderBy: { rating: "desc" },
    }), [], "home.featured"),
    safe(() => prisma.comparisonPage.findMany({
      where: { status: "active" },
      take: 6,
      orderBy: { createdAt: "desc" },
      include: { category: true },
    }), [], "home.comparisons"),
  ]);

  const dbEmpty = categories.length === 0 && featuredOffers.length === 0 && topComparisons.length === 0;

  const faq = [
    { q: "Was ist DeltaVergleich?", a: "DeltaVergleich ist ein unabhängiges Vergleichsportal für Tools, Konten, Versicherungen und Services für Selbstständige, Freiberufler und kleine Unternehmen." },
    { q: "Wie verdient DeltaVergleich Geld?", a: "Wir nutzen Affiliate-Links. Wenn du über einen unserer Links ein Produkt abschließt, erhalten wir gegebenenfalls eine Provision – für dich entstehen keine zusätzlichen Kosten." },
    { q: "Ersetzt DeltaVergleich eine Beratung?", a: "Nein. Unsere Inhalte sind keine Steuer-, Finanz- oder Rechtsberatung. Bitte ziehe für individuelle Fragen Fachleute hinzu." },
    { q: "Wie aktuell sind die Angebote?", a: "Wir prüfen und aktualisieren unsere Vergleiche regelmäßig. Konditionen können sich ändern – bitte immer beim Anbieter verifizieren." },
  ];

  return (
    <>
      <Hero />

      {dbEmpty && (
        <section className="container-page mt-6">
          <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5 text-sm text-amber-900">
            <strong>Hinweis:</strong> Die Inhalte konnten gerade nicht geladen werden. Falls du das System gerade
            aufsetzt, prüfe bitte die Umgebungsvariable <code>DATABASE_URL</code> und führe <code>npx prisma db push</code>
            sowie <code>npm run db:seed</code> aus.
          </div>
        </section>
      )}

      {/* Trust */}
      <div className="pt-16">
        <TrustBadges />
      </div>

      {/* Kategorien */}
      <section className="container-page py-16">
        <SectionHeader
          eyebrow="16 Bereiche"
          title="Kategorien"
          subtitle="Wähle ein Themengebiet und entdecke passende Anbieter und Vergleiche."
          action={{ href: "/kategorien", label: "Alle anzeigen" }}
        />
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((c) => (
            <CategoryCard key={c.id} name={c.name} slug={c.slug} description={c.description} icon={c.icon} offerCount={c._count.offers} />
          ))}
        </div>
      </section>

      {/* Top-Vergleiche */}
      <section className="bg-ink-50">
        <div className="container-page py-16">
          <SectionHeader
            eyebrow="Beliebt"
            title="Top-Vergleiche"
            subtitle="Beliebte Vergleichsseiten – ideal zum Einstieg."
            action={{ href: "/vergleich", label: "Alle Vergleiche" }}
          />
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {topComparisons.map((c, i) => (
              <Link key={c.id} href={`/vergleich/${c.slug}`} className="card group">
                <div className="flex items-center justify-between">
                  <span className="badge-brand">{c.category?.name ?? "Vergleich"}</span>
                  {i < 2 && <span className="badge-accent">Beliebt</span>}
                </div>
                <h3 className="mt-3 text-lg font-bold text-ink-900">{c.title}</h3>
                <p className="mt-2 line-clamp-2 text-sm text-ink-600">{c.metaDescription}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-700">
                  Vergleich öffnen <span className="transition group-hover:translate-x-0.5">→</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Empfohlene Anbieter */}
      {featuredOffers.length > 0 && (
        <section className="container-page py-16">
          <SectionHeader eyebrow="Empfehlungen" title="Empfohlene Anbieter" subtitle="Eine Auswahl unserer aktuell empfohlenen Anbieter." />
          <div className="mt-8 grid gap-4 lg:grid-cols-2">
            {featuredOffers.map((o) => (
              <OfferCard key={o.id} offer={o} />
            ))}
          </div>
          <p className="mt-6 text-xs text-ink-500">{AFFILIATE_DISCLOSURE_TEXT}</p>
        </section>
      )}

      {/* Warum DeltaVergleich */}
      <section className="bg-ink-50">
        <div className="container-page py-16">
          <SectionHeader eyebrow="Vorteile" title="Warum DeltaVergleich?" center />
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {WHY.map((w) => (
              <div key={w.title} className="card-flat">
                <IconTile>{w.glyph}</IconTile>
                <h3 className="mt-4 text-lg font-bold text-ink-900">{w.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-600">{w.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Für wen */}
      <section className="container-page py-16">
        <SectionHeader eyebrow="Zielgruppe" title="Für wen ist DeltaVergleich?" center />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {FOR_WHOM.map((f) => (
            <div key={f.title} className="card-flat text-center">
              <div className="flex justify-center"><IconTile tone="accent">{f.glyph}</IconTile></div>
              <h3 className="mt-4 text-base font-bold text-ink-900">{f.title}</h3>
              <p className="mt-1.5 text-sm text-ink-600">{f.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-ink-50">
        <div className="container-page py-16">
          <FAQ items={faq} title="Häufige Fragen zu DeltaVergleich" />
        </div>
      </section>

      <CTASection
        title="Bereit zum Vergleichen?"
        subtitle="Starte mit unseren beliebtesten Vergleichen und finde das passende Angebot für deine Selbstständigkeit."
        primary={{ href: "/vergleich", label: "Jetzt vergleichen" }}
        secondary={{ href: "/kategorien", label: "Kategorien ansehen" }}
      />
    </>
  );
}
