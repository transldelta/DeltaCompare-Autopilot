import { prisma } from "@/lib/prisma";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import { buildMetadata } from "@/lib/seo";
import type { Metadata } from "next";

export const dynamic = "force-dynamic";

export const metadata: Metadata = buildMetadata({
  title: "Alle Vergleiche",
  description: "Alle aktuellen Vergleiche auf DeltaCompare – Geschäftskonten, Versicherungen, Buchhaltung und mehr.",
  path: "/vergleich",
});

export default async function ComparisonIndexPage() {
  const comparisons = await prisma.comparisonPage.findMany({
    where: { status: "active" },
    include: { category: true },
    orderBy: { createdAt: "asc" },
  });

  return (
    <>
      <Breadcrumbs items={[{ name: "Start", href: "/" }, { name: "Vergleiche" }]} />
      <section className="container-page py-10">
        <h1 className="section-heading">Alle Vergleiche</h1>
        <p className="mt-2 max-w-3xl text-ink-600">
          {comparisons.length} aktuelle Vergleiche – sortiert nach Veröffentlichung. Wähle einen Vergleich aus,
          um Anbieter, Vor- und Nachteile sowie Empfehlungen zu sehen.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {comparisons.map((c) => (
            <Link key={c.id} href={`/vergleich/${c.slug}`} className="card hover:-translate-y-0.5">
              <div className="text-xs uppercase tracking-wide text-brand-700">{c.category.name}</div>
              <h2 className="mt-1 text-lg font-semibold text-ink-900">{c.title}</h2>
              <p className="mt-2 line-clamp-3 text-sm text-ink-600">{c.metaDescription}</p>
              <span className="mt-3 inline-block text-sm font-medium text-brand-700">Vergleich öffnen →</span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
