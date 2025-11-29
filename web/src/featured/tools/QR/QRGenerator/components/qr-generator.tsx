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
  const { get, set, clear, all } = useQueryParams();
  const outputUrl = get("output-url");
  const [value, setValue] = useState<string>(outputUrl ?? "");

  return (
    <ToolCard>
      <div className="grid grid-cols-2">
        <div>
          {/* Action */}
          <div className="flex gap-3">
            {outputUrl && <Button onClick={handleDownload}>Download</Button>}
            {all.size > 0 && (
              <Button
                onClick={() => {
                  setValue("");
                  clear();
                }}
              >
                Reset
              </Button>
            )}
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Isi Teks / URL</label>
            <input
              value={value}
              onBlur={() => {
                if (!value) return;
                set("output-url", value);
              }}
              onChange={(e) => setValue(e.target.value)}
              className="w-full border rounded-md p-2"
              placeholder="Masukkan teks atau URL untuk membuat QR"
            />
          </div>

          <QRSettings />
        </div>

        <QRPreview canvasRef={canvasRef} src={outputUrl ?? ""} />
      </div>
    </ToolCard>
  );
}
