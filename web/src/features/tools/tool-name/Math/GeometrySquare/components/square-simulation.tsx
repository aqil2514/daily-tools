"use client";

import { useState } from "react";
import { ToolCard } from "@/components/molecules/card/tool-card";
import { SubHeading } from "@/components/atoms/subHeading";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  generateSquareProblem,
  SquareProblem,
} from "../utils/generate-square-problem";
import { CheckCircle2, XCircle } from "lucide-react";
import { useLocale } from "next-intl";
import { i18nSquareSimulation } from "../i18n/square-simulation";

export function SquareSimulation() {
  const locale = useLocale();
  const t = i18nSquareSimulation[locale];

  const [minSide, setMinSide] = useState(2);
  const [maxSide, setMaxSide] = useState(20);

  const [problem, setProblem] = useState<SquareProblem>(
    generateSquareProblem(minSide, maxSide)
  );

  const [areaAnswer, setAreaAnswer] = useState("");
  const [perimeterAnswer, setPerimeterAnswer] = useState("");
  const [checked, setChecked] = useState(false);

  const isAreaCorrect = Number(areaAnswer) === problem.correctArea;
  const isPerimeterCorrect =
    Number(perimeterAnswer) === problem.correctPerimeter;

  function checkAnswer() {
    setChecked(true);
  }

  function nextProblem() {
    setProblem(generateSquareProblem(minSide, maxSide));
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
          <Badge variant="secondary">{t.header.badge}</Badge>
        </div>

        {/* Range Settings */}
        <div className="rounded-md border bg-muted/30 p-3">
          <p className="mb-2 text-sm font-medium">{t.settings.title}</p>

          <div className="grid grid-cols-2 gap-3">
            <Input
              type="number"
              min={1}
              placeholder={t.settings.minPlaceholder}
              value={minSide}
              onChange={(e) => setMinSide(Number(e.target.value) || 1)}
            />

            <Input
              type="number"
              min={minSide}
              placeholder={t.settings.maxPlaceholder}
              value={maxSide}
              onChange={(e) => setMaxSide(Number(e.target.value) || minSide)}
            />
          </div>

          <p className="mt-2 text-xs text-muted-foreground">
            {t.settings.helperPrefix} <strong>{minSide}</strong> dan{" "}
            <strong>{maxSide}</strong> cm.
          </p>
        </div>

        {/* Question */}
        <div className="rounded-md border bg-muted/40 p-3 text-sm">
          {t.question.prefix}{" "}
          <span className="font-semibold text-foreground">
            {problem.side} cm
          </span>
          , {t.question.calculate}
          <ul className="mt-2 list-disc pl-5">
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
            onChange={(e) => setAreaAnswer(e.target.value)}
          />

          <Input
            placeholder={t.input.perimeterPlaceholder}
            value={perimeterAnswer}
            disabled={checked}
            onChange={(e) => setPerimeterAnswer(e.target.value)}
          />
        </div>

        {/* Feedback */}
        {checked && (
          <div className="grid grid-cols-2 gap-3 text-sm">
            <div className="flex items-center gap-2">
              {isAreaCorrect ? (
                <CheckCircle2 className="h-4 w-4 text-green-600" />
              ) : (
                <XCircle className="h-4 w-4 text-red-600" />
              )}
              <span>
                {t.question.area}{" "}
                <strong>
                  {isAreaCorrect ? t.feedback.correct : t.feedback.wrong}
                </strong>
              </span>
            </div>

            <div className="flex items-center gap-2">
              {isPerimeterCorrect ? (
                <CheckCircle2 className="h-4 w-4 text-green-600" />
              ) : (
                <XCircle className="h-4 w-4 text-red-600" />
              )}
              <span>
                {t.question.perimeter}{" "}
                <strong>
                  {isPerimeterCorrect ? t.feedback.correct : t.feedback.wrong}
                </strong>
              </span>
            </div>
          </div>
        )}

        {/* Short Explanation */}
        {checked && (
          <div className="rounded-md border bg-muted/20 p-3 text-sm space-y-2">
            <p className="font-medium text-foreground">{t.explanation.title}</p>

            <p className="text-muted-foreground">
              {t.explanation.knownPrefix}{" "}
              <span className="font-medium text-foreground">
                {problem.side} cm
              </span>
              .
            </p>

            <ul className="list-disc pl-5 text-muted-foreground space-y-1">
              <li>
                {t.explanation.areaIntro}
                <br />
                <span className="font-medium text-foreground">
                  L = {problem.side} × {problem.side} = {problem.correctArea}{" "}
                  cm²
                </span>
              </li>

              <li>
                {t.explanation.perimeterIntro}
                <br />
                <span className="font-medium text-foreground">
                  K = 4 × {problem.side} = {problem.correctPerimeter} cm
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
