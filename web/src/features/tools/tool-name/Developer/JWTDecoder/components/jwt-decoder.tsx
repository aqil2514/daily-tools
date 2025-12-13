"use client";
import { useState } from "react";
import { JWTInput } from "./jwt-input";
import { JWTOutput } from "./jwt-output";
import { jwtSampleData } from "../data/sample-data";

export function JWTDecoder() {
  const [text, setText] = useState<string>(jwtSampleData["Simple JWT"]);

  return (
    <div className="grid lg:grid-cols-2 gap-4">
      <JWTInput setText={setText} text={text} />
      <JWTOutput text={text} />
    </div>
  );
}
