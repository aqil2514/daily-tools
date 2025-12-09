"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";
import { usePdfSplit } from "../store/provider";
import { splitPdfToZip } from "../utils/split-pdf";

export function PDFSplitButton() {
  const { file, setting } = usePdfSplit();
  const [loading, setLoading] = useState(false);

  const handleSplit = async () => {
    if (!file) return;

    setLoading(true);

    try {
      const blob = await splitPdfToZip(file, setting.outputName || "split");

      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `${setting.outputName || "split"}.zip`;
      a.click();
      URL.revokeObjectURL(url);
    } catch (e) {
      console.error("Error splitting PDF:", e);
    }

    setLoading(false);
  };

  return (
    <Button
      className="w-full"
      disabled={!file || loading}
      onClick={handleSplit}
    >
      {loading ? "Memproses..." : "Split Now"}
    </Button>
  );
}
