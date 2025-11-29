"use client";

import { useQueryParams } from "@/hooks/useQueryParams";
import { cn } from "@/lib/utils";
import { QRCodeCanvas } from "qrcode.react";
import { RefObject   } from "react";

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

  return (
    <div className="w-full flex justify-center">
      <QRCodeCanvas
        className={cn("hidden", src && "block")}
        ref={canvasRef}
        size={Number(size ?? 260)}
        level={level ?? "M"}
        value={String(src)}
        fgColor={fgColor ?? "#FFF"}
        bgColor={bgColor ?? "#000000"}
      />
      ,
    </div>
  );
}
