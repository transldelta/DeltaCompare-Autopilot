import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { resolveOfferForRedirect, appendTrackingId } from "@/lib/affiliate";
import { detectDevice, getClientIp, hashIp } from "@/lib/tracking";

export const dynamic = "force-dynamic";

export async function GET(req: NextRequest, { params }: { params: { offerSlug: string } }) {
  const result = await resolveOfferForRedirect(params.offerSlug);
  const url = req.nextUrl.clone();

  if (!result.found) {
    return NextResponse.redirect(new URL("/anbieter", url));
  }
  if (result.blocked) {
    const target = new URL(`/anbieter/${result.offer.slug}?status=${result.reason}`, url);
    return NextResponse.redirect(target);
  }

  const offer = result.offer;
  const userAgent = req.headers.get("user-agent") || "";
  const referrer = req.headers.get("referer") || "";
  const ip = getClientIp(req.headers);
  const pageSlug = req.nextUrl.searchParams.get("from") || "";

  // Klick speichern, Fehler nicht blockierend
  prisma.clickEvent
    .create({
      data: {
        offerId: offer.id,
        pageSlug,
        referrer,
        userAgent,
        device: detectDevice(userAgent),
        ipHash: hashIp(ip),
      },
    })
    .catch((err) => {
      console.error("ClickEvent konnte nicht gespeichert werden:", err);
    });

  const target = appendTrackingId(offer.affiliateLink, offer.trackingId);
  return NextResponse.redirect(target, { status: 302 });
}
