"use client";

import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { brandingSolutions, brandingSolutionsIntro } from "@/data/branding";
import { Layers } from "lucide-react";

export function BrandingSolutions() {
  return (
    <section className="relative overflow-hidden bg-transparent py-14 sm:py-20" aria-labelledby="branding-solutions-heading">
      <div className="pointer-events-none absolute right-1/3 top-1/2 -z-10 h-[450px] w-[700px] -translate-y-1/2 rounded-full bg-gradient-to-r from-blue-500/10 via-gold-400/10 to-transparent blur-3xl opacity-70" />

      <Container>
        <div className="max-w-2xl">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-50/80 px-3.5 py-1 text-xs font-extrabold text-blue-800">
              <Layers className="h-3.5 w-3.5 text-blue-600" />
              <span>Branding Solutions</span>
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 id="branding-solutions-heading" className="mt-3 text-3xl font-black tracking-tight text-ink sm:text-4xl">
              {brandingSolutionsIntro.heading}
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-3 text-sm sm:text-base leading-relaxed text-muted">
              {brandingSolutionsIntro.description}
            </p>
          </Reveal>
        </div>

        <div className="mt-12 flex flex-col divide-y divide-ink/10 border-t border-ink/10">
          {brandingSolutions.map((solution, idx) => {
            const Icon = solution.icon;
            const gold = idx % 2 === 1;
            const offset = idx % 2 === 1;

            return (
              <Reveal key={solution.title} delay={0.06 * idx}>
                <div
                  className={
                    "group grid grid-cols-1 items-start gap-8 py-10 lg:grid-cols-[auto_1fr_auto] lg:items-center lg:gap-10 lg:py-12" +
                    (offset ? " lg:pl-10" : "")
                  }
                >
                  <span className="hidden font-mono text-5xl font-light tracking-tight text-ink/10 sm:text-6xl lg:block">
                    0{idx + 1}
                  </span>

                  <div className="max-w-xl">
                    <div
                      className={
                        "mb-4 flex h-12 w-12 items-center justify-center rounded-2xl text-white border shadow-md transition-transform duration-300 group-hover:scale-110 " +
                        (gold
                          ? "bg-gradient-to-br from-gold-400 via-gold-500 to-gold-700 border-gold-300/40"
                          : "bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 border-blue-400/30")
                      }
                    >
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <h3 className="text-xl font-bold leading-snug tracking-tight text-ink sm:text-2xl">
                      {solution.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{solution.description}</p>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {solution.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-ink/8 bg-surface px-3 py-1 text-[11px] font-bold text-ink/80 transition-colors group-hover:border-blue-400/40 group-hover:text-blue-800"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex shrink-0 gap-3 lg:flex-col">
                    {solution.badges.map((badge) => (
                      <div
                        key={badge.small}
                        className="min-w-[110px] rounded-2xl border border-ink/8 bg-white/80 px-4 py-3 text-center shadow-sm"
                      >
                        <div className="text-lg font-black leading-none tracking-tight text-ink">{badge.big}</div>
                        <div className="mt-1 text-[10px] font-bold uppercase tracking-wide text-muted">
                          {badge.small}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
