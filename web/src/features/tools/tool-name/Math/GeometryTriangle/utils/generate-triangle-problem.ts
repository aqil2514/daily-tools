// utils/generate-triangle-problem.ts
export interface TriangleProblem {
  base: number;
  height: number;
  correctArea: number;
  correctHypotenuse: number;
  correctPerimeter: number;
}

export function generateTriangleProblem(
  min: number,
  max: number
): TriangleProblem {
  const base =
    Math.floor(Math.random() * (max - min + 1)) + min;
  const height =
    Math.floor(Math.random() * (max - min + 1)) + min;

  const hypotenuse = Math.sqrt(
    base ** 2 + height ** 2
  );

  return {
    base,
    height,
    correctArea: (base * height) / 2,
    correctHypotenuse: Math.round(hypotenuse * 100) / 100,
    correctPerimeter:
      Math.round((base + height + hypotenuse) * 100) /
      100,
  };
}
