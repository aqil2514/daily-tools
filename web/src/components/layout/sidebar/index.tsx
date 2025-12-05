import { ScrollArea } from "@/components/ui/scroll-area";
import { ToolsList } from "./tools-list";
import { SectionList } from "./section-list";

export default function Sidebar() {
  return (
    <div className="sticky top-0 h-[calc(100vh-5rem)]">
      <ScrollArea className="w-full h-[90%] px-4">
        <SectionList />
        <ToolsList />
      </ScrollArea>
      <footer className="p-4 text-xs text-gray-400">Footer</footer>
    </div>
  );
}
