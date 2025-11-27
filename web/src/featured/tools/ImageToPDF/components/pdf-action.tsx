"use client";

import { Button } from "@/components/ui/button";
import { DownloadButton } from "@/components/tools/download-button";

interface Props {
  file: File | null;
  loading: boolean;
  pdfUrl: string | null;
  onConvert: () => void;
}

export function PdfAction({ file, loading, pdfUrl, onConvert }: Props) {
  return (
    <div className="flex gap-3">
      <Button onClick={onConvert} disabled={!file || loading}>
        Convert to PDF
      </Button>

      {pdfUrl && (
        <DownloadButton url={pdfUrl} filename="converted.pdf" />
      )}
    </div>
  );
}
