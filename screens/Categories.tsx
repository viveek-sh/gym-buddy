import { CategoryCard } from "@/components/CategoryGrid";
const Splits = [
  {
    name: "Bro Split",
    description:
      "Train one major muscle group each day for focused hypertrophy.",
    duration: "5-6 days",
    focus: "Muscle Isolation",
    level: "Intermediate", // Changed from intensity
    icon: "BicepsFlexed",
    href: "/plans/bro-split",
  },
  {
    name: "Push Pull Legs",
    description:
      "Alternate push, pull, and leg days to balance strength and recovery.",
    duration: "3-6 days",
    focus: "Frequency & Volume",
    level: "", // Changed from intensity
    icon: "Dumbbell",
    href: "/plans/ppl",
  },
  {
    name: "Upper Lower",
    description:
      "Alternate upper and lower sessions for efficiency and balance.",
    duration: "4 days",
    focus: "Strength & Size",
    level: "Intermediate", // Changed from intensity
    icon: "Flame",
    href: "/plans/upperlower",
  },
  {
    name: "Full Body",
    description:
      "Ideal for beginners focusing on compound movements and habit building.",
    duration: "3 days",
    focus: "Foundational Strength",
    level: "Beginner", // Changed from intensity
    icon: "PersonStanding",
    href: "/plans/fullbody",
  },
  {
    name: "Home Workout",
    description:
      "Uses bodyweight or minimal equipment for flexible, at-home training.",
    duration: "3-6 days",
    focus: "Convenience & Consistency",
    level: "All Levels", // Changed from intensity
    icon: "Home",
    href: "/plans/home-workout",
  },
];

export function PlansGrid() {
  return (
    <section>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground">
            Choose a <span className="text-emerald-400">Workout</span> Plan
          </h2>
          <p className="text-muted-foreground mt-2">
            Pick a training style that aligns with your fitness goals and
            schedule.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {Splits.map((mode, i) => (
            <CategoryCard key={i} {...mode} />
          ))}
        </div>
      </div>
    </section>
  );
}
