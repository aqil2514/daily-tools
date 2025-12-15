import path from "path";

const conversionConfig = {
  header: "Conversion Tools",
  registryDir: path.join(
    process.cwd(),
    "src/features/tools/registry/conversion-registry"
  ),
  match: "conversion-registry",
  output: "README.md",
};

export default conversionConfig;
