import { SlugControllerState } from "../types/interface";

export function slugify(input: string, options: SlugControllerState): string {
  let text = input || "";

  // Trim whitespace (if enabled)
  if (options.trimWhitespace) {
    text = text.trim();
  }

  // Remove special characters
  if (options.removeSpecial) {
    text = text.replace(/[^a-zA-Z0-9\s-_]/g, "");
  }

  // Collapse multiple spaces to one
  if (options.collapseSpaces) {
    text = text.replace(/\s+/g, " ");
  }

  // Replace spaces with delimiter
  text = text.replace(/\s/g, options.delimiter);

  // Lowercase
  if (options.lowercase) {
    text = text.toLowerCase();
  }

  // Final cleanup: collapse repeated delimiters
  text = text.replace(
    new RegExp(`\\${options.delimiter}{2,}`, "g"),
    options.delimiter
  );

  // Final trim delimiter at start/end
  const reg = new RegExp(`^\\${options.delimiter}|\\${options.delimiter}$`, "g");
  text = text.replace(reg, "");

  return text;
}
