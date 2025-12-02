import { ImageResizerSettings } from "@/@types/Images";
import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from "react";

interface ImageResizerContextTypes {
  resizedUrl: string;
  setResizedUrl: Dispatch<SetStateAction<string>>;
  previewUrl:string;
  setPreviewUrl: Dispatch<SetStateAction<string>>;
  resizerSettings: ImageResizerSettings;
  setResizerSettings: Dispatch<SetStateAction<ImageResizerSettings>>;
}

const ImageResizerContext = createContext<ImageResizerContextTypes>(
  {} as ImageResizerContextTypes
);

interface ImageResizerProviderProps {
  children: React.ReactNode;
}

export function ImageResizerProvider({ children }: ImageResizerProviderProps) {
  const [previewUrl, setPreviewUrl] = useState<string>("");
  const [resizedUrl, setResizedUrl] = useState<string>("");
  const [resizerSettings, setResizerSettings] = useState<ImageResizerSettings>({
    height: 0,
    keepRatio: true,
    width: 0,
  });

  const value: ImageResizerContextTypes = {
    resizedUrl,
    setResizedUrl,
    previewUrl,
    setPreviewUrl,
    resizerSettings,
    setResizerSettings,
  };
  return (
    <ImageResizerContext.Provider value={value}>
      {children}
    </ImageResizerContext.Provider>
  );
}

export const useImageResizer = () => useContext(ImageResizerContext);
