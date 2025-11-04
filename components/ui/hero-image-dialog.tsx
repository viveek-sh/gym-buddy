"use client";
import { cn } from "@/lib/utils";

type AnimationStyle =
  | "from-bottom"
  | "from-center"
  | "from-top"
  | "from-left"
  | "from-right"
  | "fade"
  | "top-in-bottom-out"
  | "left-in-right-out";

interface HeroVideoProps {
  animationStyle?: AnimationStyle;
  src?: string;
  heroAlt?: string;
  className?: string;
}

export function HeroImageDialog({
  src,
  heroAlt = "Hero Image",
  className,
}: HeroVideoProps) {
  return (
    <div className={cn("relative", className)}>
      <div className="group relative">
        {src ? (
          <img
            src={src}
            alt={heroAlt}
            width={1920}
            height={1080}
            className="w-full transition-all duration-200 ease-out group-hover:brightness-[0.8] isolate"
          />
        ) : (
          <div className="w-full aspect-video bg-background rounded-2xl" />
        )}
      </div>
    </div>
  );
}