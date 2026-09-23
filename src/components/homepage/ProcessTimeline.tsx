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
    <section className="relative overflow-hidden bg-transparent py-16 sm:py-20 lg:py-24" aria-labelledby="process-heading">
      <Container>
        <SectionHeading
          headingId="process-heading"
          eyebrow="Continuous Growth Loop"
          title="Strategy → Build → Traffic → Measure → Optimize → Repeat"
          description="Growth is not a one-time project. It is a compounding, continuous closed-loop engine."
          tone="light"
        />

        <div className="relative mt-16">
          <ol ref={trackRef} className="relative z-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            <div className="absolute left-0 right-0 top-[26px] hidden h-px bg-ink/10 lg:block" aria-hidden="true" />
            <motion.div
              className="absolute left-0 top-[26px] hidden h-px origin-left bg-gradient-to-r from-gold-500 via-blue-500 to-gold-500 shadow-[0_0_10px_rgba(201,162,39,0.5)] lg:block"
              style={{ scaleX: progress, right: 0 }}
              aria-hidden="true"
            />

            {processSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <Reveal key={step.number} as="li" delay={index * 0.1} className="relative">
                  <TiltCard glowColor={index % 2 === 0 ? "gold" : "blue"} className="h-full p-6">
                    <div className="relative z-10 flex items-center justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-blue-400/30 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white shadow-md shadow-blue-500/20">
                        <Icon className="h-6 w-6" aria-hidden="true" />
                      </div>
                      <span className="text-sm font-black font-mono tracking-widest text-blue-600">
                        {step.number}
                      </span>
                    </div>
                    <h3 className="mt-5 text-lg font-bold leading-snug tracking-tight text-ink">
                      {step.title}
                    </h3>
                    <p className="mt-2.5 text-xs leading-relaxed text-muted">{step.description}</p>
                  </TiltCard>
                </Reveal>
              );
            })}
          </ol>

          {/* SVG Closed Feedback Loop connecting Stage 4 back to Stage 1 */}
          <div className="mt-8 hidden lg:flex items-center justify-center">
            <div className="relative flex items-center gap-3 rounded-full border border-blue-500/30 bg-blue-50/80 px-6 py-2.5 shadow-md backdrop-blur-md">
              <RefreshCw className="h-4 w-4 text-blue-600 animate-spin" style={{ animationDuration: "8s" }} />
              <span className="text-xs font-bold text-blue-900 tracking-wide">
                Stage 04 Telemetry Feeds Back Into Stage 01 Strategy Loop
              </span>
              <svg className="h-4 w-32 overflow-visible" viewBox="0 0 120 10" fill="none">
                <motion.path
                  d="M 0 5 H 120"
                  stroke="#163f85"
                  strokeWidth="2"
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
