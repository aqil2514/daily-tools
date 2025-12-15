import path from "path";

const healthConfig = {
  header: "Health Tools",
  registryDir: path.join(
    process.cwd(),
    "src/features/tools/registry/health-registry"
  ),
  match: "health-registry.ts",
  output: "README.md",
};

export default healthConfig;