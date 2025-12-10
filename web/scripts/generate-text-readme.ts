import path from "path";
import { getRegistryFiles } from "./io/get-registry-files";
import { processRegistryFiles } from "./process/process-registry";
import { generateMd } from "./md/generate-md";
import { writeOutput } from "./io/write-output";

const REGISTRY_DIR = path.join(
  process.cwd(),
  "src/features/tools/registry/text-registry"
);

// Ambil semua file
const registryFiles = getRegistryFiles(REGISTRY_DIR, "text-registry.ts");

// Proses file → extract title/desc → bentuk ObjData
const data = processRegistryFiles(registryFiles);

// Generate markdown
const markdown = generateMd({
  header: "#TEXT TOOLS REGISTRY LIST",
  data,
});

writeOutput(REGISTRY_DIR, "README.md", markdown)