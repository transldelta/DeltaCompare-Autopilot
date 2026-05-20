"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const GROUPS: { title: string; items: { href: string; label: string }[] }[] = [
  {
    title: "Übersicht",
    items: [
      { href: "/admin/dashboard", label: "Dashboard" },
      { href: "/admin/launch-wizard", label: "Launch-Assistent" },
      { href: "/admin/audit", label: "Pre-Launch Audit" },
      { href: "/admin/autopilot", label: "Autopilot" },
    ],
  },
  {
    title: "Inhalte",
    items: [
      { href: "/admin/offers", label: "Angebote" },
      { href: "/admin/categories", label: "Kategorien" },
      { href: "/admin/comparisons", label: "Vergleichsseiten" },
      { href: "/admin/import", label: "Import" },
      { href: "/admin/marketing", label: "Marketing" },
    ],
  },
  {
    title: "Monetarisierung",
    items: [
      { href: "/admin/monetization", label: "Monetarisierung" },
      { href: "/admin/cpc-offers", label: "CPC-Angebote" },
      { href: "/admin/ad-placements", label: "Anzeigen-Plätze" },
      { href: "/admin/ads", label: "Werbenetzwerke" },
      { href: "/admin/revenue", label: "Einnahmen-Import" },
      { href: "/admin/revenue-calculator", label: "Einnahmen-Rechner" },
      { href: "/admin/tracking", label: "Tracking" },
    ],
  },
  {
    title: "System",
    items: [{ href: "/admin/settings", label: "Einstellungen" }],
  },
];

export default function AdminSidebar() {
  const path = usePathname();
  return (
    <aside className="w-full shrink-0 border-b border-ink-200 bg-ink-50 md:w-64 md:border-b-0 md:border-r md:min-h-screen">
      <div className="flex items-center gap-2 px-5 py-4">
        <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-gradient text-sm font-extrabold text-white">Δ</span>
        <span className="text-sm font-extrabold tracking-tight text-ink-900">
          Delta<span className="text-brand-600">Vergleich</span>
        </span>
      </div>

      <nav className="flex gap-1 overflow-x-auto px-3 pb-3 md:flex-col md:gap-0 md:overflow-visible md:pb-8">
        {GROUPS.map((group) => (
          <div key={group.title} className="md:mt-4">
            <div className="hidden px-3 pb-1 text-[11px] font-bold uppercase tracking-wider text-ink-400 md:block">
              {group.title}
            </div>
            <div className="flex gap-1 md:flex-col">
              {group.items.map((n) => {
                const active = path?.startsWith(n.href);
                return (
                  <Link
                    key={n.href}
                    href={n.href}
                    className={cn(
                      "rounded-lg px-3 py-2 text-sm font-medium whitespace-nowrap transition",
                      active ? "bg-brand-gradient text-white shadow-soft" : "text-ink-600 hover:bg-white hover:text-ink-900",
                    )}
                  >
                    {n.label}
                  </Link>
                );
              })}
            </div>
          </div>
        ))}

        <form action="/api/admin/logout" method="post" className="md:mt-6 md:border-t md:border-ink-200 md:pt-4">
          <button type="submit" className="w-full rounded-lg px-3 py-2 text-left text-sm font-medium text-ink-600 transition hover:bg-white hover:text-rose-600">
            Abmelden
          </button>
        </form>
      </nav>
    </aside>
  );
}
