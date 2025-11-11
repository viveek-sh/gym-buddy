import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import {
  Dumbbell,
  UserRound,
  Smartphone,
  Coins,
  HelpCircle,
  Activity,
  Info,
  Settings,
} from "lucide-react";

export function FAQSection() {
  const FAQS = [
    {
      question: "What is GymBuddy and how does it help me?",
      answer:
        "GymBuddy is your all-in-one fitness companion — offering structured workout plans like Bro Split and Push–Pull–Legs, plus built-in BMI and calorie calculators to help you train smarter.",
      icon: Dumbbell,
    },
    {
      question: "Do I need gym experience to use GymBuddy?",
      answer:
        "Not at all! 💪 Whether you're new to training or already lifting heavy, GymBuddy offers plans tailored for every fitness level.",
      icon: UserRound,
    },
    {
      question: "Can I use GymBuddy on my phone?",
      answer:
        "Absolutely! GymBuddy is fully responsive — plan, track, or calculate on any device, wherever you train.",
      icon: Smartphone,
    },
    {
      question: "Are the workout plans and tools free to use?",
      answer:
        "Yes — GymBuddy’s core tools are completely free. No sign-ups, no subscriptions, just progress.",
      icon: Coins,
    },
    {
      question: "How does GymBuddy track my progress?",
      answer:
        "By letting you log workouts, monitor calories, and visualize your progress across sessions for a clearer growth picture.",
      icon: Activity,
    },
    {
      question: "Need help or want to suggest a feature?",
      answer:
        "We’re always improving! Reach out anytime through our contact page or share feedback to help shape the next version of GymBuddy.",
      icon: HelpCircle,
    },
  ];

  const half = Math.ceil(FAQS.length / 2);
  const left = FAQS.slice(0, half);
  const right = FAQS.slice(half);

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Radial soft background glow */}
      <div className="absolute inset-0 pointer-events-none [mask-image:radial-gradient(ellipse_at_center,white,transparent_70%)] bg-[radial-gradient(circle_at_center,theme(colors.neutral.800/20)_0%,transparent_50%)]" />

      <div className="container max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground">
            Support & <span className="text-emerald-400">Documentation</span>
          </h2>
          <p className="text-muted-foreground mt-2">
            Quick answers to questions you may have. Can’t find what you’re
            looking for?{" "}
            <a
              href="/docs"
              className="text-primary font-medium hover:underline underline-offset-4"
            >
              Check out our full documentation.
            </a>
          </p>
        </div>

        {/* Two-Column Layout */}
        <div className="grid gap-8 md:grid-cols-2">
          {[left, right].map((column, i) => (
            <Accordion
              key={i}
              type="single"
              collapsible
              className="divide-y divide-border/30 rounded-2xl border border-border/60 bg-card/40 backdrop-blur-sm shadow-sm"
            >
              {column.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="transition-all duration-300 hover:bg-muted/5"
                >
                  <AccordionTrigger className="flex items-center gap-3 px-5 py-5 text-base font-medium text-foreground hover:no-underline data-[state=open]:text-emerald-400">
                    <faq.icon className="w-5 h-5 text-muted-foreground" />
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-11 pb-5 text-sm text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          ))}
        </div>
      </div>
    </section>
  );
}
