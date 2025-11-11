import SplitGrid from "@/components/Split";
import { Activity, CheckCircle2, XCircle, Moon, Dumbbell } from "lucide-react";

const categories = [
  {
    title: "Full Body – Day 1",
    description:
      "Start strong with compound bodyweight movements to activate all major muscle groups — no equipment needed.",
    image: "/images/chest.jpg",
    href: "/plans/home-day-1",
  },
  {
    title: "Upper Focus – Day 2",
    description:
      "Work your chest, shoulders, and arms with push-ups, dips, and core stabilizers to build upper body strength.",
    image: "/images/back.jpg",
    href: "/plans/home-day-2",
  },
  {
    title: "Lower Focus – Day 3",
    description:
      "Target your legs and glutes through squats, lunges, and calf raises for strength and endurance.",
    image: "/images/leg.jpg",
    href: "/plans/home-day-3",
  },
  {
    title: "Core & Cardio – Day 4",
    description:
      "Boost your heart rate and stability with planks, mountain climbers, and light cardio intervals.",
    image: "/images/homeworkout.jpg",
    href: "/plans/home-day-4",
  },
  {
    title: "Full Body Burn – Day 5",
    description:
      "Engage your whole body through HIIT-style sessions to enhance strength and stamina.",
    image: "/images/arms.jpg",
    href: "/plans/home-day-5",
  },
  {
    title: "Stretch & Mobility – Day 6",
    description:
      "Improve flexibility and recovery with guided mobility work and active stretching routines.",
    image: "/images/shoulder.jpg",
    href: "/plans/home-day-6",
  },
];

export default function HomeWorkoutPage() {
  return (
    <div className="relative overflow-hidden">
      {/* 🏠 Header Section */}
      <section className="container max-w-5xl mx-auto text-center pt-5 pb-15 px-6">
        <h1 className="text-5xl font-semibold tracking-tight text-foreground mb-4">
          Home <span className="text-emerald-400">Workout Plan</span>
        </h1>
        <p className="text-muted-foreground mx-auto leading-relaxed">
          A convenient 3 or 6-day training plan you can perform anywhere —
          designed to help you stay active, strong, and flexible without the
          need for gym equipment.
        </p>
      </section>

      {/* 🧠 What is Home Workout */}
      <section className="container max-w-6xl mx-auto px-6 mb-15">
        <div className="rounded-3xl border border-border/50 bg-card/40 backdrop-blur-sm p-10 md:p-14 shadow-sm hover:-translate-y-1 transition-all">
          <div className="flex items-center gap-3 mb-4">
            <h2 className="text-3xl font-semibold text-foreground">
              What is a Home Workout Plan?
            </h2>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            The{" "}
            <span className="text-foreground font-medium">
              Home Workout Plan
            </span>{" "}
            focuses on building strength, endurance, and mobility using your own
            bodyweight or minimal equipment. It's perfect for those who prefer
            flexible training, limited space, or can’t access a gym regularly.
          </p>
        </div>
      </section>

      {/* ⚖️ Benefits & Drawbacks */}
      <section className="container max-w-6xl mx-auto px-6 mb-15">
        <h2 className="text-3xl font-semibold text-foreground text-center mb-10">
          Benefits & Drawbacks
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Benefits */}
          <div className="rounded-2xl border border-border/50 bg-card/40 backdrop-blur-sm p-8">
            <h3 className="text-xl font-semibold text-emerald-400 mb-4 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5" />
              Benefits
            </h3>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>No equipment or gym required</li>
              <li>Time-efficient and flexible scheduling</li>
              <li>Improves balance, coordination, and mobility</li>
              <li>Perfect for home or travel workouts</li>
              <li>Low barrier to consistency and habit-building</li>
            </ul>
          </div>

          {/* Drawbacks */}
          <div className="rounded-2xl border border-border/50 bg-card/40 backdrop-blur-sm p-8">
            <h3 className="text-xl font-semibold text-red-400 mb-4 flex items-center gap-2">
              <XCircle className="w-5 h-5" />
              Drawbacks
            </h3>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>Limited resistance for advanced lifters</li>
              <li>Harder to achieve progressive overload</li>
              <li>Requires discipline and consistency at home</li>
              <li>Can lack exercise variety over time</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 📅 Weekly Structure */}
      <section className="container max-w-6xl mx-auto px-6 mb-20 text-center">
        <h2 className="text-3xl font-semibold text-foreground mb-6">
          Basic Weekly Structure
        </h2>
        <p className="text-muted-foreground mb-8">
          This flexible plan can be followed as a{" "}
          <span className="text-foreground font-medium">
            3-day or 6-day split
          </span>
          , depending on your availability. Rest days can be interchanged based
          on your recovery or energy levels.
        </p>

        <div className="grid sm:grid-cols-3 md:grid-cols-7 gap-4">
          {[
            { label: "Full Body", type: "train" },
            { label: "Rest", type: "rest" },
            { label: "Upper Focus", type: "train" },
            { label: "Rest", type: "rest" },
            { label: "Lower Focus", type: "train" },
            { label: "Core & Cardio", type: "train" },
            { label: "Rest", type: "rest" },
          ].map((day, i) => (
            <div
              key={i}
              className={`rounded-xl border border-zinc-600 backdrop-blur-sm p-4 ${
                day.type === "rest" ? "bg-transparent opacity-70" : "bg-card/40"
              }`}
            >
              <p className="text-sm text-muted-foreground">Day {i + 1}</p>
              <h4
                className={`font-medium ${
                  day.type === "rest"
                    ? "text-muted-foreground flex items-center justify-center gap-1"
                    : "text-foreground"
                }`}
              >
                {day.type === "rest" ? (
                  <>
                    <Moon className="w-4 h-4" /> {day.label}
                  </>
                ) : (
                  day.label
                )}
              </h4>
            </div>
          ))}
        </div>
      </section>

      {/* 💪 Home Workout Grid */}
      <SplitGrid
        title="Home Workout Plan"
        highlight="Workout"
        description="A flexible 3 or 6-day at-home training plan designed to improve strength, endurance, and mobility — with no equipment needed."
        categories={categories}
      />
    </div>
  );
}
