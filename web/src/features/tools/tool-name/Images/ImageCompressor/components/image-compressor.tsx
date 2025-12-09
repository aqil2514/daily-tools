"use client";
import { ImageBeforeAfterPreview } from "@/components/molecules/image-before-after-preview";
import { SourceSelection } from "@/components/molecules/source-selection";
import { ToolCard } from "@/components/tools/tool-card";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { QualitySelector } from "./quality-selector";
import { useImageCompressor } from "../provider";
import { CompressorAction } from "./compressor-action";
import { getImageFileData } from "@/utils/image/getImageFileData";

export function ImageCompressorComp() {
  const {
    compressedUrl,
    previewUrl,
    setPreviewUrl,
    setCompressedUrl,
    setFileMime,
  } = useImageCompressor();

  const fileSelectedHandler = async (file: File | null) => {
    if (!file) return;
    const url = URL.createObjectURL(file);

    setPreviewUrl(url);
    setFileMime(file.type);
    setCompressedUrl("");
  };

  const urlSelectedHandler = async (url: string) => {
    const file = await getImageFileData(url);
    
    setPreviewUrl(url);
    setCompressedUrl("");
    setFileMime(file.type)
  };

  return (
    <div className="grid grid-cols-2 gap-4">
      <ToolCard>
        <ScrollArea className="h-96 space-y-6">
          <SourceSelection
            onFileSelected={fileSelectedHandler}
            onUrlSelected={urlSelectedHandler}
          />
        </ScrollArea>

        <QualitySelector />

        <CompressorAction />
      </ToolCard>

      <ImageBeforeAfterPreview
        before={{
          noImageMessage: "Pilih gambar dari file atau url",
          src: previewUrl,
          title: "Sebelum dikompress",
        }}
        after={{
          noImageMessage: "",
          src: compressedUrl,
          title: "Setelah dikompress",
        }}
      />
    </div>
  );
}
