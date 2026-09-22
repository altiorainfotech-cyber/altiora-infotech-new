"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { TiltCard } from "@/components/ui/TiltCard";
import { AnimatedMetric } from "@/components/ui/AnimatedMetric";
import { aboutStats } from "@/data/about";

export function AboutMetrics() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-transparent py-10 sm:py-14" aria-label="Key statistics">
      {/* Background ambient lighting glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-72 w-full -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/5 blur-[120px]" />

      <Container>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {aboutStats.map((stat, index) => {
            const Icon = stat.icon;
            const glow = index % 2 === 0 ? "gold" : "blue";
            const isNumeric = /^\d/.test(stat.value) || /^[\$\+\-]\d/.test(stat.value);

            return (
              <motion.div
                key={stat.label}
                initial={prefersReducedMotion ? undefined : { y: 25, opacity: 0 }}
                whileInView={prefersReducedMotion ? undefined : { y: 0, opacity: 1 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
              >
                <TiltCard
                  glowColor={glow}
                  className="group relative flex h-full flex-col rounded-3xl border border-white/70 bg-gradient-to-b from-white/90 via-white/80 to-surface/90 p-6 sm:p-7 backdrop-blur-xl shadow-[0_15px_35px_-10px_rgba(20,21,26,0.06)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_25px_50px_-12px_rgba(28,79,161,0.18)]"
                >
                  {/* Glowing top line highlight */}
                  <div
                    className={`absolute inset-x-6 top-0 h-1 rounded-b-full transition-opacity duration-300 ${
                      index % 2 === 0
                        ? "bg-gradient-to-r from-transparent via-gold-400 to-transparent opacity-60 group-hover:opacity-100"
                        : "bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-60 group-hover:opacity-100"
                    }`}
                  />

                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white border border-blue-400/30 shadow-md transition-transform duration-300 group-hover:scale-110">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>

                  <div className="mt-6">
                    <div className="text-[clamp(2.25rem,3.5vw,3.25rem)] font-black leading-none tracking-tight text-ink">
                      {isNumeric ? <AnimatedMetric value={stat.value} /> : <span>{stat.value}</span>}
                    </div>

                    <h3 className="mt-2 text-sm font-extrabold tracking-tight text-ink">
                      {stat.label}
                    </h3>

                    <p className="mt-1 text-xs font-medium text-muted leading-relaxed">
                      {stat.subtext}
                    </p>
                  </div>
                </TiltCard>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
