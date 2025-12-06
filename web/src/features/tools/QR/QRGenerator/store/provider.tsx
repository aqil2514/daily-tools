import React, { createContext, useContext, useState } from "react";
import { QRType } from "../types/qr-state";
import { Options } from "qr-code-styling";

interface QRGeneratorContextType {
  qrType: QRType;
  options: Options;

  setOptions: React.Dispatch<React.SetStateAction<Options>>;

  updateQrType: (state: QRType) => void;
}

const QRGeneratorContext = createContext<QRGeneratorContextType>(
  {} as QRGeneratorContextType
);

export function QRGeneratorProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [qrType, setQrType] = useState<QRType>("url");
  const [options, setOptions] = useState<Options>({
    data: "",
    width: 300,
    height: 300,
    type: "canvas",
    dotsOptions: {
      color: "#aabbcc",
      type: "square",
    },
  });

  const updateQrType = (state: QRType) => {
    setQrType(state);
  };

  const values: QRGeneratorContextType = {
    options,
    qrType,

    updateQrType,

    setOptions,
  };

  return (
    <QRGeneratorContext.Provider value={values}>
      {children}
    </QRGeneratorContext.Provider>
  );
}

export const useQRGenerator = () => useContext(QRGeneratorContext);
