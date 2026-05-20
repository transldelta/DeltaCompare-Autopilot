import Link from "next/link";
import { StatCard, RatingBadge } from "./ui";

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-ink-200/70 bg-hero-gradient">
      <div className="container-page py-16 sm:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <span className="badge-brand">
              <span className="h-1.5 w-1.5 rounded-full bg-accent-500" />
              Unabhängiges Vergleichsportal
            </span>
            <h1 className="mt-5 text-4xl font-extrabold leading-[1.1] tracking-tight text-ink-900 sm:text-5xl lg:text-[3.4rem]">
              Die besten Tools, Konten, Versicherungen und Services einfach vergleichen
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-600">
              DeltaVergleich hilft Selbstständigen, kleinen Unternehmen und digitalen Unternehmern, passende Anbieter
              schneller zu finden.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/vergleich" className="btn-primary">Jetzt vergleichen</Link>
              <Link href="/kategorien" className="btn-secondary">Kategorien ansehen</Link>
            </div>
            <p className="mt-5 text-xs text-ink-500">
              Transparenz-Hinweis: Diese Seite enthält Affiliate-Links. Für dich entstehen keine zusätzlichen Kosten.
            </p>

            <div className="mt-10 grid max-w-2xl grid-cols-2 gap-3 sm:grid-cols-4">
              <StatCard value="16" label="Bereiche" />
              <StatCard value="181" label="Vergleichsseiten" />
              <StatCard value="Business" label="& Finanzen" />
              <StatCard value="100 %" label="Affiliate-transparent" />
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative">
              <div className="card-flat overflow-hidden p-0 shadow-cardHover">
                <div className="flex items-center justify-between border-b border-ink-100 bg-ink-50/60 px-5 py-3">
                  <div>
                    <div className="text-[11px] font-semibold uppercase tracking-wide text-ink-500">Beispiel-Vergleich</div>
                    <div className="text-sm font-bold text-ink-900">Beste Geschäftskonten</div>
                  </div>
                  <span className="badge-brand">Beliebt</span>
                </div>
                <ul className="divide-y divide-ink-100">
                  {[
                    { name: "Anbieter A", note: "kostenlos im Basistarif", rating: 4.6, tag: "Top Wahl" },
                    { name: "Anbieter B", note: "mit Filialberatung", rating: 4.1, tag: "" },
                    { name: "Anbieter C", note: "ideal für Solo-Selbstständige", rating: 4.4, tag: "" },
                  ].map((o) => (
                    <li key={o.name} className="flex items-center justify-between gap-3 px-5 py-4">
                      <div className="flex items-center gap-3">
                        <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-50 text-sm font-bold text-brand-600">
                          {o.name.split(" ")[1]}
                        </span>
                        <div>
                          <div className="flex items-center gap-2 text-sm font-semibold text-ink-900">
                            {o.name}
                            {o.tag && <span className="badge-accent">{o.tag}</span>}
                          </div>
                          <div className="text-xs text-ink-500">{o.note}</div>
                        </div>
                      </div>
                      <RatingBadge rating={o.rating} />
                    </li>
                  ))}
                </ul>
                <div className="px-5 py-4">
                  <Link href="/vergleich/beste-geschaeftskonten-fuer-selbststaendige" className="btn-secondary w-full">
                    Vergleich öffnen
                  </Link>
                </div>
              </div>
              <div className="pointer-events-none absolute -right-12 -top-12 h-48 w-48 rounded-full bg-brand-200/40 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-accent-200/40 blur-3xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
