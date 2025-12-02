"use client";

import { Button } from "@/components/ui/button";
import { DownloadButton } from "@/components/tools/download-button";
import { useImageResizer } from "../provider";

export function ResizerAction() {
  const { previewUrl, resizerSettings, setResizedUrl, resizedUrl } = useImageResizer();

  if (!previewUrl) return null;
  const handleResize = async () => {
    const res = await fetch(previewUrl);
    if (!res.ok) throw new Error("Terjadi kesalahan saat ambil data gambar");

    const blob = await res.blob();
    const file = new File([blob], "new-file");

    const imageBitmap = await createImageBitmap(file);
    const canvas = document.createElement("canvas");

    canvas.width = resizerSettings.width;
    canvas.height = resizerSettings.height;

    const ctx = canvas.getContext("2d")!;
    ctx.clearRect(0, 0, resizerSettings.width, resizerSettings.height);
    ctx.drawImage(
      imageBitmap,
      0,
      0,
      resizerSettings.width,
      resizerSettings.height
    );

    const url = canvas.toDataURL()
    setResizedUrl(url);
  };
  return (
    <div className="mt-4 px-4">
      <Button variant={"outline"} onClick={handleResize}>
        Convert
      </Button>
      <DownloadButton url={resizedUrl} filename="Resized Image" />
    </div>
  );
}
