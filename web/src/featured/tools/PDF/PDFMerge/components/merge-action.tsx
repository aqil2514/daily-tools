"use client";

import { Button } from "@/components/ui/button";
import { DownloadButton } from "@/components/tools/download-button";

interface Props {
  files: File[];
  mergedUrl: string | null;
  loading: boolean;
  onMerge: () => void;
}

export function MergeAction({ files, mergedUrl, loading, onMerge }: Props) {
  return (
    <div className="flex gap-3">
      <Button onClick={onMerge} disabled={files.length < 2 || loading}>
        Merge PDF
      </Button>

      {mergedUrl && (
        <DownloadButton url={mergedUrl} filename="merged.pdf" />
      )}
    </div>
  );
}
