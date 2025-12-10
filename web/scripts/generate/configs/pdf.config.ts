import path from "path";

const pdfConfig = {
  header: "PDF Tools",
  registryDir: path.join(
    process.cwd(),
    "src/features/tools/registry/pdf-registry"
  ),
  match: "pdf-registry",
  output: "README.md",
};

export default pdfConfig;
