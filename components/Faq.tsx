import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

export function FAQSection() {
  const FAQS = [
    {
      question: "What is GymBuddy and how does it help me?",
      answer:
        "GymBuddy is your all-in-one fitness companion. From detailed workout splits like Bro Split or Push-Pull-Legs to built-in BMI and calorie calculators — it helps you plan, track, and train smarter every day.",
    },
    {
      question: "Do I need gym experience to use GymBuddy?",
      answer:
        "Not at all! 💪 Whether you’re just starting out or already lifting heavy, GymBuddy provides structured workout plans tailored for every fitness level.",
    },
    {
      question: "Are the workout plans and tools free to use?",
      answer:
        "Yes, GymBuddy’s core workout plans and fitness calculators are completely free to use. You can explore everything without sign-ups or hidden paywalls.",
    },
    {
      question: "Can I use GymBuddy on my phone?",
      answer:
        "Absolutely. GymBuddy is designed to work seamlessly across devices — whether you’re checking your plan at the gym or calculating macros on your phone.",
    },
  ];

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none [mask-image:radial-gradient(ellipse_at_center,white,transparent_70%)] bg-[radial-gradient(circle_at_center,theme(colors.neutral.800/20)_0%,transparent_50%)]" />

      <div className="container max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground">
            Your Questions, <span className="text-emerald-400">Answered</span>
          </h2>
          <p className="text-muted-foreground mt-2">
            Here are some of the most common questions lifters ask before
            starting their GymBuddy journey.
          </p>
        </div>

        <Accordion
          type="single"
          collapsible
          className="w-full divide-y divide-border/40 rounded-2xl border border-border/60 bg-card/50 backdrop-blur-sm shadow-sm"
        >
          {FAQS.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="transition-all duration-300 hover:bg-muted/10"
            >
              <AccordionTrigger className="text-base font-medium py-5 px-6 hover:no-underline data-[state=open]:text-primary">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-5 text-sm text-muted-foreground leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <p className="text-sm text-muted-foreground mt-8 text-center">
          Still have questions?{" "}
          <a
            href="/faq"
            className="font-medium text-primary hover:underline underline-offset-4"
          >
            View all FAQs →
          </a>
        </p>
      </div>
    </section>
  );
}
