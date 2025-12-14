import { calculateSquare } from "./calculate-square";

export interface SquareProblem {
  side: number;
  correctArea: number;
  correctPerimeter: number;
}

export function generateSquareProblem(
  minSide = 2,
  maxSide = 20
): SquareProblem {
  const side =
    Math.floor(Math.random() * (maxSide - minSide + 1)) + minSide;

  const { area, perimeter } = calculateSquare(side);

  return {
    side,
    correctArea: area,
    correctPerimeter: perimeter,
  };
}
