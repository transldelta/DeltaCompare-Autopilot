import { prisma } from "@/lib/prisma";
import OfferForm from "@/components/OfferForm";
import { SUPPORTED_NETWORKS } from "@/lib/affiliate";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";

export default async function EditOfferPage({ params }: { params: { id: string } }) {
  const [offer, categories] = await Promise.all([
    prisma.offer.findUnique({ where: { id: params.id } }),
    prisma.category.findMany({ orderBy: { name: "asc" } }),
  ]);
  if (!offer) return notFound();

  return (
    <div className="p-6 lg:p-8">
      <h1 className="text-2xl font-bold text-ink-900">Angebot bearbeiten</h1>
      <p className="mt-1 text-sm text-ink-600">{offer.name}</p>
      <div className="mt-6">
        <OfferForm
          categories={categories}
          offer={offer}
          networks={SUPPORTED_NETWORKS}
          action="/api/admin/offers/save"
        />
      </div>
    </div>
  );
}
