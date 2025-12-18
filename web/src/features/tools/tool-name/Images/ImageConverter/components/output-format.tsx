import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useImageConverter } from "../provider";
import { useState } from "react";
import { Paragraph } from "@/components/atoms/text/paragraph";
import { convertImageFormat } from "@/utils/convertImageFormat";
import { ImageOutputFormat } from "@/@types/Images";

export function OutputFormatSelect() {
  const { items, setConvertedUrl, outputFormat, setOutputFormat } =
    useImageConverter();
  const [error, setError] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);

  if (!items[0]) return null;

  const convertHandler = async () => {
    if (!outputFormat) {
      setError("Pilih format output terlebih dahulu.");
      return;
    }

    try {
      setIsLoading(true);
      setError("");

      const item = items[0];

      const convertedUrl = await convertImageFormat(
        item.url,
        outputFormat as ImageOutputFormat
      );

      setConvertedUrl(convertedUrl);
    } catch (e) {
      console.error("Conversion Error:", e);
      setError(
        "Gagal mengkonversi gambar. Pastikan URL valid dan bisa diakses."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex justify-between items-center gap-4">
      <Select
        value={outputFormat}
        onValueChange={(e) => {
          setOutputFormat(e);
          setConvertedUrl("");
          setError("");
        }}
        disabled={isLoading}
      >
        <SelectTrigger className="w-40 md:w-60">
          <SelectValue placeholder="Output Format" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="jpg">JPG</SelectItem>
          <SelectItem value="png">PNG</SelectItem>
          <SelectItem value="webp">WEBP</SelectItem>
        </SelectContent>
      </Select>

      <Button
        variant={"outline"}
        onClick={convertHandler}
        disabled={isLoading || !outputFormat}
      >
        {isLoading ? "Converting..." : "Convert"}
      </Button>

      {error && (
        <Paragraph className="text-red-500 text-sm ml-4">{error}</Paragraph>
      )}
    </div>
  );
}
