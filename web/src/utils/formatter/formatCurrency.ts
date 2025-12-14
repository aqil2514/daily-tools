export function formatCurrency(value: number, currency: string, decimal:number = 0) {
  const n = Number(value);
  if (isNaN(n)) return "";

  // Currency mapping (locale + custom symbol)
  const map = {
    IDR: {
      locale: "id-ID",
      symbol: "Rp",
      minimumFractionDigits: decimal,
    },
    USD: {
      locale: "en-US",
      symbol: "$",
      minimumFractionDigits: decimal,
    },
    EUR: {
      locale: "de-DE",
      symbol: "€",
      minimumFractionDigits: decimal,
    },
    JPY: {
      locale: "ja-JP",
      symbol: "¥",
      minimumFractionDigits: decimal,
    },
    GBP: {
      locale: "en-GB",
      symbol: "£",
      minimumFractionDigits: decimal,
    },
  } as const;

  const cfg = map[currency as keyof typeof map];

  if (!cfg) return value.toString();

  // Format angka tanpa symbol dulu
  const formatted = new Intl.NumberFormat(cfg.locale, {
    minimumFractionDigits: cfg.minimumFractionDigits,
    maximumFractionDigits: cfg.minimumFractionDigits,
  }).format(n);

  // Return custom symbol + formatted number
  return `${cfg.symbol} ${formatted}`;
}
