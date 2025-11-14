import { WorkoutOutlineTable } from "@/components/WorkoutPlan";
import { WorkoutCard } from "@/components/WorkoutCard";

export default function ChestDayPage() {
  const chestWorkouts = [
    {
      name: " Flat BB / DB Bench Press",
      mechanics: "Compound",
      sets: 4,
      reps: "8–10",
      equipment: "90 sec",
      focus: "Overall Chest Mass",
    },
    {
      name: "Incline BB / DB Bench Press",
      mechanics: "Compound",
      sets: 3,
      reps: "10–12",
      equipment: "75 sec",
      focus: "Upper Chest Development",
    },
    {
      name: "Standing Cable Fly",
      mechanics: "Isolation",
      sets: 3,
      reps: "12–15",
      equipment: "60 sec",
      focus: "Inner Chest Stretch",
    },
    {
      name: "Pec Deck",
      mechanics: "Isolation",
      sets: 3,
      reps: "12–15",
      equipment: "60 sec",
      focus: "Inner Chest Stretch",
    },
    {
      name: "Chest Dips",
      mechanics: "Isolation",
      sets: 3,
      reps: "12–15",
      equipment: "60 sec",
      focus: "Inner Chest Stretch",
    },
  ];

  const exercises = [
    {
      name: "Flat Barbell / Dumbbell Bench Press",
      description:
        "A foundational movement for chest strength and size. Builds pressing power and overall upper-body stability.",
      keyPoints: [
        "Retract shoulder blades and keep feet flat.",
        "Lower bar to mid-chest under control.",
        "Avoid flaring elbows too wide.",
        "Drive through chest — not shoulders.",
      ],
      alternatives: [
        "Smith Machine Bench Press",
        "Push-Ups",
        "Flat Machine Press",
      ],
      images: [
        {
          src: "https://gymbuddy.cdn.viveksahu.dev/images/barbell-bench-press.gif",
        },
        {
          src: "https://gymbuddy.cdn.viveksahu.dev/images/barbell-bench-press-real.gif",
        },
        {
          src: "https://gymbuddy.cdn.viveksahu.dev/images/Dumbbell-Flat-Bench-Press.gif",
        },
      ],
    },
    {
      name: "Incline Barbell / Dumbbell Press",
      description:
        "Targets the upper chest fibers and anterior delts with a greater range of motion than the barbell press.",
      keyPoints: [
        "Set bench angle around 30–45°.",
        "Keep dumbbells under control throughout the motion.",
        "Avoid over-arching your lower back.",
      ],
      alternatives: [
        "Incline Smith Machine Press",
        "Machine Incline Press",
        "Decline Push-Ups",
      ],
      images: [
        {
          src: "https://gymbuddy.cdn.viveksahu.dev/images/incline-dumbbell-bench-press.gif",
        },
        {
          src: "https://gymbuddy.cdn.viveksahu.dev/images/incline-barbell-bench-press.gif",
        },
        {
          src: "https://gymbuddy.cdn.viveksahu.dev/images/incline-barbell-bench-press-2.gif",
        },
      ],
    },
    {
      name: "Cable Crossovers",
      description:
        "Excellent finisher for shaping and stretching the chest while maintaining constant tension.",
      keyPoints: [
        "Slight bend in elbows throughout the movement.",
        "Bring hands together in front of your chest, squeeze hard.",
        "Control the negative — don’t let cables snap back.",
      ],
      alternatives: ["Dumbbell Fly", "Pec Deck Machine", "Parallel Bar Dips"],
      images: [
        {
          src: "https://gymbuddy.cdn.viveksahu.dev/images/cable-standing-crossover.gif",
        },
        {
          src: "https://gymbuddy.cdn.viveksahu.dev/images/cable-crossover-2.gif",
        },
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
