import { Progress } from "@/components/ui/progress";

export function TaskProgress({ label }: { label?: string }) {
  return (
    <div>
      <Progress value={60} className="h-2" />
      <p className="text-xs text-muted-foreground mt-1">
        {label ?? "Processing..."}
      </p>
    </div>
  );
}
