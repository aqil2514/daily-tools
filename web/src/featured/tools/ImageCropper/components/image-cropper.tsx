"use client";

import { FileDropzone } from "@/components/tools/file-dropzone";
import { ImagePreview } from "@/components/tools/image-preview";
import { TaskProgress } from "@/components/tools/task-progress";
import { ToolCard } from "@/components/tools/tool-card";

import { useImageCropper } from "../hooks/useImageCropper";
import { CropperUI } from "./cropper-ui";
import { CropperAction } from "./cropper-action";
import { AspectRatioSelector } from "./aspect-ratio-selector";

export function ImageCropper() {
  const {
    file,
    previewUrl,
    crop,
    zoom,
    loading,
    croppedImage,
    aspect,

    setCrop,
    setZoom,
    setAspect,

    handleSelect,
    handleCrop,
    onCropComplete,
  } = useImageCropper();

  return (
    <ToolCard>
      <FileDropzone
        accept="image/*"
        label="Klik atau drag gambar untuk upload"
        onSelect={handleSelect}
      />

      {previewUrl && (
        <>

          <CropperUI
            image={previewUrl}
            crop={crop}
            aspect={aspect}
            zoom={zoom}
            setCrop={setCrop}
            setZoom={setZoom}
            onCropComplete={onCropComplete}
          />
        </>
      )}

      <AspectRatioSelector aspect={aspect} setAspect={setAspect} />
      
      <CropperAction
        file={file}
        loading={loading}
        croppedImage={croppedImage}
        onCrop={handleCrop}
      />

      {loading && <TaskProgress label="Memotong gambar..." />}

      {croppedImage && (
        <>
          <p className="text-center font-medium mt-2">Hasil:</p>
          <ImagePreview src={croppedImage} />
        </>
      )}
    </ToolCard>
  );
}
