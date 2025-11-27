"use client";

import { useState } from "react";

// Reusable components
import { FileDropzone } from "@/components/tools/file-dropzone";
import { ImagePreview } from "@/components/tools/image-preview";
import { TaskProgress } from "@/components/tools/task-progress";
import { ToolCard } from "@/components/tools/tool-card";

import { FormatSelector } from "./format-selector";
import { ActionButton } from "./action-button";
import { convertImageFormat } from "@/lib/convertImageFormat";

export function ImageConverter() {
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

  return (
    <ToolCard>
      {/* Upload */}
      <FileDropzone
        accept="image/*"
        label="Klik untuk upload gambar"
        onSelect={handleSelect}
      />

      {/* Preview */}
      {previewUrl && <ImagePreview src={previewUrl} />}

      {/* Format Selector */}
      <FormatSelector
        outputFormat={outputFormat}
        setOutputFormat={setOutputFormat}
      />

      {/* Actions */}
      <ActionButton
        convertedUrl={convertedUrl}
        file={file}
        handleConvert={handleConvert}
        loading={loading}
        outputFormat={outputFormat}
      />

      {/* Loader */}
      {loading && <TaskProgress label="Mengonversi..." />}

      {/* Output Preview */}
      {convertedUrl && (
        <>
          <p className="text-sm font-medium mt-2 text-center">Hasil:</p>
          <ImagePreview src={convertedUrl} />
        </>
      )}
    </ToolCard>
  );
}
