"use client";

import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { TiltCard } from "@/components/ui/TiltCard";
import { whatWeDo } from "@/data/about";
import { aboutImages } from "@/data/aboutImages";
import { ArrowUpRight, Sparkles, Layers, TrendingUp } from "lucide-react";

export function WhatWeDo() {
  return (
    <section id="what-we-do" className="relative overflow-hidden bg-transparent py-14 sm:py-20" aria-labelledby="what-we-do-heading">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute -left-40 top-1/3 -z-10 h-96 w-96 rounded-full bg-blue-500/10 blur-[100px]" />

      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
          {/* Left Column: Narrative, Visual Image & Business Outcome Banner */}
          <div className="lg:col-span-5">
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-50/80 px-3.5 py-1.5 text-xs font-extrabold text-blue-800 backdrop-blur-md">
                <Layers className="h-3.5 w-3.5 text-blue-600" />
                <span>Our Capabilities</span>
              </div>
            </Reveal>

            <Reveal delay={0.05}>
              <h2 id="what-we-do-heading" className="mt-4 text-3xl font-black tracking-tight text-ink sm:text-4xl leading-[1.15]">
                {whatWeDo.heading}
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="mt-5 space-y-4 text-sm sm:text-base leading-relaxed text-muted font-medium">
                <p className="text-ink font-semibold">{whatWeDo.p1}</p>
                <p>{whatWeDo.p2}</p>
                <p>{whatWeDo.p3}</p>
              </div>
            </Reveal>

            {/* Feature Image Frame */}
            <Reveal delay={0.15}>
              <div className="mt-6 relative overflow-hidden rounded-2xl border border-white/80 shadow-xl group">
                <div className="relative aspect-[16/9] w-full">
                  <Image
                    src={aboutImages.whatWeDo}
                    alt="Altiora Digital Technology & Marketing Workflow"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 500px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/75 via-ink/20 to-transparent" />

                  <div className="absolute bottom-3 left-3 flex items-center gap-2 text-xs font-bold text-white">
                    <TrendingUp className="h-4 w-4 text-gold-400" />
                    <span>Data-Driven Technology Engine</span>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-6 relative overflow-hidden rounded-2xl border border-gold-400/30 bg-gradient-to-r from-gold-50/90 via-white to-gold-50/70 p-5 shadow-lg shadow-gold-500/5">
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-gold-400 to-gold-600 text-white shadow-md">
                    <Sparkles className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-black uppercase tracking-wider text-gold-800">
                      Outcome Driven
                    </span>
                    <p className="mt-0.5 text-xs sm:text-sm font-extrabold text-ink leading-snug">
                      {whatWeDo.outcomeTagline}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column: 3D Interactive Expertise Grid */}
          <div className="lg:col-span-7">
            <Reveal delay={0.08}>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-black uppercase tracking-wider text-blue-800">
                  Comprehensive Growth Solutions
                </span>
                <span className="text-[11px] font-bold text-muted">7 Specialized Pillars</span>
              </div>
            </Reveal>

            <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
              {whatWeDo.expertise.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <Reveal key={item.title} delay={0.05 * idx}>
                    <TiltCard
                      glowColor={idx % 2 === 0 ? "blue" : "gold"}
                      className="group flex h-full items-center justify-between gap-3.5 rounded-2xl border border-white/80 bg-white/80 p-4 shadow-sm backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/50 hover:bg-white hover:shadow-xl"
                    >
                      <Link href={item.href} className="flex items-center justify-between w-full focus-ring">
                        <div className="flex items-center gap-3.5">
                          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white border border-blue-400/30 shadow-md transition-transform duration-300 group-hover:scale-110">
                            <Icon className="h-5 w-5" aria-hidden="true" />
                          </div>
                          <span className="text-xs sm:text-sm font-extrabold text-ink transition-colors group-hover:text-blue-700 leading-snug">
                            {item.title}
                          </span>
                        </div>
                        <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:bg-blue-600 group-hover:text-white">
                          <ArrowUpRight className="h-4 w-4" />
                        </div>
                      </Link>
                    </TiltCard>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
