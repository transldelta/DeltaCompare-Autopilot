import { redirect } from "next/navigation";
import { getCurrentAdmin } from "@/lib/auth";
import Logo from "@/components/Logo";

export const dynamic = "force-dynamic";

export default async function AdminLoginPage({
  searchParams,
}: {
  searchParams: { next?: string; error?: string };
}) {
  const admin = await getCurrentAdmin();
  if (admin) redirect(searchParams.next || "/admin/dashboard");

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-hero-gradient px-4">
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-brand-200/40 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-accent-200/30 blur-3xl" />

      <div className="relative w-full max-w-md">
        <div className="mb-6 flex justify-center">
          <Logo />
        </div>
        <div className="rounded-3xl border border-ink-200/80 bg-white/90 p-8 shadow-cardHover backdrop-blur">
          <div className="text-center">
            <span className="badge-brand mx-auto">Admin-Bereich</span>
            <h1 className="mt-3 text-2xl font-extrabold text-ink-900">Willkommen zurück</h1>
            <p className="mt-1 text-sm text-ink-600">Melde dich an, um dein Portal zu verwalten.</p>
          </div>

          {searchParams.error ? (
            <p className="mt-5 rounded-xl border border-rose-200 bg-rose-50 p-3 text-sm text-rose-700">
              {searchParams.error === "invalid" ? "E-Mail oder Passwort sind nicht korrekt." : "Anmeldung fehlgeschlagen."}
            </p>
          ) : null}

          <form action="/api/admin/login" method="post" className="mt-6 space-y-4">
            <input type="hidden" name="next" value={searchParams.next || "/admin/dashboard"} />
            <div>
              <label className="text-sm font-semibold text-ink-800">E-Mail</label>
              <input
                type="email"
                name="email"
                autoComplete="username"
                required
                placeholder="admin@deltavergleich.de"
                className="mt-1.5 block w-full rounded-xl border border-ink-200 px-3.5 py-2.5 text-sm transition focus:border-brand-500 focus:outline-none focus:ring-4 focus:ring-brand-600/10"
              />
            </div>
            <div>
              <label className="text-sm font-semibold text-ink-800">Passwort</label>
              <input
                type="password"
                name="password"
                autoComplete="current-password"
                required
                placeholder="••••••••"
                className="mt-1.5 block w-full rounded-xl border border-ink-200 px-3.5 py-2.5 text-sm transition focus:border-brand-500 focus:outline-none focus:ring-4 focus:ring-brand-600/10"
              />
            </div>
            <button type="submit" className="btn-primary w-full">Anmelden</button>
          </form>

          <p className="mt-6 text-center text-xs text-ink-400">
            Zugangsdaten werden über die Umgebungsvariablen <code>ADMIN_EMAIL</code> / <code>ADMIN_PASSWORD</code> gesetzt.
          </p>
        </div>
      </div>
    </div>
  );
}
