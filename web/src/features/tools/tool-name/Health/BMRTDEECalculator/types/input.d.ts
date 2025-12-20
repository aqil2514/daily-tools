export type Gender = "male" | "female";

export type ActivityLevel =
  | "sedentary"
  | "light"
  | "moderate"
  | "active"
  | "very-active";

export interface BMRInput {
  gender: Gender;
  age: number; // years
  height: number; // cm
  weight: number; // kg
  activityLevel: ActivityLevel;
}
