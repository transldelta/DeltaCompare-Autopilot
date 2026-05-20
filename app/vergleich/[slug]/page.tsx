import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { safe } from "@/lib/safe";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import ComparisonTable from "@/components/ComparisonTable";
import OfferCard from "@/components/OfferCard";
import SeoBlock from "@/components/SeoBlock";
import FAQ from "@/components/FAQ";
import AdSlot from "@/components/AdSlot";
import { DotPattern } from "@/components/illustrations";
import { getCategoryVisual } from "@/lib/categoryVisuals";
import { buildMetadata, faqJsonLd, breadcrumbsJsonLd } from "@/lib/seo";
import { safeJsonParse, getSiteUrl } from "@/lib/utils";
import { AFFILIATE_DISCLOSURE_TEXT } from "@/lib/affiliate";
import type { Metadata } from "next";

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const cmp = await safe(() => prisma.comparisonPage.findUnique({ where: { slug: params.slug } }), null, "comparison.meta");
  if (!cmp) return buildMetadata({ title: "Vergleich nicht gefunden", path: `/vergleich/${params.slug}`, noIndex: true });
  return buildMetadata({
    title: cmp.seoTitle || cmp.title,
    description: cmp.metaDescription,
    path: `/vergleich/${cmp.slug}`,
  });
}

export default async function ComparisonPage({ params }: { params: { slug: string } }) {
  const cmp = await safe(
    () => prisma.comparisonPage.findUnique({ where: { slug: params.slug }, include: { category: true } }),
    null,
    "comparison.page",
  );
  if (!cmp) return notFound();

  const offerSlugs = (cmp.offerSlugs || "").split(",").map((s) => s.trim()).filter(Boolean);
  const offers = offerSlugs.length
    ? await safe(
        () => prisma.offer.findMany({ where: { slug: { in: offerSlugs }, status: "active" } }),
        [],
        "comparison.offers",
      )
    : [];

  // Reihenfolge nach offerSlugs-Liste
  const ordered = offerSlugs
    .map((slug) => offers.find((o) => o.slug === slug))
    .filter((o): o is NonNullable<typeof o> => Boolean(o));

  const faq = safeJsonParse<Array<{ q: string; a: string }>>(cmp.faq, []);
  const siteUrl = getSiteUrl();
  const pageUrl = `${siteUrl}/vergleich/${cmp.slug}`;

  // Verwandte Vergleiche aus gleicher Kategorie
  const related = await safe(
    () => prisma.comparisonPage.findMany({
      where: { categoryId: cmp.categoryId, status: "active", slug: { not: cmp.slug } },
      take: 3,
      orderBy: { createdAt: "desc" },
    }),
    [],
    "comparison.related",
  );

  const visual = getCategoryVisual(cmp.category.slug);

  return (
    <>
      {/* Seitenkopf mit thematischem Farb-Banner */}
      <section className={`relative overflow-hidden border-b border-ink-200/70 bg-gradient-to-br ${visual.gradient} text-white`}>
        <DotPattern className="pointer-events-none absolute inset-0 text-white/10" />
        <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
        <div className="relative">
          <Breadcrumbs
            items={[
              { name: "Start", href: "/" },
              { name: "Vergleiche", href: "/vergleich" },
              { name: cmp.title },
            ]}
            light
          />
          <div className="container-page pb-12 pt-3">
            <div className="flex items-start gap-4">
              <span className="hidden h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-white/15 text-3xl backdrop-blur sm:flex">
                {visual.glyph}
              </span>
              <div>
                <Link href={`/kategorien/${cmp.category.slug}`} className="inline-flex rounded-full bg-white/15 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
                  {cmp.category.name}
                </Link>
                <h1 className="mt-3 max-w-3xl text-3xl font-extrabold tracking-tight sm:text-4xl">{cmp.title}</h1>
                <p className="mt-4 max-w-3xl text-lg leading-relaxed text-white/90">{cmp.intro}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <article className="container-page py-10">
        <div className="rounded-2xl border border-brand-100 bg-brand-50/60 px-5 py-3.5 text-sm text-ink-700">
          <span className="font-semibold text-ink-900">Transparenz:</span> Diese Seite enthält Affiliate-Links.{" "}
          {AFFILIATE_DISCLOSURE_TEXT}
        </div>

        <AdSlot placementSlug="comparison-after-intro" label="In-Content (nach Einleitung)" />

        <div className="mt-8">
          <h2 className="section-heading">Vergleichstabelle</h2>
          <div className="mt-4">
            <ComparisonTable offers={ordered} />
          </div>
        </div>

        <AdSlot placementSlug="comparison-after-table" label="Nach Vergleichstabelle" />

        {ordered.length > 0 && (
          <div className="mt-12">
            <h2 className="section-heading">Anbieter im Detail</h2>
            <div className="mt-5 grid gap-4 lg:grid-cols-2">
              {ordered.map((o) => (
                <OfferCard key={o.id} offer={o} />
              ))}
            </div>
          </div>
        )}

        <div className="mt-12 max-w-3xl">
          <SeoBlock title="Worauf solltest du achten?" content={cmp.content} />
        </div>

        {faq.length > 0 && (
          <>
            <FAQ items={faq} />
            <AdSlot placementSlug="comparison-in-faq" label="Im FAQ-Bereich" showOnMobile={false} />
          </>
        )}

        {related.length > 0 && (
          <div className="mt-14">
            <h2 className="section-heading">Verwandte Vergleiche</h2>
            <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((r) => (
                <Link key={r.id} href={`/vergleich/${r.slug}`} className="card group">
                  <span className="badge-brand">{cmp.category.name}</span>
                  <h3 className="mt-3 text-base font-bold text-ink-900">{r.title}</h3>
                  <p className="mt-2 line-clamp-2 text-sm text-ink-600">{r.metaDescription}</p>
                  <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-brand-700">
                    Öffnen <span className="transition group-hover:translate-x-0.5">→</span>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        )}

        <section className="mt-12 rounded-2xl border border-ink-200 bg-ink-50 p-6 text-sm text-ink-700">
          <strong className="block text-ink-900">Hinweis</strong>
          <p className="mt-2">
            Die hier dargestellten Angebote und Konditionen wurden mit Sorgfalt recherchiert, sind jedoch ohne Gewähr.
            Bitte prüfe vor Abschluss alle Details direkt beim Anbieter. Dieser Vergleich stellt keine Finanz-, Steuer- oder Rechtsberatung dar.
          </p>
        </section>
      </article>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbsJsonLd([
              { name: "Start", url: `${siteUrl}/` },
              { name: "Vergleiche", url: `${siteUrl}/vergleich` },
              { name: cmp.title, url: pageUrl },
            ])
          ),
        }}
      />
      {faq.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(faq)) }}
        />
      )}
    </>
  );
}
