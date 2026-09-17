import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";
import { whyAltiora } from "@/data/homepage";

export function WhyAltiora() {
  return (
    <section className="py-16 sm:py-20 lg:py-24" aria-labelledby="why-altiora-heading">
      <Container>
        <SectionHeading
          headingId="why-altiora-heading"
          title={whyAltiora.heading}
          className="max-w-xl"
        />

        <div className="mt-14 flex flex-col divide-y divide-ink/10 border-t border-ink/10">
          {whyAltiora.panels.map((panel, index) => {
            const Icon = panel.icon;
            const offset = index % 2 === 1;
            return (
              <Reveal key={panel.number} delay={index * 0.1}>
                <div
                  className={cn(
                    "grid grid-cols-1 items-center gap-6 py-10 sm:grid-cols-[auto_auto_1fr] sm:gap-8 lg:py-12",
                    offset && "sm:pl-16"
                  )}
                >
                  <span className="text-5xl font-bold tracking-tight text-ink/8 sm:text-6xl">
                    {panel.number}
                  </span>
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gold-500/12 text-gold-600">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div className="max-w-xl">
                    <h3 className="text-xl font-semibold leading-snug tracking-tight text-ink">
                      {panel.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted sm:text-base">
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
