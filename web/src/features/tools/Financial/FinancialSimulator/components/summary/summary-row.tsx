export function SummaryRow({
  label,
  value,
  bold,
  color,
}: {
  label: string;
  value: string;
  bold?: boolean;
  color?: string;
}) {
  return (
    <div className="flex justify-between">
      <p className="text-sm text-muted-foreground">{label}</p>
      <p
        className={`text-sm ${bold ? "font-bold" : "font-medium"} ${
          color ?? ""
        }`}
      >
        {value}
      </p>
    </div>
  );
}
