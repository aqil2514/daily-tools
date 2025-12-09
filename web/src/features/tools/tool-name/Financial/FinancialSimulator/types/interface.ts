export type CurrencyCode = "IDR" | "USD" | "EUR" | "JPY";

export interface FinancialSimulatorSettings {
  currency: CurrencyCode;
  decimal: number;
  startingBalance: number;
}

export type TransactionType = "income" | "expense";

export interface FinancialTransaction {
  id: string; //
  type: TransactionType;
  amount: number;
  category?: string;
  note?: string;
  createdAt: string;
}

export interface FinancialSummary {
  totalIncome: number;
  totalExpense: number;
  balance: number;
}

export interface FinancialSimulatorState {
  settings: FinancialSimulatorSettings;
  transactions: FinancialTransaction[];
}

export interface FinancialSimulatorActions {
  setSettings: (settings: Partial<FinancialSimulatorSettings>) => void;
  addTransaction: (tx: Omit<FinancialTransaction, "id" | "createdAt">) => void;
  updateTransaction: (id: string, partial: Partial<FinancialTransaction>) => void;
  deleteTransaction: (id: string) => void;
  resetTransaction: () => void;
  resetSetting: () => void;
  resetAll: () => void;
}

export type FinancialSimulatorContextType = FinancialSimulatorState &
  FinancialSimulatorActions;
