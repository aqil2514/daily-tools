"use client";

interface RhombusSVGProps {
  d1: number;
  d2: number;
  maxSize?: number;
}

export function RhombusSVG({
  d1,
  d2,
  maxSize = 220,
}: RhombusSVGProps) {
  const MIN = 1;
  const MAX = 100;

  const D1 = Math.min(Math.max(d1, MIN), MAX);
  const D2 = Math.min(Math.max(d2, MIN), MAX);

  const scale = maxSize / Math.max(D1, D2);
  const rD1 = D1 * scale;
  const rD2 = D2 * scale;

  const padding = 40;
  const cx = padding + rD1 / 2;
  const cy = padding + rD2 / 2;

  const svgWidth = rD1 + padding * 2;
  const svgHeight = rD2 + padding * 2;

  return (
    <svg
      width={svgWidth}
      height={svgHeight}
      viewBox={`0 0 ${svgWidth} ${svgHeight}`}
      className="mx-auto transition-all duration-200"
    >
      {/* Shape */}
      <polygon
        points={`
          ${cx},${padding}
          ${padding + rD1},${cy}
          ${cx},${padding + rD2}
          ${padding},${cy}
        `}
        fill="#fdf4ff"
        stroke="#a21caf"
        strokeWidth={2}
      />

      {/* Diagonal 1 */}
      <line
        x1={padding}
        y1={cy}
        x2={padding + rD1}
        y2={cy}
        stroke="#64748b"
        strokeDasharray="4 2"
      />
      <text
        x={cx}
        y={cy - 8}
        textAnchor="middle"
        className="fill-slate-600 text-sm"
      >
        d₁
      </text>

      {/* Diagonal 2 */}
      <line
        x1={cx}
        y1={padding}
        x2={cx}
        y2={padding + rD2}
        stroke="#64748b"
        strokeDasharray="4 2"
      />
      <text
        x={cx + 8}
        y={cy}
        dominantBaseline="middle"
        className="fill-slate-600 text-sm"
      >
        d₂
      </text>
    </svg>
  );
}
