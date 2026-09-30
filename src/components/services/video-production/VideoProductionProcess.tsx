"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { videoProductionProcess, ProcessStep } from "@/data/videoProduction";
import { Sparkles, RefreshCw } from "lucide-react";

export function VideoProductionProcess() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.85", "end 0.4"],
  });

  const progress = useSpring(scrollYProgress, { stiffness: 90, damping: 20 });

  return (
    <section ref={containerRef} className="relative overflow-hidden bg-transparent py-14 sm:py-24" aria-labelledby="video-process-heading">
      <div className="pointer-events-none absolute right-10 top-1/4 -z-10 h-80 w-80 rounded-full bg-blue-400/10 blur-[90px]" />

      <Container>
        <div className="max-w-2xl">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/40 bg-blue-50/80 px-3.5 py-1 text-xs font-extrabold text-blue-800">
              <Sparkles className="h-3.5 w-3.5 text-blue-600" />
              <span>PRODUCTION WORKFLOW</span>
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 id="video-process-heading" className="mt-3 text-3xl font-black tracking-tight text-ink sm:text-5xl leading-tight">
              Continuous Video Lifecycle
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-3 text-sm sm:text-base leading-relaxed text-muted font-medium">
              Watch your video pipeline activate step-by-step as scroll progressively builds each phase of cinematic production.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 rounded-3xl border border-blue-900/15 bg-gradient-to-br from-white/95 via-surface/90 to-blue-50/40 p-6 sm:p-12 text-ink shadow-2xl relative overflow-hidden backdrop-blur-2xl">
          <div className="relative mb-8 hidden lg:block">
            <div className="h-1.5 w-full rounded-full bg-blue-900/10" />
            <motion.div
              className="absolute top-0 left-0 h-1.5 rounded-full bg-gradient-to-r from-blue-600 via-gold-500 to-indigo-600 shadow-[0_0_15px_rgba(59,130,246,0.4)]"
              style={{ width: useTransform(progress, [0, 0.8], ["0%", "100%"]) }}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
            {videoProductionProcess.map((step: ProcessStep, idx: number) => {
              const Icon = step.icon;
              const threshold = (idx / (videoProductionProcess.length - 1)) * 0.8;

              return (
                <motion.div
                  key={step.number}
                  className="relative flex flex-col justify-between rounded-2xl border border-blue-900/10 bg-white/80 p-5 backdrop-blur-md shadow-sm transition-all duration-300 hover:border-blue-500/50 hover:shadow-md"
                  style={{
                    opacity: useTransform(progress, [Math.max(0, threshold - 0.1), threshold], [0.35, 1]),
                    scale: useTransform(progress, [Math.max(0, threshold - 0.1), threshold], [0.93, 1]),
                  }}
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs font-black text-blue-800">{step.number}</span>
                      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-900 text-white shadow-sm border border-blue-800">
                        <Icon className="h-4.5 w-4.5" />
                      </div>
                    </div>
                    <h3 className="mt-4 text-base font-black text-ink leading-tight">{step.title}</h3>
                    <p className="mt-2 text-xs leading-relaxed text-muted font-medium">{step.description}</p>
                  </div>

                  <div className="mt-4 h-1 w-full rounded-full bg-slate-200 overflow-hidden">
                    <motion.div
                      className="h-full bg-blue-600"
                      style={{
                        width: useTransform(progress, [threshold - 0.08, threshold], ["0%", "100%"]),
                      }}
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-between border-t border-blue-900/10 pt-6 text-xs font-mono font-bold text-slate-700 gap-4">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-blue-600 animate-ping" />
              <span>STAGE 06 (DELIVERY) LOOPS AUDIENCE RETENTION INSIGHTS BACK TO STAGE 01 (CONCEPT)</span>
            </div>
            <div className="flex items-center gap-2 text-amber-900 bg-amber-50 px-3 py-1.5 rounded-full border border-amber-300/60 shadow-2xs">
              <RefreshCw className="h-4 w-4 text-amber-700 animate-spin" style={{ animationDuration: "10s" }} />
              <span>INFINITE CINEMATIC FLYWHEEL</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
