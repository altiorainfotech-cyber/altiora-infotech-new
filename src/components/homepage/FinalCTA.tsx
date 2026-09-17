import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { finalCta } from "@/data/homepage";

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28" aria-labelledby="final-cta-heading">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(211,172,60,0.08),transparent_60%)]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-gold-400 to-transparent"
        aria-hidden="true"
      />

      <Container className="relative text-center">
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-600">
            Let&apos;s Build Together
          </span>
          <h2
            id="final-cta-heading"
            className="mx-auto mt-4 max-w-3xl text-[clamp(2rem,4vw,3rem)] font-bold leading-[1.1] tracking-tight text-ink text-balance"
          >
            {finalCta.heading}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            {finalCta.description}
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button href={finalCta.primaryCta.href}>{finalCta.primaryCta.label}</Button>
            <Button href={finalCta.secondaryCta.href} variant="secondary">
              {finalCta.secondaryCta.label}
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
