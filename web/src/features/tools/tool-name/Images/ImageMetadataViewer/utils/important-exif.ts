const IMPORTANT_EXIF_KEYS = new Set<string>([
  "Image Width",
  "Image Height",
  "ExifImageWidth",
  "ExifImageHeight",
  "Orientation",
  "Make",
  "Model",
  "LensModel",
  "ISO",
  "ExposureTime",
  "FNumber",
  "FocalLength",
  "DateTimeOriginal",
  "CreateDate",
  "GPSLatitude",
  "GPSLongitude",
]);

export function isImportantExifKey(key: string): boolean {
  return IMPORTANT_EXIF_KEYS.has(key);
}
