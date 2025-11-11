import SplitGrid from "@/components/Split";
import { CheckCircle2, XCircle, Moon, Dumbbell } from "lucide-react";

const categories = [
  {
    title: "Upper Day – 1",
    description:
      "Develop your upper body with pressing, pulling, and isolation movements for strength and definition.",
    image: "/images/chest.jpg",
    href: "/plans/upper-day-1",
  },
  {
    title: "Lower Day – 1",
    description:
      "Train your lower body with squats, lunges, and hip hinges to build strength and balance.",
    image: "/images/leg.jpg",
    href: "/plans/lower-day-1",
  },
  {
    title: "Upper Day – 2",
    description:
      "Refocus on the upper body with variation lifts, emphasizing volume and muscular endurance.",
    image: "/images/back.jpg",
    href: "/plans/upper-day-2",
  },
  {
    title: "Lower Day – 2",
    description:
      "End the week by targeting legs and posterior chain with heavy compounds and accessories.",
    image: "/images/leg.jpg",
    href: "/plans/lower-day-2",
  },
];

export default function UpperLowerSplitPage() {
  return (
    <div className="relative overflow-hidden">
      {/* 🏋️ Header Section */}
      <section className="container max-w-5xl mx-auto text-center pt-5 pb-15 px-6">
        <h1 className="text-5xl font-semibold tracking-tight text-foreground mb-4">
          Upper–<span className="text-emerald-400">Lower</span> Split
        </h1>
        <p className="text-muted-foreground mx-auto leading-relaxed">
          A balanced 4-day training split alternating between upper and lower
          body sessions — ideal for intermediate lifters who want strength and
          recovery in perfect harmony.
        </p>
      </section>

      {/* 🧠 What is Upper–Lower Split */}
      <section className="container max-w-6xl mx-auto px-6 mb-15">
        <div className="rounded-3xl border border-border/50 bg-card/40 backdrop-blur-sm p-10 md:p-14 shadow-sm hover:-translate-y-1 transition-all">
          <div className="flex items-center gap-3 mb-4">
            <h2 className="text-3xl font-semibold text-foreground">
              What is an Upper–Lower Split?
            </h2>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            The{" "}
            <span className="text-foreground font-medium">
              Upper–Lower Split
            </span>{" "}
            divides your workouts into two categories: upper body (chest,
            shoulders, back, arms) and lower body (quads, hamstrings, glutes,
            calves). This rotation allows for increased frequency and balanced
            recovery — perfect for lifters aiming to progress in strength and
            symmetry.
          </p>
        </div>
      </section>

      {/* ⚖️ Benefits & Drawbacks */}
      <section className="container max-w-6xl mx-auto px-6 mb-15">
        <h2 className="text-3xl font-semibold text-foreground text-center mb-10">
          Benefits & Drawbacks
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {/* ✅ Benefits */}
          <div className="rounded-2xl border border-border/50 bg-card/40 backdrop-blur-sm p-8">
            <h3 className="text-xl font-semibold text-emerald-400 mb-4 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5" />
              Benefits
            </h3>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>Balanced upper and lower body training frequency</li>
              <li>Efficient recovery and progressive overload potential</li>
              <li>Ideal for intermediate-level lifters</li>
              <li>Scalable to 3, 4, or 5 training days per week</li>
              <li>Supports both strength and hypertrophy goals</li>
            </ul>
          </div>

          {/* ❌ Drawbacks */}
          <div className="rounded-2xl border border-border/50 bg-card/40 backdrop-blur-sm p-8">
            <h3 className="text-xl font-semibold text-red-400 mb-4 flex items-center gap-2">
              <XCircle className="w-5 h-5" />
              Drawbacks
            </h3>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>Sessions can be long if volume is high</li>
              <li>May feel repetitive for advanced athletes</li>
              <li>Requires consistent training schedule</li>
              <li>Less specialization for single muscle groups</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 📅 Basic Weekly Structure */}
      <section className="container max-w-6xl mx-auto px-6 mb-20 text-center">
        <h2 className="text-3xl font-semibold text-foreground mb-6">
          Basic Weekly Structure
        </h2>
        <p className="text-muted-foreground mb-8">
          A typical{" "}
          <span className="text-foreground font-medium">Upper–Lower Split</span>{" "}
          alternates between upper and lower body days — balancing volume,
          strength, and recovery.
        </p>

        <div className="grid sm:grid-cols-3 md:grid-cols-7 gap-4">
          {[
            { label: "Upper", type: "train" },
            { label: "Lower", type: "train" },
            { label: "Rest", type: "rest" },
            { label: "Upper", type: "train" },
            { label: "Lower", type: "train" },
            { label: "Rest", type: "rest" },
            { label: "Optional Cardio", type: "train" },
          ].map((day, i) => (
            <div
              key={i}
              className={`rounded-xl border border-zinc-600 backdrop-blur-sm p-4 ${
                day.type === "rest" ? "bg-transparent opacity-45" : "bg-card/40"
              }`}
            >
              <p className="text-sm text-foreground">Day {i + 1}</p>
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

      {/* 💪 Upper–Lower Split Grid */}
      <SplitGrid
        title="Upper–Lower Split"
        highlight="Split"
        description="A balanced 4-day rotation targeting both upper and lower body strength — designed to enhance recovery, performance, and long-term muscle growth."
        categories={categories}
      />
    </div>
  );
}
