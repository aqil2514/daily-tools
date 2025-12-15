import { RGB, HSL, ColorValue } from "../types/color-types";

/* =========================
 * Helpers
 * ========================= */

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

function padHex(n: number) {
  return n.toString(16).padStart(2, "0");
}

/* =========================
 * HEX ⇄ RGB
 * ========================= */

export function hexToRgb(hex: string): RGB | null {
  const cleaned = hex.replace("#", "").trim();

  if (!/^[0-9a-fA-F]{6}$/.test(cleaned)) {
    return null;
  }

  const r = parseInt(cleaned.slice(0, 2), 16);
  const g = parseInt(cleaned.slice(2, 4), 16);
  const b = parseInt(cleaned.slice(4, 6), 16);

  return { r, g, b };
}

export function rgbToHex({ r, g, b }: RGB): string {
  return (
    "#" +
    padHex(clamp(r, 0, 255)) +
    padHex(clamp(g, 0, 255)) +
    padHex(clamp(b, 0, 255))
  );
}

/* =========================
 * RGB ⇄ HSL
 * ========================= */

export function rgbToHsl({ r, g, b }: RGB): HSL {
  const rn = r / 255;
  const gn = g / 255;
  const bn = b / 255;

  const max = Math.max(rn, gn, bn);
  const min = Math.min(rn, gn, bn);
  const delta = max - min;

  let h = 0;
  let s = 0;
  const l = (max + min) / 2;

  if (delta !== 0) {
    s =
      delta /
      (1 - Math.abs(2 * l - 1));

    switch (max) {
      case rn:
        h = ((gn - bn) / delta) % 6;
        break;
      case gn:
        h = (bn - rn) / delta + 2;
        break;
      case bn:
        h = (rn - gn) / delta + 4;
        break;
    }

    h *= 60;
    if (h < 0) h += 360;
  }

  return {
    h: Math.round(h),
    s: Math.round(s * 100),
    l: Math.round(l * 100),
  };
}

export function hslToRgb({ h, s, l }: HSL): RGB {
  const sn = s / 100;
  const ln = l / 100;

  const c = (1 - Math.abs(2 * ln - 1)) * sn;
  const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
  const m = ln - c / 2;

  let r1 = 0,
    g1 = 0,
    b1 = 0;

  if (h >= 0 && h < 60) {
    r1 = c;
    g1 = x;
  } else if (h < 120) {
    r1 = x;
    g1 = c;
  } else if (h < 180) {
    g1 = c;
    b1 = x;
  } else if (h < 240) {
    g1 = x;
    b1 = c;
  } else if (h < 300) {
    r1 = x;
    b1 = c;
  } else {
    r1 = c;
    b1 = x;
  }

  return {
    r: Math.round((r1 + m) * 255),
    g: Math.round((g1 + m) * 255),
    b: Math.round((b1 + m) * 255),
  };
}

/* =========================
 * Orchestrator Helper
 * ========================= */

export function convertFromHex(hex: string): ColorValue | null {
  const rgb = hexToRgb(hex);
  if (!rgb) return null;

  return {
    hex: rgbToHex(rgb),
    rgb,
    hsl: rgbToHsl(rgb),
  };
}

export function convertFromRgb(rgb: RGB): ColorValue {
  return {
    hex: rgbToHex(rgb),
    rgb,
    hsl: rgbToHsl(rgb),
  };
}

export function convertFromHsl(hsl: HSL): ColorValue {
  const rgb = hslToRgb(hsl);
  return {
    hex: rgbToHex(rgb),
    rgb,
    hsl,
  };
}
