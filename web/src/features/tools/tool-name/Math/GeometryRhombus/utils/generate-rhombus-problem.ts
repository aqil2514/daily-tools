export interface RhombusProblem {
  d1: number;
  d2: number;
  s: number;
  correctArea: number;
  correctPerimeter: number;
}

export function generateRhombusProblem(
  min: number,
  max: number
): RhombusProblem {
  const rand = () =>
    Math.floor(Math.random() * (max - min + 1)) + min;

  const d1 = rand();
  const d2 = rand();
  const s = rand();

  const area = (d1 * d2) / 2;
  const perimeter = 4 * s;

  return {
    d1,
    d2,
    s,
    correctArea: area,
    correctPerimeter: perimeter,
  };
}
