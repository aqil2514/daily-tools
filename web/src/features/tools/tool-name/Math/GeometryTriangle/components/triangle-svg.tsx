"use client";

interface TriangleSVGProps {
  base: number;
  height: number;
  maxSize?: number;
}

export function TriangleSVG({
  base,
  height,
  maxSize = 200,
}: TriangleSVGProps) {
  const MIN = 1;
  const MAX = 100;

  const b = Math.min(Math.max(base, MIN), MAX);
  const h = Math.min(Math.max(height, MIN), MAX);

  const scale = maxSize / Math.max(b, h);
  const rb = b * scale;
  const rh = h * scale;

  const padding = 40;
  const svgWidth = rb + padding * 2;
  const svgHeight = rh + padding * 2;

  const x0 = padding;
  const y0 = padding + rh;

  return (
    <svg
      width={svgWidth}
      height={svgHeight}
      viewBox={`0 0 ${svgWidth} ${svgHeight}`}
      className="mx-auto transition-all duration-200"
    >
      {/* Triangle */}
      <polygon
        points={`${x0},${y0} ${x0 + rb},${y0} ${x0},${y0 - rh}`}
        fill="#ecfeff"
        stroke="#0891b2"
        strokeWidth={2}
      />

      {/* Base label */}
      <text
        x={x0 + rb / 2}
        y={y0 + 18}
        textAnchor="middle"
        className="fill-slate-600 text-sm"
      >
        a = {base}
      </text>

      {/* Height label */}
      <text
        x={x0 - 10}
        y={y0 - rh / 2}
        textAnchor="end"
        dominantBaseline="middle"
        className="fill-slate-600 text-sm"
      >
        t = {height}
      </text>

      {/* Right angle marker */}
      <rect
        x={x0}
        y={y0 - 12}
        width={12}
        height={12}
        fill="none"
        stroke="#64748b"
        strokeWidth={1}
      />
    </svg>
  );
}
