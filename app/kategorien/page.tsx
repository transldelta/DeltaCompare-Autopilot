import { prisma } from "@/lib/prisma";
import { safe } from "@/lib/safe";
import VisualCategoryCard from "@/components/VisualCategoryCard";
import { PublicPageHero, CTASection } from "@/components/ui";
import Breadcrumbs from "@/components/Breadcrumbs";
import { buildMetadata } from "@/lib/seo";
import type { Metadata } from "next";

export const dynamic = "force-dynamic";

export const metadata: Metadata = buildMetadata({
  title: "Alle Vergleichsbereiche",
  description: "Entdecke Vergleiche für Alltag, Finanzen, Versicherungen, Shopping, Reisen, Business und digitale Tools.",
  path: "/kategorien",
});

export default async function CategoriesPage() {
  const categories = await safe(() => prisma.category.findMany({
    where: { status: "active" },
    include: { _count: { select: { offers: true } } },
    orderBy: { name: "asc" },
  }), [], "categories.list");

  return (
    <>
      <PublicPageHero
        glyph="◆"
        eyebrow="16 Bereiche"
        title="Alle Vergleichsbereiche auf einen Blick"
        subtitle="Entdecke Vergleiche für Alltag, Finanzen, Versicherungen, Shopping, Reisen, Business und digitale Tools."
        breadcrumbs={<Breadcrumbs items={[{ name: "Start", href: "/" }, { name: "Kategorien" }]} light />}
      />
      <section className="container-page py-14">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((c) => (
            <VisualCategoryCard key={c.id} name={c.name} slug={c.slug} description={c.description} offerCount={c._count.offers} />
          ))}
        </div>
      </section>
      <CTASection
        title="Nicht das richtige gefunden?"
        subtitle="Stöbere durch alle Vergleiche oder starte direkt mit den beliebtesten Themen."
        primary={{ href: "/vergleich", label: "Alle Vergleiche" }}
        secondary={{ href: "/", label: "Zur Startseite" }}
      />
    </>
  );
}
