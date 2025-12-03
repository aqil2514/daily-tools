"use client";

import { ToolCard } from "@/components/tools/tool-card";
// import { SourceSelection } from "./source-selection";
import { useImageConverter } from "../provider";
import { OutputFormatSelect } from "./output-format";
import { DownloadButton } from "@/components/tools/download-button";
import { SourceSelection } from "@/components/molecules/source-selection";
import { mapFileToImageItem } from "@/utils/mapper/fileToImageItem";
import { mapUrlToImageItem } from "@/utils/mapper/urlToImageItem";
import { ImageBeforeAfterPreview } from "@/components/molecules/image-before-after-preview";

export function ImageConverter() {
  const { items, convertedUrl, outputFormat, setItems, setConvertedUrl } =
    useImageConverter();

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
        <SourceSelection
          onFileSelected={async (file) => {
            if (!file) return;
            const item = await mapFileToImageItem(file);
            setItems([item]);
            setConvertedUrl("");
          }}
          onUrlSelected={async (url) => {
            const item = await mapUrlToImageItem(url);
            setItems([item]);
            setConvertedUrl("");
          }}
        />

        <OutputFormatSelect />
        {convertedUrl && (
          <DownloadButton url={convertedUrl} filename={newFileName} />
        )}
      </ToolCard>

      <ImageBeforeAfterPreview
        after={{
          src: convertedUrl,
          noImageMessage: "Anda belum melakukan konversi gambar",
          title: `Format Sekarang : ${outputFormat}`,
        }}
        before={{
          src: items.length > 0 ? items[0].url : "",
          title:
            items.length > 0 ? `Format Sebelumnya : ${items[0].format}` : "",
        }}
      />
    </div>
  );
}
