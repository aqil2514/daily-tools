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
import { CornerDotType } from "qr-code-styling";
import { useQRGenerator } from "../../store/provider";
import { ColorOption } from "./sub/color-element";

const cornerDotStyleItems: { value: CornerDotType; label: string }[] = [
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

export function CornerDotOptions() {
  return (
      <AccordionItem value="item-4">
        <AccordionTrigger>Corner Dot Options</AccordionTrigger>
        <AccordionContent className="space-y-4">
          <div className="space-y-4">
            <Label>Corner Dot Style</Label>
            <CornerDotStyle />
          </div>

          <div className="space-y-4">
            <div className="flex justify-between">
              <Label>Corner Dot Color</Label>
            </div>
            <ColorOption colorKey="cornersDotOptions" />
          </div>
        </AccordionContent>
      </AccordionItem>
  );
}

const CornerDotStyle = () => {
  const { options, setOptions } = useQRGenerator();
  return (
    <Select
      value={options.cornersDotOptions?.type}
      onValueChange={(e) => {
        setOptions((prev) => ({
          ...prev,
          cornersDotOptions: { ...prev.cornersDotOptions, type: e as CornerDotType  },
        }));
      }}
    >
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Corner Dot Style" />
      </SelectTrigger>
      <SelectContent>
        {cornerDotStyleItems.map((item) => (
          <SelectItem key={item.value} value={item.value}>
            {item.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};
