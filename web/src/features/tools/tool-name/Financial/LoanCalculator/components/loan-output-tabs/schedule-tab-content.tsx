import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { TabsContent } from "@/components/ui/tabs";
import { formatCurrency } from "@/utils/formatter/formatCurrency";
import { useLoanCalculator } from "../../store/provider";

export function ScheduleTabContent() {
  const { inputData, result } = useLoanCalculator();
  const currency = inputData.currency ?? "IDR";
  const schedule = result.schedule ?? [];

  return (
    <TabsContent value="schedule" className="mt-6">
      <div className="border rounded-lg overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[60px]">Bulan</TableHead>
              <TableHead className="text-right">Cicilan</TableHead>
              <TableHead className="text-right">Pokok</TableHead>
              <TableHead className="text-right">Bunga</TableHead>
              <TableHead className="text-right">Total Bayar</TableHead>
              <TableHead className="text-right">Sisa Pinjaman</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {schedule.map((row) => (
              <TableRow key={row.month}>
                <TableCell className="font-medium">{row.month}</TableCell>
                <TableCell className="text-right">
                  {formatCurrency(row.installment, currency, 0)}
                </TableCell>
                <TableCell className="text-right">
                  {formatCurrency(row.principal, currency, 0)}
                </TableCell>
                <TableCell className="text-right">
                  {formatCurrency(row.interest, currency, 0)}
                </TableCell>
                <TableCell className="text-right">
                  {formatCurrency(row.totalPaid, currency, 0)}
                </TableCell>
                <TableCell className="text-right">
                  {formatCurrency(row.remainingBalance, currency, 0)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Hint */}
      <p className="mt-3 text-xs text-muted-foreground text-right">
        * Contoh tabel cicilan bulanan (dummy data)
      </p>
    </TabsContent>
  );
}
