import * as XLSX from "xlsx";

type ExcelCellValue = string | number | boolean | null | undefined | Date;

export function useExcel() {
  const exportToExcel = <T extends Record<string, ExcelCellValue>>(
    data: T[],
    fileName: string
  ) => {
    const worksheet = XLSX.utils.json_to_sheet(data);

    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet 1");

    XLSX.writeFile(workbook, `${fileName}.xlsx`);
  };

  return {
    exportToExcel,
  };
}
