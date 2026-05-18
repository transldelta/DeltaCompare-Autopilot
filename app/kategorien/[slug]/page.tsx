import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import OfferCard from "@/components/OfferCard";
import Breadcrumbs from "@/components/Breadcrumbs";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import type { Metadata } from "next";

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const cat = await prisma.category.findUnique({ where: { slug: params.slug } });
  if (!cat) return buildMetadata({ title: "Kategorie nicht gefunden", path: `/kategorien/${params.slug}`, noIndex: true });
  return buildMetadata({
    title: cat.name,
    description: cat.description,
    path: `/kategorien/${cat.slug}`,
  });
}

export default async function CategoryPage({ params }: { params: { slug: string } }) {
  const cat = await prisma.category.findUnique({ where: { slug: params.slug } });
  if (!cat) return notFound();

  const [offers, comparisons] = await Promise.all([
    prisma.offer.findMany({ where: { categoryId: cat.id, status: "active" }, orderBy: [{ isFeatured: "desc" }, { rating: "desc" }] }),
    prisma.comparisonPage.findMany({ where: { categoryId: cat.id, status: "active" }, orderBy: { createdAt: "desc" } }),
  ]);

  return (
    <>
      <Breadcrumbs items={[{ name: "Start", href: "/" }, { name: "Kategorien", href: "/kategorien" }, { name: cat.name }]} />
      <section className="container-page py-10">
        <h1 className="section-heading">{cat.name}</h1>
        <p className="mt-2 max-w-3xl text-ink-700">{cat.description}</p>

        {comparisons.length > 0 && (
          <div className="mt-10">
            <h2 className="text-xl font-bold text-ink-900">Vergleiche in dieser Kategorie</h2>
            <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {comparisons.map((c) => (
                <Link key={c.id} href={`/vergleich/${c.slug}`} className="card hover:-translate-y-0.5">
                  <h3 className="text-lg font-semibold text-ink-900">{c.title}</h3>
                  <p className="mt-2 line-clamp-3 text-sm text-ink-600">{c.metaDescription}</p>
                  <span className="mt-3 inline-block text-sm font-medium text-brand-700">Vergleich öffnen →</span>
                </Link>
              ))}
            </div>
          </div>
        )}

        <div className="mt-10">
          <h2 className="text-xl font-bold text-ink-900">Anbieter</h2>
          {offers.length === 0 ? (
            <p className="mt-3 text-ink-600">Aktuell sind in dieser Kategorie keine Anbieter eingetragen.</p>
          ) : (
            <div className="mt-4 grid gap-4 lg:grid-cols-2">
              {offers.map((o) => (
                <OfferCard key={o.id} offer={o} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
