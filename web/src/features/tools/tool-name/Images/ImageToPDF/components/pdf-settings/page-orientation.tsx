import { RectangleHorizontal, RectangleVertical } from "lucide-react";
import { useImageToPDF } from "../../provider";
import { cn } from "@/lib/utils";

export function PageOrientation() {
  const { settings, updateSetting } = useImageToPDF();

  return (
    <div className="space-y-2 px-4">
      <p className="text-xl font-semibold text-gray-500">Page Orientation</p>
      <div className="grid grid-cols-2 gap-4">
        <div
          className={cn(
            "shadow-lg rounded-2xl h-48 border border-gray-500 text-gray-500 cursor-pointer hover:border-red-500 hover:text-red-500 hover:scale-105 active:scale-100 flex flex-col items-center justify-center duration-200",
            settings.pageOrientation === "portrait" &&
              "border-red-500 text-red-500"
          )}
          onClick={() => updateSetting("pageOrientation", "portrait")}
        >
          <RectangleVertical size={96} />
          <p className="text-xl font-semibold">Portrait</p>
        </div>
        <div
          className={cn(
            "shadow-lg rounded-2xl h-48 border border-gray-500 text-gray-500 cursor-pointer hover:border-red-500 hover:text-red-500 hover:scale-105 active:scale-100 flex flex-col items-center justify-center duration-200",
            settings.pageOrientation === "landscape" &&
              "border-red-500 text-red-500"
          )}
          onClick={() => updateSetting("pageOrientation", "landscape")}
        >
          <RectangleHorizontal size={96} />
          Landscape
        </div>
      </div>
    </div>
  );
}
