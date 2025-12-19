import { PlaceholderInputState } from "../types/input";

export function drawPlaceholder(
  canvas: HTMLCanvasElement,
  state: PlaceholderInputState
) {
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  const width = Number(state.width) || 300;
  const height = Number(state.height) || 180;

  canvas.width = width;
  canvas.height = height;

  /* ========= Background ========= */
  ctx.clearRect(0, 0, width, height);
  ctx.fillStyle = state.backgroundColor || "#E5E7EB";
  ctx.fillRect(0, 0, width, height);

  /* ========= Border Radius (simple) ========= */
  if (state.borderRadius) {
    const r = Number(state.borderRadius);
    if (!isNaN(r) && r > 0) {
      ctx.globalCompositeOperation = "destination-in";
      ctx.beginPath();
      ctx.moveTo(r, 0);
      ctx.arcTo(width, 0, width, height, r);
      ctx.arcTo(width, height, 0, height, r);
      ctx.arcTo(0, height, 0, 0, r);
      ctx.arcTo(0, 0, width, 0, r);
      ctx.closePath();
      ctx.fill();
      ctx.globalCompositeOperation = "source-over";
    }
  }

  /* ========= Text ========= */
  const text =
    state.text || `${width} × ${height}`;

  const fontSize =
    Number(state.fontSize) ||
    Math.floor(Math.min(width, height) / 6);

  ctx.fillStyle = state.textColor || "#111827";
  ctx.font = `${fontSize}px sans-serif`;
  ctx.textAlign = "center";

  let y = height / 2;
  if (state.textPosition === "top") y = fontSize + 10;
  if (state.textPosition === "bottom") y = height - 10;

  ctx.fillText(text, width / 2, y);
}
