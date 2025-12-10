export interface SlugControllerState {
  delimiter: "-" | "_";
  lowercase: boolean;
  collapseSpaces: boolean;
  removeSpecial: boolean;
  autoUpdate: boolean;
  trimWhitespace: boolean;
}