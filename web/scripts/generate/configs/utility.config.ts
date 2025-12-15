import path from "path";

const utilityConfig = {
  header: "Utility Tools",
  registryDir: path.join(
    process.cwd(),
    "src/features/tools/registry/utility-registry"
  ),
  match: "utility-registry",
  output: "README.md",
};

export default utilityConfig;
