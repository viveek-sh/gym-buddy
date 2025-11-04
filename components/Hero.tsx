import Image from "next/image"
import { Button } from "@/components/ui/button";
import { AuroraBackground } from '@/components/ui/aurora-background';
import Link from "next/link";
import { HeroImageDialog } from "@/components/ui/hero-image-dialog";


interface HeroProps {
  heading?: string;
  description?: string;
  button?: {
    text: string;
    url: string;
  };
  reviews?: {
    count: number;
    rating?: number;
    avatars: {
      src: string;
      alt: string;
    }[];
  };
}

const Hero = ({
  heading = "Built for Lifters. Powered by Science.",
  description = "From advanced workout plans to real-time nutrition tracking — GymBuddy gives you the control to train the way you were meant to.",
  button = {
    text: "Get Started",
    url: "https://viveksahu.dev",
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
            Welcome to GYM Buddy👋!
          </p>
          <div className="flex flex-col items-center justify-center gap-5">
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium tracking-tighter text-balance text-center text-primary">
              GYM Buddy
            </h1>
            <p className="text-base md:text-lg text-center text-muted-foreground font-medium text-balance leading-relaxed tracking-tight">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur corrupti quos nobis reiciendis id nisi nemo doloremque cupiditate sapiente porro?
            </p>
          </div>
          <div className="flex items-center gap-2.5 flex-wrap justify-center">
            <Link
              href="#"
              className="bg-secondary h-9 flex items-center justify-center text-sm font-normal tracking-wide rounded-full text-secondary-foreground w-32 px-4 shadow-[inset_0_1px_2px_rgba(255,255,255,0.25),0_3px_3px_-1.5px_rgba(16,24,40,0.06),0_1px_1px_rgba(16,24,40,0.08)] border border-white/[0.12] hover:bg-secondary/80 transition-all ease-out active:scale-95"
            >
              Get Started
            </Link>
            <Link
              href="#"
              className="h-10 flex items-center justify-center w-32 px-5 text-sm font-normal tracking-wide text-primary rounded-full transition-all ease-out active:scale-95 bg-white dark:bg-background border border-[#E5E7EB] dark:border-[#27272A] hover:bg-white/80 dark:hover:bg-background/80"
            >
              CTA-2 
            </Link>
          </div>
        </div>
      </div>
      <HeroImageSection />
    </section>
  );
};

function HeroImageSection() {
  return (
    <div className="relative px-6 mt-10">
      <div className="relative size-full shadow-xl rounded-2xl overflow-hidden">
        <HeroImageDialog className="block dark:hidden" animationStyle="from-center" src="/hero.jpg" heroAlt="Hero Image" />
        <HeroImageDialog className="hidden dark:block" animationStyle="from-center" src="/hero.jpg" heroAlt="Hero Image"/>
      </div>
    </div>
  );
}

export { Hero };

