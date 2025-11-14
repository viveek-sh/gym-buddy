import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Dumbbell, Camera, CheckCircle2, Shuffle } from "lucide-react";

interface FormImage {
  src: string;
  label?: string;
}

interface ExerciseDetail {
  name: string;
  description: string;
  keyPoints: string[];
  alternatives?: string[];
  images: FormImage[];
}

interface WokoutCardInterface {
  title: string;
  subtitle?: string;
  exercises: ExerciseDetail[];
}

export function WorkoutCard({
  title,
  subtitle,
  exercises,
}: WokoutCardInterface) {
  return (
    <section className="container max-w-5xl mx-auto mb-12">
      <Card className="border border-zinc-800 bg-zinc-950/70 backdrop-blur-sm rounded-2xl shadow-sm">
        {/* 🏋️ Header */}
        <div className="border-b border-zinc-800 p-6">
          <h2 className="text-2xl font-semibold text-foreground flex items-center gap-2">
            <Dumbbell className="w-6 h-6 text-emerald-400" />
            {title}
          </h2>
          {subtitle && (
            <p className="text-sm text-muted-foreground mt-1">{subtitle}</p>
          )}
        </div>

        <CardContent className="p-6 space-y-12">
          {exercises.map((exercise, index) => (
            <div key={index} className="space-y-6">
              {/* Exercise Title */}
              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">
                  {index + 1}. {exercise.name}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {exercise.description}
                </p>
              </div>

              {/* Form Images */}
              <div>
                <h4 className="text-sm font-medium text-foreground mb-3 flex items-center gap-2">
                  <Camera className="w-4 h-4 text-emerald-400" />
                  Form Reference
                </h4>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {exercise.images.map((img, i) => (
                    <div
                      key={i}
                      className="relative overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900/50 group"
                    >
                      <Image
                        src={img.src}
                        alt={img.label || `${exercise.name} form ${i + 1}`}
                        width={500}
                        height={500}
                        className="object-cover w-full h-56 transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Points */}
              <div>
                <h4 className="text-sm font-medium text-foreground mb-3 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  Key Points
                </h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  {exercise.keyPoints.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>

              {/* Alternatives */}
              {exercise.alternatives && exercise.alternatives.length > 0 && (
                <div>
                  <h4 className="text-sm font-medium text-foreground mb-3 flex items-center gap-2">
                    <Shuffle className="w-4 h-4 text-emerald-400" />
                    Alternative Exercises
                  </h4>
                  <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                    {exercise.alternatives.map((alt, i) => (
                      <li key={i}>{alt}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Divider (except last exercise) */}
              {index < exercises.length - 1 && (
                <div className="border-b border-zinc-800 pt-6" />
              )}
            </div>
          ))}
        </CardContent>
      </Card>
    </section>
  );
}
