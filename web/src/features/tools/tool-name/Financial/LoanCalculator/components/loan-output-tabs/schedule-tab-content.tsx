import { TabsContent } from "@/components/ui/tabs";
import { formatCurrency } from "@/utils/formatter/formatCurrency";
import { useLoanCalculator } from "../../store/provider";
import { useLocale } from "next-intl";
import { i18nLoanSchedule } from "../../i18n/loan-schedule";

export function ScheduleTabContent() {
  const { inputData, result } = useLoanCalculator();
  const currency = inputData.currency ?? "IDR";
  const schedule = result.schedule ?? [];

  const locale = useLocale();
  const t = i18nLoanSchedule[locale];

  return (
    <TabsContent value="schedule" className="mt-6">
      {schedule.length === 0 ? (
        <div className="text-sm text-muted-foreground border rounded-lg p-6 text-center">
          {t.empty}
        </div>
      ) : (
        <div className="border rounded-lg max-w-full">
          {/* ISOLATED SCROLL CONTAINER */}
          <div className="relative max-w-full overflow-x-auto overscroll-x-contain">
            <table
              className="
            block
            w-max
            min-w-full
            border-collapse
            text-sm
          "
            >
              <thead className="bg-muted/40">
                <tr>
                  <th className="px-3 py-2 text-left font-medium">
                    {t.columns.month}
                  </th>
                  <th className="px-3 py-2 text-right font-medium">
                    {t.columns.installment}
                  </th>
                  <th className="px-3 py-2 text-right font-medium">
                    {t.columns.principal}
                  </th>
                  <th className="px-3 py-2 text-right font-medium">
                    {t.columns.interest}
                  </th>
                  <th className="px-3 py-2 text-right font-medium">
                    {t.columns.totalPaid}
                  </th>
                  <th className="px-3 py-2 text-right font-medium">
                    {t.columns.remainingBalance}
                  </th>
                </tr>
              </thead>

              <tbody>
                {schedule.map((row) => (
                  <tr key={row.month} className="border-t">
                    <th className="px-3 py-2 text-left font-medium">
                      {row.month}
                    </th>
                    <td className="px-3 py-2 text-right whitespace-nowrap">
                      {formatCurrency(row.installment, currency, 0)}
                    </td>
                    <td className="px-3 py-2 text-right whitespace-nowrap">
                      {formatCurrency(row.principal, currency, 0)}
                    </td>
                    <td className="px-3 py-2 text-right whitespace-nowrap">
                      {formatCurrency(row.interest, currency, 0)}
                    </td>
                    <td className="px-3 py-2 text-right whitespace-nowrap">
                      {formatCurrency(row.totalPaid, currency, 0)}
                    </td>
                    <td className="px-3 py-2 text-right whitespace-nowrap">
                      {formatCurrency(row.remainingBalance, currency, 0)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </TabsContent>
  );
}
