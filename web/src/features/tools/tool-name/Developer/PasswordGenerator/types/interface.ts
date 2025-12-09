export type PasswordMode = "default" | "passphrase";

export interface PasswordGeneratorSettings {
  // Basic
  length: number;

  // Character options
  useUppercase: boolean;
  useLowercase: boolean;
  useNumbers: boolean;
  useSymbols: boolean;

  // Advanced
  excludeSimilar: boolean;
  excludeDuplicates: boolean;
  allowSpaces: boolean;

  // Custom charset
  customCharacters: string;

  // Pattern based (optional)
  pattern: string | null;

  // Passphrase mode
  mode: PasswordMode;
  passphraseWordCount: number;
  passphraseDelimiter: "-" | "_" | " " | ".";

  // Generate multiple passwords at once
  generateCount: number;
}
