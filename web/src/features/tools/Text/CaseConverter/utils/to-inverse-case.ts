export function toInverseCase(text: string): string {
  return text
    .split("")
    .map((c) =>
      c === c.toUpperCase() ? c.toLowerCase() : c.toUpperCase()
    )
    .join("");
}
