export const pricingSummaryI18n = {
  en: {
    title: "HPP & Selling Price",

    hppSummary: {
      title: "HPP Summary",
      qty: "Total Products",
      hppPerUnit: "HPP per unit",
      sellingPrice: (margin: number) => `Selling Price (Margin ${margin}%)`,
    },

    profit: {
      title: "Estimated Profit",
      perUnit: "Profit per unit",
      perBatch: "Profit per batch",
    },

    alternatives: {
      title: "Alternative Selling Prices",
      margin: (m: number) => `Margin ${m}%`,
    },

    totalCost: {
      title: "Production Cost",
      ingredients: "Total ingredients",
      packaging: "Total packaging (batch)",
      additional: "Additional cost",
      totalBatch: "Total batch cost",
    },
  },

  id: {
    title: "HPP & Harga Jual",

    hppSummary: {
      title: "Ringkasan HPP",
      qty: "Jumlah produk",
      hppPerUnit: "HPP per pcs",
      sellingPrice: (margin: number) => `Harga Jual (Margin ${margin}%)`,
    },

    profit: {
      title: "Estimasi Profit",
      perUnit: "Profit per pcs",
      perBatch: "Profit per batch",
    },

    alternatives: {
      title: "Alternatif Harga Jual",
      margin: (m: number) => `Margin ${m}%`,
    },

    totalCost: {
      title: "Biaya Produksi",
      ingredients: "Total bahan",
      packaging: "Total kemasan (batch)",
      additional: "Biaya tambahan",
      totalBatch: "Total biaya per batch",
    },
  },
} as const;
