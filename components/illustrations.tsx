/**
 * Selbst erstellte, lizenzfreie SVG-Illustrationen im Fintech/SaaS-Stil.
 * Inline gerendert (kein externes Asset, performant, responsive).
 * Farben nutzen die Marken-Palette (brand/accent).
 */

type Props = { className?: string };

export function CompareScene({ className }: Props) {
  return (
    <svg viewBox="0 0 320 240" className={className} role="img" aria-label="Vergleichen" fill="none">
      <defs>
        <linearGradient id="cmp-a" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#3a62ef" /><stop offset="1" stopColor="#1c34c1" />
        </linearGradient>
        <linearGradient id="cmp-b" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#34d399" /><stop offset="1" stopColor="#059669" />
        </linearGradient>
      </defs>
      <rect x="24" y="60" width="124" height="150" rx="16" fill="#fff" stroke="#e2e8f0" />
      <rect x="172" y="40" width="124" height="170" rx="16" fill="#fff" stroke="#e2e8f0" />
      <rect x="172" y="40" width="124" height="170" rx="16" fill="url(#cmp-a)" opacity="0.06" />
      <circle cx="56" cy="92" r="14" fill="url(#cmp-a)" opacity="0.18" />
      <circle cx="204" cy="74" r="14" fill="url(#cmp-b)" opacity="0.2" />
      <rect x="80" y="84" width="50" height="8" rx="4" fill="#cbd5e1" />
      <rect x="80" y="100" width="34" height="7" rx="3.5" fill="#e2e8f0" />
      <rect x="228" y="66" width="50" height="8" rx="4" fill="#cbd5e1" />
      <rect x="228" y="82" width="34" height="7" rx="3.5" fill="#e2e8f0" />
      {[0, 1, 2].map((i) => (
        <g key={i}>
          <rect x="44" y={128 + i * 22} width="84" height="8" rx="4" fill="#eef2f7" />
          <rect x="190" y={108 + i * 22} width="88" height="8" rx="4" fill="#eef2f7" />
        </g>
      ))}
      <g transform="translate(244,176)">
        <circle r="22" fill="url(#cmp-b)" />
        <path d="M-9 1 l6 6 l12 -13" stroke="#fff" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
      </g>
      <circle cx="40" cy="34" r="6" fill="url(#cmp-a)" opacity="0.4" />
      <circle cx="300" cy="200" r="8" fill="url(#cmp-b)" opacity="0.4" />
    </svg>
  );
}

export function SaveScene({ className }: Props) {
  return (
    <svg viewBox="0 0 320 240" className={className} role="img" aria-label="Sparen" fill="none">
      <defs>
        <linearGradient id="sv-a" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0" stopColor="#34d399" /><stop offset="1" stopColor="#10b981" />
        </linearGradient>
      </defs>
      <rect x="40" y="150" width="40" height="60" rx="8" fill="#dbe7fe" />
      <rect x="96" y="116" width="40" height="94" rx="8" fill="#bed1fd" />
      <rect x="152" y="84" width="40" height="126" rx="8" fill="#92b3fa" />
      <rect x="208" y="50" width="40" height="160" rx="8" fill="url(#sv-a)" />
      <path d="M44 150 L116 110 L172 82 L228 44" stroke="#1c34c1" strokeWidth="3" fill="none" strokeLinecap="round" />
      {[[44,150],[116,110],[172,82],[228,44]].map(([x,y],i)=>(
        <circle key={i} cx={x} cy={y} r="5" fill="#fff" stroke="#1c34c1" strokeWidth="2.5" />
      ))}
      <g transform="translate(244,40)">
        <circle r="20" fill="#fff" stroke="#10b981" strokeWidth="2" />
        <text x="0" y="6" textAnchor="middle" fontSize="20" fontWeight="800" fill="#059669">€</text>
      </g>
    </svg>
  );
}

export function ContractScene({ className }: Props) {
  return (
    <svg viewBox="0 0 320 240" className={className} role="img" aria-label="Verträge" fill="none">
      <defs>
        <linearGradient id="ct-a" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#5e87f5" /><stop offset="1" stopColor="#2243dd" />
        </linearGradient>
      </defs>
      <rect x="84" y="34" width="150" height="184" rx="14" fill="#fff" stroke="#e2e8f0" />
      <rect x="84" y="34" width="150" height="44" rx="14" fill="url(#ct-a)" opacity="0.1" />
      <rect x="104" y="52" width="80" height="9" rx="4.5" fill="#94a3b8" />
      {[0,1,2,3,4].map((i)=>(
        <rect key={i} x="104" y={96 + i*18} width={i===4?70:110} height="7" rx="3.5" fill="#e2e8f0" />
      ))}
      <g transform="translate(196,180)">
        <circle r="26" fill="url(#ct-a)" />
        <path d="M-11 2 l7 7 l14 -16" stroke="#fff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      </g>
      <circle cx="70" cy="60" r="6" fill="#34d399" opacity="0.5" />
      <circle cx="250" cy="80" r="7" fill="#2243dd" opacity="0.3" />
    </svg>
  );
}

export function ShoppingScene({ className }: Props) {
  return (
    <svg viewBox="0 0 320 240" className={className} role="img" aria-label="Online-Shopping" fill="none">
      <defs>
        <linearGradient id="sh-a" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#fb923c" /><stop offset="1" stopColor="#ec4899" />
        </linearGradient>
      </defs>
      <rect x="70" y="70" width="180" height="120" rx="16" fill="#fff" stroke="#e2e8f0" />
      <rect x="70" y="70" width="180" height="34" rx="16" fill="url(#sh-a)" opacity="0.12" />
      <circle cx="92" cy="87" r="5" fill="#fb923c" /><circle cx="108" cy="87" r="5" fill="#f472b6" />
      <path d="M120 134 h70 l-8 34 h-54 z" fill="url(#sh-a)" opacity="0.85" />
      <path d="M128 134 a14 14 0 0 1 54 0" fill="none" stroke="#ec4899" strokeWidth="3.5" />
      <g transform="translate(214,150)">
        <circle r="20" fill="url(#sh-a)" />
        <path d="M-8 0 h16 M0 -8 v16" stroke="#fff" strokeWidth="3.5" strokeLinecap="round" />
      </g>
      <circle cx="60" cy="60" r="6" fill="#fb923c" opacity="0.5" />
      <circle cx="262" cy="180" r="7" fill="#ec4899" opacity="0.4" />
    </svg>
  );
}

export function FinanceScene({ className }: Props) {
  return (
    <svg viewBox="0 0 320 240" className={className} role="img" aria-label="Finanzen" fill="none">
      <defs>
        <linearGradient id="fn-a" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#38bdf8" /><stop offset="1" stopColor="#1c34c1" />
        </linearGradient>
      </defs>
      <rect x="64" y="78" width="192" height="118" rx="16" fill="url(#fn-a)" />
      <rect x="64" y="78" width="192" height="118" rx="16" fill="#000" opacity="0.04" />
      <rect x="84" y="104" width="46" height="30" rx="6" fill="#fff" opacity="0.5" />
      <rect x="84" y="160" width="120" height="8" rx="4" fill="#fff" opacity="0.7" />
      <rect x="84" y="174" width="80" height="7" rx="3.5" fill="#fff" opacity="0.45" />
      <circle cx="226" cy="118" r="10" fill="#fff" opacity="0.85" />
      <circle cx="210" cy="118" r="10" fill="#34d399" opacity="0.85" />
      <circle cx="78" cy="62" r="7" fill="#38bdf8" opacity="0.5" />
      <circle cx="252" cy="200" r="8" fill="#1c34c1" opacity="0.3" />
    </svg>
  );
}

export function BusinessScene({ className }: Props) {
  return (
    <svg viewBox="0 0 320 240" className={className} role="img" aria-label="Business-Tools" fill="none">
      <defs>
        <linearGradient id="bs-a" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#2243dd" /><stop offset="1" stopColor="#10b981" />
        </linearGradient>
      </defs>
      <rect x="48" y="60" width="224" height="140" rx="16" fill="#fff" stroke="#e2e8f0" />
      <rect x="48" y="60" width="224" height="30" rx="16" fill="#f1f5f9" />
      <circle cx="66" cy="75" r="4" fill="#cbd5e1" /><circle cx="80" cy="75" r="4" fill="#cbd5e1" />
      <rect x="66" y="108" width="80" height="74" rx="10" fill="url(#bs-a)" opacity="0.12" />
      <path d="M80 168 l16 -20 l14 12 l20 -30" stroke="#2243dd" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="166" y="108" width="90" height="12" rx="6" fill="#e2e8f0" />
      <rect x="166" y="130" width="70" height="12" rx="6" fill="#e2e8f0" />
      <rect x="166" y="152" width="84" height="12" rx="6" fill="#dbe7fe" />
      <g transform="translate(238,176)"><circle r="18" fill="url(#bs-a)" /><path d="M-7 0 l5 5 l9 -11" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" /></g>
    </svg>
  );
}

/** Dezentes Punkt-Raster als Hintergrund-Pattern. */
export function DotPattern({ className }: Props) {
  return (
    <svg className={className} aria-hidden width="100%" height="100%">
      <defs>
        <pattern id="dots" width="22" height="22" patternUnits="userSpaceOnUse">
          <circle cx="1.5" cy="1.5" r="1.5" fill="currentColor" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#dots)" />
    </svg>
  );
}
