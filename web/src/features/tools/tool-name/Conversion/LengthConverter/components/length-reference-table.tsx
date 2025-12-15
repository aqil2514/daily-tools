"use client";

import { useLocale } from "next-intl";

import { SubHeading } from "@/components/atoms/subHeading";
import { ToolCard } from "@/components/molecules/card/tool-card";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";

import { lengthReferenceTableText } from "../i18n/length-reference-table";

const REFERENCE_DATA = [
  {
    metric: "1 meter (m)",
    imperial: "100 centimeters (cm)",
  },
  {
    metric: "1 kilometer (km)",
    imperial: "1000 meters (m)",
  },
  {
    metric: "1 inch (in)",
    imperial: "2.54 centimeters (cm)",
  },
  {
    metric: "1 foot (ft)",
    imperial: "12 inches (in)",
  },
  {
    metric: "1 mile (mi)",
    imperial: "1.609 kilometers (km)",
  },
];

export function LengthReferenceTable() {
  const locale = useLocale() as "en" | "id";
  const t = lengthReferenceTableText[locale];

  return (
    <ToolCard>
      <SubHeading className="mt-0">
        {t.heading}
      </SubHeading>

      <div className="mt-4 overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>{t.fromColumn}</TableHead>
              <TableHead>{t.toColumn}</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {REFERENCE_DATA.map((row, index) => (
              <TableRow key={index}>
                <TableCell>{row.metric}</TableCell>
                <TableCell>{row.imperial}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </ToolCard>
  );
}
