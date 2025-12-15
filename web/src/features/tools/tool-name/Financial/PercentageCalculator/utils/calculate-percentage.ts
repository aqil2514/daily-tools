import {
  PercentageMode,
  PercentageResult,
} from "../types/percentage-types";

export function calculatePercentage(
  mode: PercentageMode,
  values: {
    percent?: number;
    value?: number;
    oldValue?: number;
    newValue?: number;
    a?: number;
    b?: number;
  }
): PercentageResult | null {
  switch (mode) {
    case "percentage-of": {
      const percent = values.percent;
      const value = values.value;

      if (
        percent === undefined ||
        value === undefined ||
        !Number.isFinite(percent) ||
        !Number.isFinite(value)
      ) {
        return null;
      }

      return {
        result: (percent / 100) * value,
      };
    }

    case "increase": {
      const oldValue = values.oldValue;
      const newValue = values.newValue;

      if (
        oldValue === undefined ||
        newValue === undefined ||
        !Number.isFinite(oldValue) ||
        !Number.isFinite(newValue) ||
        oldValue === 0
      ) {
        return null;
      }

      const percentage =
        ((newValue - oldValue) / oldValue) * 100;

      return {
        result: newValue,
        percentage,
      };
    }

    case "decrease": {
      const oldValue = values.oldValue;
      const newValue = values.newValue;

      if (
        oldValue === undefined ||
        newValue === undefined ||
        !Number.isFinite(oldValue) ||
        !Number.isFinite(newValue) ||
        oldValue === 0
      ) {
        return null;
      }

      const percentage =
        ((oldValue - newValue) / oldValue) * 100;

      return {
        result: newValue,
        percentage,
      };
    }

    case "difference": {
      const a = values.a;
      const b = values.b;

      if (
        a === undefined ||
        b === undefined ||
        !Number.isFinite(a) ||
        !Number.isFinite(b)
      ) {
        return null;
      }

      const avg = (a + b) / 2;
      if (avg === 0) return null;

      const percentage =
        (Math.abs(a - b) / avg) * 100;

      return {
        result: Math.abs(a - b),
        percentage,
      };
    }

    default:
      return null;
  }
}
