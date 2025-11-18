import { WorkoutOutlineTable } from "@/components/WorkoutPlan";
import { WorkoutCard } from "@/components/WorkoutCard";

export default function ShoulderDayPage() {
  const shoulderWorkouts = [
    {
      name: "Machine Overhead Press",
      mechanics: "Compound",
      sets: 3,
      reps: "8–12",
      equipment: "Machine",
      focus: "Stable Overhead Pressing / Front + Side Delt Strength",
    },
    {
      name: "Seated Dumbbell Overhead Press",
      mechanics: "Compound",
      sets: 3,
      reps: "8–12",
      equipment: "Dumbbells",
      focus: "Overall Shoulder Mass & Strength",
    },
    {
      name: "Cable Lateral Raise",
      mechanics: "Isolation",
      sets: 3,
      reps: "10–15",
      equipment: "Cable Machine",
      focus: "Side Delt Width / Constant Tension",
    },
    {
      name: "Reverse Cable Crossover",
      mechanics: "Isolation",
      sets: 3,
      reps: "10–15",
      equipment: "Cable Machine",
      focus: "Rear Delt Development / Shoulder Balance",
    },
  ];

  const exercises = [
    // MACHINE OHP
    {
      name: "Machine Overhead Press",
      description:
        "A stable, safe overhead pressing movement ideal for consistent shoulder overload with reduced core involvement.",
      keyPoints: [
        "Keep elbows slightly in front of the body.",
        "Avoid leaning back.",
        "Control the descent for better delt activation.",
      ],
      alternatives: [
        "Seated Dumbbell Shoulder Press",
        "Standing Barbell OHP",
        "Smith Machine Shoulder Press",
        "Arnold Press",
      ],
      sets: "3 Working Sets + Optional Warmup Sets",
      reps: "8–12 Reps",
      images: [
        { src: "https://gymbuddy.cdn.viveksahu.dev/images/ohp-1.webp" },
        { src: "https://gymbuddy.cdn.viveksahu.dev/images/ohp-2.gif" },
      ],
    },

    // DB OHP
    {
      name: "Seated Dumbbell Overhead Press",
      description:
        "A natural, joint-friendly overhead press that builds all heads of the delts with balanced loading.",
      keyPoints: [
        "Keep wrists stacked under elbows.",
        "Press slightly up and inward.",
        "Avoid arching excessively.",
      ],
      alternatives: [
        "Machine Shoulder Press",
        "Standing Barbell OHP",
        "Arnold Press",
        "Landmine Press",
      ],
      sets: "3 Working Sets",
      reps: "8–12 Reps",
      images: [
        { src: "https://gymbuddy.cdn.viveksahu.dev/images/dbpress-1.gif" },
        { src: "https://gymbuddy.cdn.viveksahu.dev/images/dbpress-2.gif" },
      ],
    },

    // CABLE LATERAL RAISE
    {
      name: "Cable Lateral Raise",
      description:
        "The most effective side-delt isolation exercise, offering constant tension through the full range of motion.",
      keyPoints: [
        "Lead with elbows, not wrists.",
        "Slight forward lean helps side delt targeting.",
        "Stop at shoulder height to avoid trap takeover.",
      ],
      alternatives: [
        "Dumbbell Lateral Raise",
        "Machine Lateral Raise",
        "Lean-Away Cable Raise",
        "Single-Arm Cable Lateral Raise",
      ],
      sets: "3 Working Sets",
      reps: "10–15 Reps",
      images: [
        {
          src: "https://gymbuddy.cdn.viveksahu.dev/images/cablelr-1.gif",
        },
        {
          src: "https://gymbuddy.cdn.viveksahu.dev/images/cablelr-2.webp",
        },
      ],
    },

    // REVERSE CABLE CROSSOVER
    {
      name: "Reverse Cable Crossover",
      description:
        "Top-tier rear delt movement providing a strong contraction and excellent shoulder balance.",
      keyPoints: [
        "Keep elbows slightly bent.",
        "Pull outward, not backward.",
        "Avoid shrugging or using traps.",
      ],
      alternatives: [
        "Reverse Pec Deck",
        "Bent Over Dumbbell Rear Delt Raise",
        "Face Pulls",
        "Cable Y-Raise",
      ],
      sets: "3 Working Sets",
      reps: "10–15 Reps",
      images: [
        {
          src: "https://gymbuddy.cdn.viveksahu.dev/images/reversecable-1.gif",
        },
        {
          src: "https://gymbuddy.cdn.viveksahu.dev/images/reversecable-2.gif",
        },
      ],
    },
  ];

  return (
    <>
      <WorkoutOutlineTable
        title="Shoulder Day — Bro Split Outline"
        workouts={shoulderWorkouts}
        note="Warm up rotator cuff, start with overhead presses, then train side delts, and finish with rear delts for balanced shoulder development."
      />

      <WorkoutCard
        title="Workout Form & Technique Guide"
        subtitle="Visual references and key coaching points for mastering shoulder exercises."
        exercises={exercises}
      />
    </>
  );
}
