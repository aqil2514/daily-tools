"use client";

import { useState } from "react";
import { Copy, Download } from "lucide-react";
import { toast } from "sonner";
import { useLocale } from "next-intl";

import { ToolCard } from "@/components/molecules/card/tool-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export type MimeTypeList =
  | "application/json"
  | "text/csv"
  | "application/sql"
  | "text/plain"
  | "text/plain;charset=utf-8"
  | "application/xml"
  | "text/xml"
  | "application/x-yaml"
  | "text/yaml";

interface TextOutputCardProps {
  title: string;
  value: string;
  emptyText?: string;
  readonly?: boolean;

  download?: {
    filename?: string;
    mimeType?: MimeTypeList;
  };
}

export function TextOutputCard({
  title,
  value,
  emptyText,
  readonly = true,
  download,
}: TextOutputCardProps) {
  const locale = useLocale();
  const isID = locale === "id";

  const texts = {
    copy: isID ? "Salin" : "Copy",
    copied: isID ? "Tersalin" : "Copied",
    download: isID ? "Unduh" : "Download",

    filename: isID ? "Nama file" : "Filename",

    copySuccessTitle: isID ? "Berhasil disalin" : "Copied to clipboard",
    copySuccessDesc: isID
      ? "Output berhasil disalin ke clipboard."
      : "Output has been copied to your clipboard.",

    downloadSuccessTitle: isID ? "File diunduh" : "File downloaded",
    downloadSuccessDesc: (name: string) =>
      isID ? `${name} berhasil diunduh.` : `${name} has been downloaded.`,

    defaultEmpty: isID
      ? "Output akan muncul di sini"
      : "Output will appear here",
  };

  const [copied, setCopied] = useState(false);

  // 👇 state nama file (tanpa extension)
  const [fileName, setFileName] = useState(
    download?.filename?.replace(/\.[^/.]+$/, "") || "csvtojson - Flowtooly"
  );

  const fileExtension = download?.filename?.match(/\.[^/.]+$/)?.[0] ?? "";

  const handleCopy = async () => {
    if (!value) return;

    await navigator.clipboard.writeText(value);
    setCopied(true);

    toast.success(texts.copySuccessTitle, {
      description: texts.copySuccessDesc,
    });

    setTimeout(() => setCopied(false), 1500);
  };

  const handleDownload = () => {
    if (!value || !download) return;

    const blob = new Blob([value], {
      type: download.mimeType ?? "text/plain;charset=utf-8",
    });

    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");

    a.href = url;
    a.download = `${fileName}${fileExtension}`;
    a.click();

    URL.revokeObjectURL(url);

    toast.success(texts.downloadSuccessTitle, {
      description: texts.downloadSuccessDesc(a.download),
    });
  };

  return (
    <ToolCard>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-medium">{title}</h2>

        <div className="flex items-center gap-2">
          {download && (
            <Button
              variant="outline"
              size="sm"
              className="flex items-center gap-2"
              onClick={handleDownload}
              disabled={!value}
            >
              <Download size={16} />
              {texts.download}
            </Button>
          )}

          <Button
            variant="outline"
            size="sm"
            className="flex items-center gap-2"
            onClick={handleCopy}
            disabled={!value}
          >
            <Copy size={16} />
            {copied ? texts.copied : texts.copy}
          </Button>
        </div>
      </div>

      <textarea
        readOnly={readonly}
        value={value}
        placeholder={emptyText ?? texts.defaultEmpty}
        className="
          w-full
          h-[300px]
          p-3
          rounded-md
          border
          bg-muted
          text-sm
          font-mono
          resize-none
          focus-visible:ring-1
          focus-visible:ring-ring
        "
      />

      {download && (
        <div className="mt-3 flex items-center gap-2">
          <Input
            value={fileName}
            onChange={(e) => setFileName(e.target.value)}
            placeholder={texts.filename}
            className="max-w-sm"
          />
          {fileExtension && (
            <span className="text-sm text-muted-foreground">
              {fileExtension}
            </span>
          )}
        </div>
      )}
    </ToolCard>
  );
}
