export function calculateParallelogram(
  a: number,
  t: number,
  b: number
) {
  const area = a * t;
  const perimeter = 2 * (a + b);

  return {
    area,
    perimeter,
  };
}
