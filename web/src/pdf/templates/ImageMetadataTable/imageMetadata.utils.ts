interface RawMetadataGroup {
  key: string;
  value: string;
  important: boolean;
}

export function extractImportantMetadata(
  metadata: Record<string, RawMetadataGroup[]>
) {
  return Object.values(metadata)
    .flat()
    .filter((item) => item.important);
}
