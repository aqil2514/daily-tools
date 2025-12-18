"use client";

import { ToolCard } from "@/components/molecules/card/tool-card";
import { Separator } from "@/components/ui/separator";

import { useImageMetadata } from "../hooks/use-image-metadata";
import { ImageMetadataInput } from "./image-metadata-input";
import { ImageMetadataSummary } from "./image-metadata-summary";
import { ImageMetadataSearch } from "./image-metadata-search";
import { ImageMetadataAccordion } from "./image-metadata-accordion";

export function ImageMetadataViewer() {
  const meta = useImageMetadata();

  if (!meta.file) {
    return (
      <ToolCard>
        <ImageMetadataInput meta={meta} empty />
      </ToolCard>
    );
  }

  return (
    <ToolCard>
      <div className="space-y-6">
        <ImageMetadataInput meta={meta} />
        <ImageMetadataSummary summary={meta.summary} />

        <Separator />

        {meta.data && (
          <>
            <ImageMetadataSearch meta={meta} />
            <ImageMetadataAccordion meta={meta} />
          </>
        )}
      </div>
    </ToolCard>
  );
}
