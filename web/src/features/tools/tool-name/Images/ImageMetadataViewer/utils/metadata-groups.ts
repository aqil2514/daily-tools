// metadata-groups.ts
export type MetadataGroup =
  | "image"
  | "camera"
  | "color"
  | "gps"
  | "date"
  | "other";

export const METADATA_GROUP_LABEL: Record<MetadataGroup, string> = {
  image: "Image Information",
  camera: "Camera",
  color: "Color & Encoding",
  gps: "GPS",
  date: "Date & Time",
  other: "Other Metadata",
};

export function resolveMetadataGroup(key: string): MetadataGroup {
  const k = key.toLowerCase();

  if (
    k.includes("width") ||
    k.includes("height") ||
    k.includes("resolution") ||
    k.includes("orientation")
  )
    return "image";

  if (
    k.includes("camera") ||
    k.includes("make") ||
    k.includes("model") ||
    k.includes("lens") ||
    k.includes("iso") ||
    k.includes("exposure") ||
    k.includes("fnumber") ||
    k.includes("aperture") ||
    k.includes("shutter")
  )
    return "camera";

  if (
    k.includes("color") ||
    k.includes("bit") ||
    k.includes("sampling") ||
    k.includes("profile") ||
    k.includes("encoding")
  )
    return "color";

  if (k.startsWith("gps")) return "gps";

  if (
    k.includes("date") ||
    k.includes("time") ||
    k.includes("created") ||
    k.includes("modified")
  )
    return "date";

  return "other";
}
