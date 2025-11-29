"use client";

import { useState } from "react";

export function useImageRotate() {
  const [file, setFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [rotatedUrl, setRotatedUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const [angle, setAngle] = useState(0); // default = no rotation

  function handleSelect(f: File) {
    setFile(f);
    setRotatedUrl(null);

    const url = URL.createObjectURL(f);
    setPreviewUrl(url);
  }

  async function handleRotate() {
    if (!file) return;

    setLoading(true);
    setRotatedUrl(null);

    const img = await createImageBitmap(file);

    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d")!;

    const rad = (angle * Math.PI) / 180;

    // Hitung ukuran canvas baru
    const sin = Math.abs(Math.sin(rad));
    const cos = Math.abs(Math.cos(rad));

    canvas.width = img.width * cos + img.height * sin;
    canvas.height = img.width * sin + img.height * cos;

    ctx.translate(canvas.width / 2, canvas.height / 2);
    ctx.rotate(rad);
    ctx.drawImage(img, -img.width / 2, -img.height / 2);

    const out = canvas.toDataURL("image/png");
    setRotatedUrl(out);

    setLoading(false);
  }

  return {
    file,
    previewUrl,
    angle,
    rotatedUrl,
    loading,

    setAngle,
    handleSelect,
    handleRotate,
  };
}
