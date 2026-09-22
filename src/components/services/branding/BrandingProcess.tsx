"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { brandingProcess } from "@/data/branding";
import { Workflow, ChevronLeft, ChevronRight } from "lucide-react";

const AUTOPLAY_MS = 4500;

export function BrandingProcess() {
  const prefersReducedMotion = useReducedMotion();
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (prefersReducedMotion || paused) return;
    timerRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % brandingProcess.length);
    }, AUTOPLAY_MS);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [active, paused, prefersReducedMotion]);

  const goTo = (index: number) => setActive((index + brandingProcess.length) % brandingProcess.length);
  const step = brandingProcess[active];
  const Icon = step.icon;

  return (
    <section className="relative overflow-hidden bg-transparent py-14 sm:py-20" aria-labelledby="branding-process-heading">
      <div className="pointer-events-none absolute right-10 top-1/4 -z-10 h-80 w-80 rounded-full bg-gold-400/10 blur-[90px]" />

      <Container>
        <div className="max-w-2xl">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-50/80 px-3.5 py-1 text-xs font-extrabold text-blue-800">
              <Workflow className="h-3.5 w-3.5 text-blue-600" />
              <span>Auto-Playing Process</span>
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 id="branding-process-heading" className="mt-3 text-3xl font-black tracking-tight text-ink sm:text-4xl">
              Our Branding Process
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-3 text-sm sm:text-base leading-relaxed text-muted">
              A strategic, research-led approach that builds powerful brand identities from the ground up with
              measurable results at every stage.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.12}>
          <div
            className="mt-10 rounded-3xl border border-ink/8 bg-white p-6 shadow-[0_20px_50px_-15px_rgba(20,21,26,0.1)] sm:p-10"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onFocus={() => setPaused(true)}
            onBlur={() => setPaused(false)}
          >
            {/* Step pips */}
            <div className="flex items-center justify-center gap-2 sm:gap-3" role="tablist" aria-label="Branding process steps">
              {brandingProcess.map((s, idx) => (
                <button
                  key={s.number}
                  type="button"
                  role="tab"
                  aria-selected={idx === active}
                  onClick={() => goTo(idx)}
                  className={
                    "focus-ring flex h-10 w-10 items-center justify-center rounded-full font-mono text-xs font-black transition-all duration-300 " +
                    (idx === active
                      ? "bg-gradient-to-br from-blue-600 to-blue-800 text-white shadow-md scale-110"
                      : "border border-ink/10 bg-surface text-ink/50 hover:border-blue-300/60 hover:text-blue-700")
                  }
                >
                  {s.number}
                </button>
              ))}
            </div>

            {/* Active step content */}
            <div className="relative mt-8 min-h-[180px] sm:min-h-[160px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="flex flex-col items-center text-center"
                >
                  <div className="flex items-center gap-2 text-[11px] font-black uppercase tracking-wider text-blue-700">
                    <span>Step {step.number}</span>
                    <span className="h-1 w-1 rounded-full bg-ink/20" />
                    <span className="inline-flex items-center gap-1.5 text-gold-600">
                      <span className="h-1.5 w-1.5 rounded-full bg-gold-500 animate-pulse" />
                      Step Active
                    </span>
                  </div>

                  <div className="mt-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white shadow-md">
                    <Icon className="h-7 w-7" aria-hidden="true" />
                  </div>

                  <h3 className="mt-4 text-xl font-black tracking-tight text-ink sm:text-2xl">{step.title}</h3>
                  <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted sm:text-base">{step.description}</p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Controls */}
            <div className="mt-8 flex items-center justify-between border-t border-ink/8 pt-6">
              <button
                type="button"
                onClick={() => goTo(active - 1)}
                className="focus-ring flex items-center gap-1.5 rounded-lg px-3 py-2 text-xs font-bold text-ink/70 transition-colors hover:text-blue-700"
              >
                <ChevronLeft className="h-4 w-4" />
                Previous
              </button>

              <span className="font-mono text-xs font-bold text-ink/40">
                {active + 1}/{brandingProcess.length}
              </span>

              <button
                type="button"
                onClick={() => goTo(active + 1)}
                className="focus-ring flex items-center gap-1.5 rounded-lg px-3 py-2 text-xs font-bold text-ink/70 transition-colors hover:text-blue-700"
              >
                Next
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
