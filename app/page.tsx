import Link from "next/link";
import Hero from "@/components/Hero";
import CategoryTiles from "@/components/CategoryTiles";
import OfferCard from "@/components/OfferCard";
import TrustBadges from "@/components/TrustBadges";
import FAQ from "@/components/FAQ";
import { SectionHeader, CTASection, IconTile } from "@/components/ui";
import { CompareScene, SaveScene, ContractScene } from "@/components/illustrations";
import { prisma } from "@/lib/prisma";
import { safe } from "@/lib/safe";
import { getCategoryVisual } from "@/lib/categoryVisuals";
import { AFFILIATE_DISCLOSURE_TEXT } from "@/lib/affiliate";

export const dynamic = "force-dynamic";

const STEPS = [
  { Scene: CompareScene, step: "1", title: "Vergleichen", text: "Wähle eine Kategorie und sieh Anbieter, Konditionen und Bewertungen übersichtlich nebeneinander." },
  { Scene: ContractScene, step: "2", title: "Entscheiden", text: "Vor- und Nachteile, Preise und Empfehlungen helfen dir, die passende Wahl zu treffen." },
  { Scene: SaveScene, step: "3", title: "Sparen", text: "Wechsle direkt zum Anbieter und sichere dir bessere Konditionen – transparent und kostenlos." },
];

const WHY = [
  { glyph: "◎", title: "Unabhängig & transparent", text: "Wir kennzeichnen Affiliate-Links klar und bewerten Anbieter nach Eignung – nicht nach Provisionshöhe." },
  { glyph: "✦", title: "Riesige Auswahl", text: "16 Bereiche und 181 Vergleichsseiten – von Finanzen über Versicherungen bis zu Business-Tools." },
  { glyph: "◆", title: "Schnell zur Entscheidung", text: "Klare Vergleichstabellen, Vor- und Nachteile auf einen Blick, ohne Werbe-Überladung." },
];

const FOR_WHOM = [
  { glyph: "◉", title: "Verbraucher", text: "Strom, Internet, Handytarife und Versicherungen vergleichen." },
  { glyph: "⌂", title: "Familien", text: "Haushalt, Energie, Absicherung und Reisen clever planen." },
  { glyph: "▣", title: "Online-Käufer", text: "Shopping-Tools, Zahlungsanbieter und Angebote finden." },
  { glyph: "▮", title: "Selbstständige", text: "Konten, Buchhaltung, Tools und Versicherungen." },
  { glyph: "✦", title: "Unternehmen", text: "CRM, Hosting, Software und Business-Services." },
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
    { q: "Was ist DeltaVergleich?", a: "DeltaVergleich ist ein unabhängiges Vergleichsportal für Verbraucher, Familien, Online-Käufer, Selbstständige und Unternehmen – von Finanzen und Versicherungen über Internet und Shopping bis zu Business-Tools." },
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

      {/* So funktioniert es – Illustrations-Band */}
      <section className="container-page py-16">
        <SectionHeader eyebrow="Vergleichen. Entscheiden. Sparen." title="So funktioniert DeltaVergleich" center />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {STEPS.map(({ Scene, step, title, text }) => (
            <div key={step} className="card-flat group text-center">
              <div className="relative mx-auto overflow-hidden rounded-xl bg-gradient-to-b from-brand-50 to-white">
                <Scene className="mx-auto h-40 w-full transition group-hover:scale-[1.03]" />
                <span className="absolute left-3 top-3 flex h-7 w-7 items-center justify-center rounded-full bg-brand-gradient text-xs font-bold text-white">{step}</span>
              </div>
              <h3 className="mt-5 text-lg font-bold text-ink-900">{title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-ink-600">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Beliebte Kategorien – große farbige Kacheln */}
      <section className="bg-gradient-to-b from-white to-ink-50">
        <div className="container-page py-16">
          <SectionHeader
            eyebrow="Beliebte Kategorien"
            title="Was möchten Sie vergleichen?"
            subtitle="Von Finanzen und Versicherungen über Energie und Shopping bis zu Business-Tools – alles an einem Ort."
            action={{ href: "/kategorien", label: "Alle 16 Bereiche" }}
          />
          <div className="mt-8">
            <CategoryTiles />
          </div>
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
            {topComparisons.map((c, i) => {
              const v = getCategoryVisual(c.category?.slug ?? "");
              return (
                <Link key={c.id} href={`/vergleich/${c.slug}`} className="card group relative overflow-hidden p-0">
                  <div className={`relative h-20 bg-gradient-to-br ${v.gradient}`}>
                    <span className="absolute right-3 top-3 text-3xl text-white/40">{v.glyph}</span>
                    {i < 2 && <span className="absolute left-3 top-3 rounded-full bg-white/90 px-2.5 py-0.5 text-xs font-bold text-ink-800">Beliebt</span>}
                  </div>
                  <div className="p-6">
                    <span className="badge-neutral">{c.category?.name ?? "Vergleich"}</span>
                    <h3 className="mt-2 text-lg font-bold text-ink-900">{c.title}</h3>
                    <p className="mt-2 line-clamp-2 text-sm text-ink-600">{c.metaDescription}</p>
                    <span className={`mt-4 inline-flex items-center gap-1 text-sm font-semibold ${v.text}`}>
                      Vergleich öffnen <span className="transition group-hover:translate-x-0.5">→</span>
                    </span>
                  </div>
                </Link>
              );
            })}
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
        title="Finden Sie schneller das passende Angebot."
        subtitle="Vergleichen Sie kostenlos und transparent – für Verbraucher, Familien, Selbstständige und Unternehmen."
        primary={{ href: "/vergleich", label: "Vergleiche starten" }}
        secondary={{ href: "/kategorien", label: "Kategorien ansehen" }}
      />
    </>
  );
}
