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
import { DotType } from "qr-code-styling";
import { useQRGenerator } from "../../store/provider";
import { ColorOption } from "./sub/color-element";

const dotStyleItems: { value: DotType; label: string }[] = [
  {
    value: "rounded",
    label: "Rounded",
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

export function DotsOptions() {
  return (
      <AccordionItem value="item-2">
        <AccordionTrigger>Dots Options</AccordionTrigger>
        <AccordionContent className="space-y-4">
          <div className="space-y-4">
            <Label>Dots Style</Label>
            <DotsStyle />
          </div>

          <div className="space-y-4">
            <div className="flex justify-between">
              <Label>Dots Color</Label>
            </div>
            <ColorOption colorKey="dotsOptions" />
          </div>
        </AccordionContent>
      </AccordionItem>
  );
}

const DotsStyle = () => {
  const { options, setOptions } = useQRGenerator();
  return (
    <Select
      value={options.dotsOptions?.type}
      onValueChange={(e) => {
        setOptions((prev) => ({
          ...prev,
          dotsOptions: { ...prev.dotsOptions, type: e as DotType },
        }));
      }}
    >
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Dot Style" />
      </SelectTrigger>
      <SelectContent>
        {dotStyleItems.map((item) => (
          <SelectItem key={item.value} value={item.value}>
            {item.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};
