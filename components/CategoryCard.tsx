import Link from "next/link";
import { getCategoryVisual } from "@/lib/categoryVisuals";

type Props = {
  name: string;
  slug: string;
  description: string;
  icon?: string;
  offerCount?: number;
};

export default function CategoryCard({ name, slug, description, offerCount }: Props) {
  const v = getCategoryVisual(slug);
  return (
    <Link href={`/kategorien/${slug}`} className="card group relative overflow-hidden">
      {/* dezente farbige Hintergrundform */}
      <div className={`pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-gradient-to-br ${v.gradient} opacity-10 transition group-hover:opacity-20`} />
      <div className="relative flex items-start justify-between gap-3">
        <span className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${v.gradient} text-lg text-white shadow-soft transition group-hover:scale-105`}>
          {v.glyph}
        </span>
        {typeof offerCount === "number" && offerCount > 0 && <span className="badge-neutral">{offerCount} Anbieter</span>}
      </div>
      <h3 className="relative mt-4 text-lg font-bold text-ink-900">{name}</h3>
      <p className="relative mt-1.5 line-clamp-2 text-sm text-ink-600">{description}</p>
      <span className={`relative mt-4 inline-flex items-center gap-1 text-sm font-semibold ${v.text}`}>
        Vergleiche ansehen
        <span className="transition group-hover:translate-x-0.5">→</span>
      </span>
    </Link>
  );
}
