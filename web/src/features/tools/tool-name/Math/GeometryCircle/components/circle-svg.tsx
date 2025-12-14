"use client";

interface CircleSVGProps {
  radius: number;
  maxSize?: number;
}

export function CircleSVG({
  radius,
  maxSize = 200,
}: CircleSVGProps) {

  const padding = 40;
  const renderRadius = maxSize / 2;
  const svgSize = renderRadius * 2 + padding * 2;

  const cx = svgSize / 2;
  const cy = svgSize / 2;

  return (
    <svg
      width={svgSize}
      height={svgSize}
      viewBox={`0 0 ${svgSize} ${svgSize}`}
      className="mx-auto transition-all duration-200"
    >
      {/* Circle */}
      <circle
        cx={cx}
        cy={cy}
        r={renderRadius}
        fill="#ecfeff"
        stroke="#0891b2"
        strokeWidth={2}
      />

      {/* Radius line */}
      <line
        x1={cx}
        y1={cy}
        x2={cx + renderRadius}
        y2={cy}
        stroke="#64748b"
        strokeWidth={1.5}
      />

      {/* Radius label */}
      <text
        x={cx + renderRadius / 2}
        y={cy - 8}
        textAnchor="middle"
        className="fill-slate-600 text-sm"
      >
        r = {radius}
      </text>

      {/* Center point */}
      <circle cx={cx} cy={cy} r={2.5} fill="#64748b" />
    </svg>
  );
}
