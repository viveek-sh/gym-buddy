import SplitGrid from "@/components/Split";
import { CheckCircle2, XCircle, Moon, Dumbbell, Activity } from "lucide-react";

const categories = [
  {
    title: "Push Day – 1",
    description:
      "Focus on chest, shoulders, and triceps with compound presses and controlled accessory movements.",
    image: "/images/chest.jpg",
    href: "/plans/push-day-1",
  },
  {
    title: "Pull Day – 1",
    description:
      "Train your back and biceps with pull-ups, rows, and curls for balanced upper-body strength.",
    image: "/images/back.jpg",
    href: "/plans/pull-day-1",
  },
  {
    title: "Leg Day – 1",
    description:
      "Build lower-body power through squats, lunges, and leg curls — essential for total strength.",
    image: "/images/leg.jpg",
    href: "/plans/leg-day-1",
  },
  {
    title: "Push Day – 2",
    description:
      "Increase intensity with a new variation of push exercises focusing on volume and muscle endurance.",
    image: "/images/shoulder.jpg",
    href: "/plans/push-day-2",
  },
  {
    title: "Pull Day – 2",
    description:
      "Hit the posterior chain again with rows and bicep-focused movements to reinforce strength symmetry.",
    image: "/images/arms.jpg",
    href: "/plans/pull-day-2",
  },
  {
    title: "Leg Day – 2",
    description:
      "Finish the week with lower-body hypertrophy — lighter weights, higher volume, perfect for recovery.",
    image: "/images/leg.jpg",
    href: "/plans/leg-day-2",
  },
];

export default function PPLSplitPage() {
  return (
    <div className="relative overflow-hidden">
      {/* Header Section */}
      <section className="container max-w-5xl mx-auto text-center pt-5 pb-15 px-6">
        <h1 className="text-5xl font-semibold tracking-tight text-foreground mb-4">
          Push–Pull–<span className="text-emerald-400">Legs</span> Split
        </h1>
        <p className="text-muted-foreground mx-auto leading-relaxed">
          A 3 or 6-day training system that divides your workouts into pushing,
          pulling, and leg-focused movements — maximizing recovery and muscle
          growth through balanced frequency.
        </p>
      </section>

      {/* What is PPL Split */}
      <section className="container max-w-6xl mx-auto px-6 mb-15">
        <div className="rounded-3xl border border-border/50 bg-card/40 backdrop-blur-sm p-10 md:p-14 shadow-sm hover:-translate-y-1 transition-all">
          <div className="flex items-center gap-3 mb-4">
            <h2 className="text-3xl font-semibold text-foreground">
              What is a PPL Split?
            </h2>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            The{" "}
            <span className="text-foreground font-medium">
              Push–Pull–Leg (PPL)
            </span>{" "}
            routine separates training into three functional patterns. Push days
            work your chest, shoulders, and triceps; pull days train your back
            and biceps; and leg days build lower-body strength. This structure
            ensures optimal recovery while increasing training frequency and
            volume for each muscle group.
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
              <li>Efficient balance between upper and lower body training</li>
              <li>High training frequency supports hypertrophy</li>
              <li>Flexible 3 or 6-day weekly structure</li>
              <li>Optimized recovery between muscle groups</li>
              <li>Suitable for intermediate to advanced lifters</li>
            </ul>
          </div>

          {/* Drawbacks */}
          <div className="rounded-2xl border border-border/50 bg-card/40 backdrop-blur-sm p-8">
            <h3 className="text-xl font-semibold text-red-400 mb-4 flex items-center gap-2">
              <XCircle className="w-5 h-5" />
              Drawbacks
            </h3>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>Can be fatiguing if recovery is ignored</li>
              <li>Requires consistency across all sessions</li>
              <li>Not ideal for complete beginners</li>
              <li>Leg sessions can feel demanding after upper-body days</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Basic Weekly Structure */}
      <section className="container max-w-6xl mx-auto px-6 mb-20 text-center">
        <h2 className="text-3xl font-semibold text-foreground mb-6">
          Basic Weekly Structure
        </h2>
        <p className="text-muted-foreground mb-8">
          A standard{" "}
          <span className="text-foreground font-medium">Push–Pull–Leg</span>{" "}
          plan alternates between three functional patterns repeated twice per
          week — with one rest day for recovery.
        </p>

        <div className="grid sm:grid-cols-3 md:grid-cols-7 gap-4">
          {[
            { label: "Push", type: "train" },
            { label: "Pull", type: "train" },
            { label: "Legs", type: "train" },
            { label: "Rest", type: "rest" },
            { label: "Push", type: "train" },
            { label: "Pull", type: "train" },
            { label: "Legs", type: "train" },
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

      {/* PPL Split Grid */}
      <SplitGrid
        title="Push–Pull–Leg Split"
        highlight="Split"
        description="A 3 or 6-day PPL routine designed to optimize muscle recovery and balance — the perfect intermediate-level program for sustainable progress."
        categories={categories}
      />
    </div>
  );
}
