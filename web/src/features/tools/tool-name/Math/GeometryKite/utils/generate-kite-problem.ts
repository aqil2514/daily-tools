export interface KiteProblem {
  d1: number;
  d2: number;
  a: number;
  b: number;
  correctArea: number;
  correctPerimeter: number;
}

export function generateKiteProblem(
  min: number,
  max: number
): KiteProblem {
  const rand = () =>
    Math.floor(Math.random() * (max - min + 1)) + min;

  const d1 = rand();
  const d2 = rand();
  const a = rand();
  const b = rand();

  const area = (d1 * d2) / 2;
  const perimeter = 2 * (a + b);

  return {
    d1,
    d2,
    a,
    b,
    correctArea: area,
    correctPerimeter: perimeter,
  };
}
