import { ConvertCategory } from "@/@types/Misc";
import { Metadata } from "next";
import dynamic from "next/dynamic";

interface Props {
  params: Promise<{ "convert-category": ConvertCategory }>;
}

const titleMapper: Record<ConvertCategory, string> = {
  image: "Image Converter",
};

const componentMapper: Record<ConvertCategory, React.ComponentType> = {
  image: dynamic(() => import("@/featured/converter/ImageConverter")),
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const convertCategory = (await params)["convert-category"];

  if (!(convertCategory in titleMapper)) {
    return {
      title: "Converter not found",
    };
  }

  return {
    title: titleMapper[convertCategory],
  };
}

export default async function ConvertCategoryPage({ params }: Props) {
  const convertCategory = (await params)["convert-category"];

  if (!(convertCategory in componentMapper)) {
    return <div>Converter not found</div>;
  }
  
  const Converter = componentMapper[convertCategory];

  return <Converter />;
}
