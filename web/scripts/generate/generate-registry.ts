import { getRegistryFiles } from "../io/get-registry-files";
import { processRegistryFiles } from "../process/process-registry";
import { generateMd } from "../md/generate-md";
import { writeOutput } from "../io/write-output";

export function generateRegistry(config: {
  header: string;
  registryDir: string;
  match: string;
  output: string;
}) {
  const { header, registryDir, match, output } = config;

  const files = getRegistryFiles(registryDir, match);
  const data = processRegistryFiles(files);
  const markdown = generateMd({ header, data });

  writeOutput(registryDir, output, markdown);
}
