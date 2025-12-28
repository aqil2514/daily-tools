"use client";
import { TextInputCard } from "@/components/molecules/tools-input-card/text-input-card";
import { TextOutputCard } from "@/components/molecules/tools-output-card/text-output-card";
import { useMemo, useState } from "react";
import { csvToJson } from "../utils/csv-to-json";
import { toast } from "sonner";
import { CsvDelimiterSelect } from "./csv-delimiter";
import { SampleDataComponent } from "@/components/organisms/sample-data-section";
import { csvSampleData } from "../samples/csv-samples";

export function CSVToJson() {
  const [text, setText] = useState<string>("");
  const [delimiter, setDelimiter] = useState<string | undefined>();

  const output = useMemo(() => {
    if (!text) return "";
    const result = csvToJson(text, { delimiter });
    if (!result.success) return toast(result.error);
    else {
      return JSON.stringify(result.data, null, 2);
    }
  }, [text, delimiter]);

  return (
    <div>
      <SampleDataComponent onSelected={setText} sampleData={csvSampleData} />
      <div className="grid lg:grid-cols-2 gap-4">
        <TextInputCard
          onChange={setText}
          title="Input"
          value={text}
          accept={[".csv"]}
        >
          <CsvDelimiterSelect value={delimiter} onChange={setDelimiter} />
        </TextInputCard>

        <TextOutputCard
          title="Output"
          value={String(output)}
          download={{
            filename: "CSV to JSON - Flowtooly",
            mimeType: "application/json",
          }}
        />
      </div>
    </div>
  );
}
