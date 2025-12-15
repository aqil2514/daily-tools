export const CONVERSION = [
  "temperature-converter",
] as const;

export type ConversionToolName = typeof CONVERSION[number];
