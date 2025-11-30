"use client";

import { Button } from "@/components/ui/button";

interface Props {
  file: File | null;
  loading: boolean;
  onSplit: () => void;
}

export function SplitAction({ file, loading, onSplit }: Props) {
  return (
    <div className="flex gap-3">
      <Button disabled={!file || loading} onClick={onSplit}>
        Split PDF
      </Button>
    </div>
  );
}
