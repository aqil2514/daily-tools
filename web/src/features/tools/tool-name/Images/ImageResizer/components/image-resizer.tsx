"use client";

import { ToolCard } from "@/components/molecules/card/tool-card";

import { SourceSelection } from "@/components/molecules/source-selection";
import { ImageBeforeAfterPreview } from "@/components/molecules/image-before-after-preview";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ImageResizerProvider, useImageResizer } from "../provider";
import { ResizerSetting } from "./resizer-setting";
import { getImageMetadata } from "@/utils/image/getImageMetadata";
import { getNearestRatio } from "@/utils/image/getNearestRatio";
import { useState } from "react";
import { ResizerAction } from "./resizer-action";

export function ImageResizer() {
  return (
    <ImageResizerProvider>
      <InnerTemplate />
    </ImageResizerProvider>
  );
}

const InnerTemplate = () => {
  const {
    setResizerSettings,
    setPreviewUrl,
    previewUrl,
    resizedUrl,
    resizerSettings,
  } = useImageResizer();
  const [snapshot, setSnapshot] = useState<{ width: number; height: number }>({
    height: 0,
    width: 0,
  });

  const { height, width } = snapshot;
  const { nearestLabel } = getNearestRatio(width, height);
  const { nearestLabel: currentRatio } = getNearestRatio(width, height);

  const fileSelectedHandler = async (file: File | null) => {
    if (!file) return;
    const image = await getImageMetadata(file);
    const url = URL.createObjectURL(file);

    setSnapshot({
      height: image.height,
      width: image.width,
    });
    setPreviewUrl(url);
    setResizerSettings((prev) => ({
      ...prev,
      height: image.height,
      width: image.width,
      ratio: image.width / image.height,
    }));
  };

  const urlSelectedHandler = async (url: string) => {
    const image = await getImageMetadata(url);

    setSnapshot({
      height: image.height,
      width: image.width,
    });
    setPreviewUrl(url);
    setResizerSettings((prev) => ({
      ...prev,
      height: image.height,
      width: image.width,
      ratio: image.width / image.height,
    }));
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <ToolCard>
        <ScrollArea className="h-96 space-y-6">
          <SourceSelection
            onFileSelected={fileSelectedHandler}
            onUrlSelected={urlSelectedHandler}
          />

          <ResizerSetting />

          <ResizerAction />
        </ScrollArea>
      </ToolCard>

      <ImageBeforeAfterPreview
        after={{
          noImageMessage: "",
          src: resizedUrl,
          title: resizedUrl
            ? `Dimensi gambar saat ini ${resizerSettings.width} X ${resizerSettings.height} (${currentRatio})`
            : "",
        }}
        before={{
          noImageMessage: "Pilih gambar dari file atau url",
          src: previewUrl,
          title: previewUrl
            ? `Dimensi gambar sebelumnya ${snapshot.width} X ${snapshot.height} (${nearestLabel})`
            : "",
        }}
      />
    </div>
  );
};
