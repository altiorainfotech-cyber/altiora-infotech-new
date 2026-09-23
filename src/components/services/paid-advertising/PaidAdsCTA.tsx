"use client";

import { useRef } from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { TiltCard } from "@/components/ui/TiltCard";
import { paidAdsCta } from "@/data/paidAdvertising";
import { Sparkles, TrendingUp, Zap, Target, ArrowRight } from "lucide-react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

export function PaidAdsCTA() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.85", "end 0.2"],
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 90, damping: 20 });

  return (
    <section ref={containerRef} className="relative overflow-hidden bg-transparent py-14 sm:py-24" aria-labelledby="paid-ads-cta-heading">
      <Container className="relative z-10">
        <Reveal>
          <TiltCard
            glowColor="gold"
            className="group overflow-hidden border border-ink/8 shadow-[0_25px_60px_-15px_rgba(20,21,26,0.1)] transition-shadow duration-300 hover:shadow-[0_30px_70px_-15px_rgba(28,79,161,0.18)]"
          >
            <div className="relative -m-6 overflow-hidden rounded-2xl sm:-m-8">
              <div className="absolute inset-3 z-0 rounded-2xl bg-gradient-to-br from-slate-900 via-blue-950 to-ink sm:inset-5 text-white" />

              {/* Background ambient lighting */}
              <div className="pointer-events-none absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-gold-400/20 blur-[90px]" />
              <div className="pointer-events-none absolute -bottom-24 right-10 h-72 w-72 rounded-full bg-blue-500/20 blur-[90px]" />

              <div className="relative z-10 p-8 text-center sm:p-16 text-white">
                {/* Section 11 Visual Convergence Signal Node */}
                <motion.div
                  className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-gold-400 via-amber-500 to-gold-600 text-ink shadow-2xl border-2 border-white/40"
                  style={{
                    scale: useTransform(smoothProgress, [0, 1], [0.75, 1.1]),
                    rotate: useTransform(smoothProgress, [0, 1], [-15, 0]),
                  }}
                >
                  <TrendingUp className="h-10 w-10 text-ink" />
                </motion.div>

                {/* Converging Signal Badges */}
                <div className="flex flex-wrap items-center justify-center gap-2 mb-6 font-mono text-[11px] font-bold text-gold-300">
                  <span className="rounded-full bg-white/10 px-3 py-1 border border-white/15">AUDIENCE</span>
                  <ArrowRight className="h-3 w-3 text-gold-400" />
                  <span className="rounded-full bg-white/10 px-3 py-1 border border-white/15">CAMPAIGN</span>
                  <ArrowRight className="h-3 w-3 text-gold-400" />
                  <span className="rounded-full bg-white/10 px-3 py-1 border border-white/15">DATA</span>
                  <ArrowRight className="h-3 w-3 text-gold-400" />
                  <span className="rounded-full bg-white/10 px-3 py-1 border border-white/15">CONVERSION</span>
                  <ArrowRight className="h-3 w-3 text-gold-400" />
                  <span className="rounded-full bg-gold-400 text-ink font-black px-3.5 py-1">GROWTH</span>
                </div>

                <div className="inline-flex items-center gap-2 rounded-full border border-gold-400/40 bg-gold-400/10 px-4 py-1.5 text-xs font-black text-gold-300 shadow-2xs backdrop-blur-md">
                  <Sparkles className="h-4 w-4 text-gold-400" />
                  <span>Final Payoff</span>
                </div>

                <h2
                  id="paid-ads-cta-heading"
                  className="mx-auto mt-5 max-w-2xl text-3xl font-black tracking-tight text-white sm:text-4xl text-balance leading-tight"
                >
                  {paidAdsCta.heading}
                </h2>

                <p className="mx-auto mt-4 max-w-xl text-sm sm:text-base font-medium leading-relaxed text-white/80 text-balance">
                  {paidAdsCta.description}
                </p>

                <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                  <Button
                    href={paidAdsCta.primaryCta.href}
                    className="px-9 py-4 text-base font-extrabold shadow-xl shadow-blue-600/20 transition-transform duration-200 hover:scale-105"
                  >
                    {paidAdsCta.primaryCta.label}
                  </Button>
                  <Button
                    href={paidAdsCta.secondaryCta.href}
                    variant="secondary"
                    className="px-9 py-4 text-base font-extrabold bg-white text-ink hover:bg-slate-100"
                  >
                    {paidAdsCta.secondaryCta.label}
                  </Button>
                </div>
              </div>

              <div className="pointer-events-none absolute inset-x-10 bottom-0 h-1 bg-gradient-to-r from-transparent via-gold-400 to-transparent" />
            </div>
          </TiltCard>
        </Reveal>
      </Container>
    </section>
  );
}
