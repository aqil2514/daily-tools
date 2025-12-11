export const SAMPLE_HPP_DATA = [
  {
    label: "Thai Tea",
    data: {
      basicInfo: {
        productName: "Thai Tea",
        outputQuantity: 10,
      },
      ingredients: [
        {
          id: "ing1",
          name: "Teh Thai",
          purchasePrice: 15000,
          purchaseQuantity: 1000,
          usage: 100,
          unit: "gram",
        },
        {
          id: "ing2",
          name: "Gula Pasir",
          purchasePrice: 12000,
          purchaseQuantity: 1000,
          usage: 200,
          unit: "gram",
        },
        {
          id: "ing3",
          name: "Susu Kental Manis",
          purchasePrice: 14000,
          purchaseQuantity: 1000,
          usage: 200,
          unit: "ml",
        },
      ],
      packaging: [
        {
          id: "pack1",
          name: "Cup 16oz",
          unitPrice: 700,
          quantityPerProduct: 1,
        },
        { id: "pack2", name: "Sedotan", unitPrice: 150, quantityPerProduct: 1 },
      ],
      additionalCost: {
        laborCost: 10000,
        overheadCost: 5000,
      },
      pricing: {
        marginPercentage: 30,
      },
    },
  },
  {
    label: "Es Kopi Susu",
    data: {
      basicInfo: {
        productName: "Es Kopi Susu",
        outputQuantity: 8,
      },
      ingredients: [
        {
          id: "ing1",
          name: "Kopi Bubuk",
          purchasePrice: 20000,
          purchaseQuantity: 250,
          usage: 30,
          unit: "gram",
        },
        {
          id: "ing2",
          name: "Susu Fresh",
          purchasePrice: 18000,
          purchaseQuantity: 1000,
          usage: 150,
          unit: "ml",
        },
        {
          id: "ing3",
          name: "Gula Aren",
          purchasePrice: 25000,
          purchaseQuantity: 1000,
          usage: 60,
          unit: "gram",
        },
      ],
      packaging: [
        {
          id: "pack1",
          name: "Cup PET 500ml",
          unitPrice: 900,
          quantityPerProduct: 1,
        },
        {
          id: "pack2",
          name: "Sedotan Jumbo",
          unitPrice: 200,
          quantityPerProduct: 1,
        },
      ],
      additionalCost: {
        laborCost: 12000,
        overheadCost: 6000,
      },
      pricing: {
        marginPercentage: 35,
      },
    },
  },
];
