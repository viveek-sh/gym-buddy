import { SpotlightCard } from "@/components/ui/spotlight-card";

export function ExploreSection() {
  const cards = [
    {
      title: "Bro Split Training",
      category: "Workout Plan",
      image: "./images/bro-split.jpg",
      href: "/plans/bro-split",
    },
    {
      title: "Push Pull Legs Split",
      category: "Workout Plan",
      image: "./images/ppl.webp",
      href: "/plans/ppl",
    },
    {
      title: "Upper Lower Split",
      category: "Workout Plan",
      image: "./images/upperlower.webp",
      href: "/plans/upperlower",
    },
    {
      title: "BMI Calculator",
      category: "Fitness Calculator",
      image: "./images/bmi.jpg",
      href: "/calculators",
    },
    {
      title: "Calorie Calculator",
      category: "Fitness Calculator",
      image: "./images/calories.webp",
      href: "/calculators#calorie",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground">
            Your Complete Fitness{" "}
            <span className="text-emerald-400">Fitness</span> Toolkit
          </h2>
          <p className="text-muted-foreground mt-2">
            From structured workout plans to smart calculators, discover tools
            designed to simplify your fitness journey and enhance performance.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 justify-items-center">
          {cards.map((card, index) => (
            <SpotlightCard key={index} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
}
