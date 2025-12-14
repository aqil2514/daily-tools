import { formatNumber } from "./formatNumber";

export type MeasurementUnit =
  | "cm"
  | "cm2"
  | "cm3";

interface FormatMeasurementOptions {
  unit: MeasurementUnit;
}

/**
 * Format number with math measurement unit (cm, cm², cm³)
 */
export function formatMeasurement(
  value: number,
  options: FormatMeasurementOptions
) {
  const { unit } = options;

  const formattedValue = formatNumber(value);

  switch (unit) {
    case "cm2":
      return `${formattedValue} cm²`;
    case "cm3":
      return `${formattedValue} cm³`;
    case "cm":
    default:
      return `${formattedValue} cm`;
  }
}
