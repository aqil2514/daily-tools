import path from "path";

const developerConfig = {
  header: "Developer Tools",
  registryDir: path.join(
    process.cwd(),
    "src/features/tools/registry/developer-registry"
  ),
  match: "developer-registry",
  output: "README.md",
};

export default developerConfig;
