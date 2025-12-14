"use client";

interface KiteSVGProps {
  d1: number; // diagonal vertikal
  d2: number; // diagonal horizontal
  maxSize?: number;
}

export function KiteSVG({
  d1,
  d2,
  maxSize = 240,
}: KiteSVGProps) {
  const MIN = 1;
  const MAX = 100;

  const D1 = Math.min(Math.max(d1, MIN), MAX);
  const D2 = Math.min(Math.max(d2, MIN), MAX);

  const scale = maxSize / Math.max(D1, D2);
  const rD1 = D1 * scale;
  const rD2 = D2 * scale;

  const padding = 40;
  const cx = padding + rD2 / 2;
  const cy = padding + rD1 / 2;

  const svgW = rD2 + padding * 2;
  const svgH = rD1 + padding * 2;

  return (
    <svg
      width={svgW}
      height={svgH}
      viewBox={`0 0 ${svgW} ${svgH}`}
      className="mx-auto transition-all duration-200"
    >
      {/* Shape */}
      <polygon
        points={`
          ${cx},${padding}
          ${padding + rD2},${cy}
          ${cx},${padding + rD1}
          ${padding},${cy}
        `}
        fill="#ecfeff"
        stroke="#0891b2"
        strokeWidth={2}
      />

      {/* Diagonal vertical (d1) */}
      <line
        x1={cx}
        y1={padding}
        x2={cx}
        y2={padding + rD1}
        stroke="#64748b"
        strokeDasharray="4 2"
      />
      <text
        x={cx + 6}
        y={padding + rD1 / 2}
        dominantBaseline="middle"
        className="fill-slate-600 text-sm"
      >
        d₁
      </text>

      {/* Diagonal horizontal (d2) */}
      <line
        x1={padding}
        y1={cy}
        x2={padding + rD2}
        y2={cy}
        stroke="#64748b"
        strokeDasharray="4 2"
      />
      <text
        x={padding + rD2 / 2}
        y={cy - 8}
        textAnchor="middle"
        className="fill-slate-600 text-sm"
      >
        d₂
      </text>
    </svg>
  );
}
