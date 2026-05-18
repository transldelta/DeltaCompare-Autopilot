import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getCurrentAdmin } from "@/lib/auth";
import { rowsToCsv, OFFER_CSV_HEADERS } from "@/lib/importers";

export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
  const admin = await getCurrentAdmin();
  if (!admin) return NextResponse.redirect(new URL("/admin/login", req.url), { status: 303 });

  const offers = await prisma.offer.findMany({ include: { category: true } });
  const rows = offers.map((o) => ({
    name: o.name,
    slug: o.slug,
    category: o.category.slug,
    network: o.network,
    affiliateLink: o.affiliateLink,
    trackingId: o.trackingId,
    commissionType: o.commissionType,
    estimatedCommission: o.estimatedCommission,
    shortDescription: o.shortDescription,
    longDescription: o.longDescription,
    advantages: o.advantages,
    disadvantages: o.disadvantages,
    priceNote: o.priceNote,
    rating: o.rating,
    logoUrl: o.logoUrl,
    buttonText: o.buttonText,
    status: o.status,
  }));
  const csv = rowsToCsv(rows, OFFER_CSV_HEADERS);
  return new NextResponse(csv, {
    headers: {
      "Content-Type": "text/csv; charset=utf-8",
      "Content-Disposition": `attachment; filename="deltacompare-offers-${new Date().toISOString().slice(0, 10)}.csv"`,
    },
  });
}
