"use client";

import { useLocale } from "next-intl";

import { SubHeading } from "@/components/atoms/text/subHeading";
import { ToolCard } from "@/components/molecules/card/tool-card";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";

import { temperatureReferenceTableText } from "../i18n/temperature-reference-table";

const REFERENCE_DATA = [
  { c: 0, f: 32, k: 273.15 },
  { c: 10, f: 50, k: 283.15 },
  { c: 20, f: 68, k: 293.15 },
  { c: 25, f: 77, k: 298.15 },
  { c: 30, f: 86, k: 303.15 },
  { c: 37, f: 98.6, k: 310.15 },
  { c: 100, f: 212, k: 373.15 },
];

export function TemperatureReferenceTable() {
  const locale = useLocale() as "en" | "id";
  const t = temperatureReferenceTableText[locale];

  return (
    <ToolCard>
      <SubHeading className="mt-0">
        {t.heading}
      </SubHeading>

      <div className="mt-4 overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>{t.columns.celsius}</TableHead>
              <TableHead>
                {t.columns.fahrenheit}
              </TableHead>
              <TableHead>{t.columns.kelvin}</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {REFERENCE_DATA.map((row, index) => (
              <TableRow key={index}>
                <TableCell>{row.c}</TableCell>
                <TableCell>{row.f}</TableCell>
                <TableCell>{row.k}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </ToolCard>
  );
}
