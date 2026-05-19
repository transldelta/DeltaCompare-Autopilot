import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { appendTrackingId } from "@/lib/affiliate";
import { detectDevice, getClientIp, hashIp } from "@/lib/tracking";
import { isDemoLink } from "@/lib/utils";

export const dynamic = "force-dynamic";

const BOT_UA = /(bot|spider|crawler|curl|wget|python-requests|headless|preview|monitor)/i;

export async function GET(req: NextRequest, { params }: { params: { slug: string } }) {
  const userAgent = req.headers.get("user-agent") || "";
  const offer = await prisma.cpcOffer.findUnique({ where: { slug: params.slug } });
  const url = req.nextUrl.clone();

  if (!offer) {
    return NextResponse.redirect(new URL("/", url));
  }
  if (offer.status !== "active") {
    return NextResponse.redirect(new URL("/?cpc=inactive", url));
  }

  const target = offer.affiliateLink || offer.targetUrl;
  if (!target || isDemoLink(target)) {
    return NextResponse.redirect(new URL(`/?cpc=demo&slug=${offer.slug}`, url));
  }

  // Bot-Erkennung: keine Klick-Zählung, aber weiterleiten.
  const isBot = BOT_UA.test(userAgent);
  if (!isBot) {
    const ip = getClientIp(req.headers);
    const pageSlug = req.nextUrl.searchParams.get("from") || "";
    prisma.adClick
      .create({
        data: {
          cpcOfferId: offer.id,
          pageSlug,
          referrer: req.headers.get("referer") || "",
          userAgent,
          device: detectDevice(userAgent),
          ipHash: hashIp(ip),
        },
      })
      .catch((err) => console.error("AdClick (CPC) konnte nicht gespeichert werden:", err));
  }

  return NextResponse.redirect(appendTrackingId(target, offer.trackingId), { status: 302 });
}
