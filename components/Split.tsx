"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface SplitCategory {
  title: string;
  description?: string;
  image: string;
  href: string;
}

interface TrainingSplitSectionProps {
  title: string;
  highlight: string;
  description: string;
  categories: SplitCategory[];
}

/* ------------------------------ Split Card ------------------------------ */
function SplitCard({
  title,
  description = "See more",
  image,
  href,
  className,
}: SplitCategory & { className?: string }) {
  return (
    <Link
      href={href}
      className={cn(
        "group relative block overflow-hidden rounded-2xl transition-transform duration-500 ease-out hover:scale-[1.02]",
        className
      )}
    >
      {/* 🖼️ Full Image Background */}
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          priority
        />

        {/* 🎨 Subtle glass overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-background/30 to-transparent" />

        {/* 🧊 Glass Text Box */}
        <div className="absolute bottom-0 left-0 right-0 p-5 z-10">
          <div className="rounded-xl bg-background/20 backdrop-blur-sm border border-border/50 p-4 shadow-[0_0_15px_rgba(0,0,0,0.2)] transition-all duration-300 group-hover:bg-background/70">
            <h3 className="text-lg font-semibold text-foreground leading-tight">
              {title}
            </h3>
            <p className="mt-2 flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors duration-300">
              {description}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}

/* ------------------------- Split Grid ------------------------ */
export default function SplitGrid({
  title,
  highlight,
  description,
  categories,
}: TrainingSplitSectionProps) {
  return (
    <section className="pb-20">
      <div className="container max-w-6xl mx-auto px-6">
        {/* 💪 Grid */}
        <div
          className={`grid gap-8 ${
            categories.length <= 4
              ? "sm:grid-cols-2 lg:grid-cols-2"
              : "sm:grid-cols-2 lg:grid-cols-3"
          }`}
        >
          {categories.map((cat, i) => (
            <SplitCard key={i} {...cat} />
          ))}
        </div>
      </div>
    </section>
  );
}
