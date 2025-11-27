export async function convertImageFormat(
  file: File,
  format: "jpg" | "png" | "webp",
  quality = 0.92
) {
  const imgBitmap = await createImageBitmap(file);

  const canvas = document.createElement("canvas");
  canvas.width = imgBitmap.width;
  canvas.height = imgBitmap.height;

  const ctx = canvas.getContext("2d")!;
  ctx.drawImage(imgBitmap, 0, 0);

  return canvas.toDataURL(`image/${format}`, quality);
}
