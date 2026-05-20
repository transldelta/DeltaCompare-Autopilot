import Link from "next/link";
import { cn } from "@/lib/utils";
import { DotPattern } from "./illustrations";

/**
 * Einheitlicher farbiger Seitenkopf für öffentliche Unterseiten.
 * Gradient-Hintergrund, Glyph, Titel, Untertitel, optionale Chips, Glow + Pattern.
 */
export function PublicPageHero({
  eyebrow,
  title,
  subtitle,
  glyph = "◆",
  gradient = "from-brand-950 via-brand-900 to-brand-700",
  chips,
  breadcrumbs,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  glyph?: string;
  gradient?: string;
  chips?: { label: string; href: string }[];
  breadcrumbs?: React.ReactNode;
}) {
  return (
    <section className={cn("relative overflow-hidden bg-gradient-to-br text-white", gradient)}>
      <DotPattern className="pointer-events-none absolute inset-0 text-white/[0.07]" />
      <div className="pointer-events-none absolute -right-28 -top-28 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 left-1/4 h-80 w-80 rounded-full bg-accent-400/15 blur-3xl" />
      <div className="relative">
        {breadcrumbs}
        <div className="container-page py-14 sm:py-20">
          <div className="flex items-start gap-4">
            <span className="hidden h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-white/15 text-3xl backdrop-blur sm:flex">
              {glyph}
            </span>
            <div className="max-w-3xl">
              {eyebrow && <div className="text-xs font-bold uppercase tracking-widest text-white/70">{eyebrow}</div>}
              <h1 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">{title}</h1>
              {subtitle && <p className="mt-4 text-lg leading-relaxed text-white/85">{subtitle}</p>}
              {chips && chips.length > 0 && (
                <div className="mt-6 flex flex-wrap gap-2">
                  {chips.map((c) => (
                    <Link
                      key={c.label}
                      href={c.href}
                      className="rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 text-xs font-medium text-white backdrop-blur transition hover:bg-white/20"
                    >
                      {c.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/** Bewertungs-Badge mit Sternen-Optik. */
export function RatingBadge({ rating, className }: { rating: number; className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-1 rounded-lg bg-accent-50 px-2.5 py-1 text-sm font-bold text-accent-700", className)}>
      <svg viewBox="0 0 20 20" className="h-3.5 w-3.5 fill-accent-500" aria-hidden>
        <path d="M10 1.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L10 15l-5.2 2.6 1-5.8L1.5 7.7l5.9-.9z" />
      </svg>
      {rating.toFixed(1)}
    </span>
  );
}

type BadgeTone = "brand" | "accent" | "neutral" | "amber";
export function Badge({ tone = "neutral", children }: { tone?: BadgeTone; children: React.ReactNode }) {
  const map: Record<BadgeTone, string> = {
    brand: "badge-brand",
    accent: "badge-accent",
    neutral: "badge-neutral",
    amber: "badge-amber",
  };
  return <span className={map[tone]}>{children}</span>;
}

/** Abschnitts-Kopf mit Eyebrow, Titel, Untertitel und optionalem Link. */
export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  action,
  center,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  action?: { href: string; label: string };
  center?: boolean;
}) {
  return (
    <div className={cn("flex flex-wrap items-end justify-between gap-4", center && "flex-col items-center text-center")}>
      <div className={cn(center && "max-w-2xl")}>
        {eyebrow && <div className="eyebrow">{eyebrow}</div>}
        <h2 className="section-heading mt-2">{title}</h2>
        {subtitle && <p className="mt-2 text-ink-600">{subtitle}</p>}
      </div>
      {action && !center && (
        <Link href={action.href} className="text-sm font-semibold text-brand-700 hover:underline">
          {action.label} →
        </Link>
      )}
    </div>
  );
}

/** Seitenkopf für Unterseiten. */
export function PageHero({
  eyebrow,
  title,
  subtitle,
  children,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="border-b border-ink-200/70 bg-hero-gradient">
      <div className="container-page py-12 sm:py-16">
        {eyebrow && <div className="eyebrow">{eyebrow}</div>}
        <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-ink-900 sm:text-4xl">{title}</h1>
        {subtitle && <p className="mt-4 max-w-2xl text-lg text-ink-600">{subtitle}</p>}
        {children}
      </div>
    </section>
  );
}

/** Dezente Info-Box. */
export function InfoBox({ title, children }: { title?: string; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-brand-100 bg-brand-50/60 p-5 text-sm text-ink-700">
      {title && <strong className="block text-ink-900">{title}</strong>}
      <div className={title ? "mt-1" : ""}>{children}</div>
    </div>
  );
}

/** Warn-Box (im Admin deutlich, öffentlich dezent). */
export function WarningBox({ title = "Hinweis", children }: { title?: string; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5 text-sm text-amber-900">
      <strong className="block">{title}</strong>
      <div className="mt-1">{children}</div>
    </div>
  );
}

/** Statistik-Kachel. */
export function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-2xl border border-ink-200/70 bg-white/70 px-5 py-4 text-center backdrop-blur">
      <div className="text-2xl font-extrabold text-ink-900">{value}</div>
      <div className="mt-1 text-xs font-medium uppercase tracking-wide text-ink-500">{label}</div>
    </div>
  );
}

/** Großer CTA-Block. */
export function CTASection({
  title,
  subtitle,
  primary,
  secondary,
}: {
  title: string;
  subtitle?: string;
  primary: { href: string; label: string };
  secondary?: { href: string; label: string };
}) {
  return (
    <section className="container-page py-16">
      <div className="overflow-hidden rounded-3xl bg-brand-gradient px-6 py-14 text-center shadow-cardHover sm:px-12">
        <h2 className="mx-auto max-w-2xl text-3xl font-extrabold tracking-tight text-white">{title}</h2>
        {subtitle && <p className="mx-auto mt-3 max-w-xl text-brand-100">{subtitle}</p>}
        <div className="mt-7 flex flex-wrap justify-center gap-3">
          <Link
            href={primary.href}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-bold text-brand-700 shadow-soft transition hover:shadow-cardHover active:scale-[0.98]"
          >
            {primary.label}
          </Link>
          {secondary && (
            <Link
              href={secondary.href}
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/20"
            >
              {secondary.label}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}

/** Icon-Glyph in farbiger Kachel (dezent, kein externes Icon-Paket). */
export function IconTile({ children, tone = "brand" }: { children: React.ReactNode; tone?: "brand" | "accent" }) {
  return (
    <span
      className={cn(
        "flex h-11 w-11 items-center justify-center rounded-xl text-lg font-bold",
        tone === "brand" ? "bg-brand-50 text-brand-600" : "bg-accent-50 text-accent-600",
      )}
    >
      {children}
    </span>
  );
}
