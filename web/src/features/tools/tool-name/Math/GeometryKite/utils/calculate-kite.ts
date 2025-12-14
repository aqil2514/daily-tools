export function calculateKite(
  d1: number,
  d2: number,
  a: number,
  b: number
) {
  const area = (d1 * d2) / 2;
  const perimeter = 2 * (a + b);

  return {
    area,
    perimeter,
  };
}
