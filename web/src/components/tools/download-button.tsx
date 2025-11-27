import { Button } from "@/components/ui/button";

interface DownloadButtonProps {
  url: string;
  filename?: string;
}

export function DownloadButton({ url, filename }: DownloadButtonProps) {
  function handleDownload() {
    const a = document.createElement("a");
    a.href = url;
    a.download = filename ?? "download";
    a.click();
  }

  return (
    <Button variant="secondary" onClick={handleDownload}>
      Download
    </Button>
  );
}
