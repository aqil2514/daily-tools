export type Currency = "idr" | "usd" | "eur" | "jpy";

export interface Denomination {
  label: string;
  value: number;
  type: "coin" | "sheet" | "other";
  quantity: number;
}

export interface CurrencySet {
  currency: Currency;
  denominations: Denomination[];
}
