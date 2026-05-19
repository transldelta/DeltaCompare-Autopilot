import { prisma } from "@/lib/prisma";
import { safe } from "@/lib/safe";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import AffiliateButton from "@/components/AffiliateButton";
import { buildMetadata, breadcrumbsJsonLd } from "@/lib/seo";
import { AFFILIATE_DISCLOSURE_TEXT } from "@/lib/affiliate";
import { isDemoLink, getSiteUrl } from "@/lib/utils";
import type { Metadata } from "next";
import Link from "next/link";

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const offer = await safe(() => prisma.offer.findUnique({ where: { slug: params.slug } }), null, "offer.meta");
  if (!offer) return buildMetadata({ title: "Anbieter nicht gefunden", path: `/anbieter/${params.slug}`, noIndex: true });
  return buildMetadata({
    title: offer.name,
    description: offer.shortDescription,
    path: `/anbieter/${offer.slug}`,
  });
}

export default async function OfferPage({ params }: { params: { slug: string } }) {
  const offer = await safe(
    () => prisma.offer.findUnique({ where: { slug: params.slug }, include: { category: true } }),
    null,
    "offer.page",
  );
  if (!offer) return notFound();

  const advantages = (offer.advantages || "").split("|").filter(Boolean);
  const disadvantages = (offer.disadvantages || "").split("|").filter(Boolean);
  const demo = isDemoLink(offer.affiliateLink);
  const siteUrl = getSiteUrl();
  const pageUrl = `${siteUrl}/anbieter/${offer.slug}`;

  return (
    <>
      <Breadcrumbs
        items={[
          { name: "Start", href: "/" },
          { name: "Anbieter", href: "/anbieter" },
          { name: offer.name },
        ]}
      />

      <article className="container-page py-10">
        <div className="grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="text-xs uppercase tracking-wide text-brand-700">
              <Link href={`/kategorien/${offer.category.slug}`}>{offer.category.name}</Link>
            </div>
            <h1 className="mt-2 text-3xl font-extrabold text-ink-900 sm:text-4xl">{offer.name}</h1>
            <p className="mt-4 max-w-3xl text-lg text-ink-700">{offer.shortDescription}</p>
            <div className="prose-dc mt-6 max-w-3xl">
              <p>{offer.longDescription}</p>
            </div>

            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              <div className="card">
                <h3 className="font-semibold text-emerald-700">Vorteile</h3>
                <ul className="mt-3 space-y-2 text-sm text-ink-700">
                  {advantages.length === 0 ? <li>–</li> : advantages.map((a) => (
                    <li key={a} className="flex gap-2"><span className="text-emerald-600">✓</span><span>{a}</span></li>
                  ))}
                </ul>
              </div>
              <div className="card">
                <h3 className="font-semibold text-rose-700">Nachteile</h3>
                <ul className="mt-3 space-y-2 text-sm text-ink-700">
                  {disadvantages.length === 0 ? <li>–</li> : disadvantages.map((a) => (
                    <li key={a} className="flex gap-2"><span className="text-rose-600">✕</span><span>{a}</span></li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8 rounded-2xl border border-ink-200 bg-ink-50 p-5 text-sm text-ink-700">
              <strong className="block text-ink-900">Preishinweis</strong>
              <p className="mt-1">{offer.priceNote || "Preise und Konditionen können sich ändern. Bitte direkt beim Anbieter prüfen."}</p>
            </div>
          </div>

          <aside className="lg:col-span-1">
            <div className="card sticky top-24">
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-emerald-50 px-3 py-1 text-sm font-semibold text-emerald-700">
                  ★ {offer.rating.toFixed(1)}
                </span>
                <span className="text-xs text-ink-500">{offer.network}</span>
              </div>
              <h2 className="mt-3 text-lg font-semibold text-ink-900">{offer.name}</h2>
              <p className="mt-1 text-sm text-ink-600">{offer.priceNote || ""}</p>
              <div className="mt-5">
                <AffiliateButton offerSlug={offer.slug} label={offer.buttonText || "Zum Anbieter"} />
              </div>
              {demo && (
                <p className="mt-3 rounded-md bg-amber-50 p-3 text-xs text-amber-800">
                  Hinweis: Dieser Affiliate-Link ist aktuell ein Platzhalter. Bitte vor Veröffentlichung im Admin-Bereich austauschen.
                </p>
              )}
              <p className="mt-4 text-xs text-ink-500">{AFFILIATE_DISCLOSURE_TEXT}</p>
            </div>
          </aside>
        </div>
      </article>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbsJsonLd([
              { name: "Start", url: `${siteUrl}/` },
              { name: "Anbieter", url: `${siteUrl}/anbieter` },
              { name: offer.name, url: pageUrl },
            ])
          ),
        }}
      />
    </>
  );
}
