"use client";

interface TrapezoidSVGProps {
  a: number; // top base
  b: number; // bottom base
  t: number; // height
  maxSize?: number;
}

export function TrapezoidSVG({
  a,
  b,
  t,
  maxSize = 220,
}: TrapezoidSVGProps) {
  const MIN = 1;
  const MAX = 100;

  const A = Math.min(Math.max(a, MIN), MAX);
  const B = Math.min(Math.max(b, MIN), MAX);
  const T = Math.min(Math.max(t, MIN), MAX);

  const scale = maxSize / Math.max(A, B, T);
  const ra = A * scale;
  const rb = B * scale;
  const rt = T * scale;

  const padding = 40;
  const svgWidth = Math.max(ra, rb) + padding * 2;
  const svgHeight = rt + padding * 2;

  const bottomLeftX = padding;
  const bottomRightX = padding + rb;
  const topLeftX = padding + (rb - ra) / 2;
  const topRightX = topLeftX + ra;

  const bottomY = padding + rt;
  const topY = padding;

  return (
    <svg
      width={svgWidth}
      height={svgHeight}
      viewBox={`0 0 ${svgWidth} ${svgHeight}`}
      className="mx-auto transition-all duration-200"
    >
      {/* Trapezoid */}
      <polygon
        points={`
          ${topLeftX},${topY}
          ${topRightX},${topY}
          ${bottomRightX},${bottomY}
          ${bottomLeftX},${bottomY}
        `}
        fill="#ecfeff"
        stroke="#0891b2"
        strokeWidth={2}
      />

      {/* Top base label */}
      <text
        x={(topLeftX + topRightX) / 2}
        y={topY - 10}
        textAnchor="middle"
        className="fill-slate-600 text-sm"
      >
        a
      </text>

      {/* Bottom base label */}
      <text
        x={(bottomLeftX + bottomRightX) / 2}
        y={bottomY + 18}
        textAnchor="middle"
        className="fill-slate-600 text-sm"
      >
        b
      </text>

      {/* Height indicator */}
      <line
        x1={bottomLeftX - 12}
        y1={topY}
        x2={bottomLeftX - 12}
        y2={bottomY}
        stroke="#64748b"
        strokeDasharray="4 2"
      />

      <text
        x={bottomLeftX - 16}
        y={(topY + bottomY) / 2}
        textAnchor="end"
        dominantBaseline="middle"
        className="fill-slate-600 text-sm"
      >
        t
      </text>
    </svg>
  );
}
