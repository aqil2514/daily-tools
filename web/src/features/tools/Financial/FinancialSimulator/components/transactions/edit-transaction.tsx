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
import { useTranslations } from "next-intl";

export function EditTransactionModal({
  transaction,
}: {
  transaction: FinancialTransaction;
}) {
  const t = useTranslations("tools-registry.financial.financial-simulator")
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
          {t("edit")}
        </Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>{t("edit-transaction")}</DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          {/* TYPE */}
          <div className="space-y-2">
            <Label>{t("type")}</Label>
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
              <option value="income">{t("income")}</option>
              <option value="expense">{t("expense")}</option>
            </select>
          </div>

          {/* AMOUNT */}
          <div className="space-y-2">
            <Label>{t("amount")}</Label>
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
            <Label>{t("category")}</Label>
            <Input
              value={form.category}
              onChange={(e) => setForm({ ...form, category: e.target.value })}
            />
          </div>

          {/* NOTE */}
          <div className="space-y-2">
            <Label>{t("note")}</Label>
            <Input
              value={form.note}
              onChange={(e) => setForm({ ...form, note: e.target.value })}
            />
          </div>
        </div>

        <DialogFooter>
          <Button variant="secondary" onClick={() => setOpen(false)}>
            {t("cancel")}
          </Button>
          <Button onClick={handleSubmit}>{t("edit")}</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
