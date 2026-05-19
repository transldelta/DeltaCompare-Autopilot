import AdNetworkForm from "@/components/AdNetworkForm";

export default function NewAdNetworkPage() {
  return (
    <div className="p-6 lg:p-8">
      <h1 className="text-2xl font-bold text-ink-900">Neues Werbenetzwerk</h1>
      <div className="mt-6">
        <AdNetworkForm action="/api/admin/ad-networks/save" />
      </div>
    </div>
  );
}
