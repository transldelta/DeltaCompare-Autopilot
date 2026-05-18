import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getCurrentAdmin } from "@/lib/auth";
import { rowsToCsv } from "@/lib/importers";

export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
  const admin = await getCurrentAdmin();
  if (!admin) return NextResponse.redirect(new URL("/admin/login", req.url), { status: 303 });

  const clicks = await prisma.clickEvent.findMany({ include: { offer: true }, orderBy: { createdAt: "desc" } });
  const rows = clicks.map((c) => ({
    date: c.createdAt.toISOString(),
    offer: c.offer.name,
    offerSlug: c.offer.slug,
    pageSlug: c.pageSlug,
    device: c.device,
    referrer: c.referrer,
  }));
  const csv = rowsToCsv(rows);
  return new NextResponse(csv, {
    headers: {
      "Content-Type": "text/csv; charset=utf-8",
      "Content-Disposition": `attachment; filename="deltacompare-clicks-${new Date().toISOString().slice(0, 10)}.csv"`,
    },
  });
}
