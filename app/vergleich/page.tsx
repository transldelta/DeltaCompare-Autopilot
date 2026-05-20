import { prisma } from "@/lib/prisma";
import { safe } from "@/lib/safe";
import Breadcrumbs from "@/components/Breadcrumbs";
import VisualComparisonCard from "@/components/VisualComparisonCard";
import { PublicPageHero, CTASection } from "@/components/ui";
import { buildMetadata } from "@/lib/seo";
import type { Metadata } from "next";

export const dynamic = "force-dynamic";

export const metadata: Metadata = buildMetadata({
  title: "Alle Vergleiche",
  description: "Finde passende Vergleiche für Produkte, Tarife, Verträge, Anbieter und digitale Services.",
  path: "/vergleich",
});

const CHIPS = [
  { label: "Finanzen", href: "/kategorien/geschaeftskonto-kreditkarten" },
  { label: "Versicherung", href: "/kategorien/versicherungen" },
  { label: "Energie", href: "/kategorien/energie-internet-telekom" },
  { label: "Internet", href: "/vergleich/dsl-vergleich" },
  { label: "Shopping", href: "/kategorien/shopify-e-commerce" },
  { label: "Reisen", href: "/kategorien/reise-mobilitaet" },
  { label: "Business", href: "/kategorien/business-tools" },
  { label: "Software", href: "/kategorien/website-hosting-domains" },
];

export default async function ComparisonIndexPage() {
  const comparisons = await safe(() => prisma.comparisonPage.findMany({
    where: { status: "active" },
    include: { category: true },
    orderBy: { createdAt: "asc" },
  }), [], "comparisons.list");

  return (
    <>
      <PublicPageHero
        glyph="▦"
        eyebrow={`${comparisons.length} Vergleiche`}
        title="Alle Vergleiche"
        subtitle="Finde passende Vergleiche für Produkte, Tarife, Verträge, Anbieter und digitale Services."
        chips={CHIPS}
        gradient="from-brand-950 via-brand-800 to-brand-600"
        breadcrumbs={<Breadcrumbs items={[{ name: "Start", href: "/" }, { name: "Vergleiche" }]} light />}
      />
      <section className="container-page py-14">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {comparisons.map((c, i) => (
            <VisualComparisonCard
              key={c.id}
              title={c.title}
              slug={c.slug}
              metaDescription={c.metaDescription}
              categoryName={c.category.name}
              categorySlug={c.category.slug}
              badge={i < 3 ? "Beliebt" : i >= comparisons.length - 3 ? "Neu" : undefined}
            />
          ))}
        </div>
      </section>
      <CTASection
        title="Finden Sie schneller das passende Angebot."
        subtitle="Vergleichen Sie kostenlos und transparent – für Verbraucher, Familien, Selbstständige und Unternehmen."
        primary={{ href: "/kategorien", label: "Nach Kategorie suchen" }}
        secondary={{ href: "/", label: "Zur Startseite" }}
      />
    </>
  );
}
