"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring, useReducedMotion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { TiltCard } from "@/components/ui/TiltCard";
import { processSteps } from "@/data/homepage";
import { RefreshCw } from "lucide-react";

export function ProcessTimeline() {
  const trackRef = useRef<HTMLOListElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start 0.75", "end 0.4"],
  });
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 24, mass: 0.4 });

  return (
    <section className="relative overflow-hidden bg-transparent py-20 sm:py-24" aria-labelledby="process-heading">
      <Container>
        <SectionHeading
          headingId="process-heading"
          eyebrow="Closed-Loop Execution Engine"
          title="Strategy → Build → Traffic → Measure → Optimize"
          description="Growth is not a one-time campaign. It is a continuous closed-loop performance system."
          tone="light"
        />

        <div className="relative mt-16">
          <ol ref={trackRef} className="relative z-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            <div className="absolute left-0 right-0 top-[28px] hidden h-1 bg-blue-900/10 lg:block rounded-full" aria-hidden="true" />
            <motion.div
              className="absolute left-0 top-[28px] hidden h-1 origin-left bg-gradient-to-r from-blue-600 via-gold-400 to-emerald-500 shadow-[0_0_12px_rgba(37,99,235,0.6)] lg:block rounded-full"
              style={{ scaleX: progress, right: 0 }}
              aria-hidden="true"
            />

            {processSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <Reveal key={step.number} as="li" delay={index * 0.1} className="relative">
                  <TiltCard glowColor={index % 2 === 0 ? "gold" : "blue"} className="h-full p-6 sm:p-7 border-blue-900/10 bg-gradient-to-b from-white/95 via-surface/90 to-blue-50/20 shadow-xl backdrop-blur-2xl">
                    <div className="relative z-10 flex items-center justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-blue-400/30 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white shadow-md shadow-blue-600/20">
                        <Icon className="h-6 w-6" aria-hidden="true" />
                      </div>
                      <span className="text-xs font-mono font-black tracking-widest text-blue-800 bg-blue-50 px-3 py-1 rounded-lg border border-blue-200">
                        {step.number}
                      </span>
                    </div>
                    <h3 className="mt-5 text-lg font-extrabold leading-snug tracking-tight text-ink">
                      {step.title}
                    </h3>
                    <p className="mt-2.5 text-xs leading-relaxed text-muted font-medium">{step.description}</p>
                  </TiltCard>
                </Reveal>
              );
            })}
          </ol>

          {/* SVG Closed Feedback Loop connecting Stage 4 back to Stage 1 */}
          <div className="mt-10 hidden lg:flex items-center justify-center">
            <div className="relative flex items-center gap-3 rounded-full border border-blue-400/40 bg-white/90 px-6 py-3 shadow-lg backdrop-blur-md">
              <RefreshCw className="h-4 w-4 text-blue-600 animate-spin" style={{ animationDuration: "8s" }} />
              <span className="text-xs font-black text-blue-950 tracking-wide">
                Stage 04 Conversion Telemetry Feeds Back Into Stage 01 Strategy Loop
              </span>
              <svg className="h-4 w-32 overflow-visible" viewBox="0 0 120 10" fill="none">
                <motion.path
                  d="M 0 5 H 120"
                  stroke="#163f85"
                  strokeWidth="2.5"
                  strokeDasharray="4 4"
                  initial={prefersReducedMotion ? undefined : { strokeDashoffset: 20 }}
                  animate={prefersReducedMotion ? undefined : { strokeDashoffset: 0 }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                />
              </svg>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
