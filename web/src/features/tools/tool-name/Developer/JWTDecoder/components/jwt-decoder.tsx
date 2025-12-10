"use client";
import { useState } from "react";
import { JWTInput } from "./jwt-input";
import { JWTOutput } from "./jwt-output";
import { jwtSampleData } from "../data/sample-data";
import { useJWTDecoderFAQ } from "../data/faq";
import { FAQSection } from "@/components/atoms/faq-section";

export function JWTDecoder() {
  const [text, setText] = useState<string>(jwtSampleData["Simple JWT"]);
  const faqItems = useJWTDecoderFAQ();

  return (
    <div>
      <div className="grid lg:grid-cols-2 gap-4">
        <JWTInput setText={setText} text={text} />
        <JWTOutput text={text} />
      </div>

      <FAQSection items={faqItems} />
    </div>
  );
}
