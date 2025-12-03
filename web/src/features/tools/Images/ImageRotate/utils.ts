import { RotateState } from "./provider";

export async function rotateImageCanvas(image: ImageBitmap, rotateState: RotateState) {
  const {
    rotation,
    flipHorizontal,
    flipVertical,
    background,
    preserveSize,
  } = rotateState;

  const rad = (rotation * Math.PI) / 180;

  const originalW = image.width;
  const originalH = image.height;

  // Bounding box baru setelah rotation
  const newW = Math.abs(originalW * Math.cos(rad)) + Math.abs(originalH * Math.sin(rad));
  const newH = Math.abs(originalH * Math.cos(rad)) + Math.abs(originalW * Math.sin(rad));

  // Tentukan ukuran canvas (preserve atau tidak)
  const canvasW = preserveSize ? newW : originalW;
  const canvasH = preserveSize ? newH : originalH;

  const canvas = document.createElement("canvas");
  canvas.width = canvasW;
  canvas.height = canvasH;

  const ctx = canvas.getContext("2d")!;

  // Background (PNG support transparent)
  if (background !== "transparent") {
    ctx.fillStyle = background;
    ctx.fillRect(0, 0, canvasW, canvasH);
  }

  ctx.translate(canvasW / 2, canvasH / 2);

  // Apply rotation
  ctx.rotate(rad);

  // Apply flip
  const scaleX = flipHorizontal ? -1 : 1;
  const scaleY = flipVertical ? -1 : 1;

  ctx.scale(scaleX, scaleY);

  // Draw image at center
  ctx.drawImage(
    image,
    -originalW / 2,
    -originalH / 2,
    originalW,
    originalH
  );

  return canvas;
}