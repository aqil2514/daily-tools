"use client";

import { useState } from "react";
import { ToolCard } from "@/components/molecules/card/tool-card";
import { SubHeading } from "@/components/atoms/text/subHeading";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  generateTrapezoidProblem,
  TrapezoidProblem,
} from "../utils/generate-trapezoid-problem";
import { CheckCircle2, XCircle } from "lucide-react";
import { useLocale } from "next-intl";
import { i18nTrapezoidSimulation } from "../i18n/trapezoid-simulation";

export function TrapezoidSimulation() {
  const locale = useLocale();
  const t = i18nTrapezoidSimulation[locale];

  // Range
  const [minValue, setMinValue] = useState(2);
  const [maxValue, setMaxValue] = useState(20);

  // Problem
  const [problem, setProblem] = useState<TrapezoidProblem>(
    generateTrapezoidProblem(minValue, maxValue)
  );

  // Answers
  const [areaAnswer, setAreaAnswer] = useState("");
  const [perimeterAnswer, setPerimeterAnswer] =
    useState("");
  const [checked, setChecked] = useState(false);

  const isAreaCorrect =
    Number(areaAnswer) === problem.correctArea;
  const isPerimeterCorrect =
    Number(perimeterAnswer) ===
    problem.correctPerimeter;

  function checkAnswer() {
    setChecked(true);
  }

  function nextProblem() {
    setProblem(
      generateTrapezoidProblem(minValue, maxValue)
    );
    setAreaAnswer("");
    setPerimeterAnswer("");
    setChecked(false);
  }

  return (
    <ToolCard>
      <div className="space-y-5">
        {/* Header */}
        <div className="flex items-center justify-between">
          <SubHeading>{t.header.title}</SubHeading>
          <Badge variant="secondary">
            {t.header.badge}
          </Badge>
        </div>

        {/* Settings */}
        <div className="rounded-md border bg-muted/30 p-3">
          <p className="mb-2 text-sm font-medium">
            {t.settings.title}
          </p>

          <div className="grid grid-cols-2 gap-3">
            <Input
              type="number"
              min={1}
              placeholder={t.settings.minPlaceholder}
              value={minValue}
              onChange={(e) =>
                setMinValue(Number(e.target.value) || 1)
              }
            />
            <Input
              type="number"
              min={minValue}
              placeholder={t.settings.maxPlaceholder}
              value={maxValue}
              onChange={(e) =>
                setMaxValue(
                  Number(e.target.value) || minValue
                )
              }
            />
          </div>

          <p className="mt-2 text-xs text-muted-foreground">
            {t.settings.helperPrefix}{" "}
            <strong>{minValue}</strong> dan{" "}
            <strong>{maxValue}</strong> cm.
          </p>
        </div>

        {/* Question */}
        <div className="rounded-md border bg-muted/40 p-3 text-sm">
          {t.question.intro}
          <ul className="mt-2 list-disc pl-5">
            <li>
              {t.question.a} ={" "}
              <strong>{problem.a} cm</strong>
            </li>
            <li>
              {t.question.b} ={" "}
              <strong>{problem.b} cm</strong>
            </li>
            <li>
              {t.question.t} ={" "}
              <strong>{problem.t} cm</strong>
            </li>
            <li>
              {t.question.c} ={" "}
              <strong>{problem.c} cm</strong>
            </li>
            <li>
              {t.question.d} ={" "}
              <strong>{problem.d} cm</strong>
            </li>
          </ul>

          <p className="mt-2">{t.question.calculate}</p>
          <ul className="list-disc pl-5">
            <li>{t.question.area}</li>
            <li>{t.question.perimeter}</li>
          </ul>
        </div>

        {/* Inputs */}
        <div className="grid grid-cols-2 gap-3">
          <Input
            placeholder={t.input.areaPlaceholder}
            value={areaAnswer}
            disabled={checked}
            onChange={(e) =>
              setAreaAnswer(e.target.value)
            }
          />
          <Input
            placeholder={t.input.perimeterPlaceholder}
            value={perimeterAnswer}
            disabled={checked}
            onChange={(e) =>
              setPerimeterAnswer(e.target.value)
            }
          />
        </div>

        {/* Feedback */}
        {checked && (
          <div className="grid grid-cols-2 gap-3 text-sm">
            <Feedback
              label={t.question.area}
              ok={isAreaCorrect}
              t={t}
            />
            <Feedback
              label={t.question.perimeter}
              ok={isPerimeterCorrect}
              t={t}
            />
          </div>
        )}

        {/* Explanation */}
        {checked && (
          <div className="rounded-md border bg-muted/20 p-3 text-sm space-y-2">
            <p className="font-medium text-foreground">
              {t.explanation.title}
            </p>

            <p className="text-muted-foreground">
              {t.explanation.known}
              <br />
              a={problem.a}, b={problem.b}, t={problem.t},
              c={problem.c}, d={problem.d}
            </p>

            <ul className="list-disc pl-5 text-muted-foreground space-y-1">
              <li>
                {t.explanation.areaIntro}
                <br />
                <span className="font-medium text-foreground">
                  L = (a + b) × t / 2 = (
                  {problem.a} + {problem.b}) ×{" "}
                  {problem.t} / 2 ={" "}
                  {problem.correctArea} cm²
                </span>
              </li>
              <li>
                {t.explanation.perimeterIntro}
                <br />
                <span className="font-medium text-foreground">
                  K = a + b + c + d ={" "}
                  {problem.correctPerimeter} cm
                </span>
              </li>
            </ul>
          </div>
        )}

        {/* Actions */}
        <div className="flex gap-2">
          <Button onClick={checkAnswer} disabled={checked}>
            {t.actions.check}
          </Button>
          <Button variant="outline" onClick={nextProblem}>
            {t.actions.next}
          </Button>
        </div>
      </div>
    </ToolCard>
  );
}

function Feedback({
  label,
  ok,
  t,
}: {
  label: string;
  ok: boolean;
  t: typeof i18nTrapezoidSimulation[keyof typeof i18nTrapezoidSimulation];
}) {
  return (
    <div className="flex items-center gap-2">
      {ok ? (
        <CheckCircle2 className="h-4 w-4 text-green-600" />
      ) : (
        <XCircle className="h-4 w-4 text-red-600" />
      )}
      <span>
        {label}{" "}
        <strong>
          {ok ? t.feedback.correct : t.feedback.wrong}
        </strong>
      </span>
    </div>
  );
}
