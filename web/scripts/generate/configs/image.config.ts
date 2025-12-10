import path from "path";

const imageConfig = {
  header: "Image Tools",
  registryDir: path.join(
    process.cwd(),
    "src/features/tools/registry/image-registry"
  ),
  match: "image-registry.ts",
  output: "README.md",
};

export default imageConfig;