export function formatCurrency(value: number, currency: string) {
  const n = Number(value);
  if (isNaN(n)) return "";

  // Currency mapping (locale + custom symbol)
  const map = {
    IDR: {
      locale: "id-ID",
      symbol: "Rp",
      minimumFractionDigits: 0,
    },
    USD: {
      locale: "en-US",
      symbol: "$",
      minimumFractionDigits: 2,
    },
    EUR: {
      locale: "de-DE",
      symbol: "€",
      minimumFractionDigits: 2,
    },
    JPY: {
      locale: "ja-JP",
      symbol: "¥",
      minimumFractionDigits: 0,
    },
    GBP: {
      locale: "en-GB",
      symbol: "£",
      minimumFractionDigits: 2,
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
