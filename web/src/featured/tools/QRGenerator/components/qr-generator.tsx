"use client";

import { Button } from "@/components/ui/button";
import { ToolCard } from "@/components/tools/tool-card";

import { QRSettings } from "./qr-settings";
import { QRPreview } from "./qr-preview";
import { useQRGenerator } from "../hooks/useQRGenerator";
import { useQueryParams } from "@/hooks/useQueryParams";
import { useState } from "react";

export function QRGenerator() {
  const {
    canvasRef,

    handleDownload,
  } = useQRGenerator();
  const { get, set, clear } = useQueryParams();
  const outputUrl = get("output-url");
  const [value, setValue] = useState<string>(outputUrl ?? "");

  return (
    <ToolCard>
      {/* Input text */}
      <div className="space-y-2">
        <label className="text-sm font-medium">Isi Teks / URL</label>
        <input
          value={value}
          onBlur={() => set("output-url", value)}
          onChange={(e) => setValue(e.target.value)}
          className="w-full border rounded-md p-2"
          placeholder="Masukkan teks atau URL untuk membuat QR"
        />
      </div>

      {/* Settings */}
      <QRSettings />

      {/* Action */}
      <div className="flex gap-3">
        {outputUrl && <Button onClick={handleDownload}>Download</Button>}
        <Button onClick={() => clear()}>Reset</Button>
      </div>

      <QRPreview canvasRef={canvasRef} src={outputUrl ?? ""} />
    </ToolCard>
  );
}
