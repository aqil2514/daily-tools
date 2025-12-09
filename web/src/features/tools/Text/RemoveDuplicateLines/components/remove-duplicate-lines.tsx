import { ToolCard } from "@/components/tools/tool-card";
import { TextEditor } from "./text-editor";
import { OutputSection } from "./output-section";

export function RemoveDuplicateLines() {
  return (
    <div className="grid lg:grid-cols-2 gap-4">
      <ToolCard>
        <TextEditor />
      </ToolCard>
      <ToolCard>
        <OutputSection />
      </ToolCard>
    </div>
  );
}
