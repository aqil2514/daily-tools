import {
  Accordion,
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
import { HexColorPicker } from "react-colorful";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Input } from "@/components/ui/input";

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
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger>Dots Options</AccordionTrigger>
        <AccordionContent className="space-y-4">
          <div className="space-y-4">
            <Label>Dots Style</Label>
            <DotsStyle />
          </div>

          <div className="space-y-4">
            <Label>Dots Color</Label>
            <DotsColor />
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
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

const DotsColor = () => {
  const { options, setOptions } = useQRGenerator();
  return (
    <Popover>
      <PopoverTrigger asChild>
        <div style={{ backgroundColor: options.dotsOptions?.color }} className="w-full h-6 cursor-pointer" />
      </PopoverTrigger>
      <PopoverContent className="flex flex-col items-center justify-center gap-4">
        <HexColorPicker
          color={options.dotsOptions?.color}
          onChange={(e) =>
            setOptions((prev) => ({
              ...prev,
              dotsOptions: { ...prev.dotsOptions, color: e },
            }))
          }
        />
        <Input
          value={options.dotsOptions?.color}
          onChange={(e) =>
            setOptions((prev) => ({
              ...prev,
              dotsOptions: { ...prev.dotsOptions, color: e.target.value },
            }))
          }
        />
      </PopoverContent>
    </Popover>
  );
};
