export interface RectangleProblem {
  length: number;
  width: number;
  correctArea: number;
  correctPerimeter: number;
}

export function generateRectangleProblem(
  min: number,
  max: number
): RectangleProblem {
  const length =
    Math.floor(Math.random() * (max - min + 1)) + min;
  const width =
    Math.floor(Math.random() * (max - min + 1)) + min;

  return {
    length,
    width,
    correctArea: length * width,
    correctPerimeter: 2 * (length + width),
  };
}
