import { PasswordGeneratorSettings } from "./types/interface";

export const defaultPasswordSettings: PasswordGeneratorSettings = {
  length: 16,

  useUppercase: true,
  useLowercase: true,
  useNumbers: true,
  useSymbols: true,

  excludeSimilar: false,
  excludeDuplicates: false,
  allowSpaces: false,

  customCharacters: "",
  pattern: null,

  mode: "default",
  passphraseWordCount: 4,
  passphraseDelimiter: "-",

  generateCount: 1,
};
