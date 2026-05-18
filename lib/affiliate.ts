import { prisma } from "./prisma";
import { isDemoLink } from "./utils";

export async function resolveOfferForRedirect(slug: string) {
  const offer = await prisma.offer.findUnique({ where: { slug } });
  if (!offer) return { found: false as const };
  if (offer.status !== "active") return { found: true as const, blocked: true as const, reason: "inactive" as const, offer };
  if (isDemoLink(offer.affiliateLink)) return { found: true as const, blocked: true as const, reason: "demo" as const, offer };
  return { found: true as const, blocked: false as const, offer };
}

export function appendTrackingId(url: string, trackingId?: string | null): string {
  if (!trackingId) return url;
  try {
    const u = new URL(url);
    if (!u.searchParams.has("subid")) u.searchParams.set("subid", trackingId);
    return u.toString();
  } catch {
    return url;
  }
}

export const AFFILIATE_DISCLOSURE_TEXT =
  "Diese Webseite enthält Affiliate-Links. Wenn Sie über einen solchen Link ein Angebot abschließen oder ein Produkt kaufen, erhalten wir möglicherweise eine Provision. Für Sie entstehen dadurch keine zusätzlichen Kosten.";

export const AFFILIATE_BUTTON_BADGE = "Werbung / Affiliate-Link";

export const SUPPORTED_NETWORKS = [
  "Awin",
  "financeAds",
  "CHECK24",
  "Tarifcheck",
  "PartnerStack",
  "impact.com",
  "HubSpot",
  "Shopify",
  "Direkt",
];
