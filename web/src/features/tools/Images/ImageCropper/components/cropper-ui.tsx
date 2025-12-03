"use client";

import Cropper from "react-easy-crop";
import { useImageCroper } from "../provider";

export function CropperUI() {
  const { cropState, imageUrl, setCropState } = useImageCroper();

  if (!imageUrl.preview) return null;
  return (
    <div className="mt-6">
      <p className="font-semibold">Crop UI</p>
      <div className="relative w-full h-[300px] bg-black/20 rounded-md overflow-hidden ">
        <Cropper
          image={imageUrl.preview}
          crop={cropState.crop}
          cropShape={cropState.cropShape}
          zoom={cropState.zoom}
          rotation={cropState.rotation}
          aspect={cropState.aspect}
          onCropChange={(point) => setCropState({ ...cropState, crop: point })}
          onZoomChange={(zoom) => setCropState({ ...cropState, zoom })}
          onCropComplete={(_, area) => setCropState({ ...cropState, area })}
        />
      </div>
    </div>
  );
}
