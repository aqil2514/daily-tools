import { formatCurrency } from "@/utils/formatCurrency";
import { SavingsGoalInput } from "../types/input";
import { SavingsGoalResult } from "../types/output";
import { useLocale } from "next-intl";
import { i18nSavingsSummary } from "../i18n/savings-summary";

interface Props {
  input: SavingsGoalInput;
  result: SavingsGoalResult;
}

export function SavingsSummaryTable({ input, result }: Props) {
  const locale = useLocale();
  const t = i18nSavingsSummary[locale];

  const currency = input.currency ?? "IDR";
  const isManualMonthly =
    input.monthlyContribution !== undefined &&
    input.monthlyContribution > 0;

  const rows = [
    {
      label: t.targetAmount,
      value: formatCurrency(input.targetAmount, currency, 0),
    },
    {
      label: t.monthlyContribution,
      value: isManualMonthly
        ? formatCurrency(input.monthlyContribution || 0, currency, 0)
        : t.notProvided,
    },
    {
      label: t.duration,
      value: `${input.durationMonths} ${t.months}`,
    },
    {
      label: t.annualInterest,
      value: input.annualInterestRate + "%",
    },
    {
      label: t.monthlyInterest,
      value: (result.monthlyInterestRate * 100).toFixed(3) + "%",
    },
    {
      label: isManualMonthly
        ? t.finalValue
        : t.requiredMonthly,
      value: isManualMonthly
        ? formatCurrency(result.finalValue, currency, 0)
        : formatCurrency(result.requiredMonthly || 0, currency, 0),
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
