"use client";

import { FileDropzone } from "@/components/tools/file-dropzone";
import { ImagePreview } from "@/components/tools/image-preview";
import { TaskProgress } from "@/components/tools/task-progress";
import { ToolCard } from "@/components/tools/tool-card";

import { useImageCompressor } from "../hooks/useImageCompressor";
import { QualitySelector } from "./quality-selector";
import { CompressorAction } from "./compressor-action";

export function ImageCompressor() {
  const {
    file,
    previewUrl,
    convertedUrl,
    loading,
    quality,
    setQuality,
    handleSelect,
    handleCompress,
  } = useImageCompressor();

  return (
    <ToolCard>
      <FileDropzone
        accept="image/*"
        label="Klik atau drag untuk upload"
        onSelect={handleSelect}
      />

      {previewUrl && <ImagePreview src={previewUrl} />}

      <QualitySelector quality={quality} setQuality={setQuality} />

      <CompressorAction
        file={file}
        loading={loading}
        convertedUrl={convertedUrl}
        onCompress={handleCompress}
      />

      {loading && <TaskProgress label="Mengompresi gambar..." />}

      {convertedUrl && (
        <>
          <p className="text-sm font-medium text-center mt-2">Hasil:</p>
          <ImagePreview src={convertedUrl} />
        </>
      )}
    </ToolCard>
  );
}
