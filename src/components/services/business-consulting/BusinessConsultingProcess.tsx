"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { businessConsultingProcess, ProcessStep } from "@/data/businessConsulting";
import { Sparkles, RefreshCw } from "lucide-react";

export function BusinessConsultingProcess() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.85", "end 0.4"],
  });

  const progress = useSpring(scrollYProgress, { stiffness: 90, damping: 20 });

  return (
    <section ref={containerRef} className="relative overflow-hidden bg-transparent py-14 sm:py-24" aria-labelledby="consulting-process-heading">
      <div className="pointer-events-none absolute right-10 top-1/4 -z-10 h-80 w-80 rounded-full bg-blue-600/10 blur-[90px]" />

      <Container>
        <div className="max-w-2xl">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-white/80 px-3.5 py-1 text-xs font-extrabold text-blue-800 shadow-sm backdrop-blur-md">
              <Sparkles className="h-3.5 w-3.5 text-blue-600" />
              <span>CONSULTING WORKFLOW</span>
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 id="consulting-process-heading" className="mt-3 text-3xl font-black tracking-tight text-ink sm:text-5xl leading-tight">
              Continuous Consulting Lifecycle
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-3 text-sm sm:text-base leading-relaxed text-muted font-medium">
              Watch your business advisory pipeline activate stage-by-stage as scroll progressively constructs your strategic transformation.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 rounded-3xl border border-blue-900/15 bg-gradient-to-br from-white/95 via-surface/90 to-blue-50/40 p-6 sm:p-12 text-ink shadow-2xl backdrop-blur-2xl relative overflow-hidden">
          <div className="relative mb-8 hidden lg:block">
            <div className="h-1.5 w-full rounded-full bg-blue-900/10" />
            <motion.div
              className="absolute top-0 left-0 h-1.5 rounded-full bg-gradient-to-r from-blue-700 via-indigo-600 to-blue-900 shadow-[0_0_15px_rgba(28,79,161,0.4)]"
              style={{ width: useTransform(progress, [0, 0.8], ["0%", "100%"]) }}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
            {businessConsultingProcess.map((step: ProcessStep, idx: number) => {
              const Icon = step.icon;
              const threshold = (idx / (businessConsultingProcess.length - 1)) * 0.8;

              return (
                <motion.div
                  key={step.number}
                  className="relative flex flex-col justify-between rounded-2xl border border-blue-900/15 bg-white/80 p-5 backdrop-blur-md transition-all duration-300 hover:border-blue-500 shadow-sm"
                  style={{
                    opacity: useTransform(progress, [Math.max(0, threshold - 0.1), threshold], [0.35, 1]),
                    scale: useTransform(progress, [Math.max(0, threshold - 0.1), threshold], [0.93, 1]),
                  }}
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs font-black text-blue-800">{step.number}</span>
                      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-50 text-blue-800 border border-blue-900/20">
                        <Icon className="h-4.5 w-4.5" />
                      </div>
                    </div>
                    <h3 className="mt-4 text-base font-black text-ink leading-tight">{step.title}</h3>
                    <p className="mt-2 text-xs leading-relaxed text-muted font-medium">{step.description}</p>
                  </div>

                  <div className="mt-4 h-1 w-full rounded-full bg-blue-900/10 overflow-hidden">
                    <motion.div
                      className="h-full bg-blue-700"
                      style={{
                        width: useTransform(progress, [threshold - 0.08, threshold], ["0%", "100%"]),
                      }}
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-between border-t border-blue-900/10 pt-6 text-xs font-mono font-bold text-blue-900/80 gap-4">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-blue-600 animate-ping" />
              <span>STAGE 06 (OPTIMIZE & SCALE) FEEDS GROWTH INSIGHTS BACK TO STAGE 01 (DISCOVERY)</span>
            </div>
            <div className="flex items-center gap-2 text-blue-900 bg-blue-50 px-3 py-1.5 rounded-full border border-blue-900/20">
              <RefreshCw className="h-4 w-4 text-blue-600 animate-spin" style={{ animationDuration: "10s" }} />
              <span>INFINITE ADVISORY FLYWHEEL</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
