export interface BMROutput {
  bmr: number; // kcal/day
  tdee: number; // kcal/day

  goals: {
    cutting: number; // tdee - deficit
    maintenance: number; // tdee
    bulking: number; // tdee + surplus
  };
}
