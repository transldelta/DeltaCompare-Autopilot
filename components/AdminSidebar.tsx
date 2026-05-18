"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const NAV = [
  { href: "/admin/dashboard", label: "Dashboard" },
  { href: "/admin/offers", label: "Angebote" },
  { href: "/admin/categories", label: "Kategorien" },
  { href: "/admin/comparisons", label: "Vergleichsseiten" },
  { href: "/admin/import", label: "Import" },
  { href: "/admin/marketing", label: "Marketing" },
  { href: "/admin/tracking", label: "Tracking" },
  { href: "/admin/autopilot", label: "Autopilot" },
  { href: "/admin/settings", label: "Einstellungen" },
];

export default function AdminSidebar() {
  const path = usePathname();
  return (
    <aside className="w-full border-b border-ink-200 bg-ink-50 md:w-60 md:border-b-0 md:border-r md:min-h-screen">
      <div className="px-4 py-4 text-sm font-semibold text-ink-500 uppercase tracking-wide">DeltaCompare Admin</div>
      <nav className="px-2 pb-4 md:pb-8 flex md:flex-col gap-1 overflow-x-auto">
        {NAV.map((n) => {
          const active = path?.startsWith(n.href);
          return (
            <Link
              key={n.href}
              href={n.href}
              className={cn(
                "rounded-lg px-3 py-2 text-sm whitespace-nowrap",
                active ? "bg-brand-600 text-white" : "text-ink-700 hover:bg-white"
              )}
            >
              {n.label}
            </Link>
          );
        })}
        <form action="/api/admin/logout" method="post" className="md:mt-6 md:pt-4 md:border-t md:border-ink-200">
          <button type="submit" className="w-full rounded-lg px-3 py-2 text-left text-sm text-ink-700 hover:bg-white">
            Abmelden
          </button>
        </form>
      </nav>
    </aside>
  );
}
