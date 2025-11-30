"use client";

import { Button } from "@/components/ui/button";
import { DownloadButton } from "@/components/tools/download-button";

interface Props {
  file: File | null;
  loading: boolean;
  croppedImage: string | null;
  onCrop: () => void;
}

export function CropperAction({ file, loading, croppedImage, onCrop }: Props) {
  return (
    <div className="flex gap-3">
      <Button disabled={!file || loading} onClick={onCrop}>
        Crop
      </Button>

      {croppedImage && (
        <DownloadButton filename="cropped.png" url={croppedImage} />
      )}
    </div>
  );
}
