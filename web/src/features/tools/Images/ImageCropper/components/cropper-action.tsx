import { Button } from "@/components/ui/button";
import { useImageCroper } from "../provider";

export function CropperAction() {
  const { imageUrl, cropState } = useImageCroper();

  if (!imageUrl.preview) return null;

  async function handleCrop() {
    const croppedAreaPixels = cropState.area;
    if (!imageUrl.preview || !croppedAreaPixels) return;

    const image = await createImageBitmap(
      await fetch(imageUrl.preview).then((r) => r.blob())
    );

    const canvas = document.createElement("canvas");
    canvas.width = croppedAreaPixels.width;
    canvas.height = croppedAreaPixels.height;

    const ctx = canvas.getContext("2d")!;

    // Jika round → buat masking OVAL (atau circle jika aspect 1:1)
    if (cropState.cropShape === "round") {
      ctx.beginPath();
      ctx.ellipse(
        canvas.width / 2, // posisi center X
        canvas.height / 2, // posisi center Y
        canvas.width / 2, // radiusX mengikuti width crop box
        canvas.height / 2, // radiusY mengikuti height crop box
        0,
        0,
        Math.PI * 2
      );
      ctx.closePath();
      ctx.clip();
    }

    // Draw the cropped area exactly
    ctx.drawImage(
      image,
      croppedAreaPixels.x,
      croppedAreaPixels.y,
      croppedAreaPixels.width,
      croppedAreaPixels.height,
      0,
      0,
      croppedAreaPixels.width,
      croppedAreaPixels.height
    );

    const out = canvas.toDataURL("image/png");

    const a = document.createElement("a");
    a.href = out;
    a.download = "Cropped Image";
    a.click();
  }

  return (
    <Button variant={"outline"} onClick={handleCrop} className="mt-4">
      Unduh Gambar
    </Button>
  );
}
