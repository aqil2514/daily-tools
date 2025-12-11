export function InfoBlock({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="p-4 rounded-xl border bg-muted/20">
      <div className="flex items-center gap-2 mb-3">
        <div className="p-2 rounded-lg bg-primary/10 text-primary">
          {icon}
        </div>
        <h4 className="font-semibold">{title}</h4>
      </div>
      <div className="text-sm space-y-1">{children}</div>
    </div>
  );
}