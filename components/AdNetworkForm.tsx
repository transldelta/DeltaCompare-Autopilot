type Network = {
  id?: string;
  name?: string;
  type?: string;
  status?: string;
  publisherId?: string;
  notes?: string;
};

const TYPES = ["ADSENSE", "AWIN", "FINANCEADS", "DIRECT", "OTHER"];

export default function AdNetworkForm({ network, action }: { network?: Network; action: string }) {
  const isNew = !network?.id;
  return (
    <form method="post" action={action} className="space-y-4 max-w-xl">
      {!isNew && <input type="hidden" name="id" value={network!.id} />}
      <label className="block">
        <span className="text-sm font-medium text-ink-800">Name *</span>
        <input
          name="name"
          defaultValue={network?.name}
          required
          className="mt-1 block w-full rounded-lg border border-ink-200 px-3 py-2 text-sm"
        />
      </label>
      <label className="block">
        <span className="text-sm font-medium text-ink-800">Typ</span>
        <select
          name="type"
          defaultValue={network?.type || "OTHER"}
          className="mt-1 block w-full rounded-lg border border-ink-200 bg-white px-3 py-2 text-sm"
        >
          {TYPES.map((t) => <option key={t} value={t}>{t}</option>)}
        </select>
      </label>
      <label className="block">
        <span className="text-sm font-medium text-ink-800">Publisher-ID / Konto-ID</span>
        <input
          name="publisherId"
          defaultValue={network?.publisherId}
          placeholder="z. B. ca-pub-XXXXXXXX (AdSense)"
          className="mt-1 block w-full rounded-lg border border-ink-200 px-3 py-2 text-sm"
        />
      </label>
      <label className="block">
        <span className="text-sm font-medium text-ink-800">Status</span>
        <select
          name="status"
          defaultValue={network?.status || "active"}
          className="mt-1 block w-full rounded-lg border border-ink-200 bg-white px-3 py-2 text-sm"
        >
          <option value="active">aktiv</option>
          <option value="inactive">inaktiv</option>
        </select>
      </label>
      <label className="block">
        <span className="text-sm font-medium text-ink-800">Notizen</span>
        <textarea
          name="notes"
          rows={3}
          defaultValue={network?.notes}
          className="mt-1 block w-full rounded-lg border border-ink-200 px-3 py-2 text-sm"
        />
      </label>
      <div className="flex gap-3">
        <button type="submit" className="btn-primary">Speichern</button>
        {!isNew && (
          <button
            type="submit"
            formAction={action.replace("/save", "/delete")}
            className="text-sm text-rose-700 hover:underline"
          >
            Löschen
          </button>
        )}
      </div>
    </form>
  );
}
