export const ingredientsI18n = {
  en: {
    cardTitle: "Ingredients",
    cardDescription:
      "Add raw materials along with their unit, purchase price, and usage amount.",

    addButton: "Add Ingredient",
    empty: "No ingredients added yet.",

    table: {
      name: "Name",
      purchasePrice: "Purchase Price",
      purchaseQty: "Purchase Qty",
      usage: "Usage",
      cost: "Cost",
      actions: "Actions",
    },

    totalLabel: "Total ingredient cost:",

    dialogAddTitle: "Add Ingredient",
    dialogEditTitle: "Edit Ingredient",

    fields: {
      nameLabel: "Ingredient Name",
      namePlaceholder: "Example: Wheat Flour",

      unitLabel: "Unit",
      unitPlaceholder: "Select unit",

      priceLabel: "Purchase Price",

      purchaseQtyLabel: "Purchase Qty",
      usageLabel: "Usage",

      errorUsageExceeded: (qty: number, unit: string) =>
        `Usage cannot exceed Purchase Qty (${qty} ${unit})`,

      saveButton: "Save",
    },
  },

  id: {
    cardTitle: "Bahan Baku",
    cardDescription:
      "Tambahkan bahan beserta satuan, harga beli, dan jumlah pemakaiannya.",

    addButton: "Tambah Bahan",
    empty: "Belum ada bahan.",

    table: {
      name: "Nama",
      purchasePrice: "Harga Beli",
      purchaseQty: "Qty Beli",
      usage: "Pemakaian",
      cost: "Biaya",
      actions: "Aksi",
    },

    totalLabel: "Total biaya bahan:",

    dialogAddTitle: "Tambah Bahan",
    dialogEditTitle: "Edit Bahan",

    fields: {
      nameLabel: "Nama Bahan",
      namePlaceholder: "Contoh: Tepung Terigu",

      unitLabel: "Satuan",
      unitPlaceholder: "Pilih satuan",

      priceLabel: "Harga Beli",

      purchaseQtyLabel: "Qty Beli",
      usageLabel: "Pemakaian",

      errorUsageExceeded: (qty: number, unit: string) =>
        `Pemakaian tidak boleh melebihi Qty Beli (${qty} ${unit})`,

      saveButton: "Simpan",
    },
  },
} as const;
