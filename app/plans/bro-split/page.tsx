import SplitGrid from "@/components/Split";
import { CheckCircle2, XCircle } from "lucide-react";
import Image from "next/image";

const categories = [
  {
    title: "Chest Day",
    description:
      "Target your chest with compound presses and isolation exercises for strength and fullness.",
    image: "https://gymbuddy.cdn.viveksahu.dev/images/chest.jpg",
    href: "/plans/bro-split/chest",
  },
  {
    title: "Back Day",
    description:
      "Develop a strong and wide back through rows, pull-ups, and deadlift variations.",
    image: "https://gymbuddy.cdn.viveksahu.dev/images/back.jpg",
    href: "/plans/bro-split/back",
  },
  {
    title: "Shoulder Day",
    description:
      "Build capped delts with overhead presses, lateral raises, and rear delt work.",
    image: "https://gymbuddy.cdn.viveksahu.dev/images/shoulder.jpg",
    href: "/plans/bro-split/shoulder",
  },
  {
    title: "Arms Day",
    description:
      "Isolate your biceps and triceps with focused curls, extensions, and pump-inducing supersets.",
    image: "https://gymbuddy.cdn.viveksahu.dev/images/arms.jpg",
    href: "/plans/bro-split/arms",
  },
  {
    title: "Leg Day",
    description:
      "Hit quads, hamstrings, and glutes with squats, lunges, and heavy compound movements.",
    image: "https://gymbuddy.cdn.viveksahu.dev/images/leg.jpg",
    href: "/plans/bro-split/legs",
  },
  {
    title: "Core & Cardio",
    description:
      "End your week with light cardio and core work to improve stability and endurance.",
    image: "https://gymbuddy.cdn.viveksahu.dev/images/core.jpg",
    href: "/plans/bro-split/core-cardio",
  },
];

export default function BroSplitPage() {
  return (
    <div className="relative overflow-hidden">
      {/* Header Section  */}
      <section className="container max-w-5xl mx-auto text-center pt-5 pb-15 px-6">
        <h1 className="text-5xl font-semibold tracking-tight text-foreground mb-4">
          Bro <span className="text-emerald-400"> Split</span>
        </h1>
        <p className="text-muted-foreground mx-auto leading-relaxed">
          A timeless six-day workout plan that isolates each major muscle group
          — designed to help you build muscle symmetry, definition, and control
          through focused training and recovery.
        </p>
      </section>

      {/*What is the Bro Split */}
      <section className="container max-w-6xl mx-auto px-6 mb-15">
        <div className="rounded-3xl border border-border/50 bg-card/40 backdrop-blur-sm p-10 md:p-14 shadow-sm hover:-translate-y-1">
          <div className="flex items-center gap-3 mb-4">
            <h2 className="text-3xl font-semibold text-foreground">
              What is the Bro Split?
            </h2>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            The <span className="text-foreground font-medium">Bro Split</span>{" "}
            divides your training week into individual muscle-focused days. Each
            session targets one specific group — like chest, back, or legs —
            allowing for maximum intensity and recovery. This structure helps
            you build both strength and muscular aesthetics over time.
          </p>
        </div>
      </section>

      {/*Benefits & Drawbacks */}
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
              <li>Focused training for each muscle group</li>
              <li>Better mind–muscle connection and isolation</li>
              <li>Ample recovery time between sessions</li>
              <li>Great for hypertrophy and muscle definition</li>
              <li>Easy to customize based on personal goals</li>
            </ul>
          </div>

          {/* Drawbacks */}
          <div className="rounded-2xl border border-border/50 bg-card/40 backdrop-blur-sm p-8">
            <h3 className="text-xl font-semibold text-red-400 mb-4 flex items-center gap-2">
              <XCircle className="w-5 h-5" />
              Drawbacks
            </h3>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>Can be time-intensive (6 days/week)</li>
              <li>Missed days disrupt balance in the split</li>
              <li>Not ideal for beginners needing full-body work</li>
              <li>Less frequency per muscle per week</li>
            </ul>
          </div>
        </div>
      </section>

      {/*Basic Structure */}
      <section className="container max-w-6xl mx-auto px-6 mb-20 text-center">
        <h2 className="text-3xl font-semibold text-foreground mb-6">
          Basic Weekly Structure
        </h2>
        <p className="text-muted-foreground mb-8">
          A typical{" "}
          <span className="text-foreground font-medium">Bro Split</span> follows
          this layout. Each day emphasizes a major muscle group while
          maintaining recovery and balance.
        </p>

        <div className="grid sm:grid-cols-3 md:grid-cols-6 gap-4">
          {["Chest", "Back", "Shoulders", "Arms", "Legs", "Core & Cardio"].map(
            (day, i) => (
              <div
                key={i}
                className="rounded-xl border border-zinc-600 bg-card/40 backdrop-blur-sm p-4">
                <p className="text-sm text-foreground">Day {i + 1}</p>
                <h4 className="text-foreground font-medium">{day}</h4>
              </div>
            )
          )}
        </div>
      </section>

      <SplitGrid
        title="Bro Split"
        highlight="Split"
        description="A six-day routine designed to isolate each major muscle group — maximizing growth, balance, and recovery."
        categories={categories}
      />
    </div>
  );
}
