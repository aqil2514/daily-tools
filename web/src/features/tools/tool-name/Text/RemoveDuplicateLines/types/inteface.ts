export interface DedupeResult {
  original: string;
  result: string;
  totalLines: number;
  uniqueLines: number;
  removedLines: number;
}

export interface DedupeOptions {
  trim: boolean;
  caseSensitive: boolean;
  removeEmpty: boolean;
}
