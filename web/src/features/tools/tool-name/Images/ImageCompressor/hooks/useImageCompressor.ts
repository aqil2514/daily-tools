"use client";

import { useState } from "react";

export function useImageCompressor() {
  const [file, setFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [convertedUrl, setConvertedUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const [quality, setQuality] = useState(80);

  function handleSelect(f: File) {
    setFile(f);
    const url = URL.createObjectURL(f);
    setPreviewUrl(url);
    setConvertedUrl(null);
  }

  async function handleCompress() {
    if (!file) return;

    setLoading(true);
    setConvertedUrl(null);

    const bitmap = await createImageBitmap(file);

    const canvas = document.createElement("canvas");
    canvas.width = bitmap.width;
    canvas.height = bitmap.height;

    const ctx = canvas.getContext("2d")!;
    ctx.drawImage(bitmap, 0, 0);

    const q = quality / 100;

    const out = canvas.toDataURL("image/jpeg", q);
    setConvertedUrl(out);

    setLoading(false);
  }

  return {
    file,
    previewUrl,
    convertedUrl,
    loading,
    quality,

    setQuality,
    handleSelect,
    handleCompress,
  };
}
