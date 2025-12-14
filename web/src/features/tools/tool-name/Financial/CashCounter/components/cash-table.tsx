"use client";
import { formatCurrency } from "@/utils/formatter/formatCurrency";
import { useCashCounter } from "../store/provider";
import { useTranslations } from "next-intl";

export function CashTable() {
  const { denoms, setQuantity, totalCash, difference, settings } =
    useCashCounter();
  const t = useTranslations("tools-registry.financial.cash-counter")

  return (
    <div className="w-full border rounded-lg overflow-hidden shadow-sm bg-white">
      {/* TABLE HEADER */}
      <div className="grid grid-cols-3 bg-gray-100 border-b font-semibold text-sm">
        <div className="p-2 border-r">Nominal</div>
        <div className="p-2 border-r text-center">Qty</div>
        <div className="p-2 text-right">Subtotal</div>
      </div>

      {/* TABLE ROWS */}
      {denoms.map((d) => (
        <div
          key={d.label}
          className="grid grid-cols-3 border-b last:border-b-0 text-sm"
        >
          {/* NOMINAL */}
          <div className="p-2 border-r">{d.label}</div>

          {/* QTY */}
          <div className="p-2 border-r">
            <input
              type="number"
              className="w-full border rounded px-2 py-1 text-center"
              value={d.quantity}
              min={0}
              onChange={(e) => setQuantity(d.label, Number(e.target.value))}
            />
          </div>

          {/* SUBTOTAL */}
          <div className="p-2 text-right">
            {formatCurrency(
              d.value * d.quantity,
              settings.currency.toUpperCase()
            )}
          </div>
        </div>
      ))}

      {/* FOOTER TOTAL */}
      <div className="grid grid-cols-3 bg-gray-50 font-semibold border-t">
        <div className="p-2 border-r col-span-2 text-right">{t("total-cash")}:</div>
        <div className="p-2 text-right">
          {formatCurrency(totalCash, settings.currency.toUpperCase())}
        </div>
      </div>

      {/* DIFFERENCE */}
      <div className="grid grid-cols-3 bg-gray-50 font-semibold border-t">
        <div className="p-2 border-r col-span-2 text-right">{t("difference")}:</div>
        <div
          className={`p-2 text-right ${
            difference === 0
              ? "text-green-600"
              : difference > 0
              ? "text-blue-600"
              : "text-red-600"
          }`}
        >
          {formatCurrency(difference, settings.currency.toUpperCase())}
        </div>
      </div>
    </div>
  );
}
