"use client";
import { ToolCard } from "@/components/tools/tool-card";
import { ImageToPDFProvider, useImageToPDF } from "../provider";
import { PDFPreview } from "./pdf-preview";
import { UploadImage } from "@/components/atoms/upload-image-v2";
import { SourceSelection } from "@/components/molecules/source-selection-v2";

export function ImageToPDFComponent() {
  const { images, addImage } = useImageToPDF();

  if (images.length < 1)
    return (
      <ToolCard>
        <SourceSelection
          onFilesSelected={(files) => {
            files.forEach((file) => addImage(URL.createObjectURL(file)));
          }}
          onSelectImages={(urls) => {
            urls.forEach((url) => addImage(url));
          }}
        />
      </ToolCard>
    );

  return (
    <div className="grid grid-cols-[60%_auto] gap-4">
      <ToolCard>
        <PDFPreview />
      </ToolCard>
      <ToolCard>Setting</ToolCard>
    </div>
  );
}
