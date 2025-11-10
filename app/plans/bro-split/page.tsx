import SplitGrid from "@/components/Split";

const categories = [
  {
    title: "Chest Day",
    description:
      "Target your chest with compound presses and isolation exercises for strength and fullness.",
    image: "/images/chest.jpg",
    href: "/plans/chest-day",
  },
  {
    title: "Back Day",
    description:
      "Develop a strong and wide back through rows, pull-ups, and deadlift variations.",
    image: "/images/back.jpg",
    href: "/plans/back-day",
  },
  {
    title: "Shoulder Day",
    description:
      "Build capped delts with overhead presses, lateral raises, and rear delt work.",
    image: "/images/shoulder.jpg",
    href: "/plans/shoulder-day",
  },
  {
    title: "Arms Day",
    description:
      "Isolate your biceps and triceps with focused curls, extensions, and pump-inducing supersets.",
    image: "/images/arms.jpg",
    href: "/plans/arms-day",
  },
  {
    title: "Leg Day",
    description:
      "Hit quads, hamstrings, and glutes with squats, lunges, and heavy compound movements.",
    image: "/images/leg.jpg",
    href: "/plans/leg-day",
  },
  {
    title: "Core & Cardio",
    description:
      "End your week with light cardio and core work to improve stability and endurance.",
    image: "/images/homeworkout.jpg",
    href: "/plans/core-cardio",
  },
];

export default function BroSplitPage() {
  return (
    <SplitGrid
      title="Bro Split"
      highlight="Split"
      description="A six-day routine designed to isolate each major muscle group — maximizing growth, balance, and recovery."
      categories={categories}
    />
  );
}
