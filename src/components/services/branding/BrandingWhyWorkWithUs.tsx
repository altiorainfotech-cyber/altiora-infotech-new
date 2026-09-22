"use client";

import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { whyWorkWithUs, whyWorkWithUsIntro } from "@/data/branding";

export function BrandingWhyWorkWithUs() {
  return (
    <section className="relative overflow-hidden bg-transparent py-14 sm:py-20" aria-labelledby="branding-why-work-heading">
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[500px] w-full -translate-x-1/2 -translate-y-1/2 bg-gold-400/5 blur-[120px]" />

      <Container>
        <div className="max-w-2xl">
          <Reveal>
            <h2 id="branding-why-work-heading" className="text-3xl font-black tracking-tight text-ink sm:text-4xl">
              {whyWorkWithUsIntro.heading}
            </h2>
          </Reveal>
          <Reveal delay={0.05}>
            <p className="mt-3 text-sm sm:text-base leading-relaxed text-muted">
              {whyWorkWithUsIntro.description}
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {whyWorkWithUs.map((point, idx) => (
            <Reveal key={point.title} delay={0.05 * idx}>
              <div className="border-t border-ink/10 pt-6">
                <div className="leading-[0.95] tracking-tight">
                  <span className="block text-3xl font-black text-ink sm:text-4xl">{point.label[0]}</span>
                  <span className="block text-3xl font-black text-gold-600 sm:text-4xl">{point.label[1]}</span>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-muted">{point.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
