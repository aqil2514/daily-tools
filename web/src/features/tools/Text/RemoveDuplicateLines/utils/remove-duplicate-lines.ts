import { DedupeResult } from "../types/inteface";
import { normalizeLine } from "./normalize-line";
import { removeEmptyLines } from "./remove-empty-lines";

export function removeDuplicateLines(
  text: string,
  options: {
    trim: boolean;
    caseSensitive: boolean;
    removeEmpty: boolean;
  }
): DedupeResult {
  if (!text.trim()) {
    return {
      original: text,
      result: "",
      totalLines: 0,
      uniqueLines: 0,
      removedLines: 0,
    };
  }

  // Split berdasarkan newline
  let lines = text.split("\n");

  // Opsional: remove empty lines
  if (options.removeEmpty) {
    lines = removeEmptyLines(lines);
  }

  const seen = new Set<string>();
  const unique: string[] = [];

  for (const line of lines) {
    const key = normalizeLine(line, {
      trim: options.trim,
      caseSensitive: options.caseSensitive,
    });

    // Jika belum pernah muncul → simpan
    if (!seen.has(key)) {
      seen.add(key);
      unique.push(options.trim ? line.trim() : line);
    }
    // Jika sudah muncul → skip
  }

  const total = lines.length;
  const uniqueCount = unique.length;
  const removed = total - uniqueCount;

  return {
    original: text,
    result: unique.join("\n"),
    totalLines: total,
    uniqueLines: uniqueCount,
    removedLines: removed,
  };
}
