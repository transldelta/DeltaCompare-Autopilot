import Link from "next/link";
import { RatingBadge } from "./ui";
import { DotPattern } from "./illustrations";
import { SLOGAN } from "@/lib/categoryVisuals";

const FLOAT_CARDS = [
  { glyph: "₿", label: "Finanzen", note: "Konten & Karten", grad: "from-sky-500 to-blue-700", pos: "left-0 top-2" },
  { glyph: "⛨", label: "Versicherungen", note: "clever absichern", grad: "from-green-500 to-emerald-700", pos: "right-2 top-0" },
  { glyph: "◉", label: "Internet & Handy", note: "Tarife vergleichen", grad: "from-indigo-500 to-violet-700", pos: "left-6 top-40" },
  { glyph: "▣", label: "Shopping", note: "Angebote finden", grad: "from-orange-500 to-pink-600", pos: "right-0 top-36" },
  { glyph: "✈", label: "Reisen", note: "günstiger unterwegs", grad: "from-cyan-500 to-teal-600", pos: "left-2 top-[19rem]" },
  { glyph: "✦", label: "Business", note: "Tools & Software", grad: "from-brand-600 to-emerald-600", pos: "right-4 top-[18rem]" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-ink-200/70 bg-gradient-to-b from-brand-950 via-brand-800 to-brand-700 text-white">
      <DotPattern className="pointer-events-none absolute inset-0 text-white/10" />
      <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-accent-400/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 left-1/4 h-96 w-96 rounded-full bg-brand-400/30 blur-3xl" />

      <div className="container-page relative py-16 sm:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-accent-400" />
              Unabhängiges Vergleichsportal · {SLOGAN}
            </span>
            <h1 className="mt-5 text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl lg:text-[3.5rem]">
              Die besten Angebote, Tarife und Tools einfach vergleichen
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-brand-100">
              DeltaVergleich hilft Verbrauchern, Familien, Online-Käufern, Selbstständigen und Unternehmen, passende
              Anbieter schneller zu finden – transparent und kostenlos.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/vergleich"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-bold text-brand-700 shadow-soft transition hover:shadow-cardHover active:scale-[0.98]"
              >
                Jetzt vergleichen
              </Link>
              <Link
                href="/kategorien"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/25 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20"
              >
                Kategorien ansehen
              </Link>
            </div>
            <p className="mt-5 text-xs text-brand-200/80">
              Transparenz-Hinweis: Diese Seite enthält Affiliate-Links. Für dich entstehen keine zusätzlichen Kosten.
            </p>

            <div className="mt-10 grid max-w-xl grid-cols-2 gap-3 sm:grid-cols-4">
              {[
                { v: "16", l: "Bereiche" },
                { v: "181", l: "Vergleiche" },
                { v: "100 %", l: "transparent" },
                { v: "0 €", l: "für dich" },
              ].map((s) => (
                <div key={s.l} className="rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-center backdrop-blur">
                  <div className="text-2xl font-extrabold">{s.v}</div>
                  <div className="mt-0.5 text-[11px] font-medium uppercase tracking-wide text-brand-200">{s.l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Visuelle Komposition rechts */}
          <div className="lg:col-span-6">
            <div className="relative mx-auto h-[26rem] w-full max-w-md">
              {/* Zentrale Vergleichskarte */}
              <div className="absolute left-1/2 top-1/2 w-72 -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-white p-4 text-ink-900 shadow-cardHover">
                <div className="flex items-center justify-between">
                  <span className="badge-brand">Top Wahl</span>
                  <RatingBadge rating={4.7} />
                </div>
                <div className="mt-3 flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-gradient text-sm font-extrabold text-white">A</span>
                  <div>
                    <div className="text-sm font-bold">Anbieter A</div>
                    <div className="text-xs text-ink-500">kostenlos im Basistarif</div>
                  </div>
                </div>
                <div className="mt-3 space-y-1.5">
                  {["Keine Grundgebühr", "Schnelle Online-Eröffnung"].map((t) => (
                    <div key={t} className="flex items-center gap-2 text-xs text-ink-600">
                      <svg viewBox="0 0 20 20" className="h-3.5 w-3.5 fill-accent-500"><path d="M8 13.2l-3.2-3.2-1.4 1.4L8 16l9-9-1.4-1.4z" /></svg>
                      {t}
                    </div>
                  ))}
                </div>
                <div className="mt-3 rounded-lg bg-accent-gradient py-2 text-center text-xs font-bold text-white">Zum Anbieter →</div>
              </div>

              {/* Schwebende Kategorie-Chips */}
              {FLOAT_CARDS.map((c, i) => (
                <div
                  key={c.label}
                  className={`absolute ${c.pos} flex items-center gap-2 rounded-xl border border-white/20 bg-white/95 px-3 py-2 shadow-cardHover backdrop-blur`}
                  style={{ animation: `float 5s ease-in-out ${i * 0.5}s infinite` }}
                >
                  <span className={`flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br ${c.grad} text-sm text-white`}>{c.glyph}</span>
                  <div className="pr-1">
                    <div className="text-xs font-bold text-ink-900">{c.label}</div>
                    <div className="text-[10px] text-ink-500">{c.note}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
