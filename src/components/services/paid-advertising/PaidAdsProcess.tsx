"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { paidAdsProcess } from "@/data/paidAdvertising";
import { Workflow, Sparkles, RefreshCw, ArrowRight } from "lucide-react";

export function PaidAdsProcess() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.85", "end 0.4"],
  });

  const progress = useSpring(scrollYProgress, { stiffness: 90, damping: 20 });

  return (
    <section ref={containerRef} className="relative overflow-hidden bg-transparent py-14 sm:py-24" aria-labelledby="process-heading">
      <div className="pointer-events-none absolute right-10 top-1/4 -z-10 h-80 w-80 rounded-full bg-gold-400/10 blur-[90px]" />

      <Container>
        <div className="max-w-2xl">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-gold-400/40 bg-gold-50/80 px-3.5 py-1 text-xs font-extrabold text-gold-800">
              <Sparkles className="h-3.5 w-3.5 text-gold-600" />
              <span>MAJOR WOW MOMENT #3</span>
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 id="process-heading" className="mt-3 text-3xl font-black tracking-tight text-ink sm:text-5xl leading-tight">
              Continuous Campaign Lifecycle
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-3 text-sm sm:text-base leading-relaxed text-muted font-medium">
              Watch your campaign build in real time. Scroll progressively constructs each stage of the performance engine and loops scale back into strategy.
            </p>
          </Reveal>
        </div>

        {/* WOW #3 Interactive Lifecycle Machine Container */}
        <div className="mt-14 rounded-3xl border border-ink/10 bg-gradient-to-br from-slate-900 via-blue-950 to-ink p-6 sm:p-12 text-white shadow-2xl relative overflow-hidden">
          {/* Progress Connecting Track Line */}
          <div className="relative mb-8 hidden lg:block">
            <div className="h-1.5 w-full rounded-full bg-white/10" />
            <motion.div
              className="absolute top-0 left-0 h-1.5 rounded-full bg-gradient-to-r from-blue-500 via-gold-400 to-emerald-400 shadow-[0_0_15px_rgba(211,172,60,0.6)]"
              style={{ width: useTransform(progress, [0, 0.8], ["0%", "100%"]) }}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
            {paidAdsProcess.map((step, idx) => {
              const Icon = step.icon;
              // Scale threshold down to 0.8 so Step 06 (last card) activates 100% reliably before exiting viewport
              const threshold = (idx / (paidAdsProcess.length - 1)) * 0.8;

              return (
                <motion.div
                  key={step.number}
                  className="relative flex flex-col justify-between rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md transition-all duration-300 hover:border-gold-400/50"
                  style={{
                    opacity: useTransform(progress, [Math.max(0, threshold - 0.1), threshold], [0.35, 1]),
                    scale: useTransform(progress, [Math.max(0, threshold - 0.1), threshold], [0.93, 1]),
                  }}
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs font-black text-gold-400">{step.number}</span>
                      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-900 text-white border border-white/20">
                        <Icon className="h-4.5 w-4.5" />
                      </div>
                    </div>
                    <h3 className="mt-4 text-base font-black text-white leading-tight">{step.title}</h3>
                    <p className="mt-2 text-xs leading-relaxed text-white/70 font-medium">{step.description}</p>
                  </div>

                  <div className="mt-4 h-1 w-full rounded-full bg-white/10 overflow-hidden">
                    <motion.div
                      className="h-full bg-gold-400"
                      style={{
                        width: useTransform(progress, [threshold - 0.08, threshold], ["0%", "100%"]),
                      }}
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Section 10 Loop-Back Visual Signal */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-between border-t border-white/10 pt-6 text-xs font-mono font-bold text-white/70 gap-4">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
              <span>STAGE 06 (REPORT & SCALE) LOOPS BACK TO STAGE 01 (STRATEGY)</span>
            </div>
            <div className="flex items-center gap-2 text-gold-400 bg-gold-400/10 px-3 py-1.5 rounded-full border border-gold-400/30">
              <RefreshCw className="h-4 w-4 animate-spin" style={{ animationDuration: "10s" }} />
              <span>INFINITE GROWTH FLYWHEEL</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
