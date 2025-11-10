import { SpotlightCard } from "@/components/ui/spotlight-card";

export function ExploreSection() {
  const cards = [
    {
      title: "Bro Split Training",
      category: "Workout Plan",
      image: "./images/bro-split.jpg",
    },
    {
      title: "Push Pull Legs Split",
      category: "Workout Plan",
      image: "./images/ppl.webp",
    },
    {
      title: "Upper Lower Split",
      category: "Workout Plan",
      image: "./images/upperlower.webp",
    },
    {
      title: "BMI Calculator",
      category: "Fitness Tool",
      image: "./images/bmi.jpg",
    },
    {
      title: "Calorie Calculator",
      category: "Nutrition",
      image: "./images/calories.webp",
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
