"use client";

import { Button } from "@/components/ui/button";
import { useLocale } from "next-intl";

import { mapMetadataToPdf } from "../utils/map-metadata-to-pdf";
import { MetadataEntry } from "../types/metadata";
import { usePdfExport } from "@/hooks/pdf/use-pdf-export";
import { ImageMetadataDocument } from "@/pdf/documents/ImageMetadataDocument";
import { fileToBase64 } from "../utils/file-to-base64";

interface Props {
  file: File;
  summary: {
    resolution: string | null;
    camera: string | null;
    date: string | null;
    size: string | null;
  };
  groupedData: Record<string, MetadataEntry[]>;
  formatExifValue: (value: MetadataEntry[1]["value"]) => string;
}

export function ImageMetadataExportPdfButton({
  file,
  summary,
  groupedData,
  formatExifValue,
}: Props) {
  const locale = useLocale() as "en" | "id";
  const { exportPdf, loading } = usePdfExport();

  if (!groupedData) return null;

  const handleExport = async () => {
    const pdfMetadata = mapMetadataToPdf(groupedData, formatExifValue);

    const imageBase64 = await fileToBase64(file);

    await exportPdf(
      <ImageMetadataDocument
        fileName={file.name}
        imageBase64={imageBase64}
        summary={summary}
        metadata={pdfMetadata}
        locale={locale}
      />,
      {
        fileName: `image-metadata-${file.name.replace(/\.[^/.]+$/, "")}.pdf`,
      }
    );
  };

  return (
    <Button variant="secondary" onClick={handleExport} disabled={loading}>
      {loading ? "Generating PDF..." : "Export PDF"}
    </Button>
  );
}
