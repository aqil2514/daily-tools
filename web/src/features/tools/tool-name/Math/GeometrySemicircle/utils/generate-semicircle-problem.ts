export interface SemicircleProblem {
  radius: number;
  correctArea: number;
  correctPerimeter: number;
}

export function generateSemicircleProblem(
  min: number,
  max: number
): SemicircleProblem {
  const radius =
    Math.floor(Math.random() * (max - min + 1)) + min;

  const area = 0.5 * Math.PI * radius * radius;
  const perimeter = Math.PI * radius + 2 * radius;

  return {
    radius,
    correctArea: area,
    correctPerimeter: perimeter,
  };
}
