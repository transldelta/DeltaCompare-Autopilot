type Category = { id: string; name: string };
type CpcOfferInput = {
  id?: string;
  name?: string;
  slug?: string;
  categoryId?: string | null;
  network?: string;
  cpcRate?: number;
  targetUrl?: string;
  affiliateLink?: string;
  trackingId?: string;
  description?: string;
  status?: string;
};

export default function CpcOfferForm({
  categories,
  offer,
  action,
}: {
  categories: Category[];
  offer?: CpcOfferInput;
  action: string;
}) {
  const isNew = !offer?.id;
  return (
    <form method="post" action={action} className="space-y-4 max-w-2xl">
      {!isNew && <input type="hidden" name="id" value={offer!.id} />}
      <div className="grid gap-4 sm:grid-cols-2">
        <Field name="name" label="Name *" defaultValue={offer?.name} required />
        <Field name="slug" label="Slug *" defaultValue={offer?.slug} required />
        <label className="block sm:col-span-2">
          <span className="text-sm font-medium text-ink-800">Kategorie</span>
          <select
            name="categoryId"
            defaultValue={offer?.categoryId || ""}
            className="mt-1 block w-full rounded-lg border border-ink-200 bg-white px-3 py-2 text-sm"
          >
            <option value="">– keine –</option>
            {categories.map((c) => (
              <option key={c.id} value={c.id}>{c.name}</option>
            ))}
          </select>
        </label>
        <Field name="network" label="Netzwerk" defaultValue={offer?.network || "Direkt"} />
        <Field
          name="cpcRate"
          label="CPC-Wert in € (geschätzt)"
          type="number"
          step="0.01"
          defaultValue={offer?.cpcRate?.toString() ?? "0.25"}
        />
        <Field
          name="targetUrl"
          label="Ziel-URL *"
          defaultValue={offer?.targetUrl}
          required
          placeholder="DEMO_LINK_ERSETZEN oder echte URL"
        />
        <Field name="affiliateLink" label="Affiliate-Link (alternativ)" defaultValue={offer?.affiliateLink} />
        <Field name="trackingId" label="Tracking-ID / SubID" defaultValue={offer?.trackingId} />
        <label className="block sm:col-span-2">
          <span className="text-sm font-medium text-ink-800">Status</span>
          <select
            name="status"
            defaultValue={offer?.status || "active"}
            className="mt-1 block w-full rounded-lg border border-ink-200 bg-white px-3 py-2 text-sm"
          >
            <option value="active">aktiv</option>
            <option value="inactive">inaktiv</option>
            <option value="draft">Entwurf</option>
          </select>
        </label>
      </div>
      <label className="block">
        <span className="text-sm font-medium text-ink-800">Beschreibung</span>
        <textarea
          name="description"
          defaultValue={offer?.description}
          rows={3}
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

function Field(props: React.InputHTMLAttributes<HTMLInputElement> & { label: string }) {
  const { label, ...rest } = props;
  return (
    <label className="block">
      <span className="text-sm font-medium text-ink-800">{label}</span>
      <input
        {...rest}
        className="mt-1 block w-full rounded-lg border border-ink-200 px-3 py-2 text-sm"
      />
    </label>
  );
}
