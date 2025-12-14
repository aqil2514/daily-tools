interface MeasurementInfoRowProps {
  label: string;
  value: string;
  description?: string;
}

export function MeasurementInfoRow({
  label,
  value,
  description,
}: MeasurementInfoRowProps) {
  return (
    <div className="space-y-1">
      <div className="flex items-center justify-between text-sm">
        <span className="text-muted-foreground">{label}</span>
        <span className="font-medium text-foreground">{value}</span>
      </div>

      {description && (
        <p className="text-xs text-muted-foreground">
          {description}
        </p>
      )}
    </div>
  );
}
