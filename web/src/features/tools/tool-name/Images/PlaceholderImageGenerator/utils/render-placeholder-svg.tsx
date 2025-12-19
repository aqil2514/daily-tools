import { PlaceholderInputState } from "../types/input";

interface RenderSvgProps {
  state: PlaceholderInputState;
}

export function RenderPlaceholderSVG({ state }: RenderSvgProps) {
  const width = Number(state.width) || 300;
  const height = Number(state.height) || 180;

  const backgroundColor = state.backgroundColor || "#E5E7EB";
  const textColor = state.textColor || "#111827";

  const text =
    state.text || `${width} × ${height}`;

  const fontSize =
    Number(state.fontSize) ||
    Math.floor(Math.min(width, height) / 6);

  let textY = height / 2;
  if (state.textPosition === "top") textY = fontSize + 10;
  if (state.textPosition === "bottom") textY = height - 10;

  const borderRadius =
    Number(state.borderRadius) || 0;

  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      xmlns="http://www.w3.org/2000/svg"
      className="max-w-full h-auto"
    >
      {/* Background */}
      <rect
        x={0}
        y={0}
        width={width}
        height={height}
        rx={borderRadius}
        ry={borderRadius}
        fill={backgroundColor}
      />

      {/* Text */}
      <text
        x={width / 2}
        y={textY}
        fill={textColor}
        fontSize={fontSize}
        textAnchor="middle"
        dominantBaseline="middle"
        fontFamily="sans-serif"
      >
        {text}
      </text>
    </svg>
  );
}
