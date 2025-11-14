import { Card } from "@/components/ui/card";
import { Dumbbell, Lightbulb } from "lucide-react";

interface WorkoutItem {
  name: string;
  mechanics: string;
  sets: number;
  reps: string;
  equipment: string;
  focus: string;
}

interface WorkoutOutlineTableProps {
  title: string;
  workouts: WorkoutItem[];
  note?: string;
}

export function WorkoutOutlineTable({
  title,
  workouts,
  note = "This plan focuses on compound movements first, then isolation work for shaping and definition.",
}: WorkoutOutlineTableProps) {
  return (
    <section className="container max-w-5xl mx-auto mb-10">
      <Card className="border border-zinc-800 bg-zinc-950/70 backdrop-blur-sm p-6 rounded-2xl shadow-sm">
        <div className="flex items-center gap-2 mb-5">
          <Dumbbell className="w-5 h-5 text-emerald-400" />
          <h2 className="text-xl font-semibold text-foreground">{title}</h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm text-gray-300 border-collapse">
            <thead>
              <tr className="border-b border-zinc-800 text-gray-400 uppercase text-xs">
                <th className="py-3 px-4 text-left">Exercise</th>
                <th className="py-3 px-4 text-center">Mechanics</th>
                <th className="py-3 px-4 text-center">Sets</th>
                <th className="py-3 px-4 text-center">Reps</th>
                <th className="py-3 px-4 text-center">Equipment</th>
                <th className="py-3 px-4 text-left">Primary Focus</th>
              </tr>
            </thead>
            <tbody>
              {workouts.map((w, i) => (
                <tr
                  key={i}
                  className="border-b border-zinc-800 hover:bg-zinc-900/60 transition-colors"
                >
                  <td className="py-3 px-4 text-foreground font-medium">
                    {w.name}
                  </td>
                  <td className="py-3 px-4 text-center text-gray-400">
                    {w.mechanics}
                  </td>
                  <td className="py-3 px-4 text-center">{w.sets}</td>
                  <td className="py-3 px-4 text-center">{w.reps}</td>
                  <td className="py-3 px-4 text-center text-gray-400">
                    {w.equipment}
                  </td>
                  <td className="py-3 px-4 text-gray-400">{w.focus}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className=" flex items-center gap-2 text-xs text-muted-foreground">
          <Lightbulb className="w-3 h-3 text-emerald-400" />
          <p>{note}</p>
        </div>
      </Card>
    </section>
  );
}
