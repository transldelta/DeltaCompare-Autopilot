import Link from "next/link";
import { getSiteName } from "@/lib/utils";

const NAV = [
  { href: "/", label: "Start" },
  { href: "/kategorien", label: "Kategorien" },
  { href: "/vergleich", label: "Vergleiche" },
  { href: "/anbieter", label: "Anbieter" },
  { href: "/ratgeber", label: "Ratgeber" },
  { href: "/kontakt", label: "Kontakt" },
];

export default function Header() {
  const site = getSiteName();
  return (
    <header className="sticky top-0 z-30 border-b border-ink-200 bg-white/90 backdrop-blur">
      <div className="container-page flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-600 text-white font-bold">Δ</span>
          <span className="text-lg font-bold text-ink-900">{site}</span>
        </Link>
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-ink-700">
          {NAV.map((n) => (
            <Link key={n.href} href={n.href} className="hover:text-brand-700">
              {n.label}
            </Link>
          ))}
        </nav>
        <Link href="/vergleich" className="btn-primary hidden md:inline-flex">Vergleiche starten</Link>
      </div>
      <nav className="md:hidden border-t border-ink-100 bg-white">
        <div className="container-page flex overflow-x-auto gap-5 py-2 text-sm font-medium text-ink-700">
          {NAV.map((n) => (
            <Link key={n.href} href={n.href} className="whitespace-nowrap hover:text-brand-700">
              {n.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
