interface FormatPercentOptions {
  /**
   * If true, input is treated as decimal (0.08 → 8%)
   * Default: false (8 → 8%)
   */
  fromDecimal?: boolean;

  /**
   * Number of fraction digits
   * Default: 2
   */
  maximumFractionDigits?: number;

  /**
   * Fallback text when value is null/undefined/NaN
   * Default: "—"
   */
  fallback?: string;

  /**
   * Locale for formatting
   * Default: "id-ID"
   */
  locale?: string;
}

export function formatPercent(
  value?: number | null,
  options: FormatPercentOptions = {}
): string {
  console.log(value)
  const {
    fromDecimal = false,
    maximumFractionDigits = 2,
    fallback = "—",
    locale = "id-ID",
  } = options;

  if (value === null || value === undefined || Number.isNaN(value)) {
    return fallback;
  }

  const normalized = fromDecimal ? value * 100 : value;

  return new Intl.NumberFormat(locale, {
    style: "percent",
    maximumFractionDigits,
  }).format(normalized / 100);
}
