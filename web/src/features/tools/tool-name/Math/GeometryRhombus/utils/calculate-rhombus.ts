export function calculateRhombus(
  d1: number,
  d2: number,
  s: number
) {
  const area = (d1 * d2) / 2;
  const perimeter = 4 * s;

  return {
    area,
    perimeter,
  };
}
