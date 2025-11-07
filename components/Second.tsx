"use client";
import MagicCard from "./ui/magic-card";
import MagicBadge from "./ui/magic-badge";
import { Dumbbell, BarChart3, Share2 } from "lucide-react";
export default function ProcessSection() {
  // 🧩 Local data (instead of importing from utils)
  const Features = [
    {
      title: "Detailed Exercise Library",
      icon: Dumbbell, // place these under /public/images/
      description:
        "Explore a growing library of exercises with GIFs and form guides. Learn proper technique, muscle engagement, and variations for every level.",
    },
    {
      title: "Fitness Calculators & Analytics",
      icon: BarChart3,
      description:
        "Track your BMI, calories, and macro intake effortlessly. Visualize trends and metrics that adapt as your fitness improves.",
    },
    {
      title: "Optimize & Share",
      icon: Share2,
      description:
        "Refine your workouts, analyze improvements, and share your results with your gym community or trainer.",
    },
  ];

  return (
    <section className="w-full pt-20 pb-10">
      {/* 🧠 Header */}
      <div className="flex flex-col items-center lg:items-center justify-center w-full py-8 max-w-xl mx-auto">
        <MagicBadge title="Core Features" />
        <h2 className="text-center lg:text-center text-3xl md:text-5xl !leading-[1.1] font-medium font-heading text-foreground mt-6">
          Everything You Need to Train Effectively
        </h2>
        <p className="mt-4 text-center lg:text-center text-lg text-muted-foreground max-w-lg">
          Powerful features designed to keep you motivated and crushing your
          fitness goals.
        </p>
      </div>

      {/**/}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full py-8 gap-4 md:gap-8">
        {Features.map((feature, id) => (
          <MagicCard className="group md:py-8">
            <div
              key={id}
              className="flex flex-col items-start justify-center w-full"
            >
              <feature.icon
                strokeWidth={1.5}
                className="w-10 h-10 text-foreground"
              />
              <div className="flex flex-col relative items-start">
                <h3 className="text-base mt-6 font-medium text-foreground">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            </div>
          </MagicCard>
        ))}
      </div>
    </section>
  );
}
