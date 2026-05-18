import { prisma } from "./prisma";
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
    prisma.category.findMany({ where: { status: "active" }, select: { slug: true, updatedAt: true } }),
    prisma.offer.findMany({ where: { status: "active" }, select: { slug: true, updatedAt: true } }),
    prisma.comparisonPage.findMany({ where: { status: "active" }, select: { slug: true, updatedAt: true } }),
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
