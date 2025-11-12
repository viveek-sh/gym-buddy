"use client";

import { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Activity } from "lucide-react";

export function BMICalculator() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [weightUnit, setWeightUnit] = useState("kg");
  const [heightUnit, setHeightUnit] = useState("cm");
  const [bmi, setBmi] = useState<number | null>(null);
  const [bmiStatus, setBmiStatus] = useState("");

  const handleBMICalc = () => {
    if (!weight || !height) return;

    let weightKg = parseFloat(weight);
    let heightMeters = 0;

    // Convert weight
    if (weightUnit === "lbs") weightKg *= 0.453592;

    // Convert height
    if (heightUnit === "cm") heightMeters = parseFloat(height) / 100;
    else {
      // convert feet to meters (format 5'9 or 5'10)
      const [feet, inches = 0] = height.split("'").map(parseFloat);
      heightMeters = feet * 0.3048 + (inches || 0) * 0.0254;
    }

    const bmiValue = weightKg / (heightMeters * heightMeters);
    setBmi(bmiValue);

    if (bmiValue < 18.5) setBmiStatus("Underweight");
    else if (bmiValue < 24.9) setBmiStatus("Normal");
    else if (bmiValue < 29.9) setBmiStatus("Overweight");
    else setBmiStatus("Obese");
  };

  // Calulate Progress on Bar
  const bmiPosition = bmi ? Math.min((bmi / 40) * 100, 100) : 0;

  const getBarColor = () => {
    if (!bmi) return "bg-muted";
    if (bmi < 18.5) return "bg-blue-400";
    if (bmi < 24.9) return "bg-emerald-400";
    if (bmi < 29.9) return "bg-yellow-400";
    return "bg-red-400";
  };

  return (
    <Card className="border border-border/50 bg-card/40 backdrop-blur-sm hover:border-emerald-400/40 transition-all">
      <CardHeader className="flex items-center gap-2">
        <Activity className="w-6 h-6 text-emerald-400" />
        <CardTitle className="text-xl font-semibold text-foreground">
          BMI Calculator
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Inputs */}
        <div className="flex flex-col gap-4">
          <div className="grid grid-cols-[2fr,1fr] gap-2">
            <input
              type="number"
              placeholder={`Weight (${weightUnit})`}
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              className="rounded-lg border border-border bg-background/60 p-3 text-sm text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-emerald-500/40"
            />
            <select
              value={weightUnit}
              onChange={(e) => setWeightUnit(e.target.value)}
              className="rounded-lg border border-border bg-background/60 p-3 text-sm text-foreground focus:ring-2 focus:ring-emerald-500/40"
            >
              <option value="kg">kg</option>
              <option value="lbs">lbs</option>
            </select>
          </div>

          <div className="grid grid-cols-[2fr,1fr] gap-2">
            <input
              type="text"
              placeholder={
                heightUnit === "cm" ? "Height (cm)" : "Height (e.g. 5'9)"
              }
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              className="rounded-lg border border-border bg-background/60 p-3 text-sm text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-emerald-500/40"
            />
            <select
              value={heightUnit}
              onChange={(e) => setHeightUnit(e.target.value)}
              className="rounded-lg border border-border bg-background/60 p-3 text-sm text-foreground focus:ring-2 focus:ring-emerald-500/40"
            >
              <option value="cm">cm</option>
              <option value="ft">ft</option>
            </select>
          </div>
        </div>

        <button
          onClick={handleBMICalc}
          className="w-full rounded-lg bg-emerald-500 text-white font-medium py-2 hover:bg-emerald-400 transition-all"
        >
          Calculate BMI
        </button>

        {bmi && (
          <div className="mt-6 space-y-3">
            <p className="text-center text-foreground font-semibold text-lg">
              Your BMI: {bmi.toFixed(1)}
            </p>

            <div className="relative h-3 w-full rounded-full bg-zinc-800 overflow-hidden">
              <div
                className={`absolute top-0 left-0 h-full ${getBarColor()} transition-all`}
                style={{ width: `${bmiPosition}%` }}
              ></div>
            </div>

            <div className="flex justify-between text-xs text-muted-foreground mt-1">
              <span>15</span>
              <span>18.5</span>
              <span>25</span>
              <span>30</span>
              <span>40+</span>
            </div>

            <p className="text-sm text-center mt-2 text-muted-foreground">
              Status:{" "}
              <span
                className={`font-medium ${
                  bmiStatus === "Normal"
                    ? "text-emerald-400"
                    : bmiStatus === "Underweight"
                    ? "text-blue-400"
                    : bmiStatus === "Overweight"
                    ? "text-yellow-400"
                    : "text-red-400"
                }`}
              >
                {bmiStatus}
              </span>
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
