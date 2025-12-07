import { useQRGenerator } from "../store/provider";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { QRType } from "../types/qr-state";

const qrTypeList: Record<QRType, string> = {
  url: "URL",
  "social-media": "Social Media",
  "whatsapp-messenger":"Whatsapp and Messenger  "
};

export function QRSelectType() {
  const { qrType, updateQrType, setOptions } = useQRGenerator();

  return (
    <Select
      value={qrType}
      onValueChange={(e) => {
        updateQrType(e as QRType);
        setOptions((prev) => ({ ...prev, data: "" }));
      }}
    >
      <SelectTrigger className="w-[300px]">
        <SelectValue placeholder="QR Type" />
      </SelectTrigger>
      <SelectContent>
        {Object.keys(qrTypeList).map((list) => (
          <SelectItem value={list} key={list}>
            {qrTypeList[list as QRType]}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
