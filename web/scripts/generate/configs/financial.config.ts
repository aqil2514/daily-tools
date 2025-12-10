import path from "path";

const financialConfig = {
  header: "Financial Tools",
  registryDir: path.join(
    process.cwd(),
    "src/features/tools/registry/financial-registry"
  ),
  match: "financial-registry.ts",
  output: "README.md",
};

export default financialConfig;
