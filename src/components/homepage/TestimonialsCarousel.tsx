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
      <TiltCard glowColor="gold" className="p-8 sm:p-10">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1 text-gold-500">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-gold-500 text-gold-500" />
            ))}
          </div>
          <Quote className="h-8 w-8 text-gold-400/40" />
        </div>

        <blockquote className="mt-6 text-lg font-medium leading-relaxed text-ink sm:text-xl">
          “{testimonial.quote}”
        </blockquote>

        <figcaption className="mt-8 flex items-center justify-between border-t border-ink/8 pt-4">
          <div>
            <div className="font-bold text-ink">{testimonial.name}</div>
            <div className="text-xs text-muted">
              {testimonial.role}
              {testimonial.company ? `, ${testimonial.company}` : ""}
            </div>
          </div>
          <div className="text-xs font-mono font-bold text-gold-600">
            {String(index + 1).padStart(2, "0")} / {String(testimonials.length).padStart(2, "0")}
          </div>
        </figcaption>
      </TiltCard>
    </div>
  ));

  return (
    <section className="relative overflow-hidden bg-transparent py-16 sm:py-20 lg:py-24" aria-labelledby="testimonials-heading">
      <Container>
        <SectionHeading
          headingId="testimonials-heading"
          eyebrow="Client Voices"
          title="What Our Clients Say"
          tone="light"
        />
        <div className="mt-12 max-w-3xl">
          <Carousel slides={slides} ariaLabel="Client testimonials" slideClassName="basis-full" arrowTone="light" />
        </div>
      </Container>
    </section>
  );
}
