import Link from "next/link";

const GRADIENTS = [
  "from-sky-500 to-blue-700",
  "from-emerald-500 to-teal-700",
  "from-orange-500 to-pink-600",
  "from-violet-500 to-purple-700",
  "from-cyan-500 to-teal-600",
  "from-brand-600 to-emerald-600",
];

function readingTime(content: string): number {
  const words = content.split(/\s+/).filter(Boolean).length;
  return Math.max(2, Math.round(words / 180));
}

/** Visuelle Ratgeber-Artikel-Karte mit farbigem Kopf und Lesedauer. */
export default function VisualArticleCard({
  title,
  slug,
  description,
  category,
  content,
  index = 0,
  glyph = "◆",
}: {
  title: string;
  slug: string;
  description: string;
  category: string;
  content: string;
  index?: number;
  glyph?: string;
}) {
  const grad = GRADIENTS[index % GRADIENTS.length];
  const mins = readingTime(content);
  return (
    <Link href={`/ratgeber/${slug}`} className="card group relative overflow-hidden p-0">
      <div className={`relative flex h-28 items-center justify-center bg-gradient-to-br ${grad}`}>
        <span className="text-5xl text-white/80 transition group-hover:scale-110">{glyph}</span>
        <span className="absolute left-3 top-3 rounded-full bg-white/90 px-2.5 py-0.5 text-xs font-bold text-ink-800">{category}</span>
        <span className="absolute bottom-3 right-3 rounded-full bg-black/20 px-2.5 py-0.5 text-xs font-semibold text-white backdrop-blur">{mins} Min. Lesezeit</span>
      </div>
      <div className="p-6">
        <h3 className="text-lg font-bold text-ink-900">{title}</h3>
        <p className="mt-2 line-clamp-2 text-sm text-ink-600">{description}</p>
        <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-700">
          Artikel lesen <span className="transition group-hover:translate-x-0.5">→</span>
        </span>
      </div>
    </Link>
  );
}
