"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { TiltCard } from "@/components/ui/TiltCard";
import { aeoGeo } from "@/data/homepage";
import { Bot, Cpu, Search } from "lucide-react";

export function AeoGeoSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-transparent py-16 sm:py-20 lg:py-24" aria-labelledby="aeo-geo-heading">
      <Container>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-50 px-3.5 py-1 text-xs font-bold text-blue-700">
              <Bot className="h-3.5 w-3.5 text-blue-600 animate-pulse" />
              <span>{aeoGeo.eyebrow}</span>
            </div>
            <h2
              id="aeo-geo-heading"
              className="mt-5 text-[clamp(1.75rem,3vw,2.75rem)] font-extrabold leading-[1.15] tracking-tight text-ink text-balance"
            >
              {aeoGeo.heading}
            </h2>
            <p className="mt-5 max-w-[55ch] text-base leading-relaxed text-muted sm:text-lg">
              {aeoGeo.description}
            </p>

            <div className="mt-8">
              <Button href="/services/aeo-geo">
                Explore AEO & GEO Strategy
              </Button>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <TiltCard glowColor="blue" className="relative mx-auto flex max-w-md flex-col items-center p-8 sm:p-10">
              <div className="flex items-center gap-2.5 rounded-xl border border-blue-400/30 bg-blue-50 px-6 py-3 text-sm font-bold text-blue-700 shadow-sm">
                <Search className="h-4 w-4 text-blue-600" />
                <span>Search Intent & AI Neural Lattice</span>
              </div>

              <svg viewBox="0 0 4 90" className="h-[90px] w-1 my-2" aria-hidden="true">
                <defs>
                  <linearGradient id="aeo-line" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#163f85" />
                    <stop offset="100%" stopColor="#3d72c9" />
                  </linearGradient>
                </defs>
                <motion.line
                  x1="2"
                  y1="0"
                  x2="2"
                  y2="90"
                  stroke="url(#aeo-line)"
                  strokeWidth="3"
                  strokeLinecap="round"
                  initial={prefersReducedMotion ? undefined : { pathLength: 0 }}
                  whileInView={prefersReducedMotion ? undefined : { pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.1, ease: "easeInOut" }}
                />
              </svg>

              <ul className="flex w-full flex-col gap-3">
                {aeoGeo.targets.map((target) => (
                  <li
                    key={target}
                    className="flex items-center justify-between rounded-xl border border-ink/10 bg-white px-5 py-3 text-sm font-semibold text-ink shadow-sm hover:border-blue-400/40 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <Cpu className="h-4 w-4 text-blue-600" />
                      <span>{target}</span>
                    </div>
                    <span className="h-2 w-2 rounded-full bg-blue-600 shadow-sm" aria-hidden="true" />
                  </li>
                ))}
              </ul>
            </TiltCard>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
