import Link from "next/link";
import { getCategoryVisual } from "@/lib/categoryVisuals";

/** Große farbige Kategorie-Kachel auf Basis eines DB-Datensatzes. */
export default function VisualCategoryCard({
  name,
  slug,
  description,
  offerCount,
}: {
  name: string;
  slug: string;
  description: string;
  offerCount?: number;
}) {
  const v = getCategoryVisual(slug);
  return (
    <Link
      href={`/kategorien/${slug}`}
      className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br ${v.gradient} p-6 text-white shadow-card transition-all duration-200 hover:-translate-y-1 hover:shadow-cardHover`}
    >
      <span className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full bg-white/15 transition group-hover:scale-125" />
      <span className="pointer-events-none absolute -bottom-10 -left-6 h-24 w-24 rounded-full bg-black/10" />
      <div className="relative flex items-start justify-between">
        <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/20 text-2xl backdrop-blur">{v.glyph}</span>
        {typeof offerCount === "number" && offerCount > 0 && (
          <span className="rounded-full bg-white/20 px-2.5 py-0.5 text-xs font-semibold backdrop-blur">{offerCount} Anbieter</span>
        )}
      </div>
      <h3 className="relative mt-5 text-lg font-bold">{name}</h3>
      <p className="relative mt-1.5 line-clamp-2 text-sm text-white/85">{description}</p>
      <span className="relative mt-4 inline-flex items-center gap-1 text-sm font-semibold">
        Vergleiche ansehen <span className="transition group-hover:translate-x-1">→</span>
      </span>
    </Link>
  );
}
