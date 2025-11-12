import { Dumbbell, HeartPulse, Users } from "lucide-react";
import { ContactCard } from "@/components/ContactCard";

export default function AboutPage() {
  return (
    <div className="relative overflow-hidden">
      {/* 🧠 Header */}
      <section className="container max-w-5xl mx-auto text-center pt-20 pb-10 px-6">
        <h2 className="text-5xl font-semibold tracking-tight text-foreground mb-4">
          About <span className="text-emerald-400">GymBuddy</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          <span className="text-emerald-400">GymBuddy</span> started as a small
          learning project while I was exploring <strong>Next.js</strong>. I’m
          not a trainer — just a regular coder and gym-goer who wanted to build
          something beginners could find useful.
        </p>
      </section>

      {/* 🏋️ Story Section */}
      <section className="container max-w-6xl mx-auto px-6 mb-20">
        <div className="rounded-3xl border border-border/50 bg-card/40 backdrop-blur-sm p-10 md:p-14 shadow-sm transition-all">
          <h2 className="text-3xl font-semibold text-foreground mb-6 text-center">
            How It Started
          </h2>
          <p className="text-muted-foreground text-center max-w-3xl mx-auto leading-relaxed">
            The idea came from seeing crowded gyms where only a few trainers
            manage dozens of people. New joiners often look around, unsure what
            to do next — I’ve been there too. I learned workout form, nutrition,
            and recovery through research, videos, and practice — not as an
            expert, but as a curious learner. So I built GymBuddy hoping some
            beginner might find small value in it and take their first step
            confidently.
          </p>
        </div>
      </section>

      {/* 🌍 Meaning Section */}
      <section className="container max-w-6xl mx-auto px-6 mb-20 text-center">
        <h2 className="text-3xl font-semibold text-foreground mb-10">
          What <span className="text-emerald-400">GymBuddy</span> Means to Me
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="rounded-2xl border border-border/60 bg-card/30 backdrop-blur-sm p-8">
            <Dumbbell className="w-8 h-8 text-emerald-400 mx-auto mb-3" />
            <h3 className="text-lg font-semibold text-foreground">
              Learning in Public
            </h3>
            <p className="text-sm text-muted-foreground mt-2">
              I built this to practice <strong>Next.js</strong> while applying
              my gym learnings. It’s not perfect — just something evolving as I
              learn.
            </p>
          </div>

          <div className="rounded-2xl border border-border/60 bg-card/30 backdrop-blur-sm p-8">
            <HeartPulse className="w-8 h-8 text-emerald-400 mx-auto mb-3" />
            <h3 className="text-lg font-semibold text-foreground">
              Helping Beginners
            </h3>
            <p className="text-sm text-muted-foreground mt-2">
              If you’ve ever felt lost in a gym — this might help you get
              started with some structure and confidence.
            </p>
          </div>

          <div className="rounded-2xl border border-border/60 bg-card/30 backdrop-blur-sm p-8">
            <Users className="w-8 h-8 text-emerald-400 mx-auto mb-3" />
            <h3 className="text-lg font-semibold text-foreground">
              Staying Real
            </h3>
            <p className="text-sm text-muted-foreground mt-2">
              I’m not building a fitness platform — just sharing what I’ve
              learned. Sometimes simple tools can make a real difference.
            </p>
          </div>
        </div>
      </section>

      {/* 💌 Modular Contact Section */}
      <div id="contact" className="scroll-mt-24">
        <ContactCard />
      </div>
    </div>
  );
}
