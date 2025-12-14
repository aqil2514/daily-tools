"use client";

interface SquareSVGProps {
  side: number;
  maxSize?: number;
}

export function SquareSVG({
  side,
  maxSize = 180,
}: SquareSVGProps) {
  const MIN_SIDE = 1;
  const MAX_SIDE = 100;

  const MIN_RENDER = 40;
  const MAX_RENDER = maxSize;

  const clampedSide = Math.min(
    Math.max(side, MIN_SIDE),
    MAX_SIDE
  );

  const renderedSize =
    MIN_RENDER +
    ((clampedSide - MIN_SIDE) / (MAX_SIDE - MIN_SIDE)) *
      (MAX_RENDER - MIN_RENDER);

  const padding = 24;
  const svgSize = renderedSize + padding * 2;

  return (
    <svg
      width={svgSize}
      height={svgSize}
      viewBox={`0 0 ${svgSize} ${svgSize}`}
      className="mx-auto transition-all duration-200"
    >
      <rect
        x={padding}
        y={padding}
        width={renderedSize}
        height={renderedSize}
        rx={6}
        fill="#e0f2fe"
        stroke="#0284c7"
        strokeWidth={2}
      />

      <text
        x={svgSize / 2}
        y={padding - 8}
        textAnchor="middle"
        className="fill-slate-600 text-sm"
      >
        s = {side}
      </text>
    </svg>
  );
}
