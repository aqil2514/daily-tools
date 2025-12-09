export interface KeywordItem {
  word: string;
  count: number;
  density: number; // percentage
}

export function calcKeywordDensity(
  text: string,
  totalWords: number,
  limit: number = 10
): KeywordItem[] {
  if (!text.trim() || totalWords === 0) return [];

  const cleaned = text
    .toLowerCase()
    .replace(/[^\w\s]/g, "") // remove punctuation
    .split(/\s+/)
    .filter(Boolean);

  const freqMap = new Map<string, number>();

  for (const w of cleaned) {
    freqMap.set(w, (freqMap.get(w) || 0) + 1);
  }

  const items: KeywordItem[] = [...freqMap.entries()].map(([word, count]) => ({
    word,
    count,
    density: parseFloat(((count / totalWords) * 100).toFixed(2)),
  }));

  // Sort by highest count then highest density
  items.sort((a, b) => b.count - a.count);

  return items.slice(0, limit);
}
