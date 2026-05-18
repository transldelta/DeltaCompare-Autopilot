import Link from "next/link";
import { AFFILIATE_BUTTON_BADGE } from "@/lib/affiliate";

type Props = {
  offerSlug: string;
  label?: string;
  className?: string;
};

export default function AffiliateButton({ offerSlug, label = "Zum Anbieter", className }: Props) {
  return (
    <div className="flex flex-col items-start gap-1">
      <Link
        href={`/go/${offerSlug}`}
        rel="sponsored nofollow noopener"
        target="_blank"
        className={`btn-affiliate ${className ?? ""}`}
      >
        {label}
        <span aria-hidden>→</span>
      </Link>
      <span className="text-[10px] uppercase tracking-wide text-ink-500">{AFFILIATE_BUTTON_BADGE}</span>
    </div>
  );
}
