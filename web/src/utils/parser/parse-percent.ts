export function parsePercent(input: string): number | undefined {
  if (!input) return undefined;

  const normalized = input.replace("%", "").trim();
  const value = Number(normalized);

  if (!Number.isFinite(value)) return undefined;

  return value / 100;
}
