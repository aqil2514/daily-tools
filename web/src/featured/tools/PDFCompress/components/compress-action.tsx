"use client";

import { Button } from "@/components/ui/button";
import { DownloadButton } from "@/components/tools/download-button";

interface Props {
  file: File | null;
  loading: boolean;
  outputUrl: string | null;
  onCompress: () => void;
}

export function CompressAction({ file, loading, outputUrl, onCompress }: Props) {
  return (
    <div className="flex gap-3">
      <Button onClick={onCompress} disabled={!file || loading}>
        Compress PDF
      </Button>

      {outputUrl && (
        <DownloadButton url={outputUrl} filename="compressed.pdf" />
      )}
    </div>
  );
}
