import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CornerSquareType } from "qr-code-styling";
import { useQRGenerator } from "../../store/provider";
import { ColorOption } from "./sub/color-element";

const cornerSquareStyleItems: { value: CornerSquareType; label: string }[] = [
  {
    value: "rounded",
    label: "Rounded",
  },
  {
    value: "dot",
    label: "Dot",
  },
  {
    value: "dots",
    label: "Dots",
  },
  {
    value: "classy",
    label: "Classy",
  },
  {
    value: "classy-rounded",
    label: "Classy Rounded",
  },
  {
    value: "extra-rounded",
    label: "Extra Rounded",
  },
  {
    value: "square",
    label: "Square",
  },
];

export function CornerSquareOptions() {
  return (
      <AccordionItem value="item-3">
        <AccordionTrigger>Corner Square Options</AccordionTrigger>
        <AccordionContent className="space-y-4">
          <div className="space-y-4">
            <Label>Corner Square Style</Label>
            <CornerSquareStyle />
          </div>

          <div className="space-y-4">
            <div className="flex justify-between">
              <Label>Corner Square Color</Label>
            </div>
            <ColorOption colorKey="cornersSquareOptions" />
          </div>
        </AccordionContent>
      </AccordionItem>
  );
}

const CornerSquareStyle = () => {
  const { options, setOptions } = useQRGenerator();
  return (
    <Select
      value={options.cornersSquareOptions?.type}
      onValueChange={(e) => {
        setOptions((prev) => ({
          ...prev,
          cornersSquareOptions: { ...prev.cornersSquareOptions, type: e as CornerSquareType  },
        }));
      }}
    >
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Corner Square Style" />
      </SelectTrigger>
      <SelectContent>
        {cornerSquareStyleItems.map((item) => (
          <SelectItem key={item.value} value={item.value}>
            {item.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};
