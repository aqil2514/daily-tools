export const MATH_TOOLS = [
  "geometry-square",
  "geometry-rectangle",
  "geometry-triangle",
  "geometry-circle",
  "geometry-trapezoid",
  "geometry-parallelogram",
  "geometry-rhombus",
  "geometry-kite",
  "geometry-semicircle",
] as const;

export type MathToolName = typeof MATH_TOOLS[number];
