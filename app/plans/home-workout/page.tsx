import SplitGrid from "@/components/Split";

const categories = [
  {
    title: "Full Body – Day 1",
    description:
      "Start strong with compound bodyweight movements to activate all major muscle groups — no equipment needed.",
    image: "/images/chest.jpg",
    href: "/plans/home-day-1",
  },
  {
    title: "Upper Focus – Day 2",
    description:
      "Work your chest, shoulders, and arms with push-ups, dips, and core stabilizers to build upper body strength.",
    image: "/images/back.jpg",
    href: "/plans/home-day-2",
  },
  {
    title: "Lower Focus – Day 3",
    description:
      "Target your legs and glutes through squats, lunges, and calf raises for strength and endurance.",
    image: "/images/leg.jpg",
    href: "/plans/home-day-3",
  },
  {
    title: "Core & Cardio – Day 4",
    description:
      "Boost your heart rate and stability with planks, mountain climbers, and light cardio intervals.",
    image: "/images/homeworkout.jpg",
    href: "/plans/home-day-4",
  },
  {
    title: "Full Body Burn – Day 5",
    description:
      "Engage your whole body through HIIT-style sessions to enhance strength and stamina.",
    image: "/images/arms.jpg",
    href: "/plans/home-day-5",
  },
  {
    title: "Stretch & Mobility – Day 6",
    description:
      "Improve flexibility and recovery with guided mobility work and active stretching routines.",
    image: "/images/shoulder.jpg",
    href: "/plans/home-day-6",
  },
];

export default function HomeWorkoutPage() {
  return (
    <SplitGrid
      title="Home Workout Plan"
      highlight="Workout"
      description="A flexible 3 or 6-day program designed for training at home — build strength, endurance, and mobility using minimal or no equipment."
      categories={categories}
    />
  );
}
