"use client";


// Reusable components
import { FileDropzone } from "@/components/tools/file-dropzone";
import { ImagePreview } from "@/components/tools/image-preview";
import { TaskProgress } from "@/components/tools/task-progress";
import { ToolCard } from "@/components/tools/tool-card";

import { FormatSelector } from "./format-selector";
import { ActionButton } from "./action-button";
import { useImageConverter } from "../hooks/useImageConverter";

export function ImageConverter() {
   const {
    file,
    previewUrl,
    outputFormat,
    convertedUrl,
    loading,
    setOutputFormat,
    handleSelect,
    handleConvert,
  } = useImageConverter();

  return (
    <ToolCard>
      {/* Upload */}
      <FileDropzone
        accept="image/*"
        label="Klik atau drag ke sini untuk upload gambar"
        onSelect={(files) => handleSelect(files[0])}
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
