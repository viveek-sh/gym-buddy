"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Brain, BarChart3, Dumbbell, ShieldCheck } from "lucide-react";

export function FeatureSection() {
  const features = [
    {
      title: "Smart Workout Suggestions",
      description:
        "Get personalized training recommendations powered by AI to optimize your strength and recovery balance.",
      icon: "ai",
    },
    {
      title: "Progress Tracking & Analytics",
      description:
        "Track your improvements across sessions with detailed charts and insights that help you stay consistent.",
      icon: "analytics",
    },
    {
      title: "Adaptive Routines",
      description:
        "Your plan adjusts as you improve—ensuring your training always stays challenging yet achievable.",
      icon: "workout",
    },
    {
      title: "Privacy & Secure Data",
      description:
        "All your workout data and stats are stored securely with end-to-end encryption and privacy by design.",
      icon: "security",
    },
  ] as const;

  const iconMap = {
    ai: Brain,
    analytics: BarChart3,
    workout: Dumbbell,
    security: ShieldCheck,
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
