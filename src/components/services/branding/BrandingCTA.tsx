"use client";

import Link from "next/link";
import { ArrowRight, Sparkles, Compass } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { brandingCta } from "@/data/branding";

export function BrandingCTA() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-24" aria-labelledby="branding-cta-heading">
      <Container>
        <div className="relative rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 via-blue-950 to-ink p-8 sm:p-14 text-white shadow-2xl overflow-hidden">
          <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-blue-600/20 blur-[90px]" />

          <div className="relative z-10 max-w-3xl">
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full border border-gold-400/40 bg-gold-400/10 px-3.5 py-1 text-xs font-extrabold text-gold-300 backdrop-blur-md">
                <Sparkles className="h-3.5 w-3.5 text-gold-400" />
                <span>FINAL SIGNAL CONVERGENCE PAYOFF</span>
              </div>
            </Reveal>

            <Reveal delay={0.05}>
              <h2 id="branding-cta-heading" className="mt-4 text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
                {brandingCta.heading}
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-4 text-base sm:text-lg text-white/80 font-medium leading-relaxed max-w-2xl">
                {brandingCta.description}
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  href={brandingCta.primaryCta.href}
                  className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 px-7 py-3.5 text-sm font-black text-white shadow-lg shadow-blue-600/25 transition-all hover:scale-105"
                >
                  <span>{brandingCta.primaryCta.label}</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <Link
                  href={brandingCta.secondaryCta.href}
                  className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-bold text-white transition-all hover:bg-white/10"
                >
                  <span>{brandingCta.secondaryCta.label}</span>
                </Link>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-8 pt-6 border-t border-white/10 flex items-center gap-3 text-xs font-mono font-bold text-white/70">
                <Compass className="h-4 w-4 text-gold-400" />
                <span>BUILDING MARKET-LEADING BRANDS THAT COMMAND PREMIUM POSITIONING</span>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
