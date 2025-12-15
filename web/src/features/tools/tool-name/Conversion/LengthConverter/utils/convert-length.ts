import { LengthUnit } from "../types/length-types";

/**
 * Convert length value from one unit to another.
 * All conversions are normalized through meter (m).
 */
export function convertLength(
  value: number,
  from: LengthUnit,
  to: LengthUnit
): number {
  if (!Number.isFinite(value)) return 0;

  const meters = toMeter(value, from);
  return fromMeter(meters, to);
}

/* ==============================
 * Internal helpers
 * ============================== */

function toMeter(
  value: number,
  unit: LengthUnit
): number {
  switch (unit) {
    case "millimeter":
      return value / 1000;

    case "centimeter":
      return value / 100;

    case "meter":
      return value;

    case "kilometer":
      return value * 1000;

    case "inch":
      return value * 0.0254;

    case "foot":
      return value * 0.3048;

    case "yard":
      return value * 0.9144;

    case "mile":
      return value * 1609.344;

    default:
      return value;
  }
}

function fromMeter(
  meters: number,
  unit: LengthUnit
): number {
  switch (unit) {
    case "millimeter":
      return meters * 1000;

    case "centimeter":
      return meters * 100;

    case "meter":
      return meters;

    case "kilometer":
      return meters / 1000;

    case "inch":
      return meters / 0.0254;

    case "foot":
      return meters / 0.3048;

    case "yard":
      return meters / 0.9144;

    case "mile":
      return meters / 1609.344;

    default:
      return meters;
  }
}
