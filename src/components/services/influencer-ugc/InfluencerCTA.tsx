"use client";

import Link from "next/link";
import { ArrowRight, Sparkles, Heart } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { influencerCta } from "@/data/influencerUgc";

export function InfluencerCTA() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-24" aria-labelledby="influencer-cta-heading">
      <Container>
        <div className="relative rounded-3xl border border-blue-500/20 bg-gradient-to-br from-slate-900 via-blue-950 to-ink p-8 sm:p-14 text-white shadow-2xl overflow-hidden">
          <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-blue-500/20 blur-[90px]" />

          <div className="relative z-10 max-w-3xl">
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/40 bg-blue-400/10 px-3.5 py-1 text-xs font-extrabold text-blue-300 backdrop-blur-md">
                <Sparkles className="h-3.5 w-3.5 text-gold-400" />
                <span>FINAL SIGNAL CONVERGENCE PAYOFF</span>
              </div>
            </Reveal>

            <Reveal delay={0.05}>
              <h2 id="influencer-cta-heading" className="mt-4 text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
                {influencerCta.heading}
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-4 text-base sm:text-lg text-white/80 font-medium leading-relaxed max-w-2xl">
                {influencerCta.description}
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  href={influencerCta.primaryCta.href}
                  className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 px-7 py-3.5 text-sm font-black text-white shadow-xl shadow-blue-500/30 transition-all hover:scale-105"
                >
                  <span>{influencerCta.primaryCta.label}</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <Link
                  href={influencerCta.secondaryCta.href}
                  className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-bold text-white transition-all hover:bg-white/10"
                >
                  <span>{influencerCta.secondaryCta.label}</span>
                </Link>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-8 pt-6 border-t border-white/10 flex items-center gap-3 text-xs font-mono font-bold text-white/70">
                <Heart className="h-4 w-4 text-blue-400" />
                <span>CONNECTING BRANDS WITH REAL CREATOR AUDIENCES WORLDWIDE</span>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
