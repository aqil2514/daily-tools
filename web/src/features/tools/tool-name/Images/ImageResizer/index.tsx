import { SectionHeader } from "@/components/molecules/section-header";
import { ImageResizer as Comp } from "./components/image-resizer";

export default function ImageResizer(){
    return (
        <div>
            <SectionHeader title="Image Resizer" description="Ubah ukuran gambar" />
            <Comp />
        </div>
    )
}