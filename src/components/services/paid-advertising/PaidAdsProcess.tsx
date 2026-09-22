"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { paidAdsProcess } from "@/data/paidAdvertising";
import { Workflow } from "lucide-react";

export function PaidAdsProcess() {
  const trackRef = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start 0.75", "end 0.4"],
  });
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 24, mass: 0.4 });

  return (
    <section className="relative overflow-hidden bg-transparent py-14 sm:py-20" aria-labelledby="process-heading">
      <div className="pointer-events-none absolute right-10 top-1/4 -z-10 h-80 w-80 rounded-full bg-gold-400/10 blur-[90px]" />

      <Container>
        <div className="max-w-2xl">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-50/80 px-3.5 py-1 text-xs font-extrabold text-blue-800">
              <Workflow className="h-3.5 w-3.5 text-blue-600" />
              <span>How Campaigns Come Together</span>
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 id="process-heading" className="mt-3 text-3xl font-black tracking-tight text-ink sm:text-4xl">
              Our Advertising Process
            </h2>
          </Reveal>
        </div>

        <ol ref={trackRef} className="relative mt-16 grid grid-cols-2 gap-x-6 gap-y-12 sm:grid-cols-3 lg:grid-cols-6">
          <div className="pointer-events-none absolute left-0 right-0 top-6 hidden h-px bg-ink/10 lg:block" aria-hidden="true" />
          <motion.div
            className="pointer-events-none absolute left-0 top-6 hidden h-px origin-left bg-gradient-to-r from-blue-600 via-gold-400 to-blue-600 shadow-[0_0_10px_rgba(28,79,161,0.4)] lg:block"
            style={{ scaleX: progress, right: 0 }}
            aria-hidden="true"
          />

          {paidAdsProcess.map((step, idx) => {
            const Icon = step.icon;
            const gold = idx % 2 === 1;

            return (
              <Reveal key={step.number} as="li" delay={idx * 0.08} className="relative flex flex-col items-start">
                <div
                  className={
                    "relative z-10 flex h-12 w-12 items-center justify-center rounded-full text-white border shadow-md transition-transform duration-300 hover:scale-110 " +
                    (gold
                      ? "bg-gradient-to-br from-gold-500 to-gold-700 border-gold-300/40"
                      : "bg-gradient-to-br from-blue-600 to-blue-800 border-blue-400/30")
                  }
                >
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>

                <span className="mt-3 font-mono text-[11px] font-black tracking-wider text-blue-800">
                  {step.number}
                </span>
                <h3 className="mt-1 text-sm font-bold leading-snug tracking-tight text-ink">
                  {step.title}
                </h3>
                <p className="mt-1.5 text-xs leading-relaxed text-muted">{step.description}</p>
              </Reveal>
            );
          })}
        </ol>
      </Container>
    </section>
  );
}
