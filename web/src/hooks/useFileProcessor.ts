import { useState } from "react";

export function useFileProcessor() {
  const [file, setFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [outputUrl, setOutputUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  function setInputFile(f: File) {
    setFile(f);
    const url = URL.createObjectURL(f);
    setPreviewUrl(url);
    setOutputUrl(null);
  }

  return {
    file,
    previewUrl,
    outputUrl,
    loading,
    setLoading,
    setOutputUrl,
    setInputFile,
  };
}
