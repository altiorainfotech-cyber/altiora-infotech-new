"use client";

import Link from "next/link";
import { ArrowRight, Sparkles, Compass, Activity } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { businessConsultingHero } from "@/data/businessConsulting";
import { BusinessConsultingHeroVisual } from "./BusinessConsultingHeroVisual";

export function BusinessConsultingHero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-16 lg:pt-36 lg:pb-24">
      <div className="pointer-events-none absolute -top-40 right-0 -z-10 h-96 w-96 rounded-full bg-blue-600/10 blur-[120px]" />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          <div className="order-2 lg:order-1 lg:col-span-7 space-y-6 text-left">
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-white/80 px-4 py-1.5 text-xs font-extrabold text-blue-800 shadow-sm backdrop-blur-md">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600" />
                </span>
                <span>{businessConsultingHero.eyebrow}</span>
                <span className="text-gold-500 font-black">|</span>
                <span className="text-blue-900 font-mono">ADVISORY ENGINE v4.2</span>
              </div>
            </Reveal>

            <Reveal delay={0.05}>
              <h1 className="text-4xl font-black tracking-tight text-ink sm:text-5xl lg:text-6xl leading-[1.1]">
                <span className="bg-gradient-to-r from-ink via-blue-900 to-gold-600 bg-clip-text text-transparent">
                  {businessConsultingHero.heading}
                </span>
              </h1>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="text-base sm:text-lg text-muted font-medium leading-relaxed max-w-2xl">
                {businessConsultingHero.description}
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Link
                  href={businessConsultingHero.cta.href}
                  className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 px-7 py-3.5 text-sm font-black text-white shadow-lg shadow-blue-600/25 transition-all hover:scale-105 hover:shadow-blue-600/40"
                >
                  <span>{businessConsultingHero.cta.label}</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <div className="flex items-center gap-3 px-4 py-2.5 rounded-xl border border-ink/8 bg-white/80 shadow-sm backdrop-blur-md">
                  <Compass className="h-4 w-4 text-blue-600 animate-pulse" />
                  <span className="text-xs font-mono font-bold text-ink/80">Data-Backed Growth Roadmaps</span>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="pt-6 grid grid-cols-3 gap-4 border-t border-ink/8">
                <div>
                  <div className="text-2xl font-black text-blue-600">150+</div>
                  <div className="text-xs font-medium text-muted">Businesses Scaled</div>
                </div>
                <div>
                  <div className="text-2xl font-black text-gold-600">3.8x</div>
                  <div className="text-xs font-medium text-muted">Efficiency Boost</div>
                </div>
                <div>
                  <div className="text-2xl font-black text-ink">99%</div>
                  <div className="text-xs font-medium text-muted">Strategic Clarity</div>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="order-1 lg:order-2 lg:col-span-5 relative">
            <div className="relative mx-auto max-w-[480px] rounded-3xl border border-white/80 bg-gradient-to-br from-white via-slate-50 to-blue-50/40 p-4 shadow-2xl backdrop-blur-xl">
              <div className="absolute top-4 left-4 z-20 flex items-center gap-2 rounded-full border border-blue-200 bg-white/90 px-3 py-1 text-[11px] font-mono font-bold text-blue-900 shadow-sm">
                <Activity className="h-3 w-3 text-blue-600 animate-spin" style={{ animationDuration: "6s" }} />
                <span>REAL-TIME ADVISORY ENGINE</span>
              </div>
              <div className="relative aspect-square w-full">
                <BusinessConsultingHeroVisual />
              </div>
              <div className="mt-3 flex items-center justify-between border-t border-slate-100 pt-3 px-2 text-[11px] font-mono font-bold text-blue-900">
                <span className="flex items-center gap-1">
                  <Sparkles className="h-3.5 w-3.5 text-gold-500" />
                  <span>STRATEGY SUITE READY</span>
                </span>
                <span className="text-blue-600">GROWTH PIPELINE ACTIVE</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
