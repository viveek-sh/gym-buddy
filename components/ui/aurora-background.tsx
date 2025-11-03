"use client";
import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";
interface AuroraBackgroundProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  showRadialGradient?: boolean;
}
export const AuroraBackground = ({
  className,
  children,
  showRadialGradient = true,
  ...props
}: AuroraBackgroundProps) => {
  return (
    <main>
      <div
        className={cn(
          "relative flex h-screen flex-col items-center justify-center overflow-hidden",
          "bg-neutral-950 text-neutral-50",
          className
        )}
      >
        {/* 1. Deep forged-metal base */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(140% 140% at 50% 20%, #121212 0%, #080808 80%), linear-gradient(135deg, #0b0b0b 0%, #0f0f0f 100%)",
          }}
        />

        {/* 2. Slow brushed-metal flow */}
        <div
          className="absolute inset-0 opacity-70"
          style={{
            backgroundImage: `
              repeating-linear-gradient(
                45deg,
                #1a1a1a 0px,
                #1a1a1a 30px,
                #161616 30px,
                #161616 60px
              )
            `,
            backgroundSize: "300% 300%",
            animation: "brush 32s linear infinite",
          }}
        />

        {/* 3. Liquid chrome swirl */}
        <div
          className="absolute inset-0 mix-blend-soft-light opacity-50"
          style={{
            background: `
              conic-gradient(
                from 0deg at 50% 50%,
                #333, #222, #2a2a2a, #333, #222, #2a2a2a
              )
            `,
            backgroundSize: "400% 400%",
            animation: "swirl 28s ease-in-out infinite",
          }}
        />

        {/* 4. Holographic sweep (the magic bar) */}
        <div
          className="pointer-events-none absolute inset-0 opacity-25"
          style={{
            background: `
              linear-gradient(
                90deg,
                transparent,
                rgba(120, 200, 255, 0.12) 30%,
                rgba(180, 120, 255, 0.18) 50%,
                rgba(120, 200, 255, 0.12) 70%,
                transparent
              )
            `,
            backgroundSize: "200% 100%",
            animation: "sheen 9s ease-in-out infinite",
          }}
        />

        {/* 5. Micro carbon fiber */}
        <div
          className="absolute inset-0 opacity-10 mix-blend-overlay"
          style={{
            background: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.95' numOctaves='4'/%3E%3C/filter%3E%3Crect width='256' height='256' filter='url(%23n)'/%3E%3C/svg%3E")`,
          }}
        />

        {/* Content */}
        <div className="relative z-10 px-8 text-center">{children}</div>
      </div>

      {/* 3 buttery keyframes */}
      <style jsx global>{`
        @keyframes brush {
          0% { background-position: 0% 0%; }
          100% { background-position: 300% 300%; }
        }
        @keyframes swirl {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes sheen {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
      `}</style>
    </main>



  );
};