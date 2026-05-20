"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const CHIPS: { label: string; href: string }[] = [
  { label: "Strom & Gas", href: "/kategorien/energie-internet-telekom" },
  { label: "Versicherung", href: "/kategorien/versicherungen" },
  { label: "Kreditkarte", href: "/vergleich/beste-kreditkarten-fuer-selbststaendige" },
  { label: "Internet", href: "/vergleich/dsl-vergleich" },
  { label: "Shopping", href: "/kategorien/shopify-e-commerce" },
  { label: "Reisen", href: "/kategorien/reise-mobilitaet" },
  { label: "Geschäftskonto", href: "/vergleich/beste-geschaeftskonten-fuer-selbststaendige" },
  { label: "Software", href: "/kategorien/produktivitaet-organisation" },
];

export default function HeroSearch() {
  const router = useRouter();
  const [q, setQ] = useState("");

  function submit(e: React.FormEvent) {
    e.preventDefault();
    // Es gibt (noch) keine Volltextsuche – wir leiten auf die Vergleichsübersicht.
    router.push("/vergleich");
  }

  return (
    <div className="w-full max-w-xl">
      <form onSubmit={submit} className="flex items-center gap-2 rounded-2xl border border-white/20 bg-white/95 p-2 shadow-cardHover backdrop-blur">
        <span className="pl-3 text-ink-400" aria-hidden>
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="7" /><path d="M21 21l-4-4" strokeLinecap="round" />
          </svg>
        </span>
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Was möchten Sie vergleichen?"
          aria-label="Was möchten Sie vergleichen?"
          className="min-w-0 flex-1 bg-transparent px-1 py-2.5 text-sm text-ink-900 placeholder:text-ink-400 focus:outline-none"
        />
        <button type="submit" className="shrink-0 rounded-xl bg-brand-600 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-brand-700 active:scale-[0.98]">
          Vergleichen
        </button>
      </form>

      <div className="mt-4 flex flex-wrap gap-2">
        {CHIPS.map((c) => (
          <a
            key={c.label}
            href={c.href}
            className="rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 text-xs font-medium text-white backdrop-blur transition hover:bg-white/20"
          >
            {c.label}
          </a>
        ))}
      </div>
    </div>
  );
}
