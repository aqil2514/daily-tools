"use client";

import { ToolCard } from "@/components/molecules/card/tool-card";

import { useImageMetadata } from "../hooks/use-image-metadata";
import { ImageMetadataInput } from "./image-metadata-input";
import { ImageMetadataSummary } from "./image-metadata-summary";
import { ImageMetadataSearch } from "./image-metadata-search";
import { ImageMetadataAccordion } from "./image-metadata-accordion";
import { ImageMetadataExportPdfButton } from "./image-metadata-export-pdf";

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
        {/* INPUT */}
        <ImageMetadataInput meta={meta} />

        {/* ACTIONS */}
        {meta.data && meta.filteredGroupedData && meta.summary && (
          <div className="flex gap-2">
            <ImageMetadataExportPdfButton
              file={meta.file}
              summary={meta.summary}
              groupedData={meta.filteredGroupedData}
              formatExifValue={meta.formatExifValue}
            />
          </div>
        )}

        {/* OUTPUT */}
        <ImageMetadataSummary summary={meta.summary} />
        <ImageMetadataSearch meta={meta} />
        <ImageMetadataAccordion meta={meta} />
      </div>
    </ToolCard>
  );
}
