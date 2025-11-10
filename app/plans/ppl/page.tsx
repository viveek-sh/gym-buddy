import SplitGrid from "@/components/Split";

const categories = [
  {
    title: "Push Day – 1",
    description:
      "Focus on compound push movements like bench press, shoulder press, and triceps extensions.",
    image: "/images/chest.jpg",
    href: "/plans/push-day-1",
  },
  {
    title: "Pull Day – 1",
    description:
      "Train your back and biceps with rows, pull-ups, and curls for balanced upper strength.",
    image: "/images/back.jpg",
    href: "/plans/pull-day-1",
  },
  {
    title: "Leg Day – 1",
    description:
      "Work your quads, hamstrings, and glutes with squats, leg presses, and lunges.",
    image: "/images/leg.jpg",
    href: "/plans/leg-day-1",
  },
  {
    title: "Push Day – 2",
    description:
      "A variation day focusing on incline presses, lateral raises, and triceps dips.",
    image: "/images/chest.jpg",
    href: "/plans/push-day-2",
  },
  {
    title: "Pull Day – 2",
    description:
      "Hit your traps, rear delts, and forearms with targeted pulling and isolation work.",
    image: "/images/back.jpg",
    href: "/plans/pull-day-2",
  },
  {
    title: "Leg Day – 2",
    description:
      "Strengthen your lower body with deadlifts, Bulgarian split squats, and calf raises.",
    image: "/images/leg.jpg",
    href: "/plans/leg-day-2",
  },
];

export default function PPLPage() {
  return (
    <SplitGrid
      title="Push–Pull–Leg Split"
      highlight="Leg"
      description="A structured six-day program alternating between push, pull, and leg days — balancing strength, volume, and recovery."
      categories={categories}
    />
  );
}
