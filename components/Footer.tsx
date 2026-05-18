import Link from "next/link";
import { getSiteName } from "@/lib/utils";
import { AFFILIATE_DISCLOSURE_TEXT } from "@/lib/affiliate";

export default function Footer() {
  const year = new Date().getFullYear();
  const site = getSiteName();
  return (
    <footer className="mt-16 border-t border-ink-200 bg-ink-50">
      <div className="container-page py-12 grid gap-10 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-600 text-white font-bold">Δ</span>
            <span className="text-lg font-bold text-ink-900">{site}</span>
          </div>
          <p className="mt-3 text-sm text-ink-600">
            Unabhängiges Vergleichsportal für Tools, Konten, Versicherungen und Services rund um Selbstständigkeit.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-ink-900">Vergleichen</h4>
          <ul className="mt-3 space-y-2 text-sm text-ink-600">
            <li><Link href="/kategorien">Kategorien</Link></li>
            <li><Link href="/vergleich">Vergleiche</Link></li>
            <li><Link href="/anbieter">Anbieter</Link></li>
            <li><Link href="/ratgeber">Ratgeber</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-ink-900">Rechtliches</h4>
          <ul className="mt-3 space-y-2 text-sm text-ink-600">
            <li><Link href="/impressum">Impressum</Link></li>
            <li><Link href="/datenschutz">Datenschutz</Link></li>
            <li><Link href="/affiliate-hinweis">Affiliate-Hinweis</Link></li>
            <li><Link href="/haftungsausschluss">Haftungsausschluss</Link></li>
            <li><Link href="/kontakt">Kontakt</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-ink-900">Hinweis</h4>
          <p className="mt-3 text-xs leading-relaxed text-ink-600">{AFFILIATE_DISCLOSURE_TEXT}</p>
        </div>
      </div>
      <div className="border-t border-ink-200 py-4 text-center text-xs text-ink-500">
        © {year} {site}. Alle Angaben ohne Gewähr. Keine Finanz-, Steuer- oder Rechtsberatung.
      </div>
    </footer>
  );
}
