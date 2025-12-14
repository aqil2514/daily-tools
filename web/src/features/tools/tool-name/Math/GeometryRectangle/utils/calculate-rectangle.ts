export function calculateRectangle(
  length: number,
  width: number
) {
  const area = length * width;
  const perimeter = 2 * (length + width);

  return {
    area,
    perimeter,
  };
}
