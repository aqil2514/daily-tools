"use client";

import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import { usePDFMerge } from "../store/provider";
import { useState } from "react";
import { mergePdfFiles } from "../utils/merge-pdf-files";

export function PDFMergeButton() {
  const t = useTranslations("tools-pdf.pdf-merge.setting");
  const { files, settings, setError } = usePDFMerge();

  const [loading, setLoading] = useState(false);

  const handleMerge = async () => {
    if (files.length === 0) {
      setError("No PDF files available");
      return;
    }

    try {
      setLoading(true);

      const mergedPdfBytes = await mergePdfFiles(files);

      // Download Result
      const arrayBuffer = mergedPdfBytes.slice().buffer;
      const blob = new Blob([arrayBuffer], { type: "application/pdf" });
      const url = URL.createObjectURL(blob);

      const a = document.createElement("a");
      a.href = url;
      a.download = settings.outputName || "merged.pdf";
      a.click();

      URL.revokeObjectURL(url);
      setLoading(false);
    } catch (err) {
      console.error(err);
      setError("Failed to merge PDF");
      setLoading(false);
    }
  };

  return (
    <Button
      className="w-full"
      disabled={loading || files.length === 0}
      onClick={handleMerge}
    >
      {loading ? t("merging") : t("merge-pdf")}
    </Button>
  );
}
