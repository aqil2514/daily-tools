import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Label } from "@/components/ui/label";
import { ColorOption } from "./sub/color-element";

export function BackgroundOptions() {
  return (
      <AccordionItem value="item-5">
        <AccordionTrigger>Background Options</AccordionTrigger>
        <AccordionContent className="space-y-4 bg-slate-200 px-4 py-2">
          <div className="space-y-4 ">
            <div className="flex justify-between">
              <Label>Background Color</Label>
            </div>
            <ColorOption colorKey="backgroundOptions" />
          </div>
        </AccordionContent>
      </AccordionItem>
  );
}
