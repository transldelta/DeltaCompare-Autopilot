import { prisma } from "./prisma";
import { safe } from "./safe";
import { getSiteUrl } from "./utils";

export async function getAllSitemapEntries() {
  const base = getSiteUrl();
  const staticPaths = [
    "/",
    "/kategorien",
    "/vergleich",
    "/anbieter",
    "/ratgeber",
    "/kontakt",
    "/impressum",
    "/datenschutz",
    "/affiliate-hinweis",
    "/haftungsausschluss",
  ];

  const [cats, offers, comparisons] = await Promise.all([
    safe(() => prisma.category.findMany({ where: { status: "active" }, select: { slug: true, updatedAt: true } }), [], "sitemap.cats"),
    safe(() => prisma.offer.findMany({ where: { status: "active" }, select: { slug: true, updatedAt: true } }), [], "sitemap.offers"),
    safe(() => prisma.comparisonPage.findMany({ where: { status: "active" }, select: { slug: true, updatedAt: true } }), [], "sitemap.comparisons"),
  ]);

  const now = new Date();
  const entries = [
    ...staticPaths.map((p) => ({ url: `${base}${p}`, lastmod: now, priority: p === "/" ? 1.0 : 0.6 })),
    ...cats.map((c) => ({ url: `${base}/kategorien/${c.slug}`, lastmod: c.updatedAt, priority: 0.7 })),
    ...comparisons.map((c) => ({ url: `${base}/vergleich/${c.slug}`, lastmod: c.updatedAt, priority: 0.9 })),
    ...offers.map((o) => ({ url: `${base}/anbieter/${o.slug}`, lastmod: o.updatedAt, priority: 0.7 })),
  ];
  return entries;
}
