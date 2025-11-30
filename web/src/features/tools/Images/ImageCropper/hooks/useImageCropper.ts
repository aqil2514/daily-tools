"use client";

import { useState } from "react";
import { Area } from "react-easy-crop";

export function useImageCropper() {
  const [file, setFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  
  const [aspect, setAspect] = useState<number | null>(1 / 1); 
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<Area | null>(null);

  const [loading, setLoading] = useState(false);
  const [croppedImage, setCroppedImage] = useState<string | null>(null);

  function handleSelect(f: File) {
    setFile(f);
    const url = URL.createObjectURL(f);
    setPreviewUrl(url);
    setCroppedImage(null);
  }

  function onCropComplete(_: Area, croppedPixels: Area) {
    setCroppedAreaPixels(croppedPixels);
  }

  async function handleCrop() {
    if (!previewUrl || !croppedAreaPixels) return;

    setLoading(true);

    const image = await createImageBitmap(await fetch(previewUrl).then(r => r.blob()));

    const canvas = document.createElement("canvas");
    canvas.width = croppedAreaPixels.width;
    canvas.height = croppedAreaPixels.height;

    const ctx = canvas.getContext("2d")!;
    ctx.drawImage(
      image,
      croppedAreaPixels.x,
      croppedAreaPixels.y,
      croppedAreaPixels.width,
      croppedAreaPixels.height,
      0,
      0,
      croppedAreaPixels.width,
      croppedAreaPixels.height
    );

    const out = canvas.toDataURL("image/png");
    setCroppedImage(out);

    setLoading(false);
  }

  return {
    file,
    previewUrl,
    crop,
    zoom,
    loading,
    croppedImage,
    aspect,

    setAspect,
    setCrop,
    setZoom,

    handleSelect,
    handleCrop,
    onCropComplete,
  };
}
