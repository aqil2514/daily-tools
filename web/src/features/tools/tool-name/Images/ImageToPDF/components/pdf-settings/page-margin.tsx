import { Input } from "@/components/ui/input";
import { useImageToPDF } from "../../provider";

export function PageMargin() {
  const { settings, updateSetting } = useImageToPDF();
  return (
    <div className="mt-6 px-4">
      <p className="text-xl font-semibold text-gray-500">Page margin</p>

      <Input
        type="number"
        value={settings.pageMargin}
        onChange={(e) => updateSetting("pageMargin", e.target.valueAsNumber)}
      />
    </div>
  );
}
