import { prisma } from "@/lib/prisma";
import { safe } from "@/lib/safe";
import OfferCard from "@/components/OfferCard";
import Breadcrumbs from "@/components/Breadcrumbs";
import { PublicPageHero, CTASection } from "@/components/ui";
import { AFFILIATE_DISCLOSURE_TEXT } from "@/lib/affiliate";
import { buildMetadata } from "@/lib/seo";
import type { Metadata } from "next";

export const dynamic = "force-dynamic";

export const metadata: Metadata = buildMetadata({
  title: "Alle Anbieter",
  description: "Vergleiche Anbieter aus Finanzen, Versicherungen, Shopping, Software, Business und Alltag.",
  path: "/anbieter",
});

export default async function OfferIndexPage() {
  const offers = await safe(() => prisma.offer.findMany({
    where: { status: "active" },
    orderBy: [{ isFeatured: "desc" }, { rating: "desc" }],
    include: { category: true },
  }), [], "offers.list");

  return (
    <>
      <PublicPageHero
        glyph="✦"
        eyebrow={`${offers.length} Anbieter`}
        title="Alle Anbieter"
        subtitle="Vergleiche Anbieter aus Finanzen, Versicherungen, Shopping, Software, Business und Alltag."
        gradient="from-brand-950 via-brand-900 to-accent-700"
        breadcrumbs={<Breadcrumbs items={[{ name: "Start", href: "/" }, { name: "Anbieter" }]} light />}
      />
      <section className="container-page py-14">
        <div className="grid gap-5 lg:grid-cols-2">
          {offers.map((o) => (
            <OfferCard key={o.id} offer={o} />
          ))}
        </div>
        <p className="mt-8 text-xs text-ink-500">{AFFILIATE_DISCLOSURE_TEXT}</p>
      </section>
      <CTASection
        title="Bereit zum Vergleichen?"
        subtitle="Wähle eine Kategorie und finde den passenden Anbieter – transparent und kostenlos."
        primary={{ href: "/kategorien", label: "Kategorien ansehen" }}
        secondary={{ href: "/vergleich", label: "Alle Vergleiche" }}
      />
    </>
  );
}
