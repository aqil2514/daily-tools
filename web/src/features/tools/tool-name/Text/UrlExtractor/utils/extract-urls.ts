export function extractUrls(text: string): string[] {
  if (!text) return [];

  const urlRegex =
    /((https?:\/\/[^\s]+)|(www\.[^\s]+)|([a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)+\/?[^\s]*))/g;

  const matches = text.match(urlRegex) || [];

  const cleaned = matches.map((url) =>
    url.replace(/[),.;\]]+$/, "").trim()
  );

  return cleaned;
}
