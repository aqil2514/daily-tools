import { JSX } from "react";
import { QRType } from "../types/qr-state";
import { URLForm } from "./form/url-form";
import { SocialMediaForm } from "./form/sosmed-form";
import { useQRGenerator } from "../store/provider";
import { WhatsappAndMessengerForm } from "./form/whatsapp-and-messenger-form";
import { MapsAndLocationForm } from "./form/maps-and-location-form";
import { WifiForm } from "./form/wifi-form";
import { VCardForm } from "./form/v-card-form";
import { EmailSmsForm } from "./form/email-sms-form";
import { EventCalendarForm } from "./form/event-calendar-form";

const ComponentMapping: Record<QRType, JSX.Element> = {
  url: <URLForm />,
  "social-media": <SocialMediaForm />,
  "whatsapp-messenger": <WhatsappAndMessengerForm />,
  "maps-and-location": <MapsAndLocationForm />,
  wifi: <WifiForm />,
  "v-card": <VCardForm />,
  "email-sms": <EmailSmsForm />,
  "event-calendar": <EventCalendarForm />
};

export function QRForm() {
  const { qrType } = useQRGenerator();

  return ComponentMapping[qrType];
}
