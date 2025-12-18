import { Denomination } from "@/features/tools/tool-name/Financial/CashCounter/types/interface";

export function groupByType(data: Denomination[]) {
  return data.reduce<Record<Denomination["type"], Denomination[]>>(
    (acc, item) => {
      if (!acc[item.type]) acc[item.type] = [];
      acc[item.type].push(item);
      return acc;
    },
    {} as Record<Denomination["type"], Denomination[]>
  );
}

export function calculateTotal(data: Denomination[]) {
  return data.reduce((sum, d) => sum + d.value * d.quantity, 0);
}
