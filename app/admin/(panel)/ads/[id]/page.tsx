import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import AdNetworkForm from "@/components/AdNetworkForm";

export const dynamic = "force-dynamic";

export default async function EditAdNetworkPage({ params }: { params: { id: string } }) {
  const network = await prisma.adNetwork.findUnique({ where: { id: params.id } });
  if (!network) return notFound();
  return (
    <div className="p-6 lg:p-8">
      <h1 className="text-2xl font-bold text-ink-900">Werbenetzwerk bearbeiten</h1>
      <p className="mt-1 text-sm text-ink-600">{network.name}</p>
      <div className="mt-6">
        <AdNetworkForm network={network} action="/api/admin/ad-networks/save" />
      </div>
    </div>
  );
}
