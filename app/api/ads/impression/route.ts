import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { detectDevice } from "@/lib/tracking";
import { isAdAllowedOnPath } from "@/lib/adRules";

export const dynamic = "force-dynamic";

const BOT_UA = /(bot|spider|crawler|curl|wget|python-requests|headless|preview|monitor)/i;

/**
 * Beacon-Endpoint für Anzeigen-Impressionen.
 *
 * Bedingungen für eine gezählte Impression:
 *   - Aktiver AdPlacement-Datensatz zum Slug
 *   - Pfad ist anzeigenfähig (siehe lib/adRules)
 *   - Kein Bot-User-Agent
 *
 * Speichert nur anonymisierte Daten (kein IP, kein User-Agent).
 */
export async function POST(req: NextRequest) {
  try {
    const userAgent = req.headers.get("user-agent") || "";
    if (BOT_UA.test(userAgent)) {
      return NextResponse.json({ ok: true, ignored: "bot" });
    }
    const body = await req.json().catch(() => ({}));
    const placementSlug = String(body.placementSlug || "");
    const pageSlug = String(body.pageSlug || "");

    if (!placementSlug) return NextResponse.json({ ok: false, error: "no_slug" }, { status: 400 });
    if (!isAdAllowedOnPath(pageSlug)) {
      return NextResponse.json({ ok: true, ignored: "blocked_path" });
    }

    const placement = await prisma.adPlacement.findUnique({ where: { slug: placementSlug } });
    if (!placement || !placement.isActive) {
      return NextResponse.json({ ok: true, ignored: "not_active" });
    }

    await prisma.adImpression.create({
      data: {
        placementId: placement.id,
        pageSlug,
        device: detectDevice(userAgent),
      },
    });
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("impression beacon error:", err);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
