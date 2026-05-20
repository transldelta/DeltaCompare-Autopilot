import Link from "next/link";
import { getCategoryVisual } from "@/lib/categoryVisuals";

/** Premium-Vergleichskarte mit farbigem Kopfbereich und Badge. */
export default function VisualComparisonCard({
  title,
  slug,
  metaDescription,
  categoryName,
  categorySlug,
  badge,
}: {
  title: string;
  slug: string;
  metaDescription: string;
  categoryName: string;
  categorySlug: string;
  badge?: string;
}) {
  const v = getCategoryVisual(categorySlug);
  return (
    <Link href={`/vergleich/${slug}`} className="card group relative overflow-hidden p-0">
      <div className={`relative h-24 bg-gradient-to-br ${v.gradient}`}>
        <span className="absolute right-3 top-3 text-4xl text-white/40">{v.glyph}</span>
        {badge && <span className="absolute left-3 top-3 rounded-full bg-white/90 px-2.5 py-0.5 text-xs font-bold text-ink-800">{badge}</span>}
        <span className="absolute bottom-3 left-3 rounded-full bg-black/20 px-2.5 py-0.5 text-xs font-semibold text-white backdrop-blur">{categoryName}</span>
      </div>
      <div className="p-6">
        <h3 className="text-lg font-bold text-ink-900">{title}</h3>
        <p className="mt-2 line-clamp-2 text-sm text-ink-600">{metaDescription}</p>
        <span className={`mt-4 inline-flex items-center gap-1 text-sm font-semibold ${v.text}`}>
          Vergleich öffnen <span className="transition group-hover:translate-x-0.5">→</span>
        </span>
      </div>
    </Link>
  );
}
