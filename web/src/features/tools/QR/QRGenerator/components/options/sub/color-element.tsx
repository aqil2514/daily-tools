import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useQRGenerator } from "../../../store/provider";
import { HexColorPicker } from "react-colorful";
import { Input } from "@/components/ui/input";

type ColorKeyTypes = "dotsOptions" | "cornersSquareOptions" | "cornersDotOptions" | "backgroundOptions";

interface Props {
  colorKey: ColorKeyTypes;
}

export function ColorOption({ colorKey }: Props) {
  const { options, setOptions } = useQRGenerator();
  return (
    <Popover>
      <PopoverTrigger asChild>
        <div
          style={{ backgroundColor: options[colorKey]?.color }}
          className="w-full h-6 cursor-pointer"
        />
      </PopoverTrigger>
      <PopoverContent className="flex flex-col items-center justify-center gap-4">
        <HexColorPicker
          color={options[colorKey]?.color}
          onChange={(e) =>
            setOptions((prev) => ({
              ...prev,
              [colorKey]: { ...prev[colorKey], color: e },
            }))
          }
        />
        <Input
          value={options[colorKey]?.color}
          onChange={(e) =>
            setOptions((prev) => ({
              ...prev,
              [colorKey]: { ...prev[colorKey], color: e.target.value },
            }))
          }
        />
      </PopoverContent>
    </Popover>
  );
}
