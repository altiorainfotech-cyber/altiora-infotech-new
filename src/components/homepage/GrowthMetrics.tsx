import { Container } from "@/components/ui/Container";
import { AnimatedMetric } from "@/components/ui/AnimatedMetric";
import { Reveal } from "@/components/ui/Reveal";
import { growthMetrics } from "@/data/homepage";

export function GrowthMetrics() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24" aria-label="Growth metrics">
      <Container>
        <div className="relative grid grid-cols-1 gap-10 sm:grid-cols-3 sm:gap-8">
          <div
            className="absolute top-6 left-0 hidden h-px w-full bg-gradient-to-r from-transparent via-gold-400 to-transparent sm:block"
            aria-hidden="true"
          />
          {growthMetrics.map((metric, index) => (
            <Reveal key={metric.label} delay={index * 0.1} className="relative text-center">
              <div className="mx-auto mb-4 hidden h-3 w-3 rounded-full bg-gold-500 sm:block" aria-hidden="true" />
              <div className="text-[clamp(2.5rem,5vw,3.5rem)] font-bold leading-none tracking-tight text-ink">
                <AnimatedMetric value={metric.value} />
              </div>
              <div className="mt-3 text-sm font-semibold tracking-wide text-gold-600">
                {metric.label}
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
