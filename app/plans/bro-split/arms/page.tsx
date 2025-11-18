import { WorkoutOutlineTable } from "@/components/WorkoutPlan";
import { WorkoutCard } from "@/components/WorkoutCard";

export default function ArmsDayPage() {
  const armsWorkouts = [
    // BICEPS + TRICEPS ALTERNATING
    {
      name: "Preacher Curls",
      mechanics: "Isolation (Biceps)",
      sets: 3,
      reps: "8–12",
      equipment: "Machine / EZ Bar",
      focus: "Strict Biceps Contraction / Peak Focus",
    },
    {
      name: "Triceps Pressdown (Bar)",
      mechanics: "Isolation (Triceps)",
      sets: 3,
      reps: "10–15",
      equipment: "Cable Machine",
      focus: "Lateral Head Emphasis / Elbow Stability",
    },
    {
      name: "Incline Dumbbell Curls",
      mechanics: "Isolation (Biceps)",
      sets: 3,
      reps: "8–12",
      equipment: "Dumbbells",
      focus: "Long Head Stretch / Peak Shape",
    },
    {
      name: "Overhead Tricep Cable Extension",
      mechanics: "Isolation (Triceps)",
      sets: 3,
      reps: "10–15",
      equipment: "Cable Machine",
      focus: "Long Head Stretch / Full Lockout",
    },
    {
      name: "Hammer Curls",
      mechanics: "Isolation (Biceps / Brachialis)",
      sets: 3,
      reps: "8–12",
      equipment: "Dumbbells / Ropes",
      focus: "Forearm + Brachialis Thickness",
    },
    {
      name: "Skullcrushers (EZ Bar or Dumbbells)",
      mechanics: "Isolation (Triceps)",
      sets: 3,
      reps: "8–12",
      equipment: "EZ Bar / Dumbbells",
      focus: "Long Head Mass Builder",
    },
  ];

  const exercises = [
    // PREACHER CURLS
    {
      name: "Preacher Curls",
      description:
        "A strict bicep movement that eliminates momentum and targets the lower and mid biceps for maximum contraction.",
      keyPoints: [
        "Keep triceps glued to the pad.",
        "Lower under full control.",
        "Squeeze hard at the top without swinging.",
      ],
      alternatives: [
        "Machine Preacher Curl",
        "EZ Bar Preacher Curl",
        "Single Arm Preacher Curl",
        "Cable Preacher Curl",
      ],
      sets: "3 Working Sets",
      reps: "8–12 Reps",
      images: [
        { src: "https://gymbuddy.cdn.viveksahu.dev/images/preacher-1.gif" },
        { src: "https://gymbuddy.cdn.viveksahu.dev/images/preacher-2.webp" },
      ],
    },

    // TRICEP PRESSDOWN
    {
      name: "Triceps Pushdown (Bar)",
      description:
        "A staple tricep movement focusing on the lateral head while maintaining constant tension.",
      keyPoints: [
        "Keep elbows tucked and still.",
        "Push the bar down in an arc.",
        "Control the negative — do not let it snap up.",
      ],
      alternatives: [
        "Rope Pushdown",
        "Reverse Grip Pushdown",
        "Single Arm Cable Pushdown",
      ],
      sets: "3 Working Sets",
      reps: "10–15 Reps",
      images: [
        { src: "https://gymbuddy.cdn.viveksahu.dev/images/pushdown-1.gif" },
        { src: "https://gymbuddy.cdn.viveksahu.dev/images/pushdown-2.webp" },
      ],
    },

    // INCLINE CURLS
    {
      name: "Incline Dumbbell Curls",
      description:
        "A long-head focused bicep exercise that creates a deep stretch and builds peak shape.",
      keyPoints: [
        "Let arms hang behind torso for extra stretch.",
        "Keep elbows pinned in place.",
        "Curl slowly and avoid swinging.",
      ],
      alternatives: [
        "Incline Cable Curls",
        "Bayesian Cable Curl",
        "Seated DB Curls",
      ],
      sets: "3 Working Sets",
      reps: "8–12 Reps",
      images: [
        { src: "https://gymbuddy.cdn.viveksahu.dev/images/incline-curl-1.gif" },
        {
          src: "https://gymbuddy.cdn.viveksahu.dev/images/incline-curl-2.webp",
        },
      ],
    },

    // OVERHEAD TRICEP EXTENSION
    {
      name: "Overhead Tricep Cable Extension",
      description:
        "Targets the long head of the triceps by putting it into a fully stretched overhead position.",
      keyPoints: [
        "Keep elbows pointed forward.",
        "Stretch triceps fully at the bottom.",
        "Lockout with control — don’t flare elbows.",
      ],
      alternatives: [
        "Rope Overhead Extensions",
        "Single-Arm Overhead Cable Extension",
        "DB Overhead Tricep Extension",
      ],
      sets: "3 Working Sets",
      reps: "10–15 Reps",
      images: [
        { src: "https://gymbuddy.cdn.viveksahu.dev/images/overhead-ext-1.gif" },
        { src: "https://gymbuddy.cdn.viveksahu.dev/images/overhead-ext-2.gif" },
      ],
    },

    // HAMMER CURLS
    {
      name: "Hammer Curls",
      description:
        "Targets the brachialis and brachioradialis for thicker arms and improved forearm development.",
      keyPoints: [
        "Keep palms facing each other.",
        "Lift with control — avoid swinging.",
        "Squeeze forearms and brachialis at the top.",
      ],
      alternatives: [
        "Rope Hammer Curl",
        "Cross-Body Hammer Curl",
        "Neutral-Grip Cable Curl",
      ],
      sets: "3 Working Sets",
      reps: "8–12 Reps",
      images: [
        { src: "https://gymbuddy.cdn.viveksahu.dev/images/hammer-1.webp" },
        { src: "https://gymbuddy.cdn.viveksahu.dev/images/hammer-2.gif" },
      ],
    },

    // SKULLCRUSHERS
    {
      name: "Skullcrushers (EZ Bar or DB)",
      description:
        "A mass-building tricep staple targeting the long head for arm thickness and lockout strength.",
      keyPoints: [
        "Bring bar behind the head for greater stretch.",
        "Keep elbows tight and pointed up.",
        "Avoid dropping too fast — protect elbows.",
      ],
      alternatives: [
        "DB Skullcrushers",
        "Cable Skullcrushers",
        "PJR Pullovers",
      ],
      sets: "3 Working Sets",
      reps: "8–12 Reps",
      images: [
        { src: "https://gymbuddy.cdn.viveksahu.dev/images/skullcrusher-1.gif" },
        { src: "https://gymbuddy.cdn.viveksahu.dev/images/skullcrusher-2.gif" },
      ],
    },
  ];

  return (
    <>
      <WorkoutOutlineTable
        title="Arms Day — Bro Split Outline"
        workouts={armsWorkouts}
        note="Alternate between biceps and triceps for better pump, recovery between sets, and balanced arm development."
      />

      <WorkoutCard
        title="Workout Form & Technique Guide"
        subtitle="Visual references and key coaching cues for mastering bicep and tricep exercises."
        exercises={exercises}
      />
    </>
  );
}
