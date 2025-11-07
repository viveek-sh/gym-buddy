import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";

interface SpotlightCardProps {
  title: string;
  category: string;
  image: string;
  href?: string;
  className?: string;
}

export function SpotlightCard({
  title,
  category,
  image,
  href = "#",
  className,
}: SpotlightCardProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group relative block w-full max-w-xs overflow-hidden rounded-2xl border border-border/50 bg-card hover:scale-[1.02] transition-transform duration-300 ease-out",
        className
      )}
    >
      {/* Image */}
      <div className="relative h-56 w-full">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-all duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
      </div>

      {/* Text overlay */}
      <CardContent className="absolute bottom-0 left-0 right-0 p-4 z-10 text-white">
        <p className="text-xs text-neutral-300">{category}</p>
        <h3 className="text-base font-semibold mt-1 leading-tight">{title}</h3>
      </CardContent>
    </Link>
  );
}
