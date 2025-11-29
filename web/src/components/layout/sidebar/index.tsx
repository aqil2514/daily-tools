import { ScrollArea } from "@/components/ui/scroll-area";
import { ToolsList } from "./tools-list";

export default function Sidebar() {
  return (
    <div className="sticky top-0 h-[calc(100vh-5rem)]">
      <ScrollArea className="w-full h-full px-4">
        <ToolsList />
      </ScrollArea>
    </div>
  );
}
