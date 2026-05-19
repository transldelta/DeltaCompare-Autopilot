type Props = {
  title?: string;
  children: React.ReactNode;
  tone?: "warn" | "info";
};

export default function AdWarningBox({ title = "Hinweis", children, tone = "info" }: Props) {
  const cls =
    tone === "warn"
      ? "border-amber-200 bg-amber-50 text-amber-900"
      : "border-ink-200 bg-ink-50 text-ink-700";
  return (
    <div className={`rounded-xl border p-4 text-sm ${cls}`}>
      <strong className="block">{title}</strong>
      <div className="mt-1">{children}</div>
    </div>
  );
}
