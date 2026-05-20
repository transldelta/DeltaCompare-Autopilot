import { getSiteName } from "@/lib/utils";

export default function Logo({ variant = "dark" }: { variant?: "dark" | "light" }) {
  const site = getSiteName();
  const textColor = variant === "light" ? "text-white" : "text-ink-900";
  return (
    <span className="flex items-center gap-2.5">
      <span className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-brand-gradient shadow-soft">
        <svg viewBox="0 0 24 24" className="h-5 w-5 text-white" fill="none" aria-hidden>
          <path d="M12 3 L20 19 L4 19 Z" fill="currentColor" opacity="0.95" />
          <path d="M12 9 L16 17 L8 17 Z" fill="rgb(16 185 129)" />
        </svg>
      </span>
      <span className={`text-lg font-extrabold tracking-tight ${textColor}`}>
        Delta<span className="text-brand-600">Vergleich</span>
      </span>
    </span>
  );
}
