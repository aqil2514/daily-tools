import { toPng } from "html-to-image";

export function useChartExport() {
  const exportChartToImage = async (ref: HTMLElement) => {
    const dataUrl = await toPng(ref, {
      backgroundColor: "#FFFFFF",
      pixelRatio: 2,
    });

    return dataUrl;
  };
  return { exportChartToImage };
}
