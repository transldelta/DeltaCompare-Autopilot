type Category = { id: string; name: string; slug: string };
type Offer = {
  id?: string;
  name?: string;
  slug?: string;
  categoryId?: string;
  network?: string;
  affiliateLink?: string;
  trackingId?: string;
  commissionType?: string;
  estimatedCommission?: string;
  shortDescription?: string;
  longDescription?: string;
  advantages?: string;
  disadvantages?: string;
  priceNote?: string;
  rating?: number;
  logoUrl?: string;
  buttonText?: string;
  status?: string;
  isFeatured?: boolean;
};

export default function OfferForm({
  categories,
  offer,
  networks,
  action,
}: {
  categories: Category[];
  offer?: Offer;
  networks: string[];
  action: string;
}) {
  const isNew = !offer?.id;
  return (
    <form method="post" action={action} className="space-y-6 max-w-3xl">
      {!isNew && <input type="hidden" name="id" value={offer!.id} />}
      <div className="grid gap-4 sm:grid-cols-2">
        <Input name="name" label="Name *" defaultValue={offer?.name} required />
        <Input name="slug" label="Slug *" defaultValue={offer?.slug} required />
        <Select
          name="categoryId"
          label="Kategorie *"
          defaultValue={offer?.categoryId}
          options={categories.map((c) => ({ value: c.id, label: c.name }))}
          required
        />
        <Select
          name="network"
          label="Netzwerk"
          defaultValue={offer?.network}
          options={networks.map((n) => ({ value: n, label: n }))}
        />
        <Input
          name="affiliateLink"
          label="Affiliate-Link *"
          defaultValue={offer?.affiliateLink}
          placeholder="DEMO_LINK_ERSETZEN oder echte URL"
          required
        />
        <Input name="trackingId" label="Tracking-ID" defaultValue={offer?.trackingId} />
        <Select
          name="commissionType"
          label="Provisionstyp"
          defaultValue={offer?.commissionType}
          options={[
            { value: "Lead", label: "Lead" },
            { value: "Sale", label: "Sale" },
            { value: "Recurring", label: "Recurring" },
            { value: "CPC", label: "CPC" },
          ]}
        />
        <Input name="estimatedCommission" label="Geschätzte Provision (intern)" defaultValue={offer?.estimatedCommission} />
        <Input name="rating" label="Bewertung (0–5)" defaultValue={offer?.rating?.toString()} type="number" step="0.1" min="0" max="5" />
        <Input name="logoUrl" label="Logo-URL" defaultValue={offer?.logoUrl} />
        <Input name="buttonText" label="Button-Text" defaultValue={offer?.buttonText || "Zum Anbieter"} />
        <Select
          name="status"
          label="Status"
          defaultValue={offer?.status}
          options={[
            { value: "active", label: "aktiv" },
            { value: "inactive", label: "inaktiv" },
            { value: "draft", label: "Entwurf" },
          ]}
        />
      </div>
      <Textarea
        name="shortDescription"
        label="Kurzbeschreibung *"
        defaultValue={offer?.shortDescription}
        required
        rows={2}
      />
      <Textarea name="longDescription" label="Langbeschreibung *" defaultValue={offer?.longDescription} required rows={6} />
      <Textarea
        name="advantages"
        label="Vorteile (mit | getrennt)"
        defaultValue={offer?.advantages}
        rows={3}
      />
      <Textarea
        name="disadvantages"
        label="Nachteile (mit | getrennt)"
        defaultValue={offer?.disadvantages}
        rows={3}
      />
      <Textarea name="priceNote" label="Preishinweis" defaultValue={offer?.priceNote} rows={2} />
      <label className="flex items-center gap-2 text-sm">
        <input type="checkbox" name="isFeatured" defaultChecked={offer?.isFeatured} />
        Featured (auf Startseite anzeigen)
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

function Input(props: React.InputHTMLAttributes<HTMLInputElement> & { label: string }) {
  const { label, ...rest } = props;
  return (
    <label className="block">
      <span className="text-sm font-medium text-ink-800">{label}</span>
      <input
        {...rest}
        className="mt-1 block w-full rounded-lg border border-ink-200 px-3 py-2 text-sm focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500"
      />
    </label>
  );
}

function Textarea(props: React.TextareaHTMLAttributes<HTMLTextAreaElement> & { label: string }) {
  const { label, ...rest } = props;
  return (
    <label className="block">
      <span className="text-sm font-medium text-ink-800">{label}</span>
      <textarea
        {...rest}
        className="mt-1 block w-full rounded-lg border border-ink-200 px-3 py-2 text-sm focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500"
      />
    </label>
  );
}

function Select({
  label,
  options,
  ...rest
}: React.SelectHTMLAttributes<HTMLSelectElement> & { label: string; options: { value: string; label: string }[] }) {
  return (
    <label className="block">
      <span className="text-sm font-medium text-ink-800">{label}</span>
      <select
        {...rest}
        className="mt-1 block w-full rounded-lg border border-ink-200 bg-white px-3 py-2 text-sm focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500"
      >
        <option value="">– bitte wählen –</option>
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
    </label>
  );
}
