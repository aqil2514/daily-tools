export interface AmortizationRow {
  month: number;
  installment: number;
  principal: number;
  interest: number;
  remainingBalance: number;
  totalPaid: number;
}


export interface LoanCalculationResult {
  monthlyInstallment: number;
  totalInterest: number;
  totalPayment: number;

  schedule?: AmortizationRow[];
}
