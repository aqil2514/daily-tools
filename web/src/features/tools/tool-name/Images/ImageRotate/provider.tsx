import { ImageUrl } from "@/@types/Images";
import React, {
  createContext,
  SetStateAction,
  useContext,
  useState,
} from "react";

export interface RotateState {
  rotation: number;
  flipHorizontal: boolean;
  flipVertical: boolean;
  background: string;
  preserveSize: boolean;
  autoFixOrientation: boolean;
}

interface ImageRotateContextTypes {
  rotateState: RotateState;
  setRotateState: React.Dispatch<SetStateAction<RotateState>>;

  imageUrl: ImageUrl;
  setImageUrl: React.Dispatch<SetStateAction<ImageUrl>>;
}

const ImageRotateContext = createContext<ImageRotateContextTypes>(
  {} as ImageRotateContextTypes
);

interface ImageRotateProviderProps {
  children: React.ReactNode;
}

export const defaultRotateState: RotateState = {
  rotation: 0,
  flipHorizontal: false,
  flipVertical: false,
  background: "transparent",
  preserveSize: true,
  autoFixOrientation: true,
};

export function ImageRotateProvider({ children }: ImageRotateProviderProps) {
  const [rotateState, setRotateState] =
    useState<RotateState>(defaultRotateState);
  const [imageUrl, setImageUrl] = useState<ImageUrl>({
    preview: "",
    result: "",
  });

  const values: ImageRotateContextTypes = {
    imageUrl,
    rotateState,
    setImageUrl,
    setRotateState,
  };
  return (
    <ImageRotateContext.Provider value={values}>
      {children}
    </ImageRotateContext.Provider>
  );
}

export const useImageRotate = () => useContext(ImageRotateContext);
