import { SlugControllerState } from "../types/interface";

export const defaultSlugControllerState: SlugControllerState = {
  delimiter: "-",
  lowercase: true,
  collapseSpaces: true,
  removeSpecial: true,
  autoUpdate: true,
  trimWhitespace: true,
};
