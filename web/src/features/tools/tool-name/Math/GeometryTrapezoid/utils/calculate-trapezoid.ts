export function calculateTrapezoid(
  a: number,
  b: number,
  t: number,
  c: number,
  d: number
) {
  const area = ((a + b) * t) / 2;
  const perimeter = a + b + c + d;

  return {
    area,
    perimeter,
  };
}
