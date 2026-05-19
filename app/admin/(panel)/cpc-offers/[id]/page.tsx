import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import CpcOfferForm from "@/components/CpcOfferForm";

export const dynamic = "force-dynamic";

export default async function EditCpcOfferPage({ params }: { params: { id: string } }) {
  const [offer, categories] = await Promise.all([
    prisma.cpcOffer.findUnique({ where: { id: params.id } }),
    prisma.category.findMany({ orderBy: { name: "asc" } }),
  ]);
  if (!offer) return notFound();
  return (
    <div className="p-6 lg:p-8">
      <h1 className="text-2xl font-bold text-ink-900">CPC-Angebot bearbeiten</h1>
      <p className="mt-1 text-sm text-ink-600">{offer.name}</p>
      <div className="mt-6">
        <CpcOfferForm categories={categories} offer={offer} action="/api/admin/cpc-offers/save" />
      </div>
    </div>
  );
}
