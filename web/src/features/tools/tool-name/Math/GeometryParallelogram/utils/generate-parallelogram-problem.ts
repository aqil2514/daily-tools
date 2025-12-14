export interface ParallelogramProblem {
  a: number;
  t: number;
  b: number;
  correctArea: number;
  correctPerimeter: number;
}

export function generateParallelogramProblem(
  min: number,
  max: number
): ParallelogramProblem {
  const rand = () =>
    Math.floor(Math.random() * (max - min + 1)) + min;

  const a = rand(); // base
  const t = rand(); // height
  const b = rand(); // side

  const area = a * t;
  const perimeter = 2 * (a + b);

  return {
    a,
    t,
    b,
    correctArea: area,
    correctPerimeter: perimeter,
  };
}
