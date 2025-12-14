export interface CircleProblem {
  radius: number;
  correctArea: number;
  correctCircumference: number;
}

export function generateCircleProblem(
  min: number,
  max: number
): CircleProblem {
  const radius =
    Math.floor(Math.random() * (max - min + 1)) + min;

  const area = Math.PI * radius * radius;
  const circumference = 2 * Math.PI * radius;

  return {
    radius,
    correctArea: Math.round(area * 100) / 100,
    correctCircumference:
      Math.round(circumference * 100) / 100,
  };
}
