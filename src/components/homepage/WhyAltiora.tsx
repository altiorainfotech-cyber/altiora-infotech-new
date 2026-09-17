"use client";

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";
import { whyAltiora } from "@/data/homepage";

export function WhyAltiora() {
  return (
    <section className="relative overflow-hidden bg-transparent py-16 sm:py-20 lg:py-24" aria-labelledby="why-altiora-heading">
      <Container>
        <SectionHeading
          headingId="why-altiora-heading"
          title={whyAltiora.heading}
          className="max-w-2xl"
          tone="light"
        />

        <div className="mt-14 flex flex-col divide-y divide-ink/10 border-t border-ink/10">
          {whyAltiora.panels.map((panel, index) => {
            const Icon = panel.icon;
            const offset = index % 2 === 1;
            return (
              <Reveal key={panel.number} delay={index * 0.1}>
                <div
                  className={cn(
                    "grid grid-cols-1 items-start gap-6 py-10 sm:grid-cols-[auto_auto_1fr] sm:items-center sm:gap-8 lg:py-12",
                    offset && "sm:pl-16 lg:pl-28"
                  )}
                >
                  <span className="text-5xl font-light tracking-tight text-ink/20 sm:text-6xl font-mono">
                    {panel.number}
                  </span>
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white border border-blue-400/30 shadow-md shadow-blue-500/20">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div className="max-w-xl">
                    <h3 className="text-lg font-bold leading-snug tracking-tight text-ink sm:text-xl">
                      {panel.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      {panel.description}
                    </p>
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
