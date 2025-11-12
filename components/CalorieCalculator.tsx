"use client";

import { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Flame } from "lucide-react";

export function CalorieCalculator() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("male");
  const [activity, setActivity] = useState("1.2");
  const [goal, setGoal] = useState("maintain");
  const [calories, setCalories] = useState<number | null>(null);

  const handleCalculate = () => {
    if (!weight || !height || !age) return;

    const w = parseFloat(weight);
    const h = parseFloat(height);
    const a = parseFloat(age);

    // Mifflin-St Jeor BMR formula
    let bmr =
      gender === "male"
        ? 10 * w + 6.25 * h - 5 * a + 5
        : 10 * w + 6.25 * h - 5 * a - 161;

    let tdee = bmr * parseFloat(activity);

    // Adjust based on goal
    if (goal === "lose") tdee *= 0.8; // -20%
    if (goal === "gain") tdee *= 1.15; // +15%

    setCalories(tdee);
  };

  return (
    <Card className="border border-border/50 bg-card/40 backdrop-blur-sm hover:border-emerald-400/40 transition-all">
      <CardHeader className="flex items-center gap-2">
        <Flame className="w-6 h-6 text-emerald-400" />
        <CardTitle className="text-xl font-semibold text-foreground">
          Calorie Calculator
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <input
            type="number"
            placeholder="Weight (kg)"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            className="rounded-lg border border-border bg-background/60 p-3 text-sm text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-emerald-500/40"
          />
          <input
            type="number"
            placeholder="Height (cm)"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            className="rounded-lg border border-border bg-background/60 p-3 text-sm text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-emerald-500/40"
          />
          <input
            type="number"
            placeholder="Age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className="rounded-lg border border-border bg-background/60 p-3 text-sm text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-emerald-500/40"
          />
          <select
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            className="rounded-lg border border-border bg-background/60 p-3 text-sm text-foreground focus:ring-2 focus:ring-emerald-500/40"
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>

        <div>
          <label className="text-sm text-muted-foreground block mb-2 text-left">
            Activity Level
          </label>
          <select
            value={activity}
            onChange={(e) => setActivity(e.target.value)}
            className="w-full rounded-lg border border-border bg-background/60 p-3 text-sm text-foreground focus:ring-2 focus:ring-emerald-500/40"
          >
            <option value="1.2">Sedentary (little to no exercise)</option>
            <option value="1.375">Lightly active (1–3 days/week)</option>
            <option value="1.55">Moderately active (3–5 days/week)</option>
            <option value="1.725">Very active (6–7 days/week)</option>
            <option value="1.9">Extra active (physical job or athlete)</option>
          </select>
        </div>

        <div>
          <label className="text-sm text-muted-foreground block mb-2 text-left">
            Fitness Goal
          </label>
          <select
            value={goal}
            onChange={(e) => setGoal(e.target.value)}
            className="w-full rounded-lg border border-border bg-background/60 p-3 text-sm text-foreground focus:ring-2 focus:ring-emerald-500/40"
          >
            <option value="maintain">Maintain weight</option>
            <option value="lose">Lose weight</option>
            <option value="gain">Gain weight</option>
          </select>
        </div>

        <button
          onClick={handleCalculate}
          className="w-full rounded-lg bg-emerald-500 text-white font-medium py-2 hover:bg-emerald-400 transition-all"
        >
          Calculate Calories
        </button>

        {calories && (
          <div className="mt-4 text-center">
            <p className="text-foreground font-semibold text-lg">
              Estimated Calories: {Math.round(calories)} kcal/day
            </p>
            <p className="text-sm text-muted-foreground">
              To{" "}
              {goal === "lose"
                ? "lose weight"
                : goal === "gain"
                ? "gain weight"
                : "maintain"}{" "}
              — eat approximately this much daily.
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
