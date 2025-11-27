"use client";

import { FileDropzone } from "@/components/tools/file-dropzone";
import { ImagePreview } from "@/components/tools/image-preview";
import { TaskProgress } from "@/components/tools/task-progress";
import { ToolCard } from "@/components/tools/tool-card";

import { useImageRotate } from "../hooks/useImageRotate";
import { RotateControls } from "./rotate-controls";
import { RotateAction } from "./rotate-action";

export function ImageRotate() {
  const {
    file,
    previewUrl,
    angle,
    rotatedUrl,
    loading,
    setAngle,
    handleSelect,
    handleRotate,
  } = useImageRotate();

  return (
    <ToolCard>
      <FileDropzone
        accept="image/*"
        label="Klik atau drag untuk upload"
        onSelect={(files) => handleSelect(files[0])}
      />

      {previewUrl && <ImagePreview src={previewUrl} />}

      <RotateControls angle={angle} setAngle={setAngle} />

      <RotateAction
        file={file}
        loading={loading}
        rotatedUrl={rotatedUrl}
        onRotate={handleRotate}
      />

      {loading && <TaskProgress label="Memutar gambar..." />}

      {rotatedUrl && (
        <>
          <p className="text-center font-medium mt-2">Hasil:</p>
          <ImagePreview src={rotatedUrl} />
        </>
      )}
    </ToolCard>
  );
}
