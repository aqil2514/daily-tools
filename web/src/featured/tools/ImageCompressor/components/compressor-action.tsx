"use client";

import { Button } from "@/components/ui/button";
import { DownloadButton } from "@/components/tools/download-button";

interface Props {
  file: File | null;
  loading: boolean;
  convertedUrl: string | null;
  onCompress: () => void;
}

export function CompressorAction({ file, loading, convertedUrl, onCompress }: Props) {
  return (
    <div className="flex gap-3">
      <Button onClick={onCompress} disabled={!file || loading}>
        Compress
      </Button>

      {convertedUrl && (
        <DownloadButton filename="compressed.jpg" url={convertedUrl} />
      )}
    </div>
  );
}
