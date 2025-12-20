import { DataTable } from "@/components/ui/data-table";
import { useCompoundBreakdown } from "../hooks/use-compound-breakdown";

export function CompoundBreakdown() {
  const { mode, once, monthly } = useCompoundBreakdown();

  if (mode === "once") {
    return (
      <DataTable
        columns={once.columns}
        data={once.data}
      />
    );
  }

  return (
    <DataTable
      columns={monthly.columns}
      data={monthly.data}
    />
  );
}
