import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Label } from "@/components/ui/label";
import { useQRGenerator } from "../../store/provider";
import { Input } from "@/components/ui/input";
import { TypeNumber } from "qr-code-styling";

export function QRInnerOptions() {
  return (
    <AccordionItem value="item-7">
      <AccordionTrigger>QR Options</AccordionTrigger>
      <AccordionContent className="space-y-4 px-4">
        <TypeNumberComp />
      </AccordionContent>
    </AccordionItem>
  );
}

const TypeNumberComp = () => {
  const { options, setOptions } = useQRGenerator();
  return (
    <div className="space-y-4">
      <Label>Type Number</Label>
      <Input
        type="number"
        max={40}
        value={options.qrOptions?.typeNumber}
        onChange={(e) =>
          setOptions((prev) => ({
            ...prev,
            qrOptions: {
              ...prev.qrOptions,
              typeNumber: e.target.valueAsNumber as TypeNumber,
            },
          }))
        }
      />
    </div>
  );
};
