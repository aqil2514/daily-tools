"use client";

import { useState } from "react";
import { PDFDocument } from "pdf-lib";

export function usePDFMerge() {
  const [files, setFiles] = useState<File[]>([]);
  const [mergedUrl, setMergedUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  function handleSelect(f: File[]) {
    setFiles(f);
    setMergedUrl(null);
  }

  async function handleMerge() {
    if (files.length < 2) return;

    setLoading(true);
    setMergedUrl(null);

    const mergedPdf = await PDFDocument.create();

    for (const file of files) {
      const bytes = await file.arrayBuffer();
      const pdf = await PDFDocument.load(bytes);

      const copiedPages = await mergedPdf.copyPages(pdf, pdf.getPageIndices());
      copiedPages.forEach((page) => mergedPdf.addPage(page));
    }

    const pdfBytes = await mergedPdf.save();
    const blob = new Blob([new Uint8Array(pdfBytes)], { type: "application/pdf" });

    const url = URL.createObjectURL(blob);
    setMergedUrl(url);

    setLoading(false);
  }

  return {
    files,
    mergedUrl,
    loading,

    handleSelect,
    handleMerge,
  };
}
