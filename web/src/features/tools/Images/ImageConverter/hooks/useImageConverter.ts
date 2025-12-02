"use client";

import { useState } from "react";
import { convertImageFormat } from "@/utils/convertImageFormat";

export function useImageConverter() {
  const [file, setFile] = useState<File | null>(null);
  const [outputFormat, setOutputFormat] = useState("jpg");
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [convertedUrl, setConvertedUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  function handleSelect(f: File) {
    setFile(f);
    setConvertedUrl(null);

    const url = URL.createObjectURL(f);
    setPreviewUrl(url);
  }

  async function handleConvert() {
    if (!file) return;

    setLoading(true);
    setConvertedUrl(null);

    const out = await convertImageFormat(
      file,
      outputFormat as "jpg" | "png" | "webp"
    );

    setConvertedUrl(out);
    setLoading(false);
  }

  return {
    file,
    outputFormat,
    previewUrl,
    convertedUrl,
    loading,

    setOutputFormat,
    handleSelect,
    handleConvert,
  };
}
