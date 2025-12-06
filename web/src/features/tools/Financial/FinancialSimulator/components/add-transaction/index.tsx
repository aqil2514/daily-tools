"use client";

import { useState } from "react";
import { useFinancialSimulator } from "../../store/provider";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import CurrencyInput from "react-currency-input-field";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export function AddTransactionModal() {
  const { addTransaction, settings } = useFinancialSimulator();

  const [open, setOpen] = useState(false);
  const [type, setType] = useState<"income" | "expense">("income");
  const [amount, setAmount] = useState<number>(0);
  const [category, setCategory] = useState("");
  const [note, setNote] = useState("");

  const currencyPrefix: Record<string, string> = {
    IDR: "Rp ",
    USD: "$ ",
    EUR: "€ ",
    JPY: "¥ ",
  };

  const handleSubmit = () => {
    if (amount <= 0) return;

    addTransaction({
      type,
      amount,
      category: category.trim() || undefined,
      note: note.trim() || undefined,
    });

    // Reset fields & close modal
    setAmount(0);
    setCategory("");
    setNote("");
    setType("income");
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>Add Transaction</Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add Transaction</DialogTitle>
        </DialogHeader>

        <div className="space-y-4 py-2">

          {/* Type */}
          <div className="space-y-1">
            <Label>Type</Label>
            <select
              className="border border-input rounded-md p-2 text-sm bg-background"
              value={type}
              onChange={(e) => setType(e.target.value as "income" | "expense")}
            >
              <option value="income">Income</option>
              <option value="expense">Expense</option>
            </select>
          </div>

          {/* Amount */}
          <div className="space-y-1">
            <Label>Amount</Label>
            <CurrencyInput
              value={amount}
              decimalsLimit={settings.decimal}
              allowNegativeValue={false}
              prefix={currencyPrefix[settings.currency]}
              className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm"
              onValueChange={(value) => setAmount(Number(value || 0))}
            />
          </div>

          {/* Category */}
          <div className="space-y-1">
            <Label>Category</Label>
            <Input
              placeholder="e.g. Salary, Food, Transport..."
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
          </div>

          {/* Note */}
          <div className="space-y-1">
            <Label>Note (optional)</Label>
            <Textarea
              placeholder="Additional details..."
              value={note}
              onChange={(e) => setNote(e.target.value)}
            />
          </div>

        </div>

        <DialogFooter>
          <Button variant="secondary" onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button onClick={handleSubmit}>Save Transaction</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
