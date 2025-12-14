"use client";

interface SemicircleSVGProps {
  radius: number;
  maxSize?: number;
}

export function SemicircleSVG({
  radius,
  maxSize = 220,
}: SemicircleSVGProps) {
  const MIN = 1;
  const MAX = 100;

  const r = Math.min(Math.max(radius, MIN), MAX);

  const scale = maxSize / (2 * r);
  const R = r * scale;

  const padding = 40;
  const cx = padding + R;
  const cy = padding + R;

  const svgW = 2 * R + padding * 2;
  const svgH = R + padding * 2;

  return (
    <svg
      width={svgW}
      height={svgH}
      viewBox={`0 0 ${svgW} ${svgH}`}
      className="mx-auto transition-all duration-200"
    >
      {/* Semicircle path */}
      <path
        d={`
          M ${padding},${cy}
          A ${R},${R} 0 0 1 ${padding + 2 * R},${cy}
          L ${padding + 2 * R},${cy}
          L ${padding},${cy}
          Z
        `}
        fill="#eef2ff"
        stroke="#4f46e5"
        strokeWidth={2}
      />

      {/* Radius line */}
      <line
        x1={cx}
        y1={cy}
        x2={cx + R}
        y2={cy}
        stroke="#64748b"
        strokeDasharray="4 2"
      />
      <text
        x={cx + R / 2}
        y={cy - 8}
        textAnchor="middle"
        className="fill-slate-600 text-sm"
      >
        r
      </text>

      {/* Diameter label */}
      <text
        x={cx}
        y={cy + 18}
        textAnchor="middle"
        className="fill-slate-600 text-sm"
      >
        2r
      </text>
    </svg>
  );
}
