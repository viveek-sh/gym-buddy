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
        "King of lower-body strength. Great for quads, glutes, and overall leg mass. If you lack mobility or experience, start with Goblet Squats.",
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
        "A beginner-friendly squat that teaches proper form and depth without needing a barbell.",
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
        "A highly stable variation that allows safe quad-focused training. Some gyms won't have a hack squat — Smith Squat is a very good alternative.",
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
        "Lets you safely load the quads with high volume. Great for hypertrophy and burnout sets.",
      keyPoints: [
        "Do not go too shallow — aim for deep ROM.",
        "Keep lower back glued to the pad.",
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
        "Unilateral powerhouse. Brutal for quads and glutes; fixes strength imbalances quickly.",
      keyPoints: [
        "Keep front knee tracking over toes.",
        "Stay upright for more quad bias.",
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
      keyPoints: [
        "Control each rep — slow eccentric.",
        "Do not swing the weight.",
        "Squeeze hard at the top.",
      ],
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
        "Primary hamstring isolation movement. Seated version targets both hip & knee flexion better.",
      keyPoints: [
        "Keep hips glued to the pad.",
        "Slow stretch at the top.",
        "Avoid swinging or jerking.",
      ],
      alternatives: [
        "Romanian Deadlift",
        "Lying Leg Curl",
        "Standing Leg Curl",
      ],
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
        "Calves respond best to slow eccentrics and deep stretch. Use both bent-knee and straight-knee variations.",
      keyPoints: [
        "Go full ROM — deep stretch & hard squeeze.",
        "Do not bounce from the bottom.",
        "Use moderate weight and higher reps.",
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
        note="Do proper warmups. Choose whichever variation fits your mobility and biomechanics. All listed variations are excellent — train smartly."
      />

      <WorkoutCard
        title="Workout Form & Technique Guide"
        subtitle="Visual references and key points for mastering leg exercises — pick the variation you feel best."
        exercises={exercises}
      />
    </>
  );
}
