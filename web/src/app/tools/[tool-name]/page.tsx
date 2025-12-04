import { ToolName } from "@/@types/Tools";
import { toolsRegistry } from "@/features/tools/registry";
import { Metadata } from "next";

interface Props {
  params: Promise<{ "tool-name": ToolName }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const toolName = (await params)["tool-name"];
  const tool = toolsRegistry[toolName];

  if (!tool) {
    return {
      title: "Tool Not Found – Flowtooly",
      description: "The requested tool could not be found on Flowtooly.",
    };
  }

  return {
    title: `${tool.title} | Flowtooly`,
    description: tool.description,
    // keywords: tool.keywords,
  };
}

export default async function ConvertCategoryPage({ params }: Props) {
  const toolName = (await params)["tool-name"];
  const tool = toolsRegistry[toolName];

  if (!tool) {
    return <div>Tools not found</div>;
  }

  const ToolsComponent = tool.Component;

  return <ToolsComponent />;
}
