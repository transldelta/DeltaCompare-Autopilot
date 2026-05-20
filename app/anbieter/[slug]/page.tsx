import { prisma } from "@/lib/prisma";
import { safe } from "@/lib/safe";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import AffiliateButton from "@/components/AffiliateButton";
import { RatingBadge } from "@/components/ui";
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

      <section className="border-b border-ink-200/70 bg-hero-gradient">
        <div className="container-page pb-10 pt-3">
          <div className="flex items-center gap-3">
            <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-lg font-extrabold text-brand-600 shadow-soft">
              {offer.name.split(" ").map((w) => w[0]).slice(0, 2).join("").toUpperCase()}
            </span>
            <div>
              <Link href={`/kategorien/${offer.category.slug}`} className="badge-brand">{offer.category.name}</Link>
              <h1 className="mt-1.5 text-3xl font-extrabold tracking-tight text-ink-900 sm:text-4xl">{offer.name}</h1>
            </div>
          </div>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-ink-600">{offer.shortDescription}</p>
        </div>
      </section>

      <article className="container-page py-12">
        <div className="grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="prose-dc max-w-3xl">
              <p>{offer.longDescription}</p>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="card-flat">
                <h3 className="flex items-center gap-2 font-bold text-ink-900">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-accent-100 text-accent-700">✓</span>
                  Vorteile
                </h3>
                <ul className="mt-4 space-y-2.5 text-sm text-ink-700">
                  {advantages.length === 0 ? <li>–</li> : advantages.map((a) => (
                    <li key={a} className="flex gap-2">
                      <svg viewBox="0 0 20 20" className="mt-0.5 h-4 w-4 shrink-0 fill-accent-500"><path d="M8 13.2l-3.2-3.2-1.4 1.4L8 16l9-9-1.4-1.4z" /></svg>
                      <span>{a}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="card-flat">
                <h3 className="flex items-center gap-2 font-bold text-ink-900">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-ink-100 text-ink-500">–</span>
                  Nachteile
                </h3>
                <ul className="mt-4 space-y-2.5 text-sm text-ink-600">
                  {disadvantages.length === 0 ? <li>–</li> : disadvantages.map((a) => (
                    <li key={a} className="flex gap-2"><span className="mt-0.5 text-ink-300">✕</span><span>{a}</span></li>
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
            <div className="card-flat sticky top-24">
              <div className="flex items-center justify-between">
                <RatingBadge rating={offer.rating} />
                <span className="badge-neutral">{offer.network}</span>
              </div>
              <h2 className="mt-4 text-lg font-bold text-ink-900">{offer.name}</h2>
              {offer.priceNote && <p className="mt-1 text-sm text-ink-600">{offer.priceNote}</p>}
              <div className="mt-5">
                <AffiliateButton offerSlug={offer.slug} label={offer.buttonText || "Zum Anbieter"} />
              </div>
              {demo && (
                <p className="mt-4 rounded-xl bg-ink-50 p-3 text-xs text-ink-500">
                  Dieses Angebot wird gerade aktualisiert. Bitte schau dir in der Zwischenzeit unsere{" "}
                  <Link href="/vergleich" className="text-brand-700 underline">Vergleiche</Link> an.
                </p>
              )}
              <p className="mt-4 border-t border-ink-100 pt-3 text-xs text-ink-500">{AFFILIATE_DISCLOSURE_TEXT}</p>
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
