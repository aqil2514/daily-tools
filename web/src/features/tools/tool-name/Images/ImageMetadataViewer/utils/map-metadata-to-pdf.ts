import { MetadataEntry } from "../types/metadata";
import { isImportantExifKey } from "./important-exif";

export interface PdfMetadataItem {
  key: string;
  value: string;
  important: boolean;
}

export function mapMetadataToPdf(
  grouped: Record<string, MetadataEntry[]>,
  formatValue: (value: MetadataEntry[1]["value"]) => string
): Record<string, PdfMetadataItem[]> {
  return Object.fromEntries(
    Object.entries(grouped).map(([group, items]) => [
      group,
      items.map(([key, tag]) => ({
        key,
        value: formatValue(tag.value),
        important: isImportantExifKey(key),
      })),
    ])
  );
}
