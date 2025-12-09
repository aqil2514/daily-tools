export function normalizeLine(
  line: string,
  options: { trim: boolean; caseSensitive: boolean }
) {
  let normalized = line;

  if (options.trim) {
    normalized = normalized.trim();
  }

  if (!options.caseSensitive) {
    normalized = normalized.toLowerCase();
  }

  return normalized;
}
