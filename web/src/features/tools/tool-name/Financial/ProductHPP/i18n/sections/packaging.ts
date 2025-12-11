export const packagingI18n = {
  en: {
    cardTitle: "Packaging",
    cardDescription:
      "Add packaging materials such as cups, bottles, labels, or plastic wraps.",

    addButton: "Add Packaging",
    empty: "No packaging items added yet.",

    table: {
      name: "Name",
      unitPrice: "Price / pcs",
      qtyPerProduct: "Qty per product",
      cost: "Cost",
      actions: "Actions",
    },

    totalLabel: "Total packaging cost:",

    dialogAddTitle: "Add Packaging",
    dialogEditTitle: "Edit Packaging",

    fields: {
      nameLabel: "Packaging Name",
      namePlaceholder: "e.g., Cup 16oz, Plastic Wrap, Label",
      nameDescription:
        "Name of the packaging material used for each product.",

      unitPriceLabel: "Unit Price",
      unitPriceDescription: "Price per piece of packaging.",

      qtyLabel: "Qty per product",
      qtyDescription:
        "Number of packaging units used for one product (e.g., 2 bubble wraps).",

      saveButton: "Save",
    },
  },

  id: {
    cardTitle: "Kemasan",
    cardDescription:
      "Tambahkan material kemasan seperti cup, botol, label, atau plastik.",

    addButton: "Tambah Kemasan",
    empty: "Belum ada kemasan.",

    table: {
      name: "Nama",
      unitPrice: "Harga / pcs",
      qtyPerProduct: "Qty per produk",
      cost: "Biaya",
      actions: "Aksi",
    },

    totalLabel: "Total biaya kemasan:",

    dialogAddTitle: "Tambah Kemasan",
    dialogEditTitle: "Edit Kemasan",

    fields: {
      nameLabel: "Nama Kemasan",
      namePlaceholder: "Misal: Cup 16oz, Plastik, Label",
      nameDescription:
        "Nama material kemasan yang digunakan dalam 1 produk.",

      unitPriceLabel: "Harga per pcs",
      unitPriceDescription: "Harga satuan dari kemasan (per 1 pcs).",

      qtyLabel: "Qty per produk",
      qtyDescription:
        "Jumlah kemasan yang digunakan untuk 1 produk. Contoh: 2 jika memakai 2 bubble wrap.",

      saveButton: "Simpan",
    },
  },
} as const;
