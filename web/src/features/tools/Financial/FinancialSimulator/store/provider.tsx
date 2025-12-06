// "use client";
// import React, { createContext, useContext, useState } from "react";
// import {
//   FinancialSimulatorContextType,
//   FinancialSimulatorSettings,
//   FinancialTransaction,
//   TransactionType,
// } from "../types/interface";

// const FinancialSimulatorContext =
//   createContext<FinancialSimulatorContextType | null>(null);

// export const defaultSetting: FinancialSimulatorSettings = {
//   currency: "IDR",
//   decimal: 0,
//   startingBalance: 0,
// };

// export function FinancialSimulatorProvider({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   const [settings, setSettingsState] =
//     useState<FinancialSimulatorSettings>(defaultSetting);
//   const [transactions, setTransactions] = useState<FinancialTransaction[]>([]);

//   const setSettings = (partial: Partial<FinancialSimulatorSettings>) => {
//     setSettingsState((prev) => ({ ...prev, ...partial }));
//   };

//   const addTransaction = (tx: {
//     type: TransactionType;
//     amount: number;
//     category?: string;
//     note?: string;
//   }) => {
//     const newTx: FinancialTransaction = {
//       id: crypto.randomUUID(),
//       createdAt: new Date().toISOString(),
//       ...tx,
//     };
//     setTransactions((prev) => [...prev, newTx]);
//   };

//   const updateTransaction = (
//     id: string,
//     partial: Partial<FinancialTransaction>
//   ) => {
//     setTransactions((prev) =>
//       prev.map((tx) => (tx.id === id ? { ...tx, ...partial } : tx))
//     );
//   };

//   const deleteTransaction = (id: string) => {
//     setTransactions((prev) => prev.filter((tx) => tx.id !== id));
//   };

//   const resetAll = () => {
//     setSettingsState(defaultSetting);
//     setTransactions([]);
//   };

//   const resetSetting = () => {
//     setSettingsState(defaultSetting);
//   };

//   const resetTransaction = () => {
//     setTransactions([]);
//   };

//   const values: FinancialSimulatorContextType = {
//     settings,
//     transactions,
//     addTransaction,
//     updateTransaction,
//     deleteTransaction,
//     resetAll,
//     resetSetting,
//     resetTransaction,
//     setSettings,
//   };

//   return (
//     <FinancialSimulatorContext.Provider value={values}>
//       {children}
//     </FinancialSimulatorContext.Provider>
//   );
// }

// export function useFinancialSimulator() {
//   const ctx = useContext(FinancialSimulatorContext);
//   if (!ctx) {
//     throw new Error(
//       "useFinancialSimulator must be used within FinancialSimulatorProvider"
//     );
//   }
//   return ctx;
// }

"use client";
import React, { createContext, useContext, useEffect, useState } from "react";
import {
  FinancialSimulatorContextType,
  FinancialSimulatorSettings,
  FinancialTransaction,
  TransactionType,
} from "../types/interface";
import { useLocalStorage } from "@/hooks/use-local-storage";

const FinancialSimulatorContext =
  createContext<FinancialSimulatorContextType | null>(null);

export const defaultSetting: FinancialSimulatorSettings = {
  currency: "IDR",
  decimal: 0,
  startingBalance: 0,
};

const defaultState = {
  settings: defaultSetting,
  transactions: [] as FinancialTransaction[],
};

export function FinancialSimulatorProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isClient, setIsClient] = useState(false);

  // ⚠️ Hindari SSR mismatch
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsClient(true);
  }, []);

  // Gunakan 1 object untuk localStorage
  const [persisted, setPersisted] = useLocalStorage(
    "financial-simulator",
    defaultState
  );

  if (!isClient) return null; // ⛑ FIX HYDRATION MISMATCH

  const { settings, transactions } = persisted;

  // ------------------------- ACTIONS -------------------------

  const setSettings = (partial: Partial<FinancialSimulatorSettings>) => {
    setPersisted({
      settings: { ...settings, ...partial },
      transactions,
    });
  };

  const addTransaction = (tx: {
    type: TransactionType;
    amount: number;
    category?: string;
    note?: string;
  }) => {
    const newTx: FinancialTransaction = {
      id: crypto.randomUUID(),
      createdAt: new Date().toISOString(),
      ...tx,
    };

    setPersisted({
      settings,
      transactions: [...transactions, newTx],
    });
  };

  const updateTransaction = (
    id: string,
    partial: Partial<FinancialTransaction>
  ) => {
    const newList = transactions.map((tx) =>
      tx.id === id ? { ...tx, ...partial } : tx
    );

    setPersisted({
      settings,
      transactions: newList,
    });
  };

  const deleteTransaction = (id: string) => {
    setPersisted({
      settings,
      transactions: transactions.filter((tx) => tx.id !== id),
    });
  };

  const resetAll = () => {
    setPersisted(defaultState);
  };

  const resetSetting = () => {
    setPersisted({
      settings: defaultSetting,
      transactions,
    });
  };

  const resetTransaction = () => {
    setPersisted({
      settings,
      transactions: [],
    });
  };

  // ------------------------- CONTEXT VALUE -------------------------
  const values: FinancialSimulatorContextType = {
    settings,
    transactions,
    addTransaction,
    updateTransaction,
    deleteTransaction,
    resetAll,
    resetSetting,
    resetTransaction,
    setSettings,
  };

  return (
    <FinancialSimulatorContext.Provider value={values}>
      {children}
    </FinancialSimulatorContext.Provider>
  );
}

export function useFinancialSimulator() {
  const ctx = useContext(FinancialSimulatorContext);
  if (!ctx) {
    throw new Error(
      "useFinancialSimulator must be used within FinancialSimulatorProvider"
    );
  }
  return ctx;
}
