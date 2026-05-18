import { prisma } from "@/lib/prisma";
import CategoryCard from "@/components/CategoryCard";
import Breadcrumbs from "@/components/Breadcrumbs";
import { buildMetadata } from "@/lib/seo";
import type { Metadata } from "next";

export const dynamic = "force-dynamic";

export const metadata: Metadata = buildMetadata({
  title: "Alle Kategorien",
  description: "Alle Kategorien auf DeltaCompare – von Geschäftskonten bis zu Tools für Dolmetscher und Übersetzer.",
  path: "/kategorien",
});

export default async function CategoriesPage() {
  const categories = await prisma.category.findMany({
    where: { status: "active" },
    include: { _count: { select: { offers: true } } },
    orderBy: { name: "asc" },
  });

  return (
    <>
      <Breadcrumbs items={[{ name: "Start", href: "/" }, { name: "Kategorien" }]} />
      <section className="container-page py-10">
        <h1 className="section-heading">Alle Kategorien</h1>
        <p className="mt-2 max-w-3xl text-ink-600">
          Stöbere durch unsere Themengebiete und finde Vergleiche, Anbieter und Ratgeber-Artikel zu jeder Kategorie.
        </p>
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
    </>
  );
}
