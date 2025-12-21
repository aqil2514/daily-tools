import { Button } from "@/components/ui/button";
import { useChartExport } from "@/hooks/chart/use-chart-export";
import { Download } from "lucide-react";
import { useAssetAllocation } from "../../store/provider";
import { usePdfExport } from "@/hooks/pdf/use-pdf-export";
import { AssetAllocationDocument } from "@/pdf/documents/AssetAllocationDocument";
import { useLocale } from "next-intl";
import { trackToolExport } from "@/utils/analytics/track-tool";

export function AssetAllocationExport() {
  const { exportChartToImage } = useChartExport();
  const { exportPdf, loading } = usePdfExport();
  const { chartRef, calculate } = useAssetAllocation();
  const locale = useLocale();

  const clickHandler = async () => {
    if (!chartRef.current) return;

    trackToolExport("asset-allocation-calculator", "pdf");
    const image = await exportChartToImage(chartRef.current);

    const document = (
      <AssetAllocationDocument data={calculate} image={image} locale={locale} />
    );

    await exportPdf(document, { fileName: "asset-allocation.pdf" });
  };
  return (
    <Button variant={"outline"} onClick={clickHandler} disabled={loading}>
      <Download /> {loading ? "Processing..." : "PDF"}
    </Button>
  );
}
