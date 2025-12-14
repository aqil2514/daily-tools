import { Card, CardContent } from "@/components/ui/card";

export function ToolCard({ children }: { children: React.ReactNode }) {
  return (
    <Card>
      <CardContent className="space-y-5 p-2 lg:p-6">
        {children}
      </CardContent>
    </Card>
  );
}