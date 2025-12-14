export function formatNumber(value: number): string {
  if (isNaN(value)) return "0";
  return new Intl.NumberFormat().format(value);
}
