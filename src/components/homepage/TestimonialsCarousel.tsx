"use client";

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Carousel } from "@/components/ui/Carousel";
import { TiltCard } from "@/components/ui/TiltCard";
import { testimonials } from "@/data/homepage";
import { Star, Quote } from "lucide-react";

export function TestimonialsCarousel() {
  if (testimonials.length === 0) return null;

  const slides = testimonials.map((testimonial, index) => (
    <div key={testimonial.name} className="px-1">
      <TiltCard glowColor="gold" className="p-8 sm:p-12 border-gold-400/30 bg-gradient-to-br from-white/95 via-surface/90 to-gold-50/20 shadow-2xl backdrop-blur-2xl">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5 bg-gold-50 px-3 py-1 rounded-full border border-gold-200 shadow-2xs">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-gold-500 text-gold-500" />
            ))}
            <span className="ml-1 text-[11px] font-black text-gold-800 font-mono">5.0</span>
          </div>
          <Quote className="h-10 w-10 text-gold-400/30" />
        </div>

        <blockquote className="font-display mt-6 text-xl font-bold leading-relaxed tracking-tight text-ink sm:text-2xl">
          “{testimonial.quote}”
        </blockquote>

        <figcaption className="mt-8 flex items-center justify-between border-t border-ink/8 pt-5">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-blue-700 to-blue-900 text-white font-black text-xs shadow-md">
              {testimonial.name.slice(0, 2).toUpperCase()}
            </div>
            <div>
              <div className="font-black text-ink text-sm sm:text-base">{testimonial.name}</div>
              <div className="text-xs font-semibold text-muted">
                {testimonial.role}
                {testimonial.company ? `, ${testimonial.company}` : ""}
              </div>
            </div>
          </div>
          <div className="text-xs font-mono font-black text-gold-700 bg-gold-50 px-3 py-1 rounded-lg border border-gold-200">
            {String(index + 1).padStart(2, "0")} / {String(testimonials.length).padStart(2, "0")}
          </div>
        </figcaption>
      </TiltCard>
    </div>
  ));

  return (
    <section className="relative overflow-hidden bg-transparent py-20 sm:py-24" aria-labelledby="testimonials-heading">
      <Container>
        <SectionHeading
          headingId="testimonials-heading"
          eyebrow="Verified Client Testimonials"
          title="What Our Enterprise Partners Say"
          description="Direct feedback from founders, CMOs, and strategy leads scaling with Altiora."
          tone="light"
        />
        <div className="mt-14 max-w-4xl mx-auto">
          <Carousel slides={slides} ariaLabel="Client testimonials" slideClassName="basis-full" arrowTone="light" />
        </div>
      </Container>
    </section>
  );
}
