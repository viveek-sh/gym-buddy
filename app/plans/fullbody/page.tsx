import SplitGrid from "@/components/Split";
const categories = [
  {
    title: "Upper Day – 1",
    description:
      "Compound-focused upper session emphasizing chest, shoulders, and back strength.",
    image: "/images/chest.jpg",
    href: "/plans/upper-day-1",
  },
  {
    title: "Lower Day – 1",
    description:
      "Hit your legs hard with squats, lunges, and hip hinges to build foundational power.",
    image: "/images/leg.jpg",
    href: "/plans/lower-day-1",
  },
  {
    title: "Full Upper–Lower Hybrid",
    description:
      "A balanced total-body workout mixing compound lifts and accessory movements for recovery and growth.",
    image: "/images/back.jpg",
    href: "/plans/upper-lower-hybrid",
  },
];

export default function UpperLower3DaySplitPage() {
  return (
    <SplitGrid
      title="Upper–Lower Split"
      highlight="Lower"
      description="A structured three-day routine alternating between upper, lower, and full-body sessions — ideal for busy lifters seeking balanced strength and recovery."
      categories={categories}
    />
  );
}
