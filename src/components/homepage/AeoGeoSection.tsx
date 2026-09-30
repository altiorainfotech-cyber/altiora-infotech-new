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
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/40 bg-blue-50/90 px-4 py-1.5 text-xs font-black text-blue-800 shadow-xs backdrop-blur-md">
              <Bot className="h-4 w-4 text-blue-600 animate-pulse" />
              <span>{aeoGeo.eyebrow}</span>
            </div>
            <h2
              id="aeo-geo-heading"
              className="font-display mt-5 text-[clamp(1.75rem,3vw,2.75rem)] font-bold leading-[1.15] tracking-tight text-ink text-balance"
            >
              {aeoGeo.heading}
            </h2>
            <p className="mt-5 max-w-[55ch] text-base leading-relaxed text-muted sm:text-lg">
              {aeoGeo.description}
            </p>

            <div className="mt-8">
              <Button href="/services/aeo-geo" className="shadow-lg shadow-blue-600/20 ring-2 ring-blue-500/20">
                Explore AEO &amp; GEO Strategy
              </Button>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <motion.div
              animate={{ y: [-5, 5, -5] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <TiltCard glowColor="blue" className="relative mx-auto flex max-w-md flex-col items-center p-8 sm:p-10 border-blue-900/10 bg-gradient-to-br from-white/95 via-surface/90 to-blue-50/30 shadow-2xl backdrop-blur-2xl">
                <div className="flex items-center gap-2.5 rounded-2xl border border-blue-400/30 bg-blue-50/90 px-6 py-3 text-xs font-black text-blue-800 shadow-xs backdrop-blur-md">
                  <Search className="h-4 w-4 text-blue-600" />
                  <span>Search Intent &amp; AI Neural Lattice</span>
                </div>

                <svg viewBox="0 0 4 90" className="h-[90px] w-1 my-3" aria-hidden="true">
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
                      className="flex items-center justify-between rounded-2xl border border-blue-900/10 bg-white/90 px-5 py-3.5 text-xs font-bold text-ink shadow-xs hover:border-blue-400/50 hover:bg-blue-50/50 hover:scale-[1.02] transition-all"
                    >
                      <div className="flex items-center gap-3">
                        <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-50 text-blue-700 border border-blue-200">
                          <Cpu className="h-4 w-4" />
                        </div>
                        <span>{target}</span>
                      </div>
                      <span className="h-2.5 w-2.5 rounded-full bg-blue-600 shadow-sm animate-pulse" aria-hidden="true" />
                    </li>
                  ))}
                </ul>
              </TiltCard>
            </motion.div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
