"use client";

interface ParallelogramSVGProps {
  a: number; // base
  t: number; // height
  b: number; // side
  maxSize?: number;
}

export function ParallelogramSVG({
  a,
  t,
  b,
  maxSize = 220,
}: ParallelogramSVGProps) {
  const MIN = 1;
  const MAX = 100;

  const A = Math.min(Math.max(a, MIN), MAX);
  const T = Math.min(Math.max(t, MIN), MAX);
  const B = Math.min(Math.max(b, MIN), MAX);

  const scale = maxSize / Math.max(A, B);
  const ra = A * scale;
  const rt = T * scale;
  const offsetX = Math.min(B * scale * 0.4, ra * 0.4);

  const padding = 40;
  const svgWidth = ra + offsetX + padding * 2;
  const svgHeight = rt + padding * 2;

  const bottomLeft = { x: padding, y: padding + rt };
  const bottomRight = { x: padding + ra, y: padding + rt };
  const topLeft = {
    x: padding + offsetX,
    y: padding,
  };
  const topRight = {
    x: padding + ra + offsetX,
    y: padding,
  };

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
          ${topLeft.x},${topLeft.y}
          ${topRight.x},${topRight.y}
          ${bottomRight.x},${bottomRight.y}
          ${bottomLeft.x},${bottomLeft.y}
        `}
        fill="#eef2ff"
        stroke="#4f46e5"
        strokeWidth={2}
      />

      {/* Base label */}
      <text
        x={(bottomLeft.x + bottomRight.x) / 2}
        y={bottomLeft.y + 18}
        textAnchor="middle"
        className="fill-slate-600 text-sm"
      >
        a
      </text>

      {/* Height indicator */}
      <line
        x1={topLeft.x - 14}
        y1={topLeft.y}
        x2={topLeft.x - 14}
        y2={bottomLeft.y}
        stroke="#64748b"
        strokeDasharray="4 2"
      />
      <text
        x={topLeft.x - 18}
        y={(topLeft.y + bottomLeft.y) / 2}
        textAnchor="end"
        dominantBaseline="middle"
        className="fill-slate-600 text-sm"
      >
        t
      </text>

      {/* Side label */}
      <text
        x={topLeft.x - 6}
        y={topLeft.y - 8}
        textAnchor="end"
        className="fill-slate-600 text-sm"
      >
        b
      </text>
    </svg>
  );
}
