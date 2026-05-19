import { prisma } from "@/lib/prisma";
import { safe } from "@/lib/safe";
import OfferCard from "@/components/OfferCard";
import Breadcrumbs from "@/components/Breadcrumbs";
import { buildMetadata } from "@/lib/seo";
import type { Metadata } from "next";

export const dynamic = "force-dynamic";

export const metadata: Metadata = buildMetadata({
  title: "Alle Anbieter",
  description: "Alle Anbieter im DeltaCompare-Portal mit Bewertung, Vor- und Nachteilen.",
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
      <Breadcrumbs items={[{ name: "Start", href: "/" }, { name: "Anbieter" }]} />
      <section className="container-page py-10">
        <h1 className="section-heading">Alle Anbieter</h1>
        <p className="mt-2 max-w-3xl text-ink-600">
          {offers.length} aktive Anbieter über alle Kategorien hinweg.
        </p>
        <div className="mt-8 grid gap-4 lg:grid-cols-2">
          {offers.map((o) => (
            <OfferCard key={o.id} offer={o} />
          ))}
        </div>
      </section>
    </>
  );
}
