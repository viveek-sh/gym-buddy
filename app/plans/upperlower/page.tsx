import SplitGrid from "@/components/Split";

const categories = [
  {
    title: "Upper Day – 1",
    description:
      "Train your upper body with compound lifts like bench press, rows, and overhead press for overall strength.",
    image: "/images/chest.jpg",
    href: "/plans/upper-day-1",
  },
  {
    title: "Lower Day – 1",
    description:
      "Focus on lower-body power through squats, lunges, and Romanian deadlifts to build strength and balance.",
    image: "/images/back.jpg",
    href: "/plans/lower-day-1",
  },
  {
    title: "Upper Day – 2",
    description:
      "Target your upper body from new angles with incline presses, lateral raises, and arm isolation work.",
    image: "/images/leg.jpg",
    href: "/plans/upper-day-2",
  },
  {
    title: "Lower Day – 2",
    description:
      "Build stability and endurance with leg presses, Bulgarian split squats, and calf raises.",
    image: "/images/arms.jpg",
    href: "/plans/lower-day-2",
  },
];

export default function UpperLowerSplitPage() {
  return (
    <SplitGrid
      title="Upper–Lower Split"
      highlight="Lower"
      description="A four-day routine alternating between upper and lower body workouts — ideal for balanced muscle growth and optimal recovery."
      categories={categories}
    />
  );
}
