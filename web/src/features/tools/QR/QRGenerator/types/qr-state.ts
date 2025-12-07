export type QRType =
  | "url"
  | "social-media"
  | "whatsapp-messenger"
  | "maps-and-location"
  | "wifi";

export interface QRUrl {
  url: string;
}

export interface QRSosmed {
  username: string;
}
