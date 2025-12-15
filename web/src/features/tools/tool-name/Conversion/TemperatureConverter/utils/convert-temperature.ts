import { TemperatureUnit } from "../types/temperature-types";

/**
 * Convert temperature from one unit to another.
 * All conversions are normalized through Kelvin.
 *
 * @param value number
 * @param from TemperatureUnit
 * @param to TemperatureUnit
 */
export function convertTemperature(
  value: number,
  from: TemperatureUnit,
  to: TemperatureUnit
): number {
  if (Number.isNaN(value)) return 0;

  const kelvin = toKelvin(value, from);
  return fromKelvin(kelvin, to);
}

/* ==============================
 * Internal helpers
 * ============================== */

function toKelvin(
  value: number,
  unit: TemperatureUnit
): number {
  switch (unit) {
    case "celsius":
      return value + 273.15;

    case "fahrenheit":
      return (value - 32) * (5 / 9) + 273.15;

    case "kelvin":
      return value;

    default:
      return value;
  }
}

function fromKelvin(
  kelvin: number,
  unit: TemperatureUnit
): number {
  switch (unit) {
    case "celsius":
      return kelvin - 273.15;

    case "fahrenheit":
      return (kelvin - 273.15) * (9 / 5) + 32;

    case "kelvin":
      return kelvin;

    default:
      return kelvin;
  }
}
