import { useEffect, useRef, useState } from "react";
import { useQRGenerator } from "../store/provider";
import QRCodeStyling, { FileExtension } from "qr-code-styling";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

export function QRPreview() {
  const { options } = useQRGenerator();
  const [qrCode, setQrCode] = useState<QRCodeStyling>();
  const [fileExt, setFileExt] = useState<FileExtension>("svg");
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setQrCode(new QRCodeStyling(options));
  }, [options]);

  useEffect(() => {
    if (ref.current) {
      qrCode?.append(ref.current);
    }
  }, [qrCode, ref]);

  useEffect(() => {
    if (!qrCode) return;
    qrCode?.update(options);
  }, [qrCode, options]);

  if (!options.data)
    return (
      <div>
        <p>Data belum ditentukan</p>
      </div>
    );

  const onDownloadClick = () => {
    if (!qrCode) return;
    qrCode.download({
      extension: fileExt,
    });
  };
  return (
    <div>
      <div ref={ref} />
      <div className="mt-4 space-y-4">
        {/* Select: file extension */}
        <div className="space-y-2">
          <label className="text-sm font-medium">Download Format</label>

          <Select
            value={fileExt}
            onValueChange={(e) => setFileExt(e as FileExtension)}
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select format" />
            </SelectTrigger>

            <SelectContent>
              <SelectItem value="svg">SVG</SelectItem>
              <SelectItem value="png">PNG</SelectItem>
              <SelectItem value="jpeg">JPEG</SelectItem>
              <SelectItem value="webp">WEBP</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Download button */}
        <Button onClick={onDownloadClick} className="w-full">
          Download QR
        </Button>
      </div>
    </div>
  );
}
