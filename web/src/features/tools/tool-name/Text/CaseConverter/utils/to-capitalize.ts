export function toCapitalize(text: string): string {
  return text.replace(/\b\w/g, (c) => c.toUpperCase());
}
