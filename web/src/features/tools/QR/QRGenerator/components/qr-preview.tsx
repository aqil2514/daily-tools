import { useEffect, useRef, useState } from "react";
import { useQRGenerator } from "../store/provider";
import QRCodeStyling from "qr-code-styling";

export function QRPreview() {
  const { options } = useQRGenerator();
  const [qrCode, setQrCode] = useState<QRCodeStyling>();
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
  return (
    <div>
      <div ref={ref} />
    </div>
  );
}
