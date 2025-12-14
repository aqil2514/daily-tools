interface FormulaItem {
  label: string;
  formula: string;
}

interface FormulaListProps {
  items: FormulaItem[];
  title?: string;
}

export function FormulaList({
  items,
  title = "Rumus",
}: FormulaListProps) {
  return (
    <div className="space-y-3 rounded-md border bg-muted/40 p-3 text-sm">
      {/* Optional title */}
      <p className="font-medium text-foreground">{title}</p>

      <div className="space-y-2">
        {items.map((item, idx) => (
          <div key={idx} className="flex items-start gap-2">
            <span className="text-muted-foreground">
              {item.label}:
            </span>

            <code className="rounded bg-background px-2 py-0.5 font-mono text-sm">
              {item.formula}
            </code>
          </div>
        ))}
      </div>
    </div>
  );
}
