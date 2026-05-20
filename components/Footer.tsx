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
    <footer className="mt-20 border-t border-ink-200 bg-ink-50">
      <div className="container-page grid gap-10 py-14 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Logo />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-600">
            Vergleiche für Selbstständige, Business, Finanzen und digitale Tools. Unabhängig, transparent gekennzeichnet
            und auf Selbstständige zugeschnitten.
          </p>
          <p className="mt-4 text-xs leading-relaxed text-ink-500">{AFFILIATE_DISCLOSURE_TEXT}</p>
        </div>
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 lg:col-span-8">
          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h4 className="text-sm font-bold text-ink-900">{col.title}</h4>
              <ul className="mt-3 space-y-2 text-sm text-ink-600">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="transition hover:text-brand-700">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="border-t border-ink-200">
        <div className="container-page flex flex-col items-center justify-between gap-2 py-5 text-center text-xs text-ink-500 sm:flex-row sm:text-left">
          <span>© {year} {site}. Alle Angaben ohne Gewähr. Preise und Verfügbarkeit können sich ändern.</span>
          <span>Keine Finanz-, Steuer- oder Rechtsberatung.</span>
        </div>
      </div>
    </footer>
  );
}
