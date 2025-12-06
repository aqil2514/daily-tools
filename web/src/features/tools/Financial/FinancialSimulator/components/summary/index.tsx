"use client";

import { CategoryTotals } from "./category-totals";
import { TotalSummary } from "./total-summary";

export default function SummaryTab() {
  return (
    <div className="space-y-6">
      <TotalSummary />

      <CategoryTotals />


    </div>
  );
}
