import { ExifTag } from "../types/metadata";

export function isUint8Array(value: unknown): value is Uint8Array {
  return ArrayBuffer.isView(value) && value instanceof Uint8Array;
}

export function normalizeExifValue(value: ExifTag["value"]): string {
  if (Array.isArray(value)) return value.join(" ").toLowerCase();
  if (isUint8Array(value))
    return Array.from(value).join(" ").toLowerCase();
  return String(value ?? "").toLowerCase();
}

export function formatExifValue(value: ExifTag["value"]): string {
  if (Array.isArray(value)) return value.join(", ");
  if (isUint8Array(value)) return Array.from(value).join(", ");
  return String(value ?? "");
}

export function getExifValue(
  data: Record<string, ExifTag>,
  keys: string[]
): string | null {
  for (const key of keys) {
    const tag = data[key];
    if (tag?.value != null) {
      return Array.isArray(tag.value)
        ? tag.value.join(" ")
        : String(tag.value);
    }
  }
  return null;
}
