import SplitGrid from "@/components/Split";
import { Activity, CheckCircle2, XCircle, Clock, Moon } from "lucide-react";

const categories = [
  {
    title: "Full Body – Day 1",
    description:
      "A balanced routine hitting all major muscle groups with compound lifts and controlled tempo work.",
    image: "/images/chest.jpg",
    href: "/plans/fullbody-day-1",
  },
  {
    title: "Full Body – Day 2",
    description:
      "A variation-based full-body session emphasizing functional movement and endurance.",
    image: "/images/back.jpg",
    href: "/plans/fullbody-day-2",
  },
  {
    title: "Full Body – Day 3",
    description:
      "A strength-focused day designed to progressively overload your major lifts and core stabilizers.",
    image: "/images/leg.jpg",
    href: "/plans/fullbody-day-3",
  },
];

export default function FullBodyPage() {
  return (
    <div className="relative overflow-hidden">
      {/* Header Section */}
      <section className="container max-w-5xl mx-auto text-center pt-5 pb-15 px-6">
        <h1 className="text-5xl font-semibold tracking-tight text-foreground mb-4">
          Full <span className="text-emerald-400">Body Split</span>
        </h1>
        <p className="text-muted-foreground mx-auto leading-relaxed">
          A flexible 3–4 day program where each session trains your entire body.
          Perfect for beginners or busy lifters seeking balanced strength,
          endurance, and recovery throughout the week.
        </p>
      </section>

      {/* What is Full Body Split */}
      <section className="container max-w-6xl mx-auto px-6 mb-15">
        <div className="rounded-3xl border border-border/50 bg-card/40 backdrop-blur-sm p-10 md:p-14 shadow-sm hover:-translate-y-1 transition-all">
          <div className="flex items-center gap-3 mb-4">
            <h2 className="text-3xl font-semibold text-foreground">
              What is a Full Body Split?
            </h2>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            A{" "}
            <span className="text-foreground font-medium">Full Body Split</span>{" "}
            focuses on working every major muscle group in a single session.
            Each workout blends compound lifts with accessory movements to
            promote balanced strength, muscle endurance, and total-body
            development — all while keeping training frequency manageable.
          </p>
        </div>
      </section>

      {/* Benefits & Drawbacks */}
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
              <li>Efficient – trains the whole body in one session</li>
              <li>Flexible for 3 or 4-day schedules</li>
              <li>Ideal for beginners or time-constrained lifters</li>
              <li>Improves overall fitness and coordination</li>
              <li>Easy to maintain recovery balance</li>
            </ul>
          </div>

          {/* Drawbacks */}
          <div className="rounded-2xl border border-border/50 bg-card/40 backdrop-blur-sm p-8">
            <h3 className="text-xl font-semibold text-red-400 mb-4 flex items-center gap-2">
              <XCircle className="w-5 h-5" />
              Drawbacks
            </h3>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>Limited focus on specific muscle isolation</li>
              <li>Can be fatiguing if intensity is too high</li>
              <li>Progressive overload requires careful tracking</li>
              <li>Longer sessions if combining multiple lifts</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Basic Structure */}
      <section className="container max-w-6xl mx-auto px-6 mb-20 text-center">
        <h2 className="text-3xl font-semibold text-foreground mb-6">
          Basic Weekly Structure
        </h2>
        <p className="text-muted-foreground mb-8">
          A standard{" "}
          <span className="text-foreground font-medium">Full Body Split</span>{" "}
          plan balances workout and recovery days for consistent progress and
          endurance. Here’s how a 7-day schedule might look:
        </p>

        <div className="grid sm:grid-cols-3 md:grid-cols-7 gap-4">
          {[
            { label: "Full Body 1", type: "train" },
            { label: "Rest", type: "rest" },
            { label: "Full Body 2", type: "train" },
            { label: "Rest", type: "rest" },
            { label: "Full Body 3", type: "train" },
            { label: "Optional Cardio", type: "train" },
            { label: "Rest", type: "rest" },
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

      {/* Full Body Split Grid */}
      <SplitGrid
        title="Full Body Split"
        highlight="Split"
        description="A 3–4 day full-body program emphasizing efficiency and total-body strength — perfect for maintaining progress when time is limited."
        categories={categories}
      />
    </div>
  );
}
