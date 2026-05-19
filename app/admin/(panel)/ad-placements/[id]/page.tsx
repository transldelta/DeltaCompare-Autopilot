import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import AdPlacementManager from "@/components/AdPlacementManager";

export const dynamic = "force-dynamic";

export default async function EditAdPlacementPage({ params }: { params: { id: string } }) {
  const [placement, networks] = await Promise.all([
    prisma.adPlacement.findUnique({ where: { id: params.id } }),
    prisma.adNetwork.findMany({ orderBy: { name: "asc" } }),
  ]);
  if (!placement) return notFound();
  return (
    <div className="p-6 lg:p-8">
      <h1 className="text-2xl font-bold text-ink-900">Anzeigen-Platz bearbeiten</h1>
      <p className="mt-1 text-sm text-ink-600">{placement.name}</p>
      <div className="mt-6">
        <AdPlacementManager networks={networks} placement={placement} action="/api/admin/ad-placements/save" />
      </div>
    </div>
  );
}
