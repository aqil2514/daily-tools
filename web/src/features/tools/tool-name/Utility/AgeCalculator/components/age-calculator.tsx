"use client";

import { useState } from "react";
import { calculateAge } from "../utils/calculateAge";
import { calculateNextBirthday } from "../utils/calculateNextBirthday";
import { calculateTotalDaysAlive } from "../utils/calculateTotalDaysAlive";

import { AgeInput } from "./age-input";
import { AgeOutput } from "./age-output";
import { NextBirthdayInfo } from "./next-birthday-info";
import { TotalDaysAlive } from "./total-days-alive";

export function AgeCalculator() {
  const [birthDate, setBirthDate] = useState("");

  const ageResult = calculateAge(birthDate);
  const nextBirthday = calculateNextBirthday(birthDate);
  const totalDaysAlive = calculateTotalDaysAlive(birthDate);

  return (
    <div className="space-y-8">
      {/* INPUT */}
      <AgeInput
        value={birthDate}
        onChange={setBirthDate}
      />

      {/* MAIN RESULT */}
      <AgeOutput result={ageResult} />

      {/* SECONDARY INFO */}
      <div className="grid gap-4 sm:grid-cols-2">
        <NextBirthdayInfo data={nextBirthday} />
        <TotalDaysAlive days={totalDaysAlive} />
      </div>
    </div>
  );
}
