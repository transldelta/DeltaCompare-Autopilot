import Link from "next/link";
import Logo from "./Logo";
import { getSiteName } from "@/lib/utils";
import { AFFILIATE_DISCLOSURE_TEXT } from "@/lib/affiliate";

const COLUMNS: { title: string; links: { href: string; label: string }[] }[] = [
  {
    title: "Vergleiche",
    links: [
      { href: "/kategorien", label: "Alle Kategorien" },
      { href: "/vergleich", label: "Alle Vergleiche" },
      { href: "/anbieter", label: "Anbieter" },
    ],
  },
  {
    title: "Business",
    links: [
      { href: "/kategorien/geschaeftskonto-kreditkarten", label: "Geschäftskonto" },
      { href: "/kategorien/buchhaltung-steuern", label: "Buchhaltung & Steuern" },
      { href: "/kategorien/versicherungen", label: "Versicherungen" },
    ],
  },
  {
    title: "Ratgeber",
    links: [
      { href: "/ratgeber", label: "Alle Ratgeber" },
      { href: "/kontakt", label: "Kontakt" },
    ],
  },
  {
    title: "Rechtliches",
    links: [
      { href: "/impressum", label: "Impressum" },
      { href: "/datenschutz", label: "Datenschutz" },
      { href: "/affiliate-hinweis", label: "Affiliate-Hinweis" },
      { href: "/haftungsausschluss", label: "Haftungsausschluss" },
    ],
  },
];

export default function Footer() {
  const year = new Date().getFullYear();
  const site = getSiteName();
  return (
    <footer className="relative mt-20 overflow-hidden bg-brand-950 text-brand-100">
      <div className="pointer-events-none absolute -left-32 -top-32 h-80 w-80 rounded-full bg-brand-500/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 right-1/4 h-80 w-80 rounded-full bg-accent-500/10 blur-3xl" />
      <div className="container-page relative grid gap-10 py-16 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Logo variant="light" />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-brand-200">
            Vergleichen. Entscheiden. Sparen. Unabhängige Vergleiche für Verbraucher, Familien, Selbstständige und
            Unternehmen – transparent gekennzeichnet.
          </p>
          <p className="mt-4 max-w-xs text-xs leading-relaxed text-brand-300/80">{AFFILIATE_DISCLOSURE_TEXT}</p>
        </div>
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 lg:col-span-8">
          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h4 className="text-sm font-bold text-white">{col.title}</h4>
              <ul className="mt-3 space-y-2 text-sm text-brand-200">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="transition hover:text-white">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="relative border-t border-white/10">
        <div className="container-page flex flex-col items-center justify-between gap-2 py-5 text-center text-xs text-brand-300 sm:flex-row sm:text-left">
          <span>© {year} {site} · deltavergleich.de · Alle Angaben ohne Gewähr.</span>
          <span>Keine Finanz-, Steuer- oder Rechtsberatung.</span>
        </div>
      </div>
    </footer>
  );
}
