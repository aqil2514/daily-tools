"use client";

import { useState } from "react";
import { useFinancialSimulator } from "../../store/provider";
import { AddTransactionModal } from "../add-transaction";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { formatCurrency } from "@/utils/formatCurrency";
import { EditTransactionModal } from "./edit-transaction";

export default function TransactionsTab() {
  const { transactions, deleteTransaction, settings } = useFinancialSimulator();
  const [filter, setFilter] = useState<"all" | "income" | "expense">("all");

  const filtered = transactions.filter((tx) =>
    filter === "all" ? true : tx.type === filter
  );

  return (
    <div className="space-y-4">
      {/* FILTER BUTTONS */}
      <div className="flex items-center justify-between">
        <div className="flex gap-2">
          <Button
            variant={filter === "all" ? "default" : "secondary"}
            onClick={() => setFilter("all")}
          >
            All
          </Button>
          <Button
            variant={filter === "income" ? "default" : "secondary"}
            onClick={() => setFilter("income")}
          >
            Income
          </Button>
          <Button
            variant={filter === "expense" ? "default" : "secondary"}
            onClick={() => setFilter("expense")}
          >
            Expense
          </Button>
        </div>

        <AddTransactionModal />
      </div>

      {/* MAIN CARD */}
      <Card>
        <CardHeader>
          <CardTitle>Transaction List</CardTitle>
        </CardHeader>
        <CardContent>
          {/* EMPTY STATE */}
          {filtered.length === 0 && (
            <p className="text-sm text-muted-foreground">
              No transactions found.
            </p>
          )}

          {/* TABLE */}
          {filtered.length > 0 && (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Date</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead className="text-right">Action</TableHead>
                </TableRow>
              </TableHeader>

              <TableBody>
                {filtered.map((tx) => (
                  <TableRow key={tx.id}>
                    <TableCell>
                      {new Date(tx.createdAt).toLocaleDateString()}
                    </TableCell>

                    <TableCell>{tx.category || "-"}</TableCell>

                    <TableCell
                      className={
                        tx.type === "income"
                          ? "text-green-600 font-medium"
                          : "text-red-600 font-medium"
                      }
                    >
                      {tx.type}
                    </TableCell>

                    <TableCell>
                      {tx.type === "income" ? "+" : "-"}{" "}
                      {formatCurrency(
                        tx.amount,
                        settings.currency,
                        settings.decimal
                      )}
                    </TableCell>

                    <TableCell className="text-right flex justify-end gap-2">
                      <EditTransactionModal transaction={tx} />

                      <Button
                        variant="destructive"
                        size="sm"
                        onClick={() => deleteTransaction(tx.id)}
                      >
                        Delete
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
