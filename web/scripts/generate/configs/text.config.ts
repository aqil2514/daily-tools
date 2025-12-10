import path from "path";

const textConfig = {
  header: "Text Tools",
  registryDir: path.join(
    process.cwd(),
    "src/features/tools/registry/text-registry"
  ),
  match: "text-registry.ts",
  output: "README.md",
};

export default textConfig;