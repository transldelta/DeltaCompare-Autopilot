import type { MetadataRoute } from "next";
import { getAllSitemapEntries } from "@/lib/sitemap";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const entries = await getAllSitemapEntries();
  return entries.map((e) => ({
    url: e.url,
    lastModified: e.lastmod,
    changeFrequency: "weekly",
    priority: e.priority,
  }));
}
