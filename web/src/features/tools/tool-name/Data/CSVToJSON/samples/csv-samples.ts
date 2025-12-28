export const csvSampleData = {
  simple: `name,age,city
Alice,24,Jakarta
Bob,30,Bandung
Charlie,28,Surabaya`,

  products: `id,name,price,stock
P001,Notebook,12000,50
P002,Pencil,3000,200
P003,Eraser,2000,150`,

  semicolonDelimiter: `id;name;email
1;John Doe;john@example.com
2;Jane Smith;jane@example.com
3;Alex Brown;alex@example.com`,

  tabDelimiter: `id\tproduct\tquantity
1\tKeyboard\t5
2\tMouse\t10
3\tMonitor\t2`,

  numericData: `year,revenue,profit
2021,15000000,3500000
2022,18000000,4200000
2023,21000000,5000000`,

  mixedTypes: `id,name,is_active,created_at
1,Admin,true,2024-01-01
2,Editor,false,2024-02-15
3,Viewer,true,2024-03-10`,
} as const;
