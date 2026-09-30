"use client";

import Link from "next/link";
import { ArrowRight, Sparkles, Search } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { seoCta } from "@/data/seo";

export function SeoCTA() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-24" aria-labelledby="seo-cta-heading">
      <Container>
        <div className="relative rounded-3xl border border-blue-900/15 bg-gradient-to-br from-white/95 via-surface/90 to-blue-50/40 p-8 sm:p-14 text-ink shadow-2xl overflow-hidden backdrop-blur-2xl">
          <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-blue-500/10 blur-[90px]" />

          <div className="relative z-10 max-w-3xl">
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/40 bg-blue-50/90 px-4 py-1.5 text-xs font-black text-blue-800 shadow-xs backdrop-blur-md">
                <Sparkles className="h-3.5 w-3.5 text-blue-600 animate-pulse" />
                <span>FINAL SIGNAL CONVERGENCE PAYOFF</span>
              </div>
            </Reveal>

            <Reveal delay={0.05}>
              <h2 id="seo-cta-heading" className="mt-4 text-3xl sm:text-5xl font-black tracking-tight text-ink leading-tight">
                {seoCta.heading}
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-4 text-base sm:text-lg text-muted font-medium leading-relaxed max-w-2xl">
                {seoCta.description}
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  href={seoCta.primaryCta.href}
                  className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 px-7 py-3.5 text-sm font-black text-white shadow-xl shadow-blue-600/25 transition-all hover:scale-105"
                >
                  <span>{seoCta.primaryCta.label}</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <Link
                  href={seoCta.secondaryCta.href}
                  className="inline-flex items-center gap-2 rounded-xl border border-ink/15 bg-white px-6 py-3.5 text-sm font-bold text-ink shadow-sm transition-all hover:bg-surface hover:scale-105"
                >
                  <span>{seoCta.secondaryCta.label}</span>
                </Link>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-8 pt-6 border-t border-ink/10 flex items-center gap-3 text-xs font-mono font-bold text-blue-900">
                <Search className="h-4 w-4 text-blue-600" />
                <span>TURNING ORGANIC SEARCH INTO CONTINUOUS REVENUE GROWTH</span>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
