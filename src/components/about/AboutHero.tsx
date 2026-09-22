"use client";

import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { aboutHero } from "@/data/about";
import { aboutImages } from "@/data/aboutImages";
import { MapPin, Sparkles, ArrowRight, ShieldCheck, Users } from "lucide-react";

export function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-transparent pt-10 pb-16 sm:pt-16 sm:pb-24">
      {/* Ambient Radial Lighting Flares */}
      <div
        className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[550px] w-[950px] -translate-x-1/2 rounded-full bg-gradient-to-tr from-blue-600/10 via-gold-400/10 to-transparent blur-3xl opacity-80"
        aria-hidden="true"
      />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
          {/* Left Column: Heading, Eyebrow & Actions */}
          <div className="lg:col-span-7">
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-white/80 px-4 py-1.5 text-xs font-extrabold text-blue-800 shadow-sm backdrop-blur-md">
                <MapPin className="h-3.5 w-3.5 text-blue-600" />
                <span>{aboutHero.eyebrow}</span>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <h1 className="mt-5 text-[clamp(2.5rem,5vw,4.25rem)] font-black leading-[1.08] tracking-tight text-ink text-balance">
                <span className="bg-gradient-to-r from-ink via-blue-900 to-gold-600 bg-clip-text text-transparent">
                  {aboutHero.companyName}
                </span>
              </h1>
            </Reveal>

            <Reveal delay={0.12}>
              <p className="mt-5 max-w-xl text-base sm:text-xl font-medium leading-relaxed text-muted text-balance">
                {aboutHero.subtitle}
              </p>
            </Reveal>

            {/* Quick highlights */}
            <Reveal delay={0.16}>
              <div className="mt-6 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs font-bold text-ink/80">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-blue-600" />
                  <span>Data-Driven & Transparent</span>
                </div>
                <div className="flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-gold-500" />
                  <span>Modern Technology Infrastructure</span>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Button href="/contact" className="px-7 py-3.5 text-sm font-bold shadow-lg shadow-blue-600/20">
                  <span className="flex items-center gap-2">
                    Let’s Talk Strategy
                    <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </span>
                </Button>

                <Link
                  href="#what-we-do"
                  className="rounded-xl border border-ink/10 bg-white/70 px-6 py-3.5 text-sm font-bold text-ink shadow-xs backdrop-blur-md transition-all hover:border-blue-400/50 hover:bg-white hover:shadow-md"
                >
                  Explore Core Expertise
                </Link>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Premium Hero Visual Frame & Floating Micro-Cards */}
          <div className="lg:col-span-5 relative">
            <Reveal delay={0.15}>
              <div className="relative aspect-[4/3] sm:aspect-[16/11] w-full overflow-hidden rounded-3xl border border-white/80 bg-gradient-to-br from-white/90 via-slate-50/70 to-blue-50/40 backdrop-blur-2xl shadow-[0_25px_60px_-15px_rgba(20,21,26,0.14)] transition-transform duration-500 hover:shadow-[0_30px_70px_-15px_rgba(28,79,161,0.22)]">
                {/* Visual Image Layer */}
                <Image
                  src={aboutImages.hero.team}
                  alt="Altiora Infotech Strategic Team Canada"
                  fill
                  className="object-cover opacity-90 transition-transform duration-700 hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 600px"
                  priority
                />

                <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent" />

                {/* Overlaid Floating Micro-Badge */}
                <div className="absolute top-4 left-4 z-20 flex items-center gap-2 rounded-xl border border-white/80 bg-white/90 px-3.5 py-1.5 text-[11px] font-extrabold text-ink shadow-lg backdrop-blur-md">
                  <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Canadian Growth Partner</span>
                </div>

                <div className="absolute bottom-4 left-4 z-20 flex items-center gap-2 text-xs font-bold text-white">
                  <Users className="h-4 w-4 text-gold-400" />
                  <span>Extension of Your Team</span>
                </div>

                {/* Bottom Metallic Accent Line */}
                <div className="pointer-events-none absolute inset-x-6 bottom-0 h-0.5 bg-gradient-to-r from-transparent via-gold-400/60 to-transparent" />
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
