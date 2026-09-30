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
        <div className="relative rounded-3xl border border-blue-900/15 bg-gradient-to-br from-white/95 via-surface/90 to-blue-50/40 p-8 sm:p-14 text-ink shadow-2xl backdrop-blur-2xl overflow-hidden">
          <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-blue-500/10 blur-[90px]" />

          <div className="relative z-10 max-w-3xl">
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-900/20 bg-blue-50/80 px-3.5 py-1 text-xs font-extrabold text-blue-900 backdrop-blur-md">
                <Sparkles className="h-3.5 w-3.5 text-blue-600" />
                <span>SCALE CREATOR CAMPAIGNS</span>
              </div>
            </Reveal>

            <Reveal delay={0.05}>
              <h2 id="influencer-cta-heading" className="mt-4 text-3xl sm:text-5xl font-black tracking-tight text-ink leading-tight">
                {influencerCta.heading}
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-4 text-base sm:text-lg text-muted font-medium leading-relaxed max-w-2xl">
                {influencerCta.description}
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  href={influencerCta.primaryCta.href}
                  className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-700 via-indigo-700 to-blue-800 px-7 py-3.5 text-sm font-black text-white shadow-lg shadow-blue-700/20 transition-all hover:scale-105"
                >
                  <span>{influencerCta.primaryCta.label}</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <Link
                  href={influencerCta.secondaryCta.href}
                  className="inline-flex items-center gap-2 rounded-xl border border-blue-900/15 bg-white/80 px-6 py-3.5 text-sm font-bold text-ink shadow-sm transition-all hover:bg-white"
                >
                  <span>{influencerCta.secondaryCta.label}</span>
                </Link>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-8 pt-6 border-t border-blue-900/10 flex items-center gap-3 text-xs font-mono font-bold text-blue-900/80">
                <Heart className="h-4 w-4 text-blue-600" />
                <span>CONNECTING BRANDS WITH REAL CREATOR AUDIENCES WORLDWIDE</span>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
