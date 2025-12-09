export function toSentenceCase(text: string): string {
  if (!text) return "";

  return text
    .toLowerCase()
    .replace(/(^\s*\w|[.!?]\s*\w)/g, (c) => c.toUpperCase());
}
