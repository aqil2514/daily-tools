"use client";

import { FileDropzone } from "@/components/tools/file-dropzone";
import { ImagePreview } from "@/components/tools/image-preview";
import { TaskProgress } from "@/components/tools/task-progress";
import { ToolCard } from "@/components/tools/tool-card";

import { useImageToPDF } from "../hooks/useImageToPDF";
import { PDFSettings } from "./pdf-settings";
import { PdfAction } from "./pdf-action";

export function ImageToPDF() {
  const {
    file,
    previewUrl,
    pdfUrl,
    loading,
    pageSize,
    setPageSize,
    handleSelect,
    handleConvert,
  } = useImageToPDF();

  return (
    <ToolCard>
      <FileDropzone
        accept="image/*"
        label="Klik atau drag gambar untuk upload"
        onSelect={(files) => handleSelect(files[0])}
      />

      {previewUrl && <ImagePreview src={previewUrl} />}

      <PDFSettings pageSize={pageSize} setPageSize={setPageSize} />

      <PdfAction
        file={file}
        loading={loading}
        pdfUrl={pdfUrl}
        onConvert={handleConvert}
      />

      {loading && <TaskProgress label="Mengonversi menjadi PDF..." />}

      {pdfUrl && (
        <iframe
          src={pdfUrl}
          className="w-full h-[400px] border rounded-md mt-4"
        />
      )}
    </ToolCard>
  );
}
