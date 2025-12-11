export interface RegexResult {
  isValid: boolean;
  error?: string;
  matches: string[];
}

export function testRegex(
  pattern: string,
  flags: string,
  text: string
): RegexResult {
  try {
    const regex = new RegExp(pattern, flags);
    const matches = [...text.matchAll(regex)].map((m) => m[0]);
    return {
      isValid: true,
      matches,
    };
  } catch (e) {
    if (e instanceof Error)
      return {
        isValid: false,
        error: e.message,
        matches: [],
      };

    return {
      isValid: false,
      matches: [],
      error: "Unknown Error",
    };
  }
}
