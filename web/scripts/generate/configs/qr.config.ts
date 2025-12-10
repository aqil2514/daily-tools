import path from "path";

const qrConfig = {
  header: "QR Tools",
  registryDir: path.join(
    process.cwd(),
    "src/features/tools/registry/qr-registry"
  ),
  match: "qr-registry",
  output: "README.md",
};

export default qrConfig;
