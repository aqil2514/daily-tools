"use client";

import { Button } from "@/components/ui/button";
import { useImageRotate } from "../provider";
import { rotateImageCanvas } from "../utils";

export function RotateDownload() {
  const { imageUrl, rotateState } = useImageRotate();

  async function handleDownload() {
    if (!imageUrl.preview) return;

    // Load image as ImageBitmap
    const blob = await fetch(imageUrl.preview).then((r) => r.blob());
    const imageBitmap = await createImageBitmap(blob);

    // Process rotation canvas
    const canvas = await rotateImageCanvas(imageBitmap, rotateState);

    // Convert to PNG (supports transparency)
    const out = canvas.toDataURL("image/png");

    // Download
    const a = document.createElement("a");
    a.href = out;
    a.download = "rotated-image.png";
    a.click();
  }

  return (
    <Button onClick={handleDownload} className="mt-4">
      Download
    </Button>
  );
}
