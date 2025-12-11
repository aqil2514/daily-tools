export const base64EncodeSampleData = {
  // Text sederhana
  Simple: "Hello Flowtooly",

  // Multilingual UTF-8
  Multilingual: "こんにちは世界 — Flowtooly🔥",

  // Kalimat panjang
  Paragraph:
    "Base64 encoding is a common technique to convert text into ASCII for safe transmission.",

  // Emoji only
  Emojis: "🔥🚀🐱‍👤✨",

  // Mixed characters
  MixedCharacters: "Flowtooly | 工具 | أدوات | инструменты",

  // JSON object
  JSON: JSON.stringify(
    {
      name: "Flowtooly",
      version: "1.0.0",
      features: ["encode", "decode", "developer-tools"],
    },
    null,
    2
  ),

  // Multiline text
  Multiline: `Line 1: Flowtooly
Line 2: Base64 Encoder
Line 3: Ready to convert`,

  // URL example
  URL: "https://flowtooly.app/tools/base64-encoder",

  // HTML snippet
  HTMLSnippet: "<div class='box'>Flowtooly Base64</div>",
};
