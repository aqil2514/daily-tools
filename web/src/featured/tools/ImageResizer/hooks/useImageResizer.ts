"use client";

import { useState, useRef } from "react";

export function useImageResizer() {
  const [file, setFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [convertedUrl, setConvertedUrl] = useState<string | null>(null);

  const [width, setWidth] = useState<number | null>(null);
  const [height, setHeight] = useState<number | null>(null);
  const [keepRatio, setKeepRatio] = useState(true);

  const naturalWidth = useRef(0);
  const naturalHeight = useRef(0);

  function handleSelect(f: File) {
    setFile(f);
    setConvertedUrl(null);

    const imgUrl = URL.createObjectURL(f);
    setPreviewUrl(imgUrl);

    const img = new Image();
    img.onload = () => {
      naturalWidth.current = img.width;
      naturalHeight.current = img.height;
      setWidth(img.width);
      setHeight(img.height);
    };
    img.src = imgUrl;
  }

  function updateWidth(newWidth: number) {
    if (newWidth <= 0) return;
    setWidth(newWidth);

    if (keepRatio) {
      const ratio = naturalHeight.current / naturalWidth.current;
      setHeight(Math.round(newWidth * ratio));
    }
  }

  function updateHeight(newHeight: number) {
    if (newHeight <= 0) return;
    setHeight(newHeight);

    if (keepRatio) {
      const ratio = naturalWidth.current / naturalHeight.current;
      setWidth(Math.round(newHeight * ratio));
    }
  }

  async function handleResize() {
    if (!file || !width || !height) return;

    setLoading(true);
    setConvertedUrl(null);

    const imgBitmap = await createImageBitmap(file);
    const canvas = document.createElement("canvas");

    canvas.width = width;
    canvas.height = height;

    const ctx = canvas.getContext("2d")!;
    ctx.clearRect(0, 0, width, height);
    ctx.drawImage(imgBitmap, 0, 0, width, height);

    const out = canvas.toDataURL("image/png");
    setConvertedUrl(out);

    setLoading(false);
  }

  return {
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
  };
}
