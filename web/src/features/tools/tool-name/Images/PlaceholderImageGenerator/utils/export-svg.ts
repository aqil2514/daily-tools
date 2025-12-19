import { PlaceholderInputState } from "../types/input";

export function exportSVG(state: PlaceholderInputState) {
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

  const svg = `
<svg xmlns="http://www.w3.org/2000/svg"
     width="${width}"
     height="${height}"
     viewBox="0 0 ${width} ${height}">
  <rect
    width="${width}"
    height="${height}"
    rx="${borderRadius}"
    ry="${borderRadius}"
    fill="${backgroundColor}"
  />
  <text
    x="${width / 2}"
    y="${textY}"
    fill="${textColor}"
    font-size="${fontSize}"
    text-anchor="middle"
    dominant-baseline="middle"
    font-family="sans-serif"
  >
    ${text}
  </text>
</svg>
`.trim();

  const blob = new Blob([svg], {
    type: "image/svg+xml;charset=utf-8",
  });

  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");

  link.href = url;
  link.download = `placeholder-${width}x${height}.svg`;
  link.click();

  URL.revokeObjectURL(url);
}
