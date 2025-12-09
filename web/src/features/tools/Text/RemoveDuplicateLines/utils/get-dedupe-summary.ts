export function getDedupeSummary(text: string, result: string) {
  const total = text.trim() ? text.split("\n").length : 0;
  const unique = result.trim() ? result.split("\n").length : 0;

  return {
    totalLines: total,
    uniqueLines: unique,
    removedLines: total - unique,
  };
}
