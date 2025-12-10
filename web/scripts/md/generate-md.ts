interface ObjData {
  [x: string]: {
    pathFile: string;
    key: string;
    titleEn: string | null;
    titleId: string | null;
  }[];
}

interface GenerateMdOptions {
  header: string;
  data: ObjData[];
}

export function generateMd({ header, data }: GenerateMdOptions) {
  let md = `# ${header}\n\n`;

  for (const obj of data) {
    const pathFile = Object.keys(obj)[0];
    const tools = obj[pathFile];

    md += `===== ${pathFile} =====\n`;

    tools.forEach((tool, index) => {
      const number = String(index + 1).padStart(2, "0");
      const titleEn = tool.titleEn ?? "";
      const titleId = tool.titleId ?? "";

      md += `${number}. ${titleEn} (${titleId})\n`;
    });

    md += `\n`;
  }

  // FOOTER OTOMATIS
  md += `---\n`;
  md += `> ⚠️ **Catatan:** File ini dihasilkan secara otomatis oleh script generator.\n`;
  md += `> Jangan diedit manual karena setiap perubahan akan ditimpa.\n`;

  return md;
}