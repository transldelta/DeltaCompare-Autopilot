import { prisma } from "@/lib/prisma";
import OfferForm from "@/components/OfferForm";
import { SUPPORTED_NETWORKS } from "@/lib/affiliate";

export const dynamic = "force-dynamic";

export default async function NewOfferPage() {
  const categories = await prisma.category.findMany({ orderBy: { name: "asc" } });
  return (
    <div className="p-6 lg:p-8">
      <h1 className="text-2xl font-bold text-ink-900">Neues Angebot</h1>
      <p className="mt-1 text-sm text-ink-600">Lege ein neues Angebot mit Affiliate-Link und Vergleichsdaten an.</p>
      <div className="mt-6">
        <OfferForm categories={categories} networks={SUPPORTED_NETWORKS} action="/api/admin/offers/save" />
      </div>
    </div>
  );
}
