export function normalizeMime(type: string): string {
  if (type.includes("jpeg") || type.includes("jpg")) return "image/jpeg";
  if (type.includes("png")) return "image/png";
  if (type.includes("webp")) return "image/webp";
  return "image/jpeg";
}