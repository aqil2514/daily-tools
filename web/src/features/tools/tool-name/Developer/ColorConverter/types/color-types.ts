export type ColorFormat = "hex" | "rgb" | "hsl";

export interface RGB {
  r: number; // 0–255
  g: number; // 0–255
  b: number; // 0–255
}

export interface HSL {
  h: number; // 0–360
  s: number; // 0–100
  l: number; // 0–100
}

export interface ColorValue {
  hex?: string;
  rgb?: RGB;
  hsl?: HSL;
}
