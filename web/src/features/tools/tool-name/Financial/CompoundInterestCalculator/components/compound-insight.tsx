import { ToolCard } from "@/components/molecules/card/tool-card";
import { useCompoundInsight } from "../hooks/use-compound-insight";
import { Info } from "lucide-react";

export function CompoundInsight() {
  const insight = useCompoundInsight();

  return (
    <ToolCard>
      <div className="flex items-start gap-2">
        <Info className="mt-0.5 h-4 w-4 text-muted-foreground" />
        <p className="font-medium">{insight.primary}</p>
      </div>

      {insight.secondary && (
        <p className="text-muted-foreground">{insight.secondary}</p>
      )}

      {insight.highlights && insight.highlights.length > 0 && (
        <ul className="list-disc pl-5 text-muted-foreground space-y-1">
          {insight.highlights.map((text, i) => (
            <li key={i}>{text}</li>
          ))}
        </ul>
      )}
    </ToolCard>
  );
}
