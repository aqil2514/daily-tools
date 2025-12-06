import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useQRGenerator } from "../../store/provider";
import { SourceSelection } from "@/components/molecules/source-selection";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export function MainOptions() {
  const { options, setOptions } = useQRGenerator();
  const [srcKey, setSrcKey] = useState<number>(0);
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger>Main Options</AccordionTrigger>
        <AccordionContent className="space-y-4 px-4">
          <SourceSelection
            key={srcKey}
            onFileSelected={(file) => {
              if (!file) return;
              setOptions((prev) => ({
                ...prev,
                image: URL.createObjectURL(file),
              }));
            }}
            onUrlSelected={(url) =>
              setOptions((prev) => ({ ...prev, image: url }))
            }
          />
          {options.image && (
            <Button
              variant={"destructive"}
              onClick={() => {
                setOptions((prev) => ({ ...prev, image: "" }));
                setSrcKey(prev => prev + 1)
              }}
            >
              Delete Image
            </Button>
          )}
          <div className="space-y-2">
            <Label htmlFor="width">Width</Label>
            <Input
              id="width"
              type="number"
              value={options.width}
              onChange={(e) =>
                setOptions((prev) => ({
                  ...prev,
                  width: e.target.valueAsNumber,
                }))
              }
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="height">Height</Label>
            <Input
              id="height"
              type="number"
              value={options.height}
              onChange={(e) =>
                setOptions((prev) => ({
                  ...prev,
                  height: e.target.valueAsNumber,
                }))
              }
            />
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
