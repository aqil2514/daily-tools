"use client";

import { DocumentProps, pdf } from "@react-pdf/renderer";
import { useState } from "react";

interface ExportPdfOptions {
  fileName?: string;
}

export function usePdfExport() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const exportPdf = async (
    document: React.ReactElement<DocumentProps>,
    options: ExportPdfOptions = {}
  ) => {
    try {
      setLoading(true);
      setError(null);

      const blob = await pdf(document).toBlob();
      const url = URL.createObjectURL(blob);

      const link = window.document.createElement("a");
      link.href = url;
      link.download = options.fileName ?? "document.pdf";
      link.click();

      URL.revokeObjectURL(url);
    } catch (err) {
      setError(err as Error);
    } finally {
      setLoading(false);
    }
  };

  return {
    exportPdf,
    loading,
    error,
  };
}
