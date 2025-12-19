import { PlaceholderImageProvider } from "../store/provider";
import { PlaceholderInput } from "./placeholder-input";
import { PlaceholderOutput } from "./placeholder-output";

export function PlaceHolderGenerator() {
  return (
    <PlaceholderImageProvider>
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid lg:grid-cols-2 gap-6 items-start">
          {/* Input */}
          <div className="lg:order-1 order-2">
            <PlaceholderInput />
          </div>

          {/* Preview */}
          <div className="lg:order-2 order-1 lg:sticky lg:top-24 self-start">
            <PlaceholderOutput />
          </div>
        </div>
      </div>
    </PlaceholderImageProvider>
  );
}
