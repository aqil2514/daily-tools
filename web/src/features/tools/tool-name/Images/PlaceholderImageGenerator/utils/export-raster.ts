import { PlaceholderInputState } from "../types/input";
import { drawPlaceholder } from "./draw-placeholder";

export function exportRasterImage(
  state: PlaceholderInputState,
  format: "png" | "jpg"
) {
  const canvas = document.createElement("canvas");

  drawPlaceholder(canvas, state);

  const mimeType =
    format === "jpg" ? "image/jpeg" : "image/png";

  canvas.toBlob(
    (blob) => {
      if (!blob) return;

      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");

      link.href = url;
      link.download = `placeholder-${canvas.width}x${canvas.height}.${format}`;
      link.click();

      URL.revokeObjectURL(url);
    },
    mimeType,
    0.92
  );
}
