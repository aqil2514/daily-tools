import { DownloadButton } from "@/components/tools/download-button";
import { Button } from "@/components/ui/button";

interface Props {
  handleConvert(): Promise<void>;
  file: File | null;
  loading: boolean;
  convertedUrl: string | null;
  outputFormat: string;
}

export function ActionButton({
  handleConvert,
  file,
  loading,
  convertedUrl,
  outputFormat,
}: Props) {
  return (
    <div className="flex gap-2">
      <Button onClick={handleConvert} disabled={!file || loading}>
        Convert
      </Button>

      {convertedUrl && (
        <DownloadButton
          url={convertedUrl}
          filename={`converted.${outputFormat}`}
        />
      )}
    </div>
  );
}
