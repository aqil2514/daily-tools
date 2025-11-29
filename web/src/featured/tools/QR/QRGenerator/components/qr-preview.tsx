"use client";

import { useQueryParams } from "@/hooks/useQueryParams";
import { cn } from "@/lib/utils";
import { QRCodeCanvas } from "qrcode.react";
import { RefObject } from "react";

interface Props {
  canvasRef: RefObject<HTMLCanvasElement | null>;

  src?: string;
}

export function QRPreview({ src, canvasRef }: Props) {
  const { get } = useQueryParams();
  const size = get("size");
  const fgColor = get("fg-color");
  const bgColor = get("bg-color");
  const level = get("level") as "H" | "L" | "M" | "Q";

  const paramWidth = get("image-qr-width");
  const paramHeight = get("image-qr-height");
  const paramOpacity = get("image-qr-opacity");
  const paramImageUrl = get("image-qr-url");
  const includeImage = get("include-image");

  return (
    <div className="w-full flex justify-center">
      {src ? (
        <QRCodeCanvas
          className={cn("hidden", src && "block")}
          ref={canvasRef}
          size={Number(size ?? 260)}
          level={level ?? "M"}
          value={src}
          fgColor={fgColor ?? "#FFFFFF"}
          bgColor={bgColor ?? "#000000"}
          imageSettings={
            includeImage
              ? {
                  excavate: true,
                  height: Number(paramWidth),
                  width: Number(paramHeight),
                  src: String(paramImageUrl),
                  opacity: Number(paramOpacity),
                }
              : undefined
          }
        />
      ) : (
        <p className="text-slate-500">Masukkan teks atau URL</p>
      )}
    </div>
  );
}
