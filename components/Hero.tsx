import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-brand-50 to-white">
      <div className="container-page py-16 sm:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <span className="inline-flex items-center rounded-full bg-brand-100 px-3 py-1 text-xs font-medium text-brand-800">
              Unabhängiges Vergleichsportal
            </span>
            <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-ink-900 sm:text-5xl">
              Vergleiche die besten Tools, Konten, Versicherungen und Services für Selbstständige
            </h1>
            <p className="mt-5 text-lg text-ink-700">
              DeltaCompare hilft dir, fundierte Entscheidungen zu treffen – mit klaren Vergleichen,
              transparenten Vor- und Nachteilen und einem ehrlichen Hinweis darauf, wo Affiliate-Links im Spiel sind.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="/vergleich" className="btn-primary">Vergleiche starten</Link>
              <Link href="/kategorien" className="btn-secondary">Alle Kategorien</Link>
            </div>
            <p className="mt-5 text-xs text-ink-500">
              Hinweis: Diese Seite enthält Affiliate-Links. Für dich entstehen keine zusätzlichen Kosten.
            </p>
          </div>
          <div className="relative">
            <div className="card bg-white shadow-cardHover">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-xs uppercase tracking-wide text-ink-500">Beispiel</div>
                  <div className="mt-1 text-lg font-bold text-ink-900">Beste Geschäftskonten</div>
                </div>
                <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
                  Vergleich
                </span>
              </div>
              <ul className="mt-5 space-y-3 text-sm">
                {[
                  { name: "Anbieter A", note: "kostenlos im Basistarif", rating: "4,3" },
                  { name: "Anbieter B", note: "mit Filialberatung", rating: "4,0" },
                  { name: "Anbieter C", note: "ideal für Solo-Selbstständige", rating: "4,4" },
                ].map((o) => (
                  <li key={o.name} className="flex items-center justify-between rounded-lg border border-ink-100 px-3 py-3">
                    <div>
                      <div className="font-semibold text-ink-900">{o.name}</div>
                      <div className="text-xs text-ink-500">{o.note}</div>
                    </div>
                    <span className="text-sm font-semibold text-emerald-700">★ {o.rating}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-brand-200/60 blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
