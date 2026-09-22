"use client";

import { Share2, TrendingUp, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { socialMediaHero } from "@/data/socialMedia";
import { SocialMediaHeroVisualClient } from "./SocialMediaHeroVisualClient";

export function SocialMediaHero() {
  return (
    <section className="relative overflow-hidden bg-transparent pt-10 pb-16 sm:pt-16 sm:pb-24">
      <div
        className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[550px] w-[950px] -translate-x-1/2 rounded-full bg-gradient-to-tr from-blue-600/10 via-gold-400/10 to-transparent blur-3xl opacity-80"
        aria-hidden="true"
      />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7">
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-white/80 px-4 py-1.5 text-xs font-extrabold text-blue-800 shadow-sm backdrop-blur-md">
                <Share2 className="h-3.5 w-3.5 text-blue-600" />
                <span>{socialMediaHero.eyebrow}</span>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <h1 className="mt-5 text-[clamp(2.25rem,4.6vw,3.75rem)] font-black leading-[1.1] tracking-tight text-ink text-balance">
                <span className="bg-gradient-to-r from-ink via-blue-900 to-gold-600 bg-clip-text text-transparent">
                  {socialMediaHero.heading}
                </span>
              </h1>
            </Reveal>

            <Reveal delay={0.14}>
              <p className="mt-5 max-w-xl text-base sm:text-xl font-medium leading-relaxed text-muted text-balance">
                {socialMediaHero.description}
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-6 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs font-bold text-ink/80">
                <div className="flex items-center gap-2">
                  <TrendingUp className="h-4 w-4 text-blue-600" />
                  <span>Strategic Social Growth</span>
                </div>
                <div className="flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-gold-500" />
                  <span>Multi-Platform Management</span>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.26}>
              <div className="mt-8">
                <Button href={socialMediaHero.cta.href} className="px-7 py-3.5 text-sm font-bold shadow-lg shadow-blue-600/20">
                  {socialMediaHero.cta.label}
                </Button>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-5 relative">
            <Reveal delay={0.2}>
              <div
                className="relative aspect-[4/3] sm:aspect-[16/11] w-full overflow-hidden rounded-3xl border border-white/80 bg-gradient-to-br from-white/90 via-slate-50/70 to-blue-50/40 backdrop-blur-2xl shadow-[0_25px_60px_-15px_rgba(20,21,26,0.14)] transition-transform duration-500 hover:-translate-y-1 hover:shadow-[0_30px_70px_-15px_rgba(28,79,161,0.22)]"
              >
                <div className="pointer-events-none absolute -top-16 -right-16 h-56 w-56 rounded-full bg-gold-400/20 blur-[80px]" />
                <div className="pointer-events-none absolute -bottom-16 -left-16 h-56 w-56 rounded-full bg-blue-600/20 blur-[80px]" />

                <SocialMediaHeroVisualClient />

                <div className="absolute top-4 left-4 z-20 flex items-center gap-2 rounded-xl border border-white/80 bg-white/90 px-3.5 py-1.5 text-[11px] font-extrabold text-ink shadow-lg backdrop-blur-md">
                  <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Engagement Tracked Daily</span>
                </div>

                <div className="absolute bottom-4 right-4 z-20 rounded-full border border-gold-400/40 bg-gold-500/20 px-3 py-1 text-[11px] font-black text-gold-700 backdrop-blur-md">
                  6 Platforms Managed
                </div>

                <div className="pointer-events-none absolute inset-x-6 bottom-0 h-0.5 bg-gradient-to-r from-transparent via-gold-400/60 to-transparent" />
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
