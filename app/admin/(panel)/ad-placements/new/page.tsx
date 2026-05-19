import { prisma } from "@/lib/prisma";
import AdPlacementManager from "@/components/AdPlacementManager";

export const dynamic = "force-dynamic";

export default async function NewAdPlacementPage() {
  const networks = await prisma.adNetwork.findMany({ orderBy: { name: "asc" } });
  return (
    <div className="p-6 lg:p-8">
      <h1 className="text-2xl font-bold text-ink-900">Neuer Anzeigen-Platz</h1>
      <div className="mt-6">
        <AdPlacementManager networks={networks} action="/api/admin/ad-placements/save" />
      </div>
    </div>
  );
}
