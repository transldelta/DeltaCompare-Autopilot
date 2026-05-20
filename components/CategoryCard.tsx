import Link from "next/link";

type Props = {
  name: string;
  slug: string;
  description: string;
  icon?: string;
  offerCount?: number;
};

const ICON_GLYPH: Record<string, string> = {
  Banknote: "₿",
  CreditCard: "▭",
  PiggyBank: "◑",
  Shield: "⛨",
  Calculator: "▦",
  FileText: "▤",
  ShoppingBag: "▣",
  LayoutTemplate: "▥",
  Server: "▩",
  Users: "◍",
  Mail: "✉",
  Briefcase: "▮",
  Wrench: "✦",
  Languages: "文",
  Plug: "◉",
  GraduationCap: "◆",
  Megaphone: "◈",
  Scale: "⚖",
  ListChecks: "✓",
  Plane: "✈",
  Home: "⌂",
  Tag: "●",
};

export default function CategoryCard({ name, slug, description, icon, offerCount }: Props) {
  const glyph = (icon && ICON_GLYPH[icon]) || "●";
  return (
    <Link href={`/kategorien/${slug}`} className="card group block">
      <div className="flex items-start justify-between gap-3">
        <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-lg text-brand-600 transition group-hover:bg-brand-gradient group-hover:text-white">
          {glyph}
        </span>
        {typeof offerCount === "number" && offerCount > 0 && (
          <span className="badge-neutral">{offerCount} Anbieter</span>
        )}
      </div>
      <h3 className="mt-4 text-lg font-bold text-ink-900">{name}</h3>
      <p className="mt-1.5 line-clamp-2 text-sm text-ink-600">{description}</p>
      <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-700">
        Vergleiche ansehen
        <span className="transition group-hover:translate-x-0.5">→</span>
      </span>
    </Link>
  );
}
