import { PercentageMode } from "../types/percentage-types";

export const percentageModeSelectText = {
  en: {
    heading: "Calculation Type",
    placeholder: "Select calculation type",
    modes: [
      {
        value: "percentage-of" as PercentageMode,
        label: "Percentage of a value",
      },
      {
        value: "increase" as PercentageMode,
        label: "Percentage increase",
      },
      {
        value: "decrease" as PercentageMode,
        label: "Percentage decrease",
      },
      {
        value: "difference" as PercentageMode,
        label: "Percentage difference",
      },
    ],
  },

  id: {
    heading: "Jenis Perhitungan",
    placeholder: "Pilih jenis perhitungan",
    modes: [
      {
        value: "percentage-of" as PercentageMode,
        label: "Persentase dari nilai",
      },
      {
        value: "increase" as PercentageMode,
        label: "Kenaikan persentase",
      },
      {
        value: "decrease" as PercentageMode,
        label: "Penurunan persentase",
      },
      {
        value: "difference" as PercentageMode,
        label: "Selisih persentase",
      },
    ],
  },
};
