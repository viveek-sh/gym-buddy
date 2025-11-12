import { Card, CardContent } from "@/components/ui/card";
import {
  Home,
  BicepsFlexed,
  Dumbbell,
  Flame,
  PersonStanding,
  HeartPulse,
} from "lucide-react";
import Link from "next/link";

interface CategoryCardProps {
  name: string;
  description: string;
  focus: string;
  duration: string;
  icon: string;
  active?: boolean;
  href: string;
}
const iconMap: Record<string, React.ElementType> = {
  Home,
  BicepsFlexed,
  Dumbbell,
  Flame,
  PersonStanding,
  HeartPulse,
};
export function CategoryCard({
  name,
  description,
  focus,
  duration,
  icon,
  active,
  href,
}: CategoryCardProps) {
  const Icon = iconMap[icon] || Dumbbell;

  return (
    <Link href={href} className="group block">
      <Card
        className={`relative overflow-hidden rounded-2xl border border-zinc-800 bg-gradient-to-br from-zinc-900 to-zinc-950 transition-all duration-500
          hover:-translate-y-1 hover:border-emerald-400/40
          ${active ? "ring-2 ring-emerald-500/60" : ""}`}
      >
        {/* ✅ Glow background moved outside CardContent */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.08),transparent)] opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none" />

        <CardContent className="relative p-6 flex flex-col h-full justify-between text-white z-10">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-emerald-500/20 rounded-xl">
                <Icon className="w-6 h-6 text-emerald-400" />
              </div>
              <h3 className="text-xl font-semibold">{name}</h3>
            </div>
            <span className="text-xs px-3 py-1 rounded-full font-medium bg-neutral-400/20 text-white">
              {duration}
            </span>
          </div>

          <p className="text-sm text-gray-300 flex-1 mb-3">{description}</p>

          <div className=" text-sm text-gray-400">
            <span>Goal : {focus}</span>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
