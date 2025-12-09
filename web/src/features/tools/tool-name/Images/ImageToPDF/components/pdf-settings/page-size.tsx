import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useImageToPDF } from "../../provider";

export function PageSize() {
  const { settings, updateSetting } = useImageToPDF();

  return (
    <div className="mt-6 px-4">
      <p className="text-xl font-semibold text-gray-500">Page Size</p>

      <Select
        value={settings.pageSize}
        onValueChange={(value) =>
          updateSetting("pageSize", value as typeof settings.pageSize)
        }
      >
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Select page size" />
        </SelectTrigger>

        {/* AUTO MATCH WIDTH FIX */}
        <SelectContent className="w-(--radix-select-trigger-width)">
          <SelectItem value="a4">A4</SelectItem>
          <SelectItem value="fit">Fit</SelectItem>
          <SelectItem value="us-letter">US Letter</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
