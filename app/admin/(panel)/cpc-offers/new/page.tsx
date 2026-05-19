import { prisma } from "@/lib/prisma";
import CpcOfferForm from "@/components/CpcOfferForm";

export const dynamic = "force-dynamic";

export default async function NewCpcOfferPage() {
  const categories = await prisma.category.findMany({ orderBy: { name: "asc" } });
  return (
    <div className="p-6 lg:p-8">
      <h1 className="text-2xl font-bold text-ink-900">Neues CPC-Angebot</h1>
      <div className="mt-6">
        <CpcOfferForm categories={categories} action="/api/admin/cpc-offers/save" />
      </div>
    </div>
  );
}
