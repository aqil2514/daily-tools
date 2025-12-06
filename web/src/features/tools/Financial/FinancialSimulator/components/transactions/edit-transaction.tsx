"use client";

import { useState } from "react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useFinancialSimulator } from "../../store/provider";
import { FinancialTransaction } from "../../types/interface";
import CurrencyInput from "react-currency-input-field";

export function EditTransactionModal({
  transaction,
}: {
  transaction: FinancialTransaction;
}) {
  const { updateTransaction, settings } = useFinancialSimulator();
  const [open, setOpen] = useState(false);

  const [form, setForm] = useState({
    type: transaction.type,
    amount: transaction.amount,
    category: transaction.category || "",
    note: transaction.note || "",
  });

  const handleSubmit = () => {
    updateTransaction(transaction.id, {
      ...form,
      amount: Number(form.amount),
    });
    setOpen(false);
  };

  const currencyPrefix: Record<string, string> = {
    IDR: "Rp ",
    USD: "$ ",
    EUR: "€ ",
    JPY: "¥ ",
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size="sm" variant="outline">
          Edit
        </Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Transaction</DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          {/* TYPE */}
          <div className="space-y-2">
            <Label>Type</Label>
            <select
              className="border rounded p-2 w-full"
              value={form.type}
              onChange={(e) =>
                setForm({
                  ...form,
                  type: e.target.value as "income" | "expense",
                })
              }
            >
              <option value="income">Income</option>
              <option value="expense">Expense</option>
            </select>
          </div>

          {/* AMOUNT */}
          <div className="space-y-2">
            <Label>Amount</Label>
            <CurrencyInput
              value={form.amount}
              decimalsLimit={settings.decimal}
              allowNegativeValue={false}
              prefix={currencyPrefix[settings.currency]}
              className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm"
              onValueChange={(value) =>
                setForm({ ...form, amount: Number(value || 0) })
              }
            />
          </div>

          {/* CATEGORY */}
          <div className="space-y-2">
            <Label>Category</Label>
            <Input
              value={form.category}
              onChange={(e) => setForm({ ...form, category: e.target.value })}
            />
          </div>

          {/* NOTE */}
          <div className="space-y-2">
            <Label>Note</Label>
            <Input
              value={form.note}
              onChange={(e) => setForm({ ...form, note: e.target.value })}
            />
          </div>
        </div>

        <DialogFooter>
          <Button variant="secondary" onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button onClick={handleSubmit}>Save</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
