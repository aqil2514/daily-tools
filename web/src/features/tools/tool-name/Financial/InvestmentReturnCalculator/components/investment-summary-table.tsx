import { formatCurrency } from "@/utils/formatCurrency";
import { InvestmentReturnInput } from "../types/input";
import { InvestmentReturnResult } from "../types/output";
import { useLocale } from "next-intl";
import { i18nInvestmentOutput } from "../i18n/investment-output";

interface Props {
  input: InvestmentReturnInput;
  result: InvestmentReturnResult;
}

export function InvestmentSummaryTable({ input, result }: Props) {
  const currency = input.currency ?? "IDR";

  const locale = useLocale();
const t = i18nInvestmentOutput[locale];

  const rows = [
    {
      label: t.summary.initialValue,
      value: formatCurrency(input.initialValue, currency, 0),
    },
    {
      label: t.summary.finalValue,
      value: formatCurrency(input.finalValue, currency, 0),
    },
    {
      label: t.summary.years,
      value: `${input.years} ${t.summary.year}`,
    },
    {
      label: t.summary.multiple,
      value: `${result.growthMultiple.toFixed(3)}×`,
    },
    {
      label: t.summary.cagr,
      value: `${result.cagr.toFixed(2)}% / ${t.summary.year}`,
    },
  ];

  return (
    <div className="border rounded-lg overflow-hidden">
      <table className="w-full text-sm">
        <tbody>
          {rows.map((item, i) => (
            <tr
              key={i}
              className={i % 2 === 0 ? "bg-muted/40" : "bg-background"}
            >
              <td className="px-3 py-2 font-medium">{item.label}</td>
              <td className="px-3 py-2 text-right">{item.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
