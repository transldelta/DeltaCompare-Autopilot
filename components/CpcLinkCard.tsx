import Link from "next/link";
import { AD_LABEL } from "@/lib/adRules";

type Props = {
  offer: {
    slug: string;
    name: string;
    description: string;
    network: string;
  };
};

/**
 * Dezente CPC-Text-Link-Karte. Wird über /cpc/[slug] getrackt.
 * Klare Werbe-Kennzeichnung, kein Klick-Druck, rel="sponsored nofollow".
 */
export default function CpcLinkCard({ offer }: Props) {
  return (
    <div className="rounded-xl border border-ink-200 bg-white p-4">
      <div className="flex items-center justify-between text-[10px] uppercase tracking-wide text-ink-500">
        <span>{AD_LABEL}</span>
        <span>{offer.network}</span>
      </div>
      <h3 className="mt-2 text-base font-semibold text-ink-900">{offer.name}</h3>
      <p className="mt-1 text-sm text-ink-600">{offer.description}</p>
      <Link
        href={`/cpc/${offer.slug}`}
        rel="sponsored nofollow noopener"
        target="_blank"
        className="mt-3 inline-flex items-center text-sm font-medium text-brand-700 hover:underline"
      >
        Mehr erfahren →
      </Link>
    </div>
  );
}
