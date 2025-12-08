import { PasswordGeneratorSettings } from "../types/interface";

const SIMILAR_CHARS = "Il1O0o";

const LOWERCASE = "abcdefghijklmnopqrstuvwxyz";
const UPPERCASE = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const NUMBERS = "0123456789";
const SYMBOLS = "!@#$%^&*()-_=+[]{}|;:,.<>/?";
const SPACES = " ";

export function generatePassword(settings: PasswordGeneratorSettings): string {
  let charset = "";

  if (settings.useLowercase) charset += LOWERCASE;
  if (settings.useUppercase) charset += UPPERCASE;
  if (settings.useNumbers) charset += NUMBERS;
  if (settings.useSymbols) charset += SYMBOLS;
  if (settings.allowSpaces) charset += SPACES;

  if (settings.customCharacters.trim()) {
    charset += settings.customCharacters;
  }

  // Jika charset kosong → tidak bisa generate
  if (!charset.length) return "";

  // Exclude similar chars
  if (settings.excludeSimilar) {
    charset = charset
      .split("")
      .filter((c) => !SIMILAR_CHARS.includes(c))
      .join("");
  }

  let password = "";

  for (let i = 0; i < settings.length; i++) {
    const char = charset[Math.floor(Math.random() * charset.length)];

    if (settings.excludeDuplicates && password.includes(char)) {
      i--; // ulangi posisi ini
      continue;
    }

    password += char;
  }

  return password;
}
