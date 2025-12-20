"use client";

import { useLocale } from "next-intl";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { SubHeading } from "@/components/atoms/text/subHeading";

import { useBMRTDEE } from "../store/provider";
import { BMRInput as BMRInputType } from "../types/input";
import { bmrInputText } from "../i18n/bmr-input";

export function BMRInput() {
  const locale = useLocale() as "en" | "id";
  const t = bmrInputText[locale];

  const { state, setInput } = useBMRTDEE();
  const input = state.input;

  function updateInput(partial: Partial<BMRInputType>) {
    setInput({
      gender: partial.gender ?? input?.gender ?? "male",
      age: partial.age ?? input?.age ?? 0,
      height: partial.height ?? input?.height ?? 0,
      weight: partial.weight ?? input?.weight ?? 0,
      activityLevel:
        partial.activityLevel ?? input?.activityLevel ?? "sedentary",
    });
  }

  return (
    <div className="space-y-4">
      <SubHeading className="mt-0">{t.heading}</SubHeading>

      <div className="grid gap-4 md:grid-cols-2">
        {/* Gender */}
        <div className="space-y-1">
          <Label>{t.genderLabel}</Label>
          <Select
            value={input?.gender}
            onValueChange={(value) =>
              updateInput({ gender: value as BMRInputType["gender"] })
            }
          >
            <SelectTrigger>
              <SelectValue placeholder={t.genderPlaceholder} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="male">{t.genderMale}</SelectItem>
              <SelectItem value="female">{t.genderFemale}</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Age */}
        <div className="space-y-1">
          <Label>{t.ageLabel}</Label>
          <Input
            type="number"
            min={0}
            placeholder={t.agePlaceholder}
            value={input?.age || ""}
            onChange={(e) => updateInput({ age: Number(e.target.value) || 0 })}
          />
        </div>

        {/* Height */}
        <div className="space-y-1">
          <Label>{t.heightLabel}</Label>
          <Input
            type="number"
            min={0}
            placeholder={t.heightPlaceholder}
            value={input?.height || ""}
            onChange={(e) =>
              updateInput({ height: Number(e.target.value) || 0 })
            }
          />
        </div>

        {/* Weight */}
        <div className="space-y-1">
          <Label>{t.weightLabel}</Label>
          <Input
            type="number"
            min={0}
            placeholder={t.weightPlaceholder}
            value={input?.weight || ""}
            onChange={(e) =>
              updateInput({ weight: Number(e.target.value) || 0 })
            }
          />
        </div>

        {/* Activity */}
        <div className="space-y-1 md:col-span-2">
          <Label>{t.activityLabel}</Label>
          <Select
            value={input?.activityLevel}
            onValueChange={(value) =>
              updateInput({
                activityLevel: value as BMRInputType["activityLevel"],
              })
            }
          >
            <SelectTrigger>
              <SelectValue placeholder={t.activityPlaceholder} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="sedentary">{t.activitySedentary}</SelectItem>
              <SelectItem value="light">{t.activityLight}</SelectItem>
              <SelectItem value="moderate">{t.activityModerate}</SelectItem>
              <SelectItem value="active">{t.activityActive}</SelectItem>
              <SelectItem value="very-active">
                {t.activityVeryActive}
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
}
