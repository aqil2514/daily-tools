import path from "path";

const mathConfig = {
  header: "Math Tools",
  registryDir: path.join(
    process.cwd(),
    "src/features/tools/registry/math-registry"
  ),
  match: "math-registry",
  output: "README.md",
};

export default mathConfig;
