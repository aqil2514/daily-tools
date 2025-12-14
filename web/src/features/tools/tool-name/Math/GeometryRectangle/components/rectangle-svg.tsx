"use client";

interface RectangleSVGProps {
  length: number;
  width: number;
  maxSize?: number;
}

export function RectangleSVG({
  length,
  width,
  maxSize = 200,
}: RectangleSVGProps) {
  const MIN_VALUE = 1;
  const MAX_VALUE = 100;

  const clampedLength = Math.min(
    Math.max(length, MIN_VALUE),
    MAX_VALUE
  );

  const clampedWidth = Math.min(
    Math.max(width, MIN_VALUE),
    MAX_VALUE
  );

  // Skala proporsional berdasarkan sisi terpanjang
  const scale =
    maxSize / Math.max(clampedLength, clampedWidth);

  const rectWidth = clampedLength * scale;
  const rectHeight = clampedWidth * scale;

  const padding = 40;
  const svgWidth = rectWidth + padding * 2;
  const svgHeight = rectHeight + padding * 2;

  const x = padding;
  const y = padding;

  return (
    <svg
      width={svgWidth}
      height={svgHeight}
      viewBox={`0 0 ${svgWidth} ${svgHeight}`}
      className="mx-auto transition-all duration-200"
    >
      {/* Rectangle */}
      <rect
        x={x}
        y={y}
        width={rectWidth}
        height={rectHeight}
        rx={6}
        fill="#ecfeff"
        stroke="#0891b2"
        strokeWidth={2}
      />

      {/* Horizontal dimension line (length) */}
      <line
        x1={x}
        y1={y - 16}
        x2={x + rectWidth}
        y2={y - 16}
        stroke="#64748b"
        strokeWidth={1}
      />

      {/* Vertical dimension line (width) */}
      <line
        x1={x - 16}
        y1={y}
        x2={x - 16}
        y2={y + rectHeight}
        stroke="#64748b"
        strokeWidth={1}
      />

      {/* Length label */}
      <text
        x={x + rectWidth / 2}
        y={y - 22}
        textAnchor="middle"
        className="fill-slate-600 text-sm"
      >
        p = {length}
      </text>

      {/* Width label */}
      <text
        x={x - 22}
        y={y + rectHeight / 2}
        textAnchor="middle"
        dominantBaseline="middle"
        className="fill-slate-600 text-sm"
      >
        l = {width}
      </text>
    </svg>
  );
}
