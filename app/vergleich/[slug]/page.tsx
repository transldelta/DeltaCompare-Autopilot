import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import ComparisonTable from "@/components/ComparisonTable";
import OfferCard from "@/components/OfferCard";
import SeoBlock from "@/components/SeoBlock";
import FAQ from "@/components/FAQ";
import { buildMetadata, faqJsonLd, breadcrumbsJsonLd } from "@/lib/seo";
import { safeJsonParse, getSiteUrl } from "@/lib/utils";
import { AFFILIATE_DISCLOSURE_TEXT } from "@/lib/affiliate";
import type { Metadata } from "next";

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const cmp = await prisma.comparisonPage.findUnique({ where: { slug: params.slug } });
  if (!cmp) return buildMetadata({ title: "Vergleich nicht gefunden", path: `/vergleich/${params.slug}`, noIndex: true });
  return buildMetadata({
    title: cmp.seoTitle || cmp.title,
    description: cmp.metaDescription,
    path: `/vergleich/${cmp.slug}`,
  });
}

export default async function ComparisonPage({ params }: { params: { slug: string } }) {
  const cmp = await prisma.comparisonPage.findUnique({
    where: { slug: params.slug },
    include: { category: true },
  });
  if (!cmp) return notFound();

  const offerSlugs = (cmp.offerSlugs || "").split(",").map((s) => s.trim()).filter(Boolean);
  const offers = offerSlugs.length
    ? await prisma.offer.findMany({ where: { slug: { in: offerSlugs }, status: "active" } })
    : [];

  // Reihenfolge nach offerSlugs-Liste
  const ordered = offerSlugs
    .map((slug) => offers.find((o) => o.slug === slug))
    .filter((o): o is NonNullable<typeof o> => Boolean(o));

  const faq = safeJsonParse<Array<{ q: string; a: string }>>(cmp.faq, []);
  const siteUrl = getSiteUrl();
  const pageUrl = `${siteUrl}/vergleich/${cmp.slug}`;

  return (
    <>
      <Breadcrumbs
        items={[
          { name: "Start", href: "/" },
          { name: "Vergleiche", href: "/vergleich" },
          { name: cmp.title },
        ]}
      />
      <article className="container-page py-10">
        <div className="text-xs uppercase tracking-wide text-brand-700">{cmp.category.name}</div>
        <h1 className="mt-2 text-3xl font-extrabold text-ink-900 sm:text-4xl">{cmp.title}</h1>
        <p className="mt-4 max-w-3xl text-lg text-ink-700">{cmp.intro}</p>

        <p className="mt-3 text-xs text-ink-500">{AFFILIATE_DISCLOSURE_TEXT}</p>

        <div className="mt-8">
          <h2 className="section-heading">Vergleichstabelle</h2>
          <div className="mt-4">
            <ComparisonTable offers={ordered} />
          </div>
        </div>

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

        {faq.length > 0 && <FAQ items={faq} />}

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
