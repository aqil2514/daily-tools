"use client";

import { Button } from "@/components/ui/button";
import { DownloadButton } from "@/components/tools/download-button";

interface Props {
  file: File | null;
  loading: boolean;
  convertedUrl: string | null;
  onResize: () => void;
}

export function ResizerAction({ file, loading, convertedUrl, onResize }: Props) {
  return (
    <div className="flex gap-3">
      <Button onClick={onResize} disabled={!file || loading}>
        Resize
      </Button>

      {convertedUrl && (
        <DownloadButton filename="resized.jpg" url={convertedUrl} />
      )}
    </div>
  );
}
