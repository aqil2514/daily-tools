interface ResultCardProps {
  label: string;
  value: string;
}

export function ResultCard({ label, value }: ResultCardProps) {
  return (
    <div className="rounded-md border p-3">
      <p className="text-xs text-muted-foreground">{label}</p>
      <p className="text-lg font-semibold">{value}</p>
    </div>
  );
}
