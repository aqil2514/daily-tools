"use client";

import { useState } from "react";
import { PDFDocument } from "pdf-lib";

export function useImageToPDF() {
  const [file, setFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [pdfUrl, setPdfUrl] = useState<string | null>(null);

  const [pageSize, setPageSize] = useState<"A4" | "Fit">("A4");

  function handleSelect(f: File) {
    setFile(f);
    const url = URL.createObjectURL(f);
    setPreviewUrl(url);
    setPdfUrl(null);
  }

  async function handleConvert() {
    if (!file) return;

    setLoading(true);
    setPdfUrl(null);

    const bytes = await file.arrayBuffer();
    const pdf = await PDFDocument.create();

    const img = await pdf.embedJpg(bytes).catch(async () => {
      return await pdf.embedPng(bytes);
    });

    let page;
    if (pageSize === "A4") {
      page = pdf.addPage([595, 842]); // ukuran A4 dalam points (72 dpi)
      const { width, height } = img.scaleToFit(550, 800);
      page.drawImage(img, {
        x: (595 - width) / 2,
        y: (842 - height) / 2,
        width,
        height,
      });
    } else {
      page = pdf.addPage([img.width, img.height]);
      page.drawImage(img, {
        x: 0,
        y: 0,
        width: img.width,
        height: img.height,
      });
    }

    const pdfBytes = await pdf.save();
    const blob = new Blob([new Uint8Array(pdfBytes)], {
      type: "application/pdf",
    });
    const url = URL.createObjectURL(blob);

    setPdfUrl(url);
    setLoading(false);
  }

  return {
    file,
    previewUrl,
    pdfUrl,
    loading,
    pageSize,

    setPageSize,
    handleSelect,
    handleConvert,
  };
}
