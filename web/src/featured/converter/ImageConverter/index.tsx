import { ImageConverter } from "./components/image-converter";

export default function ImageConverterTemplate(){
    return (
    <div className="max-w-2xl mx-auto py-10 px-4">
      <h1 className="text-2xl font-bold mb-6">Image Converter</h1>
      <ImageConverter />
    </div>
  );
}