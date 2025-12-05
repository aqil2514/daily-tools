type GlobalMetadata = typeof import("@/../data/metadata/global/en.json");
type AllToolsMetadata = typeof import("@/../data/metadata/all-tools/en.json");

export type MetadataType = 'global' | 'all-tools'; 

type MetadataMap = {
  'global': GlobalMetadata;
  'all-tools': AllToolsMetadata;
  [key: string]: unknown; 
};

export async function getLocalizedMetadata<T extends MetadataType>(
  type: T, 
  locale: string
): Promise<MetadataMap[T]> {
  try {
    const metadataContent = await import(`@/../data/metadata/${type}/${locale}.json`);
    return metadataContent.default as MetadataMap[T];
  } catch (error) {
    console.error(`Metadata file not found for type '${type}' and locale '${locale}'.`);
    throw error;
  }
}