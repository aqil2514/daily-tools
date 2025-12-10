import textConfig from "./generate/configs/text.config";
import financialConfig from "./generate/configs/financial.config";
import { generateRegistry } from "./generate/generate-registry";

const arg = process.argv[2];

switch (arg) {
  case "text":
    generateRegistry(textConfig);
    break;

  case "financial":
    generateRegistry(financialConfig);
    break;

  case "all":
    generateRegistry(textConfig);
    generateRegistry(financialConfig);
    break;

  default:
    console.log(`
Usage:
  tsx scripts/cli.ts text
  tsx scripts/cli.ts financial
  tsx scripts/cli.ts all
`);
}
