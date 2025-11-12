"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  Dumbbell,
  CalendarCheck2,
  Calculator,
  MonitorSmartphone,
} from "lucide-react";

export function FeatureSection() {
  const features = [
    {
      title: "Structured Workout Splits",
      description:
        "Access popular training styles like Bro Split, Push–Pull–Legs, and Upper–Lower — organized for effective progress and recovery.",
      icon: "Dumbbell",
    },
    {
      title: "Day-Wise Exercise Plans",
      description:
        "Each workout includes exercises, sets, reps, rest times, and form notes — all displayed in a clean table layout.",
      icon: "Calendar",
    },
    {
      title: "Fitness Calculators",
      description:
        "Built-in BMI and calorie calculators help you monitor your stats and set realistic goals.",
      icon: "Calculator",
    },
    {
      title: "Clean & Minimal Interface",
      description:
        "A dark, modern UI built with Next.js and ShadCN UI — functional, aesthetic, and distraction-free.",
      icon: "ui",
    },
  ] as const;

  const iconMap = {
    Dumbbell: Dumbbell,
    Calendar: CalendarCheck2,
    Calculator: Calculator,
    ui: MonitorSmartphone,
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground">
            What Makes <span className="text-emerald-400">Our Platform</span>{" "}
            Special
          </h2>
          <p className="text-muted-foreground mt-2">
            Built to keep you motivated, consistent, and stronger every week.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, i) => {
            const Icon = iconMap[feature.icon];
            return (
              <Card
                key={i}
                className="group relative overflow-hidden rounded-2xl border border-zinc-800 bg-gradient-to-br from-zinc-900 to-zinc-950 
                           transition-all duration-500 hover:-translate-y-1 hover:border-emerald-400/40"
              >
                {/* Glow background */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.08),transparent)] opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none" />

                <CardContent className="relative p-6 text-white space-y-4 z-10">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-xl bg-emerald-500/20">
                      <Icon className="w-6 h-6 text-emerald-400" />
                    </div>
                    <h3 className="text-xl font-semibold">{feature.title}</h3>
                  </div>

                  <p className="text-sm text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
