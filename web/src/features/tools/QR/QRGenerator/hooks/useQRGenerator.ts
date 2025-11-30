"use client";

import { useRef } from "react";

export function useQRGenerator() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const handleDownload = () => {
    if (!canvasRef.current) return;
    const a = document.createElement("a");
    a.href = canvasRef.current.toDataURL("image/png", 100);
    a.download = "Generator Code";
    a.click();
    a.remove();
  };

  return {
    canvasRef,

    handleDownload,
  };
}
