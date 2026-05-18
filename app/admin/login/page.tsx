import { redirect } from "next/navigation";
import { getCurrentAdmin } from "@/lib/auth";

export const dynamic = "force-dynamic";

export default async function AdminLoginPage({
  searchParams,
}: {
  searchParams: { next?: string; error?: string };
}) {
  const admin = await getCurrentAdmin();
  if (admin) redirect(searchParams.next || "/admin/dashboard");

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-ink-50 px-4">
      <div className="w-full max-w-md rounded-2xl border border-ink-200 bg-white p-8 shadow-card">
        <div className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-600 text-white font-bold">Δ</span>
          <span className="text-lg font-bold text-ink-900">DeltaCompare Admin</span>
        </div>
        <h1 className="mt-6 text-xl font-semibold text-ink-900">Anmeldung</h1>
        <p className="mt-1 text-sm text-ink-600">Bitte melde dich mit deinen Admin-Daten an.</p>

        {searchParams.error ? (
          <p className="mt-4 rounded-md bg-rose-50 p-3 text-sm text-rose-700">
            {searchParams.error === "invalid"
              ? "E-Mail oder Passwort sind nicht korrekt."
              : "Anmeldung fehlgeschlagen."}
          </p>
        ) : null}

        <form action="/api/admin/login" method="post" className="mt-6 space-y-4">
          <input type="hidden" name="next" value={searchParams.next || "/admin/dashboard"} />
          <div>
            <label className="text-sm font-medium text-ink-800">E-Mail</label>
            <input
              type="email"
              name="email"
              autoComplete="username"
              required
              className="mt-1 block w-full rounded-lg border border-ink-200 px-3 py-2 text-sm focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500"
            />
          </div>
          <div>
            <label className="text-sm font-medium text-ink-800">Passwort</label>
            <input
              type="password"
              name="password"
              autoComplete="current-password"
              required
              className="mt-1 block w-full rounded-lg border border-ink-200 px-3 py-2 text-sm focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500"
            />
          </div>
          <button type="submit" className="btn-primary w-full">Anmelden</button>
        </form>

        <p className="mt-6 text-xs text-ink-500">
          Hinweis: Standardzugang in der .env-Datei festlegen. Für Produktivbetrieb starkes Passwort verwenden.
        </p>
      </div>
    </div>
  );
}
