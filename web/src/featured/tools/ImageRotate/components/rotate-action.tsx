"use client";

import { Button } from "@/components/ui/button";
import { DownloadButton } from "@/components/tools/download-button";

interface Props {
  file: File | null;
  loading: boolean;
  rotatedUrl: string | null;
  onRotate: () => void;
}

export function RotateAction({ file, loading, rotatedUrl, onRotate }: Props) {
  return (
    <div className="flex gap-3">
      <Button onClick={onRotate} disabled={!file || loading}>
        Rotate
      </Button>

      {rotatedUrl && (
        <DownloadButton url={rotatedUrl} filename="rotated.png" />
      )}
    </div>
  );
}
