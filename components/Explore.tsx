import { SpotlightCard } from "@/components/ui/spotlight-card";

export function ExploreSection() {
  const cards = [
    {
      title: "Bro Split Training",
      category: "Workout Plan",
      image: "/images/bro-split.jpg",
    },
    {
      title: "Push Pull Legs Split",
      category: "Workout Plan",
      image: "/images/ppl.webp",
    },
    {
      title: "Upper Lower Split",
      category: "Workout Plan",
      image: "/images/upperlower.webp",
    },
    {
      title: "BMI Calculator",
      category: "Fitness Tool",
      image: "/images/bmi.jpg",
    },
    {
      title: "Calorie Calculator",
      category: "Nutrition",
      image: "/images/calories.webp",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container">
        <h2 className="text-2xl md:text-3xl font-semibold mb-3 text-center md:text-left">
          Get to know your GymBuddy.
        </h2>
        <p className="text-muted-foreground mb-10 text-center md:text-left max-w-2xl">
          Explore training programs and tools that help you plan smarter, lift
          better, and stay consistent.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 justify-items-center">
          {cards.map((card, index) => (
            <SpotlightCard key={index} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
}
