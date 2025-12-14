export function calculateSemicircle(radius: number) {
  const area = 0.5 * Math.PI * radius * radius;
  const perimeter = Math.PI * radius + 2 * radius;

  return {
    area,
    perimeter,
  };
}