"use client";

import { ToolCard } from "@/components/tools/tool-card";
import { SourceSelection } from "./source-selection";
import { ImagePreview } from "@/components/tools/image-preview";
import { useImageConverter } from "../provider";
import { OutputFormatSelect } from "./output-format";
import { DownloadButton } from "@/components/tools/download-button";

export function ImageConverter() {
  const { items, convertedUrl, outputFormat } = useImageConverter();

  const getCleanFileName = (originalFileName: string): string => {
    const lastDotIndex = originalFileName.lastIndexOf(".");
    return lastDotIndex !== -1
      ? originalFileName.substring(0, lastDotIndex)
      : originalFileName;
  };

  const newFileName =
    items.length > 0 && outputFormat
      ? `${getCleanFileName(items[0].fileName)}.${outputFormat}`
      : "";
  return (
    <div className="grid grid-cols-2 gap-4">
      <ToolCard>
        <SourceSelection />
        <OutputFormatSelect />
        {convertedUrl && (
          <DownloadButton url={convertedUrl} filename={newFileName} />
        )}
      </ToolCard>
      <ToolCard>
        {items.length > 0 && (
          <ImagePreview
            src={items[0].url}
            title={`Format Sebelumnya : ${items[0].format}`}
          />
        )}
        <ImagePreview
          src={convertedUrl}
          noImageMessage="Anda belum melakukan konversi gambar"
          title={`Format Sekarang : ${outputFormat}`}
        />
      </ToolCard>
    </div>
  );
}
