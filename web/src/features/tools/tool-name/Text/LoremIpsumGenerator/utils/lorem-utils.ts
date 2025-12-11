const LOREM_SOURCE = `
Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur
`.trim().split(" ");

export type LoremMode = "words" | "sentences" | "paragraphs";

export function generateLorem(count: number, mode: LoremMode): string {
  if (count <= 0) return "";

  switch (mode) {
    case "words":
      return generateWords(count);

    case "sentences":
      return generateSentences(count);

    case "paragraphs":
      return generateParagraphs(count);

    default:
      return "";
  }
}

function generateWords(num: number): string {
  const arr = [];
  for (let i = 0; i < num; i++) {
    arr.push(LOREM_SOURCE[Math.floor(Math.random() * LOREM_SOURCE.length)]);
  }
  return arr.join(" ");
}

function generateSentences(num: number): string {
  const arr = [];
  for (let i = 0; i < num; i++) {
    const length = Math.floor(Math.random() * 8) + 8; // 8–16 words
    const sentence = generateWords(length);
    arr.push(sentence.charAt(0).toUpperCase() + sentence.slice(1) + ".");
  }
  return arr.join(" ");
}

function generateParagraphs(num: number): string {
  const arr = [];
  for (let i = 0; i < num; i++) {
    const sentences = Math.floor(Math.random() * 3) + 3; // 3–5 sentences
    arr.push(generateSentences(sentences));
  }
  return arr.join("\n\n");
}
