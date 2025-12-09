import { calcKeywordDensity, KeywordItem } from "./calc-keyword-density";

export interface TextAnalysis {
  words: number;
  characters: number;
  charactersNoSpace: number;
  sentences: number;
  paragraphs: number;
  readingTime: string;
  speakingTime: string;
  uniqueWords: number;
  keywordDensity: KeywordItem[];
  avgWordsPerSentence: number;
}

/** Hitung jumlah kata dengan mem-filter whitespace ganda */
export function countWords(text: string): number {
  if (!text.trim()) return 0;
  return text.trim().split(/\s+/).filter(Boolean).length;
}

/** Hitung jumlah karakter (termasuk spasi) */
export function countCharacters(text: string): number {
  return text.length;
}

/** Hitung jumlah karakter tanpa spasi */
export function countCharactersNoSpace(text: string): number {
  return text.replace(/\s+/g, "").length;
}

/** Hitung jumlah kalimat berdasarkan . ! ? */
export function countSentences(text: string): number {
  if (!text.trim()) return 0;
  const parts = text
    .split(/[.!?]+/)
    .map((s) => s.trim())
    .filter(Boolean);
  return parts.length;
}

/** Hitung paragraf berdasarkan empty line */
export function countParagraphs(text: string): number {
  if (!text.trim()) return 0;
  const parts = text
    .split(/\n+/)
    .map((p) => p.trim())
    .filter(Boolean);
  return parts.length;
}

/** Hitung waktu baca berdasarkan 200 words/min */
export function calcReadingTime(words: number): string {
  if (words === 0) return "0 min";
  const minutes = Math.ceil(words / 200);
  return `${minutes} min${minutes > 1 ? "s" : ""}`;
}

/** Hitung waktu bicara berdasarkan 130 words/min */
export function calcSpeakingTime(words: number): string {
  if (words === 0) return "0 min";
  const minutes = Math.ceil(words / 130);
  return `${minutes} min${minutes > 1 ? "s" : ""}`;
}

/** Hitung jumlah kata unik */
export function countUniqueWords(text: string): number {
  if (!text.trim()) return 0;

  const words = text
    .toLowerCase()
    .replace(/[^\w\s]/g, "") // hapus tanda baca sederhana
    .split(/\s+/)
    .filter(Boolean);

  return new Set(words).size;
}

/** Hitung rata-rata kata per kalimat */
export function calcAvgWordsPerSentence(
  words: number,
  sentences: number
): number {
  if (sentences === 0) return 0;
  return parseFloat((words / sentences).toFixed(2));
}

/** Fungsi utama */
export function analyzeText(text: string): TextAnalysis {
  const words = countWords(text);
  const characters = countCharacters(text);
  const charactersNoSpace = countCharactersNoSpace(text);
  const sentences = countSentences(text);
  const paragraphs = countParagraphs(text);
  const readingTime = calcReadingTime(words);
  const speakingTime = calcSpeakingTime(words);
  const uniqueWords = countUniqueWords(text);
  const avgWordsPerSentence = calcAvgWordsPerSentence(words, sentences);
  const keywordDensity = calcKeywordDensity(text, words);

  return {
    words,
    characters,
    charactersNoSpace,
    sentences,
    paragraphs,
    readingTime,
    speakingTime,
    uniqueWords,
    avgWordsPerSentence,
    keywordDensity,
  };
}
