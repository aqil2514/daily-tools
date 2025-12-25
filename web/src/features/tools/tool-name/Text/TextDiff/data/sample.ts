type SampleKey = "sample-1" | "sample-2" | "sample-3";

export interface SampleItem {
  original: string;
  changed: string;
}

export const sampleData: Record<SampleKey, SampleItem> = {
  "sample-1": {
    original: `Flowtooly is a simple tool for everyday productivity.
It helps users process files quickly and securely.`,

    changed: `Flowtooly is a privacy-first utility tool for productivity.
It allows users to edit, convert, and manage files effortlessly.`,
  },

  "sample-2": {
    original: `The quick brown fox jumps over the lazy dog.
This sentence contains every letter in English.`,

    changed: `The quick brown fox leaps over a sleeping dog.
This phrase includes almost every letter in the English language.`,
  },

  "sample-3": {
    original: `JavaScript is a versatile programming language.
It is commonly used for web development.`,

    changed: `JavaScript is a highly flexible programming language.
It is widely used to build modern web applications.`,
  },
};
