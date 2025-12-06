import { JSX } from "react";
import { QRType } from "../types/qr-state";
import { URLForm } from "./form/url-form";
import { SocialMediaForm } from "./form/sosmed-form";
import { useQRGenerator } from "../store/provider";

const ComponentMapping: Record<QRType, JSX.Element> = {
  url: <URLForm />,
  "social-media": <SocialMediaForm />,
};

export function QRForm() {
  const { qrType } = useQRGenerator();
  
  return ComponentMapping[qrType];
}
