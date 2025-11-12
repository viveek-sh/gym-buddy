import Image from "next/image";
import Link from "next/link";
import { MagicBadge } from "./ui/magic-badge";

interface HeroProps {
  message?: string;
  heading?: string;
  description?: string;
  cta1?: {
    text: string;
    url: string;
  };
  cta2?: {
    text: string;
    url: string;
  };
  // reviews?: {
  //   count: number;
  //   rating?: number;
  //   avatars: {
  //     src: string;
  //     alt: string;
  //   }[];
  // };
}

const Hero = ({
  message = "Welcome to GYM Buddy👋!",
  heading = "Built for Lifters. Powered by Science.",
  description = "From advanced workout plans to real-time nutrition tracking — GymBuddy gives you the control to train the way you were meant to.",
  cta1 = {
    text: "Explore Splits",
    url: "/plansgiut",
  },
  cta2 = {
    text: "Calculators",
    url: "/calculators",
  },
}: HeroProps) => {
  return (
    // Hero Section option 1 More Maximalist
    // <AuroraBackground>
    //     <section className="lg:pt-150">
    //         <div className="container text-center ">
    //             <div className="mx-auto flex max-w-4xl flex-col gap-6">
    //               <h1 className="text-3xl font-semibold lg:text-6xl">{heading}</h1>
    //               <p className="text-muted-foreground text-balance lg:text-lg">
    //               {description}
    //               </p>
    //             </div>
    //             <Button asChild size="lg" className="mt-10">
    //                 <a href={button.url} target="_blank">{button.text}</a>
    //             </Button>
    //             <div className="mx-auto mt-10 flex w-fit flex-col items-center gap-4 sm:flex-row">
    //               <HeroImageSection />
    //             </div>
    //         </div>
    //     </section>
    // </AuroraBackground>
    <section id="hero" className="w-full relative">
      <div className="relative flex flex-col items-center w-full px-6">
        <div className="absolute inset-0">
          <div className="absolute inset-0 -z-10 h-[600px] md:h-[800px] w-full [background:radial-gradient(125%_125%_at_50%_10%,var(--background)_40%,var(--secondary)_100%)] rounded-b-xl"></div>
        </div>
        <div className="relative z-10 pt-25 max-w-3xl mx-auto h-full w-full flex flex-col gap-10 items-center justify-center">
          <p className="border border-border bg-accent rounded-full text-sm h-8 px-3 flex items-center gap-2">
            {message}
          </p>
          <div className="flex flex-col items-center justify-center gap-5">
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium tracking-tighter text-balance text-center text-primary">
              {heading}
            </h1>
            <p className="text-base md:text-lg text-center text-muted-foreground font-medium text-balance leading-relaxed tracking-tight">
              {description}
            </p>
          </div>
          <div className="flex items-center gap-2.5 flex-wrap justify-center">
            <Link
              href={cta1.url}
              className="bg-secondary h-9 flex items-center justify-center text-sm font-normal tracking-wide rounded-full text-secondary-foreground w-32 px-4 shadow-[inset_0_1px_2px_rgba(255,255,255,0.25),0_3px_3px_-1.5px_rgba(16,24,40,0.06),0_1px_1px_rgba(16,24,40,0.08)] border border-white/[0.12] hover:bg-secondary/80 transition-all ease-out active:scale-95"
            >
              {cta1.text}
            </Link>
            <Link href={cta2.url}>
              <MagicBadge title={cta2.text} />
            </Link>
            {/* <Link
              href={cta2.url}
              className="h-10 flex items-center justify-center w-32 px-5 text-sm font-normal tracking-wide text-primary rounded-full transition-all ease-out active:scale-95 bg-white dark:bg-background border border-[#E5E7EB] dark:border-[#27272A] hover:bg-white/80 dark:hover:bg-background/80"
            >
              {cta2.text}
            </Link> */}
          </div>
        </div>
      </div>
      <HeroImageSection />
    </section>
  );
};

function HeroImageSection() {
  return (
    <div className="relative mt-20 px-3 lg:px-0 flex justify-center">
      <div className="relative w-full md:max-w-6xl overflow-hidden rounded-2xl border border-white/5 bg-neutral-950/40 shadow-[0_0_40px_rgba(255,255,255,0.05)] backdrop-blur-md">
        <Image
          src="./images/hero.jpg"
          alt="Workout Dashboard Preview"
          className="w-full h-auto object-cover"
          width={1920}
          height={1080}
        />
        {/* Gradient overlay on image  */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neutral-900/20 to-neutral-900/60 pointer-events-none" />
      </div>
    </div>
  );
}

export { Hero };
