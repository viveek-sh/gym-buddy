"use client";

import { BMICalculator } from "@/components/BMICalculator";
import { CalorieCalculator } from "@/components/CalorieCalculator";
import { Calculator } from "lucide-react";

export default function FitnessCalculatorPage() {
  return (
    <div className="container max-w-5xl mx-auto pt-5 pb-15 px-6">
      <div className="text-center mb-12">
        <Calculator className="w-10 h-10 text-emerald-400 mx-auto mb-3" />
        <h1 className="text-5xl font-semibold tracking-tight text-foreground mb-4">
          Fitness <span className="text-emerald-400">Calculator</span>
        </h1>
        <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Calculate your{" "}
          <span className="text-foreground">Body Mass Index (BMI)</span> and
          estimate your{" "}
          <span className="text-foreground">daily calorie intake</span> for your
          fitness goals.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <BMICalculator />
        <div className="pt-10  md:pt-0 scroll-mt-24" id="calorie">
          <CalorieCalculator />
        </div>
      </div>
    </div>
  );
}
