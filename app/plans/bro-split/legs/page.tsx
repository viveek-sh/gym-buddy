import { WorkoutOutlineTable } from "@/components/WorkoutPlan";
import { WorkoutCard } from "@/components/WorkoutCard";

export default function LegsDayPage() {
  const legWorkouts = [
    {
      name: "Barbell Back Squat",
      mechanics: "Compound",
      sets: 3,
      reps: "6–10",
      equipment: "Barbell",
      focus: "Overall quad, glute & core strength",
    },
    {
      name: "Goblet Squat (Beginner Alternative)",
      mechanics: "Compound",
      sets: 3,
      reps: "10–15",
      equipment: "Dumbbell / Kettlebell",
      focus: "Beginner-friendly squat pattern",
    },
    {
      name: "Hack Squat / Smith Machine Squat",
      mechanics: "Compound",
      sets: 3,
      reps: "8–12",
      equipment: "Machine",
      focus: "Quad-focused squat with more stability",
    },
    {
      name: "Leg Press",
      mechanics: "Compound",
      sets: 3,
      reps: "10–15",
      equipment: "Machine",
      focus: "Quad volume & safe heavy loading",
    },
    {
      name: "Bulgarian Split Squat",
      mechanics: "Compound (Unilateral)",
      sets: 3,
      reps: "8–12 each leg",
      equipment: "Free Weights / Bodyweight",
      focus: "Glutes, quads, balance & unilateral strength",
    },
    {
      name: "Leg Extension",
      mechanics: "Isolation",
      sets: 3,
      reps: "12–15",
      equipment: "Machine",
      focus: "Quad isolation & peak contraction",
    },
    {
      name: "Leg Curl (Seated or Lying)",
      mechanics: "Isolation",
      sets: 3,
      reps: "12–15",
      equipment: "Machine",
      focus: "Hamstring isolation & knee flexion strength",
    },
    {
      name: "Standing / Seated Calf Raises",
      mechanics: "Isolation",
      sets: 4,
      reps: "12–20",
      equipment: "Machine / Free Weights",
      focus: "Calf development & ankle strength",
    },
  ];

  const exercises = [
    {
      name: "Barbell Back Squat",
      description:
        "King of lower-body strength. If you're already doing Hack Squat, you can skip Back Squat — choose ONE heavy squat pattern.",
      keyPoints: [
        "Keep chest up and core braced.",
        "Sit between your hips, not forward.",
        "Drive through mid-foot and heels.",
      ],
      alternatives: ["Goblet Squat", "Front Squat", "Smith Machine Squat"],
      sets: "3 Working Sets",
      reps: "6–10 Reps",
      images: [
        { src: "https://gymbuddy.cdn.viveksahu.dev/images/squat-1.gif" },
        { src: "https://gymbuddy.cdn.viveksahu.dev/images/squat-2.gif" },
      ],
    },

    {
      name: "Goblet Squat",
      description:
        "A beginner-friendly squat. If you perform Goblet Squats, you may SKIP Leg Press because both target similar quad patterns in a beginner-safe way.",
      keyPoints: [
        "Hold the dumbbell close to the chest.",
        "Push knees out during descent.",
        "Keep torso upright.",
      ],
      alternatives: ["Barbell Back Squat", "Smith Machine Squat"],
      sets: "3 Working Sets",
      reps: "10–15 Reps",
      images: [
        { src: "https://gymbuddy.cdn.viveksahu.dev/images/goblet-1.gif" },
        { src: "https://gymbuddy.cdn.viveksahu.dev/images/goblet-2.gif" },
      ],
    },

    {
      name: "Hack Squat / Smith Squat",
      description:
        "A very stable quad-dominant squat variation. If you do Hack/Smith Squat, skip Barbell Back Squat — pick ONE main squat movement.",
      keyPoints: [
        "Feet slightly forward for more quad bias.",
        "Control the negative slowly.",
        "Do not lock knees at the top.",
      ],
      alternatives: ["Front Squat", "Hack Squat", "Barbell Back Squat"],
      sets: "3 Working Sets",
      reps: "8–12 Reps",
      images: [
        { src: "https://gymbuddy.cdn.viveksahu.dev/images/hack-1.gif" },
        { src: "https://gymbuddy.cdn.viveksahu.dev/images/hack-2.gif" },
      ],
    },

    {
      name: "Leg Press",
      description:
        "Great for quad volume. If Goblet Squats are already performed, you may SKIP Leg Press to avoid redundant movement patterns.",
      keyPoints: [
        "Aim for deep ROM but maintain lower-back contact.",
        "Control the weight — don’t bounce.",
        "Foot placement determines muscle bias.",
      ],
      alternatives: ["Hack Squat", "Bulgarian Split Squat"],
      sets: "3 Working Sets",
      reps: "10–15 Reps",
      images: [
        { src: "https://gymbuddy.cdn.viveksahu.dev/images/legpress-1.gif" },
        { src: "https://gymbuddy.cdn.viveksahu.dev/images/legpress-2.gif" },
      ],
    },

    {
      name: "Bulgarian Split Squat",
      description:
        "Unilateral powerhouse. Amazing for glutes and quads. No need to go super heavy — control is everything.",
      keyPoints: [
        "Stay upright for more quad bias.",
        "Front knee can travel past the toes.",
        "Go slow and controlled.",
      ],
      alternatives: ["Walking Lunges", "Step-Ups"],
      sets: "3 Working Sets",
      reps: "8–12 per leg",
      images: [
        { src: "https://gymbuddy.cdn.viveksahu.dev/images/bss-1.gif" },
        { src: "https://gymbuddy.cdn.viveksahu.dev/images/bss-2.gif" },
      ],
    },

    {
      name: "Leg Extension",
      description:
        "Pure quad isolation — perfect for finishing a workout and achieving full quad contraction.",
      keyPoints: ["Slow eccentric", "Hard squeeze at top", "No swinging"],
      alternatives: ["Sissy Squat", "Front Squat"],
      sets: "3 Working Sets",
      reps: "12–15 Reps",
      images: [
        { src: "https://gymbuddy.cdn.viveksahu.dev/images/legext-1.gif" },
        { src: "https://gymbuddy.cdn.viveksahu.dev/images/legext-2.gif" },
      ],
    },

    {
      name: "Leg Curl",
      description:
        "Primary hamstring isolation movement. Seated version is biomechanically superior.",
      keyPoints: [
        "Hips glued to pad",
        "Slow stretch",
        "Avoid swinging or jerking",
      ],
      alternatives: ["Romanian Deadlift", "Standing Leg Curl"],
      sets: "3 Working Sets",
      reps: "12–15 Reps",
      images: [
        { src: "https://gymbuddy.cdn.viveksahu.dev/images/legcurl-1.gif" },
        { src: "https://gymbuddy.cdn.viveksahu.dev/images/legcurl-2.gif" },
      ],
    },

    {
      name: "Standing / Seated Calf Raises",
      description:
        "Calves respond best to deep stretch + full contraction. Use both bent-knee and straight-knee variations.",
      keyPoints: [
        "Deep stretch at bottom",
        "Hard squeeze at top",
        "Slow reps for best growth",
      ],
      alternatives: ["Leg Press Calf Raises", "Smith Machine Calf Raises"],
      sets: "4 Working Sets",
      reps: "12–20 Reps",
      images: [
        { src: "https://gymbuddy.cdn.viveksahu.dev/images/calf-1.gif" },
        { src: "https://gymbuddy.cdn.viveksahu.dev/images/calf-2.gif" },
      ],
    },
  ];

  return (
    <>
      <WorkoutOutlineTable
        title="Leg Day — Bro Split Outline"
        workouts={legWorkouts}
        note="Do proper warmups. Pick ONE: Back Squat or Hack/Smith Squat. If you perform Goblet Squats, you can skip Leg Press. All variations are excellent — choose according to your mobility and biomechanics."
      />

      <WorkoutCard
        title="Workout Form & Technique Guide"
        subtitle="Visual references and key points for mastering leg exercises — pick the variation you feel best."
        exercises={exercises}
      />
    </>
  );
}
