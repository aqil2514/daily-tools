"use client";

import { useEffect, useRef, useState } from "react";
import { useQRGenerator } from "../store/provider";
import QRCodeStyling, { FileExtension } from "qr-code-styling";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Button } from "@/components/ui/button";
import { useLocale } from "next-intl";
import { i18nQRPreview } from "../i18n/preview";

export function QRPreview() {
  const { options } = useQRGenerator();
  const [qrCode, setQrCode] = useState<QRCodeStyling>();
  const [fileExt, setFileExt] = useState<FileExtension>("svg");
  const ref = useRef<HTMLDivElement>(null);

  const locale = useLocale();
  const t = i18nQRPreview[locale];

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setQrCode(new QRCodeStyling(options));
  }, [options]);

  useEffect(() => {
    if (ref.current) {
      qrCode?.append(ref.current);
    }
  }, [qrCode]);

  useEffect(() => {
    if (!qrCode) return;
    qrCode.update(options);
  }, [qrCode, options]);

  if (!options.data)
    return (
      <div className="p-6 border border-border rounded-xl bg-muted/30 text-center">
        <p className="text-sm text-muted-foreground">{t.noData}</p>
      </div>
    );

  const onDownloadClick = () => {
    if (!qrCode) return;
    qrCode.download({ extension: fileExt });
  };

  return (
    <div className="w-full max-w-sm mx-auto space-y-6">
      {/* QR Box */}
      <div className="rounded-xl border border-border bg-white shadow-sm p-6 flex items-center justify-center">
        <div ref={ref} />
      </div>

      {/* Controls */}
      <div className="rounded-xl border border-border bg-muted/20 p-4 space-y-4">
        {/* Format Select */}
        <div className="space-y-1">
          <label className="text-xs font-medium text-muted-foreground">
            {t.formatLabel}
          </label>

          <Select value={fileExt} onValueChange={(e) => setFileExt(e as FileExtension)}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder={t.formatPlaceholder} />
            </SelectTrigger>

            <SelectContent>
              <SelectItem value="svg">SVG</SelectItem>
              <SelectItem value="png">PNG</SelectItem>
              <SelectItem value="jpeg">JPEG</SelectItem>
              <SelectItem value="webp">WEBP</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Download Button */}
        <Button onClick={onDownloadClick} className="w-full">
          {t.btnDownload}
        </Button>
      </div>
    </div>
  );
}
