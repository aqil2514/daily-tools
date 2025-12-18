import ExifReader from "exifreader";

export type ExifTag = ExifReader.Tags[string];
export type MetadataEntry = [string, ExifTag];

export type MetadataGroup =
  | "image"
  | "camera"
  | "color"
  | "gps"
  | "date"
  | "other";
