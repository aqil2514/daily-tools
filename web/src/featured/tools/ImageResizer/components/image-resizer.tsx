"use client";

import { FileDropzone } from "@/components/tools/file-dropzone";
import { ImagePreview } from "@/components/tools/image-preview";
import { TaskProgress } from "@/components/tools/task-progress";
import { ToolCard } from "@/components/tools/tool-card";

import { useImageResizer } from "../hooks/useImageResizer";
import { DimensionInput } from "./dimension-input";
import { ResizerAction } from "./resizer-action";

export function ImageResizer() {
  const {
    file,
    previewUrl,
    width,
    height,
    keepRatio,
    loading,
    convertedUrl,
    setKeepRatio,
    updateWidth,
    updateHeight,
    handleSelect,
    handleResize,
  } = useImageResizer();

  return (
    <ToolCard>
      <FileDropzone
        accept="image/*"
        label="Klik atau drag untuk upload"
        onSelect={handleSelect}
      />

      {previewUrl && <ImagePreview src={previewUrl} />}

      <DimensionInput
        width={width}
        height={height}
        keepRatio={keepRatio}
        onWidthChange={updateWidth}
        onHeightChange={updateHeight}
        onToggleKeepRatio={() => setKeepRatio(!keepRatio)}
      />

      <ResizerAction
        file={file}
        loading={loading}
        convertedUrl={convertedUrl}
        onResize={handleResize}
      />

      {loading && <TaskProgress label="Mengubah ukuran gambar..." />}

      {convertedUrl && (
        <>
          <p className="text-sm font-medium text-center">Hasil:</p>
          <ImagePreview src={convertedUrl} />
        </>
      )}
    </ToolCard>
  );
}
