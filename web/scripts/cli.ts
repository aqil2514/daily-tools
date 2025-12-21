import textConfig from "./generate/configs/text.config";
import financialConfig from "./generate/configs/financial.config";
import { generateRegistry } from "./generate/generate-registry";
import developerConfig from "./generate/configs/developer.config";
import imageConfig from "./generate/configs/image.config";
import pdfConfig from "./generate/configs/pdf.config";
import qrConfig from "./generate/configs/qr.config";
import mathConfig from "./generate/configs/math.config";
import { generateToolList } from "./generate-tool-list";
import conversionConfig from "./generate/configs/conversion.config";
import utilityConfig from "./generate/configs/utility.config";
import healthConfig from "./generate/configs/health.config";

const arg = process.argv[2];

switch (arg) {
  case "text":
    generateRegistry(textConfig);
    break;

  case "financial":
    generateRegistry(financialConfig);
    break;

  case "developer":
    generateRegistry(developerConfig);
    break;

  case "image":
    generateRegistry(imageConfig);
    break;

  case "pdf":
    generateRegistry(pdfConfig);
    break;

  case "qr":
    generateRegistry(qrConfig);
    break;

  case "math":
    generateRegistry(qrConfig);
    break;

  case "conversion":
    generateRegistry(conversionConfig);
    break;

  case "utility":
    generateRegistry(utilityConfig);
    break;

  case "health":
    generateRegistry(healthConfig);
    break;

  case "all":
    generateRegistry(textConfig);
    generateRegistry(financialConfig);
    generateRegistry(developerConfig);
    generateRegistry(imageConfig);
    generateRegistry(pdfConfig);
    generateRegistry(qrConfig);
    generateRegistry(mathConfig);
    generateRegistry(conversionConfig);
    generateRegistry(utilityConfig);
    generateRegistry(healthConfig);

    generateToolList();
    break;

  default:
    console.info(`
Usage:
  tsx scripts/cli.ts text
  tsx scripts/cli.ts financial
  tsx scripts/cli.ts developer
  tsx scripts/cli.ts image
  tsx scripts/cli.ts pdf
  tsx scripts/cli.ts qr
  tsx scripts/cli.ts math
  tsx scripts/cli.ts all
`);
}
