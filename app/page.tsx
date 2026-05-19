import Link from "next/link";
import Hero from "@/components/Hero";
import CategoryCard from "@/components/CategoryCard";
import OfferCard from "@/components/OfferCard";
import TrustBadges from "@/components/TrustBadges";
import FAQ from "@/components/FAQ";
import { prisma } from "@/lib/prisma";
import { safe } from "@/lib/safe";
import { AFFILIATE_DISCLOSURE_TEXT } from "@/lib/affiliate";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const [categories, featuredOffers, topComparisons] = await Promise.all([
    safe(() => prisma.category.findMany({
      where: { status: "active" },
      include: { _count: { select: { offers: true } } },
      orderBy: { name: "asc" },
    }), [], "home.categories"),
    safe(() => prisma.offer.findMany({
      where: { status: "active", isFeatured: true },
      take: 6,
      orderBy: { rating: "desc" },
    }), [], "home.featured"),
    safe(() => prisma.comparisonPage.findMany({
      where: { status: "active" },
      take: 6,
      orderBy: { createdAt: "desc" },
    }), [], "home.comparisons"),
  ]);

  const dbEmpty = categories.length === 0 && featuredOffers.length === 0 && topComparisons.length === 0;

  const faq = [
    { q: "Was ist DeltaCompare?", a: "DeltaCompare ist ein unabhängiges Vergleichsportal für Tools, Konten, Versicherungen und Services für Selbstständige." },
    { q: "Wie verdient DeltaCompare Geld?", a: "Wir nutzen Affiliate-Links. Wenn du über einen unserer Links ein Produkt abschließt, erhalten wir gegebenenfalls eine Provision – für dich entstehen keine zusätzlichen Kosten." },
    { q: "Ersetzt DeltaCompare eine Beratung?", a: "Nein. Unsere Inhalte sind keine Steuer-, Finanz- oder Rechtsberatung. Bitte ziehe für individuelle Fragen Fachleute hinzu." },
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
            sowie <code>npm run db:seed</code> aus. Details im <code>docs/DEPLOYMENT_VERCEL.md</code>.
          </div>
        </section>
      )}

      <section className="container-page py-16">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="section-heading">Kategorien</h2>
            <p className="mt-2 text-ink-600">Wähle ein Themengebiet und entdecke passende Anbieter und Vergleiche.</p>
          </div>
          <Link href="/kategorien" className="hidden sm:inline text-sm font-medium text-brand-700 hover:underline">
            Alle anzeigen →
          </Link>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((c) => (
            <CategoryCard
              key={c.id}
              name={c.name}
              slug={c.slug}
              description={c.description}
              offerCount={c._count.offers}
            />
          ))}
        </div>
      </section>

      <section className="bg-ink-50">
        <div className="container-page py-16">
          <div className="flex items-end justify-between">
            <div>
              <h2 className="section-heading">Top-Vergleiche</h2>
              <p className="mt-2 text-ink-600">Beliebte Vergleichsseiten – ideal zum Einstieg.</p>
            </div>
            <Link href="/vergleich" className="hidden sm:inline text-sm font-medium text-brand-700 hover:underline">
              Alle Vergleiche →
            </Link>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {topComparisons.map((c) => (
              <Link key={c.id} href={`/vergleich/${c.slug}`} className="card hover:-translate-y-0.5">
                <h3 className="text-lg font-semibold text-ink-900">{c.title}</h3>
                <p className="mt-2 line-clamp-3 text-sm text-ink-600">{c.metaDescription}</p>
                <span className="mt-4 inline-block text-sm font-medium text-brand-700">Vergleich öffnen →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-16">
        <h2 className="section-heading">Empfohlene Anbieter</h2>
        <p className="mt-2 text-ink-600">Eine Auswahl unserer aktuell empfohlenen Anbieter.</p>
        <div className="mt-8 grid gap-4 lg:grid-cols-2">
          {featuredOffers.map((o) => (
            <OfferCard key={o.id} offer={o} />
          ))}
        </div>
        <p className="mt-6 text-xs text-ink-500">
          {AFFILIATE_DISCLOSURE_TEXT}
        </p>
      </section>

      <TrustBadges />

      <section className="container-page py-16">
        <FAQ items={faq} title="Häufige Fragen zu DeltaCompare" />
      </section>

      <section className="bg-brand-50">
        <div className="container-page py-14 text-center">
          <h2 className="section-heading">Bereit zum Vergleichen?</h2>
          <p className="mx-auto mt-2 max-w-xl text-ink-700">
            Starte direkt mit unseren beliebtesten Vergleichen und finde das passende Angebot für deine Selbstständigkeit.
          </p>
          <div className="mt-6 flex justify-center gap-3">
            <Link href="/vergleich" className="btn-primary">Vergleiche starten</Link>
            <Link href="/kategorien" className="btn-secondary">Kategorien ansehen</Link>
          </div>
        </div>
      </section>
    </>
  );
}
