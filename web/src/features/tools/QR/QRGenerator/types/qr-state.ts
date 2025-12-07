export type QRType =
  | "url"
  | "social-media"
  | "whatsapp-messenger"
  | "maps-and-location"
  | "wifi"
  | "v-card"
  | "email-sms"
  | "event-calendar";

export interface QRUrl {
  url: string;
}

export interface QRSosmed {
  username: string;
}
