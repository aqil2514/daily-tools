"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { Currency, Denomination } from "../types/interface";
import { denominations as allDenoms } from "../config/denominations";
import { toast } from "sonner";

interface CashCounterSetting {
  cashInData: number;
  receivables: number;
  otherPeopleCash: number;
  currency: Currency;
}

interface CashCounterContextType {
  settings: CashCounterSetting;
  setSettings: (value: Partial<CashCounterSetting>) => void;

  denoms: Denomination[];
  setQuantity: (label: string, qty: number) => void;

  totalCash: number;
  difference: number;
  formatCurrency: (value: number) => string;

  resetAll: () => void;
}

const CashCounterContext = createContext<CashCounterContextType | undefined>(
  undefined
);

export function CashCounterProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [settings, setSettingsState] = useState<CashCounterSetting>({
    cashInData: 0,
    receivables: 0,
    otherPeopleCash: 0,
    currency: "idr",
  });

  const setSettings = (value: Partial<CashCounterSetting>) => {
    setSettingsState((prev) => ({ ...prev, ...value }));
  };

  const [denoms, setDenoms] = useState<Denomination[]>(
    JSON.parse(JSON.stringify(allDenoms[settings.currency]))
  );

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setDenoms(JSON.parse(JSON.stringify(allDenoms[settings.currency])));
  }, [settings.currency]);

  const setQuantity = (label: string, qty: number) => {
    setDenoms((prev) =>
      prev.map((d) => (d.label === label ? { ...d, quantity: qty } : d))
    );
  };

  const totalCash = denoms.reduce((sum, d) => sum + d.value * d.quantity, 0);

  const formatCurrency = (value: number) => {
    switch (settings.currency) {
      case "idr":
        return value.toLocaleString("id-ID", {
          style: "currency",
          currency: "IDR",
          minimumFractionDigits: 0,
        });

      default:
        return value.toString();
    }
  };

  const difference =
    totalCash +
    settings.receivables -
    settings.otherPeopleCash -
    settings.cashInData;

  const resetAll = () => {
    setSettingsState({
      cashInData: 0,
      receivables: 0,
      otherPeopleCash: 0,
      currency: settings.currency,
    });

    setDenoms(JSON.parse(JSON.stringify(allDenoms[settings.currency])));
    toast.success("Data has been resetted")
  };

  return (
    <CashCounterContext.Provider
      value={{
        settings,
        setSettings,
        denoms,
        setQuantity,
        totalCash,
        difference,
        resetAll,
        formatCurrency,
      }}
    >
      {children}
    </CashCounterContext.Provider>
  );
}

export function useCashCounter() {
  const ctx = useContext(CashCounterContext);
  if (!ctx)
    throw new Error("useCashCounter must be used inside CashCounterProvider");
  return ctx;
}
