export interface SquareCalculationResult {
  side: number;
  area: number;
  perimeter: number;
}

/**
 * Calculate area and perimeter of a square
 * @param side - length of square side
 */
export function calculateSquare(
  side: number
): SquareCalculationResult {
  const safeSide = Math.max(0, side);

  return {
    side: safeSide,
    area: safeSide * safeSide,
    perimeter: 4 * safeSide,
  };
}
