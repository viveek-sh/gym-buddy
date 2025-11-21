import { WorkoutOutlineTable } from "@/components/WorkoutPlan";
import { WorkoutCard } from "@/components/WorkoutCard";

export default function CoreCardioDayPage() {
  const coreCardioWorkouts = [
    {
      name: "Cable Crunch",
      mechanics: "Isolation (Upper Abs)",
      sets: 3,
      reps: "12–15",
      equipment: "Cable Machine",
      focus: "Upper Abs / Constant Tension",
    },
    {
      name: "Treadmill Intervals",
      mechanics: "Cardio Burst",
      sets: 1,
      reps: "2–4 Minutes",
      equipment: "Treadmill",
      focus: "Short Intense Cardio",
    },
    {
      name: "Hanging Leg Raises",
      mechanics: "Isolation (Lower Abs)",
      sets: 3,
      reps: "10–15",
      equipment: "Pull-up Bar / Captain’s Chair",
      focus: "Lower Abs / Hip Flexor Control",
    },
    {
      name: "Bike Sprint Intervals",
      mechanics: "Cardio Burst",
      sets: 1,
      reps: "2–4 Minutes",
      equipment: "Bike Machine",
      focus: "High Heart Rate HIIT",
    },
    {
      name: "Cable Woodchoppers",
      mechanics: "Isolation (Obliques)",
      sets: 3,
      reps: "12–15 each side",
      equipment: "Cable Machine",
      focus: "Rotational Strength",
    },
    {
      name: "Plank / RKC Plank",
      mechanics: "Isometric (Full Core)",
      sets: 1,
      reps: "45–60 Seconds",
      equipment: "Bodyweight",
      focus: "Core Stability",
    },
    {
      name: "Cardio Finisher (Choose 1)",
      mechanics: "Cardio",
      sets: 1,
      reps: "5–10 Minutes",
      equipment: "Row / Bike / Elliptical",
      focus: "Endurance / Fat Burn",
    },
  ];

  const exercises = [
    // CABLE CRUNCH
    {
      name: "Cable Crunch",
      description:
        "One of the best upper-ab exercises, allowing progressive overload with constant tension.",
      keyPoints: [
        "Round the spine as you crunch—don't hinge.",
        "Pull elbows toward knees.",
        "Control the upward return.",
      ],
      alternatives: [
        "Machine Ab Crunch",
        "Weighted Decline Crunch",
        "Rope Kneeling Crunch",
      ],
      sets: "3 Working Sets",
      reps: "12–15 Reps",
      images: [
        {
          src: "https://gymbuddy.cdn.viveksahu.dev/images/cable-crunch-1.webp",
        },
        { src: "https://gymbuddy.cdn.viveksahu.dev/images/cable-crunch-2.gif" },
      ],
    },

    // TREADMILL INTERVALS
    {
      name: "Treadmill Intervals",
      description:
        "High-intensity intervals that elevate heart rate quickly and improve conditioning.",
      keyPoints: [
        "Perform 20–40 sec fast, 20–40 sec moderate.",
        "Avoid holding onto the handles.",
      ],
      alternatives: [
        "Incline Walk",
        "Stairmaster Intervals",
        "Rowing Intervals",
      ],
      sets: "1 Burst",
      reps: "2–4 Minutes",
      images: [
        { src: "https://gymbuddy.cdn.viveksahu.dev/images/treadmill-1.jpeg" },
      ],
    },

    // HANGING LEG RAISES
    {
      name: "Hanging Leg Raises",
      description:
        "Elite lower-ab activation, engaging the core deeply through hip flexion and pelvic tilt.",
      keyPoints: [
        "Lift pelvis upward at the top of each rep.",
        "Avoid swinging or using momentum.",
      ],
      alternatives: [
        "Captain's Chair Leg Raise",
        "Lying Leg Raise",
        "Reverse Crunch",
      ],
      sets: "3 Working Sets",
      reps: "10–15 Reps",
      images: [
        { src: "https://gymbuddy.cdn.viveksahu.dev/images/leg-raise-1.gif" },
        { src: "https://gymbuddy.cdn.viveksahu.dev/images/leg-raise-2.webp" },
      ],
    },

    // BIKE SPRINTS
    {
      name: "Bike Sprint Intervals",
      description:
        "Short explosive sprints improving conditioning, leg drive, and fat burn.",
      keyPoints: [
        "Use 10–20 sec sprints with equal rest.",
        "Resistance should be moderate-high.",
      ],
      alternatives: ["Air Bike", "Row Sprints", "Elliptical HIIT"],
      sets: "1 Burst",
      reps: "2–4 Minutes",
      images: [{ src: "https://gymbuddy.cdn.viveksahu.dev/images/bike-1.jpg" }],
    },

    // WOODCHOPPERS
    {
      name: "Cable Woodchoppers",
      description:
        "Targets obliques and rotational control—excellent for functional strength.",
      keyPoints: [
        "Rotate torso—not arms only.",
        "Keep hips stable and core braced.",
      ],
      alternatives: [
        "High-to-Low Woodchoppers",
        "Low-to-High Woodchoppers",
        "Russian Twist",
      ],
      sets: "3 Working Sets",
      reps: "12–15 Each Side",
      images: [
        { src: "https://gymbuddy.cdn.viveksahu.dev/images/woodchopper-1.gif" },
        { src: "https://gymbuddy.cdn.viveksahu.dev/images/woodchopper-2.webp" },
      ],
    },

    // PLANK
    {
      name: "Plank / RKC Plank",
      description:
        "A top-tier full-core stability exercise building total-body bracing strength.",
      keyPoints: ["Squeeze glutes and abs hard.", "Don't arch the lower back."],
      alternatives: ["Weighted Plank", "Side Plank", "Dead Bug"],
      sets: "1 Working Set",
      reps: "45–60 Seconds",
      images: [
        { src: "https://gymbuddy.cdn.viveksahu.dev/images/plank-1.webp" },
      ],
    },

    // CARDIO FINISHER
    {
      name: "Cardio Finisher",
      description:
        "A final steady-state or moderate-intensity cardio block to burn extra calories and improve endurance.",
      keyPoints: [
        "Pick a machine you can maintain steady effort on.",
        "Avoid all-out sprinting—choose controlled intensity.",
      ],
      alternatives: ["Row Machine", "Bike Machine", "Incline Walk"],
      sets: "1 Finisher",
      reps: "5–10 Minutes",
      images: [
        { src: "https://gymbuddy.cdn.viveksahu.dev/images/elliptical-1.jpg" },
      ],
    },
  ];

  return (
    <>
      <WorkoutOutlineTable
        title="Core + Cardio Day — Bro Split Outline"
        workouts={coreCardioWorkouts}
        note="Alternate between core and cardio for better conditioning and more effective fat burning."
      />

      <WorkoutCard
        title="Core & Cardio Technique Guide"
        subtitle="Visual references and key coaching cues for mastering core and conditioning exercises."
        exercises={exercises}
      />
    </>
  );
}
