export function calculateTriangle(
  base: number,
  height: number
) {
  const area = (base * height) / 2;
  const hypotenuse = Math.sqrt(
    base ** 2 + height ** 2
  );
  const perimeter = base + height + hypotenuse;

  return {
    area,
    hypotenuse,
    perimeter,
  };
}
