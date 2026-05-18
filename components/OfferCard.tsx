import Link from "next/link";
import AffiliateButton from "./AffiliateButton";

type Props = {
  offer: {
    name: string;
    slug: string;
    shortDescription: string;
    rating: number;
    priceNote?: string;
    advantages?: string;
    logoUrl?: string;
    buttonText?: string;
  };
};

export default function OfferCard({ offer }: Props) {
  const adv = (offer.advantages || "").split("|").filter(Boolean).slice(0, 3);
  return (
    <article className="card flex h-full flex-col">
      <div className="flex items-start justify-between gap-3">
        <div>
          <Link href={`/anbieter/${offer.slug}`} className="text-lg font-semibold text-ink-900 hover:text-brand-700">
            {offer.name}
          </Link>
          <p className="mt-1 text-sm text-ink-600">{offer.shortDescription}</p>
        </div>
        <span className="shrink-0 rounded-full bg-emerald-50 px-2.5 py-1 text-sm font-semibold text-emerald-700">
          ★ {offer.rating.toFixed(1)}
        </span>
      </div>
      {adv.length > 0 && (
        <ul className="mt-4 space-y-1.5 text-sm text-ink-700">
          {adv.map((a) => (
            <li key={a} className="flex items-start gap-2">
              <span className="mt-1 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
              <span>{a}</span>
            </li>
          ))}
        </ul>
      )}
      {offer.priceNote && <p className="mt-3 text-xs text-ink-500">{offer.priceNote}</p>}
      <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
        <AffiliateButton offerSlug={offer.slug} label={offer.buttonText || "Zum Anbieter"} />
        <Link href={`/anbieter/${offer.slug}`} className="text-sm font-medium text-brand-700 hover:underline">
          Details ansehen →
        </Link>
      </div>
    </article>
  );
}
