"use client";

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Carousel } from "@/components/ui/Carousel";
import { testimonials } from "@/data/homepage";

export function TestimonialsCarousel() {
  if (testimonials.length === 0) return null;

  const slides = testimonials.map((testimonial, index) => (
    <div key={testimonial.name} className="px-1">
      <figure className="rounded-2xl border border-ink/10 bg-surface p-8 sm:p-10">
        <blockquote className="text-lg font-medium leading-relaxed text-ink sm:text-xl">
          “{testimonial.quote}”
        </blockquote>
        <figcaption className="mt-6 flex items-center justify-between">
          <div>
            <div className="font-semibold text-ink">{testimonial.name}</div>
            <div className="text-sm text-muted">
              {testimonial.role}
              {testimonial.company ? `, ${testimonial.company}` : ""}
            </div>
          </div>
          <div className="text-sm font-medium text-muted">
            {String(index + 1).padStart(2, "0")} / {String(testimonials.length).padStart(2, "0")}
          </div>
        </figcaption>
      </figure>
    </div>
  ));

  return (
    <section className="py-16 sm:py-20 lg:py-24" aria-labelledby="testimonials-heading">
      <Container>
        <SectionHeading
          headingId="testimonials-heading"
          eyebrow="Client Voices"
          title="What Our Clients Say"
        />
        <div className="mt-10 max-w-3xl">
          <Carousel slides={slides} ariaLabel="Client testimonials" slideClassName="basis-full" />
        </div>
      </Container>
    </section>
  );
}
