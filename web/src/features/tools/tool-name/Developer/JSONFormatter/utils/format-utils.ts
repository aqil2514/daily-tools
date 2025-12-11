export function formatJSON(text: string): string {
  return JSON.stringify(JSON.parse(text), null, 2);
}

export function minifyJSON(text: string): string {
  return JSON.stringify(JSON.parse(text));
}

export function validateJSON(text: string): { valid: boolean; error?: string } {
  try {
    JSON.parse(text);
    return { valid: true };
  } catch (err: unknown) {
    let message = "Unknown error";

    if (err instanceof Error) {
      message = err.message;
    }

    return { valid: false, error: message };
  }
}
