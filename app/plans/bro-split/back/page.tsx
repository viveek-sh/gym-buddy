import { WorkoutOutlineTable } from "@/components/WorkoutPlan";
import { WorkoutCard } from "@/components/WorkoutCard";

export default function BackDayPage() {
  const backWorkouts = [
    {
      name: "Deadlifts",
      mechanics: "Compound",
      sets: 3,
      reps: "5–8",
      equipment: "Barbell",
      focus: "Overall posterior chain strength (not pure hypertrophy)",
    },
    {
      name: "Wide / Neutral Grip Lat Pulldown",
      mechanics: "Compound",
      sets: 3,
      reps: "8–12",
      equipment: "Cable Machine",
      focus: "Upper lat width",
    },
    {
      name: "1-Arm Dumbbell Row / Chest Supported Row",
      mechanics: "Compound",
      sets: 3,
      reps: "10–12",
      equipment: "Free Weights",
      focus: "Lat isolation with reduced lower-back fatigue",
    },
    {
      name: "Cable Row",
      mechanics: "Compound",
      sets: 3,
      reps: "10–15",
      equipment: "Cable Machine",
      focus: "Mid-back and lat thickness",
    },
    {
      name: "Cable Lat Pullover",
      mechanics: "Isolation",
      sets: 3,
      reps: "12–15",
      equipment: "Cable Machine",
      focus: "Pure lat isolation (no arm involvement)",
    },
    {
      name: "Barbell Row",
      mechanics: "Compound",
      sets: 3,
      reps: "8–12",
      equipment: "Barbell",
      focus: "Complete upper and mid-back density",
    },
  ];

  const exercises = [
    {
      name: "Deadlifts",
      description:
        "A full posterior-chain strength movement. Great for overall development but not ideal for pure hypertrophy due to systemic fatigue.",
      keyPoints: [
        "Keep the bar close to your body.",
        "Brace your core before lifting.",
        "Drive through your heels and keep back neutral.",
      ],
      alternatives: ["Romanian Deadlift", "Trap Bar Deadlift"],
      sets: "3 Working Sets",
      reps: "5–8 Reps",
      images: [
        { src: "https://gymbuddy.cdn.viveksahu.dev/images/deadlift-1.gif" },
        { src: "https://gymbuddy.cdn.viveksahu.dev/images/deadlift-2.webp" },
      ],
    },

    {
      name: "Wide / Neutral Grip Lat Pulldown",
      description:
        "A primary vertical pulling movement focused on building lat width. Neutral grip is more shoulder-friendly. Choose whichever variation feels natural to your mechanics.",
      keyPoints: [
        "Pull elbows down toward your ribs.",
        "Avoid leaning too far back.",
        "Control the eccentric slowly.",
      ],
      alternatives: ["Pull-Ups", "Assisted Pull-Ups", "Machine Pulldown"],
      sets: "3 Working Sets",
      reps: "8–12 Reps",
      images: [
        { src: "https://gymbuddy.cdn.viveksahu.dev/images/latpd-2.gif" },
        { src: "https://gymbuddy.cdn.viveksahu.dev/images/latpd-3.gif" },
      ],
    },

    {
      name: "1-Arm DB Row / Chest Supported Row",
      description:
        "One of the best hypertrophy back exercises — isolates the lats and minimizes lower-back fatigue. Both variations are great — pick the one you feel best.",
      keyPoints: [
        "Pull your elbow toward your hip.",
        "Don’t twist your torso.",
        "Slow, controlled negatives.",
      ],
      alternatives: ["T-Bar Row", "Machine ISO-Lateral Row"],
      sets: "3 Working Sets",
      reps: "10–12 Reps",
      images: [
        { src: "https://gymbuddy.cdn.viveksahu.dev/images/dbrow-1.gif" },
        { src: "https://gymbuddy.cdn.viveksahu.dev/images/dbrow-2.gif" },
      ],
    },

    {
      name: "Cable Row",
      description:
        "A stable horizontal pulling movement ideal for building thickness across the mid-back and lats. Multiple grips and attachments work — choose the variation that fits your body.",
      keyPoints: [
        "Sit upright and keep chest lifted.",
        "Pull elbows straight back.",
        "Do not sway or rock your torso.",
      ],
      alternatives: [
        "Seated Machine Row",
        "Chest-Supported Row",
        "Barbell Row",
      ],
      sets: "3 Working Sets",
      reps: "10–15 Reps",
      images: [
        { src: "https://gymbuddy.cdn.viveksahu.dev/images/cablerow-1.gif" },
        { src: "https://gymbuddy.cdn.viveksahu.dev/images/cablerow-3.gif" },
      ],
    },

    {
      name: "Cable Lat Pullover",
      description:
        "A pure lat isolation movement — eliminates arm involvement and gives an unmatched lat stretch.",
      keyPoints: [
        "Keep arms slightly bent (locked angle).",
        "Pull elbows down, not back.",
        "Stretch fully at the top.",
      ],
      alternatives: ["Dumbbell Pullover", "Machine Pullover"],
      sets: "3 Working Sets",
      reps: "12–15 Reps",
      images: [
        {
          src: "https://gymbuddy.cdn.viveksahu.dev/images/latpullover-1.gif",
        },
        {
          src: "https://gymbuddy.cdn.viveksahu.dev/images/latpullover-2.gif",
        },
      ],
    },

    {
      name: "Barbell Row",
      description:
        "A heavy compound row that builds full back density — upper back, lats, and rear delts. Underhand, overhand, Pendlay — all variations work.",
      keyPoints: [
        "Keep torso stable and braced.",
        "Pull bar into lower ribcage.",
        "Avoid jerky momentum.",
      ],
      alternatives: ["Pendlay Row", "Underhand Row", "Dumbbell Row"],
      sets: "3 Working Sets",
      reps: "8–12 Reps",
      images: [
        { src: "https://gymbuddy.cdn.viveksahu.dev/images/bbrow-1.gif" },
        { src: "https://gymbuddy.cdn.viveksahu.dev/images/bbrow-2.webp" },
      ],
    },
  ];

  return (
    <>
      <WorkoutOutlineTable
        title="Back Day — Bro Split Outline"
        workouts={backWorkouts}
        note="Choose which variation to go for — all of these are great variations. Train smartly based on what feels best for your biomechanics."
      />

      <WorkoutCard
        title="Workout Form & Technique Guide"
        subtitle="Visual references and key points for mastering back exercises. Select the variation you feel the best."
        exercises={exercises}
      />
    </>
  );
}
