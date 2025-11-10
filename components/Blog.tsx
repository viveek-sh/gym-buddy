// import { WorkoutModeCard } from "@/components/ui/category-grid";

// const workoutModes = [
//   {
//     name: "Bro Split",
//     description:
//       "Train one major muscle group each day for maximum hypertrophy focus.",
//     duration: "5 days/week",
//     focus: "Muscle Isolation",
//     intensity: "High",
//     icon: "strength",
//   },
//   {
//     name: "Push Pull Legs",
//     description:
//       "A balanced split alternating push, pull, and leg days for recovery and strength.",
//     duration: "3–6 days/week",
//     focus: "Balanced Volume",
//     intensity: "Medium",
//     icon: "endurance",
//   },
//   {
//     name: "Upper Lower Split",
//     description:
//       "Alternate between upper and lower body sessions for growth and balance.",
//     duration: "4 days/week",
//     focus: "Strength & Size",
//     intensity: "Medium",
//     icon: "strength",
//   },
//   {
//     name: "Full Body Routine",
//     description:
//       "Full-body activation each session — ideal for beginners and consistency.",
//     duration: "3 days/week",
//     focus: "Foundational Strength",
//     intensity: "Low",
//     icon: "cardio",
//   },
// ];

// export function WorkoutModeGrid() {
//   return (
//     <section className="py-20 bg-black text-white">
//       <div className="container mx-auto px-4">
//         <h2 className="text-4xl font-semibold mb-12 text-center">
//           Choose Your Workout Mode
//         </h2>

//         <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
//           {workoutModes.map((mode, i) => (
//             <WorkoutModeCard key={i} {...mode} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
