import Link from "next/link";

type Props = {
  name: string;
  slug: string;
  description: string;
  icon?: string;
  offerCount?: number;
};

export default function CategoryCard({ name, slug, description, offerCount }: Props) {
  return (
    <Link href={`/kategorien/${slug}`} className="card block hover:-translate-y-0.5">
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-lg font-semibold text-ink-900">{name}</h3>
        {typeof offerCount === "number" && (
          <span className="rounded-full bg-brand-50 px-2.5 py-0.5 text-xs font-medium text-brand-700">
            {offerCount} {offerCount === 1 ? "Anbieter" : "Anbieter"}
          </span>
        )}
      </div>
      <p className="mt-2 line-clamp-3 text-sm text-ink-600">{description}</p>
      <span className="mt-4 inline-flex items-center text-sm font-medium text-brand-700">
        Vergleichen →
      </span>
    </Link>
  );
}
