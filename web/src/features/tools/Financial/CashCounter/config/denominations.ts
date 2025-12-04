import { Currency, Denomination } from "../types/interface";

/* ---------------------------
   INDONESIA — RUPIAH
---------------------------- */
const IDR_DENOMINATIONS: Denomination[] = [
  { label: "Rp 500", value: 500, type: "coin", quantity: 0 },
  { label: "Rp 1.000 (coin)", value: 1000, type: "coin", quantity: 0 },
  { label: "Rp 1.000 (sheet)", value: 1000, type: "sheet", quantity: 0 },
  { label: "Rp 2.000", value: 2000, type: "sheet", quantity: 0 },
  { label: "Rp 5.000", value: 5000, type: "sheet", quantity: 0 },
  { label: "Rp 10.000", value: 10000, type: "sheet", quantity: 0 },
  { label: "Rp 20.000", value: 20000, type: "sheet", quantity: 0 },
  { label: "Rp 50.000", value: 50000, type: "sheet", quantity: 0 },
  { label: "Rp 100.000", value: 100000, type: "sheet", quantity: 0 },
];

/* ---------------------------
   UNITED STATES — USD
---------------------------- */
const USD_DENOMINATIONS: Denomination[] = [
  { label: "$1", value: 1, type: "sheet", quantity: 0 },
  { label: "$5", value: 5, type: "sheet", quantity: 0 },
  { label: "$10", value: 10, type: "sheet", quantity: 0 },
  { label: "$20", value: 20, type: "sheet", quantity: 0 },
  { label: "$50", value: 50, type: "sheet", quantity: 0 },
  { label: "$100", value: 100, type: "sheet", quantity: 0 },

  // Coins
  { label: "1¢", value: 0.01, type: "coin", quantity: 0 },
  { label: "5¢", value: 0.05, type: "coin", quantity: 0 },
  { label: "10¢", value: 0.1, type: "coin", quantity: 0 },
  { label: "25¢", value: 0.25, type: "coin", quantity: 0 },
  { label: "$1 coin", value: 1, type: "coin", quantity: 0 },
];

/* ---------------------------
   EURO — EUR
---------------------------- */
const EUR_DENOMINATIONS: Denomination[] = [
  // Coins
  { label: "€0.01", value: 0.01, type: "coin", quantity: 0 },
  { label: "€0.02", value: 0.02, type: "coin", quantity: 0 },
  { label: "€0.05", value: 0.05, type: "coin", quantity: 0 },
  { label: "€0.10", value: 0.1, type: "coin", quantity: 0 },
  { label: "€0.20", value: 0.2, type: "coin", quantity: 0 },
  { label: "€0.50", value: 0.5, type: "coin", quantity: 0 },
  { label: "€1", value: 1, type: "coin", quantity: 0 },
  { label: "€2", value: 2, type: "coin", quantity: 0 },

  // Notes
  { label: "€5", value: 5, type: "sheet", quantity: 0 },
  { label: "€10", value: 10, type: "sheet", quantity: 0 },
  { label: "€20", value: 20, type: "sheet", quantity: 0 },
  { label: "€50", value: 50, type: "sheet", quantity: 0 },
  { label: "€100", value: 100, type: "sheet", quantity: 0 },
  { label: "€200", value: 200, type: "sheet", quantity: 0 },
  { label: "€500", value: 500, type: "sheet", quantity: 0 },
];

/* ---------------------------
   JAPAN — YEN (JPY)
---------------------------- */
const JPY_DENOMINATIONS: Denomination[] = [
  // Coins
  { label: "¥1", value: 1, type: "coin", quantity: 0 },
  { label: "¥5", value: 5, type: "coin", quantity: 0 },
  { label: "¥10", value: 10, type: "coin", quantity: 0 },
  { label: "¥50", value: 50, type: "coin", quantity: 0 },
  { label: "¥100", value: 100, type: "coin", quantity: 0 },
  { label: "¥500", value: 500, type: "coin", quantity: 0 },

  // Banknotes
  { label: "¥1,000", value: 1000, type: "sheet", quantity: 0 },
  { label: "¥2,000", value: 2000, type: "sheet", quantity: 0 }, // jarang tapi masih valid
  { label: "¥5,000", value: 5000, type: "sheet", quantity: 0 },
  { label: "¥10,000", value: 10000, type: "sheet", quantity: 0 },
];

/* ---------------------------
   EXPORT
---------------------------- */

export const denominations: Record<Currency, Denomination[]> = {
  idr: IDR_DENOMINATIONS,
  usd: USD_DENOMINATIONS,
  eur: EUR_DENOMINATIONS,
  jpy: JPY_DENOMINATIONS,
};
