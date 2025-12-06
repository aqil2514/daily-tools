"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useFinancialSimulator } from "../../store/provider";

import {
  LineChart,
  Line,
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { FinancialSimulatorSettings, FinancialTransaction } from "../../types/interface";
import { formatCurrency } from "@/utils/formatCurrency";

/* Helper: Generate chart-friendly data */
function prepareChartData(transactions: FinancialTransaction[], settings: FinancialSimulatorSettings) {
  // sort ascending date
  const sorted = [...transactions].sort(
    (a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
  );

  let runningBalance = settings.startingBalance;

  return sorted.map((tx) => {
    runningBalance += tx.type === "income" ? tx.amount : -tx.amount;

    return {
      date: new Date(tx.createdAt).toLocaleDateString(),
      balance: runningBalance,
      income: tx.type === "income" ? tx.amount : 0,
      expense: tx.type === "expense" ? tx.amount : 0,
    };
  });
}

export default function ChartTab() {
  const { transactions, settings } = useFinancialSimulator();
  const { decimal, currency } = settings;

  const data = prepareChartData(transactions, settings);

  return (
    <div className="space-y-6">

      {/* BALANCE OVER TIME */}
      <Card>
        <CardHeader>
          <CardTitle>Balance Over Time</CardTitle>
        </CardHeader>
        <CardContent className="h-[300px]">
          {data.length === 0 ? (
            <p className="text-sm text-muted-foreground">No data available.</p>
          ) : (
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" fontSize={12} />
                <YAxis
                  fontSize={12}
                  tickFormatter={(v) =>
                    formatCurrency(v, currency, decimal).replace(currency, "")
                  }
                />
                <Tooltip
                  formatter={(value: string | number) =>
                    formatCurrency(Number(value), currency, decimal)
                  }
                />
                <Line type="monotone" dataKey="balance" stroke="#3b82f6" />
              </LineChart>
            </ResponsiveContainer>
          )}
        </CardContent>
      </Card>

      {/* INCOME VS EXPENSE */}
      <Card>
        <CardHeader>
          <CardTitle>Income vs Expense</CardTitle>
        </CardHeader>
        <CardContent className="h-[300px]">
          {data.length === 0 ? (
            <p className="text-sm text-muted-foreground">No data available.</p>
          ) : (
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" fontSize={12} />
                <YAxis
                  fontSize={12}
                  tickFormatter={(v) =>
                    formatCurrency(v, currency, decimal).replace(currency, "")
                  }
                />
                <Tooltip
                  formatter={(value: string | number) =>
                    formatCurrency(Number(value), currency, decimal)
                  }
                />
                <Bar dataKey="income" fill="#22c55e" />
                <Bar dataKey="expense" fill="#ef4444" />
              </BarChart>
            </ResponsiveContainer>
          )}
        </CardContent>
      </Card>

    </div>
  );
}
