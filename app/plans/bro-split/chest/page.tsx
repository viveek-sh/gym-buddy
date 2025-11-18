import { WorkoutOutlineTable } from "@/components/WorkoutPlan";
import { WorkoutCard } from "@/components/WorkoutCard";

export default function ChestDayPage() {
  const chestWorkouts = [
    {
      name: "Machine Chest Press",
      mechanics: "Compound",
      sets: 3,
      reps: "8–12",
      equipment: "Machine",
      focus: "Stable Chest Pressing / Beginner Friendly",
    },
    {
      name: "Flat BB / DB Bench Press",
      mechanics: "Compound",
      sets: 3,
      reps: "8–12",
      equipment: "Free Weights",
      focus: "Overall Chest Mass & Strength",
    },
    {
      name: "Incline DB / BB Press",
      mechanics: "Compound",
      sets: 3,
      reps: "8–12",
      equipment: "Free Weights",
      focus: "Upper Chest Development",
    },
    {
      name: "Cable Crossovers",
      mechanics: "Isolation",
      sets: 3,
      reps: "10–15",
      equipment: "Cable Machine",
      focus: "Inner Chest / Constant Tension",
    },
    {
      name: "Chest Dips",
      mechanics: "Compound (Bodyweight)",
      sets: 3,
      reps: "8–12",
      equipment: "Bodyweight / Dip Bars",
      focus: "Lower Chest Emphasis",
    },
  ];

  const exercises = [
    {
      name: "Machine Chest Press",
      description:
        "A stable chest-pressing movement ideal for beginners or as a primary compound lift when available. Helps isolate chest with minimal shoulder involvement.",
      keyPoints: [
        "Keep back flat against the pad.",
        "Push through the chest rather than shoulders.",
        "Control the motion, especially on the way back.",
      ],
      alternatives: [
        "Flat Barbell Bench Press",
        "Flat Dumbbell Bench Press",
        "Smith Machine Bench Press",
      ],
      sets: "3 Working Sets + 1–3 Warmup Sets",
      reps: "8–12 Reps",
      images: [
        {
          src: "https://gymbuddy.cdn.viveksahu.dev/images/Machine-Press-2.gif",
        },
        {
          src: "https://gymbuddy.cdn.viveksahu.dev/images/Machine-Press-3.gif",
        },
      ],
    },

    {
      name: "Flat Barbell / Dumbbell Bench Press",
      description:
        "Primary flat pressing movement to build overall chest mass and pressing strength.",
      keyPoints: [
        "Retract shoulder blades and keep feet planted.",
        "Lower weight under control to mid-chest.",
        "Avoid excessive elbow flare.",
        "Drive through the chest on each rep.",
      ],
      alternatives: [
        "Machine Chest Press",
        "Smith Machine Bench Press",
        "Push-Ups",
      ],
      sets: "3 Working Sets + 0–2 Warmup Sets (if Machine Press not done)",
      reps: "8–12 Reps",
      images: [
        {
          src: "https://gymbuddy.cdn.viveksahu.dev/images/flat-bench-2.gif",
        },
        {
          src: "https://gymbuddy.cdn.viveksahu.dev/images/flat-bench-3.gif",
        },
      ],
    },

    {
      name: "Incline Dumbbell / Barbell Press",
      description:
        "Targets the upper chest and improves the overall shelf and fullness of the upper pecs.",
      keyPoints: [
        "Keep bench around 30–45°.",
        "Control the descent fully.",
        "Do not overarch the lower back.",
      ],
      alternatives: [
        "Incline Smith Machine Press",
        "Machine Incline Press",
        "Decline Push-Ups",
      ],
      sets: "3 Working Sets",
      reps: "8–12 Reps",
      images: [
        {
          src: "https://gymbuddy.cdn.viveksahu.dev/images/incline-bench-2.gif",
        },
        {
          src: "https://gymbuddy.cdn.viveksahu.dev/images/incline-bench-3.gif",
        },
      ],
    },

    {
      name: "Cable Crossovers",
      description:
        "Isolation exercise to stretch the pecs and add finishing definition with constant tension.",
      keyPoints: [
        "Maintain a slight bend in elbows.",
        "Squeeze hard at the center.",
        "Control the eccentric — avoid letting cables snap back.",
      ],
      alternatives: ["Dumbbell Fly", "Pec Deck Machine", "Seated Cable Fly"],
      sets: "3 Working Sets",
      reps: "10–15 Reps",
      images: [
        {
          src: "https://gymbuddy.cdn.viveksahu.dev/images/cable-crossover-1.gif",
        },
        {
          src: "https://gymbuddy.cdn.viveksahu.dev/images/cable-crossover-2.gif",
        },
      ],
    },

    {
      name: "Chest Dips",
      description:
        "A bodyweight compound movement emphasizing the lower and outer chest when leaned forward.",
      keyPoints: [
        "Lean slightly forward to activate chest over triceps.",
        "Go deep for a good stretch.",
        "Keep shoulders depressed and stable.",
      ],
      alternatives: ["Weighted Dips", "Decline Bench Press", "Machine Dips"],
      sets: "3 Working Sets",
      reps: "8–12 Reps",
      images: [
        { src: "https://gymbuddy.cdn.viveksahu.dev/images/dips-2.gif" },
        { src: "https://gymbuddy.cdn.viveksahu.dev/images/dips-3.avif" },
      ],
    },
  ];

  return (
    <>
      <WorkoutOutlineTable
        title="Chest Day — Bro Split Outline"
        workouts={chestWorkouts}
        note="Warm up your Shoulders well, start with compound movements, finish with isolation."
      />

      <WorkoutCard
        title="Workout Form & Technique Guide"
        subtitle="Visual references and key points for mastering chest exercises."
        exercises={exercises}
      />
    </>
  );
}
