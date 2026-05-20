import Link from "next/link";
import AffiliateButton from "./AffiliateButton";
import { RatingBadge } from "./ui";

type Props = {
  offer: {
    name: string;
    slug: string;
    shortDescription: string;
    rating: number;
    priceNote?: string;
    advantages?: string;
    disadvantages?: string;
    logoUrl?: string;
    buttonText?: string;
    isFeatured?: boolean;
    network?: string;
  };
  badge?: string;
};

function initials(name: string) {
  return name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export default function OfferCard({ offer, badge }: Props) {
  const adv = (offer.advantages || "").split("|").filter(Boolean).slice(0, 3);
  const dis = (offer.disadvantages || "").split("|").filter(Boolean).slice(0, 1);
  const topBadge = badge || (offer.isFeatured ? "Top Wahl" : undefined);

  return (
    <article className="card flex h-full flex-col">
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-base font-extrabold text-brand-600">
            {initials(offer.name)}
          </span>
          <div>
            <Link href={`/anbieter/${offer.slug}`} className="flex items-center gap-2 text-lg font-bold text-ink-900 hover:text-brand-700">
              {offer.name}
            </Link>
            {topBadge && <span className="badge-accent mt-1">{topBadge}</span>}
          </div>
        </div>
        <RatingBadge rating={offer.rating} />
      </div>

      <p className="mt-3 text-sm text-ink-600">{offer.shortDescription}</p>

      {adv.length > 0 && (
        <ul className="mt-4 space-y-2 text-sm text-ink-700">
          {adv.map((a) => (
            <li key={a} className="flex items-start gap-2">
              <svg viewBox="0 0 20 20" className="mt-0.5 h-4 w-4 shrink-0 fill-accent-500" aria-hidden>
                <path d="M8 13.2l-3.2-3.2-1.4 1.4L8 16l9-9-1.4-1.4z" />
              </svg>
              <span>{a}</span>
            </li>
          ))}
          {dis.map((d) => (
            <li key={d} className="flex items-start gap-2 text-ink-400">
              <span className="mt-0.5 inline-flex h-4 w-4 shrink-0 items-center justify-center text-ink-300">–</span>
              <span>{d}</span>
            </li>
          ))}
        </ul>
      )}

      {offer.priceNote && <p className="mt-4 rounded-lg bg-ink-50 px-3 py-2 text-xs text-ink-500">{offer.priceNote}</p>}

      <div className="mt-5 flex flex-wrap items-end justify-between gap-3 pt-1">
        <AffiliateButton offerSlug={offer.slug} label={offer.buttonText || "Zum Anbieter"} />
        <Link href={`/anbieter/${offer.slug}`} className="text-sm font-semibold text-brand-700 hover:underline">
          Details →
        </Link>
      </div>
    </article>
  );
}
