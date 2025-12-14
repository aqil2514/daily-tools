export interface TrapezoidProblem {
  a: number;
  b: number;
  t: number;
  c: number;
  d: number;
  correctArea: number;
  correctPerimeter: number;
}

export function generateTrapezoidProblem(
  min: number,
  max: number
): TrapezoidProblem {
  const rand = () =>
    Math.floor(Math.random() * (max - min + 1)) + min;

  const a = rand();
  const b = rand();
  const t = rand();
  const c = rand();
  const d = rand();

  const area = ((a + b) * t) / 2;
  const perimeter = a + b + c + d;

  return {
    a,
    b,
    t,
    c,
    d,
    correctArea: Math.round(area * 100) / 100,
    correctPerimeter:
      Math.round(perimeter * 100) / 100,
  };
}
