"use client";

import { Megaphone, Target, Sparkles, Activity, TrendingUp } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { paidAdsHero } from "@/data/paidAdvertising";
import { PaidAdsHeroVisualClient } from "./PaidAdsHeroVisualClient";

export function PaidAdsHero() {
  return (
    <section className="relative overflow-hidden bg-transparent pt-10 pb-16 sm:pt-16 sm:pb-24">
      <div
        className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[550px] w-[950px] -translate-x-1/2 rounded-full bg-gradient-to-tr from-blue-600/10 via-gold-400/10 to-transparent blur-3xl opacity-80"
        aria-hidden="true"
      />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
          {/* Visual Animation Box: Appears FIRST on mobile (order-1), SECOND on desktop (lg:order-2) */}
          <div className="order-1 lg:order-2 lg:col-span-5 relative">
            <Reveal delay={0.2}>
              <div
                className="relative aspect-[4/3] sm:aspect-[16/11] w-full overflow-hidden rounded-3xl border border-white/80 bg-gradient-to-br from-white/90 via-slate-50/70 to-blue-50/40 backdrop-blur-2xl shadow-[0_25px_60px_-15px_rgba(20,21,26,0.14)] transition-transform duration-500 hover:-translate-y-1 hover:shadow-[0_30px_70px_-15px_rgba(28,79,161,0.22)]"
                style={{ transformStyle: "preserve-3d" }}
              >
                <div className="pointer-events-none absolute -top-16 -right-16 h-56 w-56 rounded-full bg-gold-400/20 blur-[80px]" />
                <div className="pointer-events-none absolute -bottom-16 -left-16 h-56 w-56 rounded-full bg-blue-600/20 blur-[80px]" />

                {/* 3D Interactive WebGL Advertising Signal Ecosystem */}
                <PaidAdsHeroVisualClient />

                {/* SECTION 02: LIVE CAMPAIGN REACH SIGNAL */}
                <div className="absolute top-4 left-4 z-20 flex items-center gap-2.5 rounded-xl border border-white/90 bg-white/95 px-3.5 py-2 text-xs font-extrabold text-ink shadow-lg backdrop-blur-md">
                  <div className="relative flex h-3 w-3 items-center justify-center">
                    <span className="absolute h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative h-2 w-2 rounded-full bg-emerald-500" />
                  </div>
                  <div className="flex flex-col">
                    <div className="flex items-center gap-1.5 text-[11px] font-black uppercase tracking-wider text-ink">
                      <span>Live Campaign Reach</span>
                      <Activity className="h-3 w-3 text-emerald-500 animate-pulse" />
                    </div>
                    {/* Live data pulse stream visual */}
                    <div className="mt-1 flex items-center gap-1">
                      <div className="h-1 w-8 rounded-full bg-slate-100 overflow-hidden relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 via-blue-500 to-gold-400 animate-[shimmer_1.8s_infinite]" />
                      </div>
                      <span className="font-mono text-[10px] font-bold text-emerald-600">Active</span>
                    </div>
                  </div>
                </div>

                {/* SECTION 02: 3–5× AVG. ROI STAT BADGE WITH DYNAMIC SPARKLINE GRAPH */}
                <div className="absolute bottom-4 right-4 z-20 flex items-center gap-3 rounded-2xl border border-gold-400/40 bg-white/95 p-3 text-xs font-black text-ink shadow-xl backdrop-blur-md">
                  <div className="flex flex-col">
                    <span className="text-[9px] uppercase font-mono tracking-wider text-gold-700">Performance Index</span>
                    <span className="text-sm font-black bg-gradient-to-r from-gold-600 to-amber-700 bg-clip-text text-transparent">
                      3–5× Avg. ROI
                    </span>
                  </div>

                  {/* Real-time Performance Sparkline SVG */}
                  <div className="relative h-7 w-16 overflow-hidden rounded bg-gold-50/50 p-0.5 border border-gold-300/30">
                    <svg className="h-full w-full overflow-visible" viewBox="0 0 60 24">
                      <defs>
                        <linearGradient id="roiGradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#d3ac3c" stopOpacity="0.5" />
                          <stop offset="100%" stopColor="#d3ac3c" stopOpacity="0.0" />
                        </linearGradient>
                      </defs>
                      <path
                        d="M 0 20 Q 15 18 25 10 T 45 6 T 60 2 L 60 24 L 0 24 Z"
                        fill="url(#roiGradient)"
                      />
                      <path
                        d="M 0 20 Q 15 18 25 10 T 45 6 T 60 2"
                        fill="none"
                        stroke="#d3ac3c"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                      <circle cx="60" cy="2" r="2.5" fill="#f59e0b" className="animate-ping" />
                    </svg>
                  </div>
                </div>

                <div className="pointer-events-none absolute inset-x-6 bottom-0 h-0.5 bg-gradient-to-r from-transparent via-gold-400/60 to-transparent" />
              </div>
            </Reveal>
          </div>

          {/* Text Content: Appears SECOND on mobile (order-2), FIRST on desktop (lg:order-1) */}
          <div className="order-2 lg:order-1 lg:col-span-7">
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-white/80 px-4 py-1.5 text-xs font-extrabold text-blue-800 shadow-sm backdrop-blur-md">
                <Megaphone className="h-3.5 w-3.5 text-blue-600" />
                <span>{paidAdsHero.eyebrow}</span>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <h1 className="mt-5 text-[clamp(2.25rem,4.6vw,3.75rem)] font-black leading-[1.1] tracking-tight text-ink text-balance">
                <span className="bg-gradient-to-r from-ink via-blue-900 to-gold-600 bg-clip-text text-transparent">
                  {paidAdsHero.heading}
                </span>
              </h1>
            </Reveal>

            <Reveal delay={0.14}>
              <p className="mt-5 max-w-xl text-base sm:text-xl font-medium leading-relaxed text-muted text-balance">
                {paidAdsHero.description}
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-6 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs font-bold text-ink/80">
                <div className="flex items-center gap-2">
                  <Target className="h-4 w-4 text-blue-600" />
                  <span>Precision Audience Targeting</span>
                </div>
                <div className="flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-gold-500" />
                  <span>Multi-Platform Performance Media</span>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.26}>
              <div className="mt-8">
                <Button href={paidAdsHero.cta.href} className="px-7 py-3.5 text-sm font-bold shadow-lg shadow-blue-600/20">
                  {paidAdsHero.cta.label}
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
