import Link from "next/link";
import { DotPattern, HeroDashboard } from "./illustrations";
import HeroSearch from "./HeroSearch";
import { SLOGAN } from "@/lib/categoryVisuals";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-950 via-brand-900 to-brand-700 text-white">
      <DotPattern className="pointer-events-none absolute inset-0 text-white/[0.07]" />
      <div className="pointer-events-none absolute -right-40 -top-40 h-[32rem] w-[32rem] rounded-full bg-accent-400/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-48 -left-24 h-[32rem] w-[32rem] rounded-full bg-brand-400/30 blur-3xl" />

      <div className="container-page relative py-16 sm:py-20 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 text-xs font-semibold backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-accent-400" />
              {SLOGAN}
            </span>
            <h1 className="mt-6 text-4xl font-extrabold leading-[1.07] tracking-tight sm:text-5xl lg:text-[3.4rem]">
              Vergleiche Produkte, Tarife, Verträge und Services –{" "}
              <span className="bg-gradient-to-r from-accent-300 to-accent-500 bg-clip-text text-transparent">einfach, transparent und schnell.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-brand-100">
              DeltaVergleich hilft Verbrauchern, Familien, Selbstständigen und Unternehmen, passende Angebote zu finden
              und bessere Entscheidungen zu treffen.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/vergleich" className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-bold text-brand-700 shadow-soft transition hover:shadow-cardHover active:scale-[0.98]">
                Jetzt vergleichen
              </Link>
              <Link href="/kategorien" className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/25 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20">
                Beliebte Kategorien
              </Link>
            </div>

            <div className="mt-8">
              <HeroSearch />
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative mx-auto max-w-lg">
              {/* Glas-Rahmen hinter der Illustration */}
              <div className="absolute inset-0 -m-3 rounded-[2rem] border border-white/15 bg-white/5 backdrop-blur-sm" />
              <HeroDashboard className="relative w-full drop-shadow-2xl" />
              {/* schwebende Badges */}
              <div className="absolute -left-3 top-6 hidden rounded-xl border border-white/20 bg-white/95 px-3 py-2 text-ink-900 shadow-cardHover backdrop-blur sm:block" style={{ animation: "float 5s ease-in-out infinite" }}>
                <div className="flex items-center gap-2">
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-accent-gradient text-xs font-bold text-white">%</span>
                  <div><div className="text-xs font-bold">Top-Konditionen</div><div className="text-[10px] text-ink-500">geprüft & aktuell</div></div>
                </div>
              </div>
              <div className="absolute -right-2 bottom-8 hidden rounded-xl border border-white/20 bg-white/95 px-3 py-2 text-ink-900 shadow-cardHover backdrop-blur sm:block" style={{ animation: "float 5s ease-in-out 1.2s infinite" }}>
                <div className="flex items-center gap-2">
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-brand-gradient text-xs font-bold text-white">16</span>
                  <div><div className="text-xs font-bold">Bereiche</div><div className="text-[10px] text-ink-500">181 Vergleiche</div></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trust-Leiste unter dem Hero */}
        <div className="mt-14 grid grid-cols-2 gap-3 border-t border-white/10 pt-8 sm:grid-cols-4">
          {[
            { v: "16", l: "Vergleichsbereiche" },
            { v: "181", l: "Vergleichsseiten" },
            { v: "100 %", l: "transparent gekennzeichnet" },
            { v: "0 €", l: "kostenlos für dich" },
          ].map((s) => (
            <div key={s.l} className="text-center sm:text-left">
              <div className="text-3xl font-extrabold">{s.v}</div>
              <div className="mt-0.5 text-xs font-medium text-brand-200">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
