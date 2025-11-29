import { ScrollArea } from "@/components/ui/scroll-area";

interface Props {
  children: React.ReactNode;
}

export function ContentContainer({ children }: Props) {
  return (
    <ScrollArea className="h-[calc(100vh-5rem)] px-6 py-4">
      <div className="pb-20">{children}</div>
    </ScrollArea>
  );
}
