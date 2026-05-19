import type { MetadataRoute } from "next";
import { getAllSitemapEntries } from "@/lib/sitemap";

// Wir generieren die Sitemap zur Laufzeit, damit kein Build-Schritt eine
// laufende DB benötigt und Cold-Start-Fehler ein laufendes Deployment nicht blockieren.
export const dynamic = "force-dynamic";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const entries = await getAllSitemapEntries();
  return entries.map((e) => ({
    url: e.url,
    lastModified: e.lastmod,
    changeFrequency: "weekly",
    priority: e.priority,
  }));
}
