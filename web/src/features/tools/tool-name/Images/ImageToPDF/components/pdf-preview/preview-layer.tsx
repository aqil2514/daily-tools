import { useImageToPDF } from "../../provider";
import { getPageRatio } from "../../utils/getPageRatio";

export function PreviewLayer({ url }: { url: string }) {
  const { settings } = useImageToPDF();

  const ratio = getPageRatio(settings.pageSize, settings.pageOrientation);
  const margin = settings.pageMargin;

  return (
    <div
      className="w-full bg-white border shadow-sm relative"
      style={{
        aspectRatio: ratio,
        padding: `${margin}px`,
      }}
    >
      <img src={url} className="w-full h-full object-contain" />
    </div>
  );
}
