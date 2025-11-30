"use client";

import Cropper from "react-easy-crop";
import type { Area, Point } from "react-easy-crop";

interface Props {
  image: string;
  crop: Point;
  zoom: number;
  aspect: number | null;

  setCrop: (v: Point) => void;
  setZoom: (v: number) => void;
  onCropComplete: (croppedArea: Area, croppedAreaPixels: Area) => void;
}

export function CropperUI({
  image,
  crop,
  zoom,
  aspect,
  setCrop,
  setZoom,
  onCropComplete,
}: Props) {
  return (
    <div className="relative w-full h-[300px] bg-black/20 rounded-md overflow-hidden">
      <Cropper
        image={image}
        crop={crop}
        zoom={zoom}
        aspect={aspect ?? undefined}
        onCropChange={setCrop}
        onCropComplete={onCropComplete}
        onZoomChange={setZoom}
      />
    </div>
  );
}
