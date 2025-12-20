import { formatCurrency } from "@/utils/formatter/formatCurrency";
import { useLocale } from "next-intl";
import { i18nLoanSummary } from "../i18n/loan-summary";
import { useLoanCalculator } from "../store/provider";


export function LoanSummaryTable() {
  const {inputData,result} = useLoanCalculator()
  const locale = useLocale();
  const t = i18nLoanSummary[locale];

  const currency = inputData.currency ?? "IDR";

  const rows = [
    { label: t.amount, value: formatCurrency(inputData.amount, currency, 0) },
    { label: t.annualInterestRate, value: inputData.annualInterestRate + "%" },
    { label: t.tenorMonths, value: inputData.tenorMonths + " bulan" },
    {
      label: t.loanType,
      value: inputData.loanType === "flat" ? "Flat" : "Efektif / Anuitas",
    },
    {
      label: t.monthlyInstallment,
      value: formatCurrency(result.monthlyInstallment, currency, 0),
    },
    {
      label: t.totalInterest,
      value: formatCurrency(result.totalInterest, currency, 0),
    },
    {
      label: t.totalPayment,
      value: formatCurrency(result.totalPayment, currency, 0),
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
