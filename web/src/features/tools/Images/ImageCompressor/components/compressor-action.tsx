"use client";

import { Button } from "@/components/ui/button";
import { DownloadButton } from "@/components/tools/download-button";
import { useImageCompressor } from "../provider";
import { getImageFileData } from "@/utils/image/getImageFileData";
import { normalizeMime } from "@/utils/normalizeMime";

export function CompressorAction() {
  const { previewUrl, setCompressedUrl, quality, compressedUrl } =
    useImageCompressor();
  if (!previewUrl) return null;

  async function handleCompress() {
    setCompressedUrl("");

    const blob = await getImageFileData(previewUrl);

    // Normalize mime
    const mime = normalizeMime(blob.type);

    const bitmap = await createImageBitmap(blob);

    const canvas = document.createElement("canvas");
    canvas.width = bitmap.width;
    canvas.height = bitmap.height;

    const ctx = canvas.getContext("2d")!;
    ctx.drawImage(bitmap, 0, 0);

    const out = canvas.toDataURL(mime, quality / 100);
    setCompressedUrl(out);
  }

  return (
    <div>
      <Button
        disabled={!previewUrl}
        variant={"outline"}
        onClick={handleCompress}
      >
        Compress
      </Button>
      {compressedUrl && (
        <DownloadButton url={compressedUrl} filename="Compressed Image" />
      )}
    </div>
  );
}
