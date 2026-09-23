"use client";

import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { AnimatedMetric } from "@/components/ui/AnimatedMetric";
import { brandingResults, brandingMetrics } from "@/data/branding";
import { CheckCircle2, BarChart3 } from "lucide-react";

export function BrandingMetrics() {
  return (
    <section className="relative overflow-hidden bg-transparent py-14 sm:py-20" aria-labelledby="branding-metrics-heading">
      <div className="pointer-events-none absolute -left-40 top-1/3 -z-10 h-96 w-96 rounded-full bg-blue-600/10 blur-[100px]" />

      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-6">
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-white/80 px-3.5 py-1.5 text-xs font-extrabold text-blue-800 shadow-sm backdrop-blur-md">
                <BarChart3 className="h-3.5 w-3.5 text-blue-600" />
                <span>Business Impact</span>
              </div>
            </Reveal>

            <Reveal delay={0.05}>
              <h2 id="branding-metrics-heading" className="mt-4 text-3xl font-black tracking-tight text-ink sm:text-4xl leading-[1.15]">
                {brandingResults.heading}
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-4 text-sm sm:text-base leading-relaxed text-muted font-medium">
                {brandingResults.intro}
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <ul className="mt-6 space-y-3">
                {brandingResults.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-3 text-sm font-semibold text-ink">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-blue-600" aria-hidden="true" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <div className="lg:col-span-6">
            <Reveal delay={0.1}>
              <div className="rounded-3xl border border-ink/8 bg-white p-6 shadow-[0_20px_50px_-15px_rgba(20,21,26,0.1)] sm:p-8">
                <h3 className="text-sm font-black uppercase tracking-wider text-blue-800">
                  {brandingMetrics.heading}
                </h3>
                <p className="mt-1 text-xs font-medium text-muted">{brandingMetrics.subheading}</p>

                <div className="mt-6 grid grid-cols-2 gap-4">
                  {brandingMetrics.metrics.map((metric, idx) => (
                    <div
                      key={metric.label}
                      className={
                        "rounded-2xl border p-4 " +
                        (idx % 2 === 0 ? "border-blue-200/50 bg-blue-50/40" : "border-gold-300/40 bg-gold-50/30")
                      }
                    >
                      <div className="text-2xl font-black leading-none tracking-tight text-ink sm:text-3xl">
                        <AnimatedMetric value={metric.value} />
                      </div>
                      <div className="mt-1.5 text-xs font-bold text-ink/80">{metric.label}</div>
                      <div className="mt-0.5 text-[11px] font-medium text-muted">{metric.sub}</div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
