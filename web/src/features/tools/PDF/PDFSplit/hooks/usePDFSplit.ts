"use client";

import { useState } from "react";
import { PDFDocument } from "pdf-lib";

export function usePDFSplit() {
  const [file, setFile] = useState<File | null>(null);
  const [pages, setPages] = useState<number>(0);
  const [urls, setUrls] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  function handleSelect(files: File[]) {
    const f = files[0];
    setFile(f);
    setUrls([]);
    setPages(0);
  }

  async function handleSplit() {
    if (!file) return;

    setLoading(true);
    setUrls([]);

    const bytes = await file.arrayBuffer();
    const pdf = await PDFDocument.load(bytes);
    const totalPages = pdf.getPageCount();
    setPages(totalPages);

    const outputUrls: string[] = [];

    for (let i = 0; i < totalPages; i++) {
      const newPdf = await PDFDocument.create();
      const [copiedPage] = await newPdf.copyPages(pdf, [i]);
      newPdf.addPage(copiedPage);

      const pdfBytes = await newPdf.save();
      const blob = new Blob([new Uint8Array(pdfBytes)], { type: "application/pdf" });
      const url = URL.createObjectURL(blob);

      outputUrls.push(url);
    }

    setUrls(outputUrls);
    setLoading(false);
  }

  return {
    file,
    pages,
    urls,
    loading,

    handleSelect,
    handleSplit,
  };
}
