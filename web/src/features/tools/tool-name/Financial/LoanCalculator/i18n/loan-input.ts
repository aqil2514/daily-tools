export const i18nLoanInput = {
  en: {
    title: "Input Data",

    amount: {
      label: "Loan Amount",
      placeholder: "e.g. 10,000,000",
    },

    annualInterestRate: {
      label: "Annual Interest Rate (%)",
      placeholder: "e.g. 12",
    },

    monthlyInterestRate: {
      label: "Monthly Interest Rate (%)",
      placeholder: "e.g. 1.5",
    },

    tenorMonths: {
      label: "Tenor (months)",
      placeholder: "e.g. 12",
    },

    loanType: {
      label: "Interest Type",
      placeholder: "Select interest type",
      types: {
        flat: "Flat",
        effective: "Effective / Annuity",
      },
    },
  },

  id: {
    title: "Input Data",

    amount: {
      label: "Jumlah Pinjaman",
      placeholder: "Misal: 10.000.000",
    },

    annualInterestRate: {
      label: "Bunga Tahunan (%)",
      placeholder: "Misal: 12",
    },

    

       monthlyInterestRate: {
      label: "Bunga Per Bulan (%)",
      placeholder: "Misal: 1.5",
    },

    tenorMonths: {
      label: "Tenor (bulan)",
      placeholder: "Misal: 12",
    },

    loanType: {
      label: "Tipe Bunga",
      placeholder: "Pilih tipe bunga",
      types: {
        flat: "Flat",
        effective: "Efektif / Anuitas",
      },
    },
  },
} as const;

export type I18nLoanInput = typeof i18nLoanInput;
