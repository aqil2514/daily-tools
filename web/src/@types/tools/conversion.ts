export const CONVERSION = [
  "temperature-converter",
  "length-converter",
] as const;

export type ConversionToolName = (typeof CONVERSION)[number];
