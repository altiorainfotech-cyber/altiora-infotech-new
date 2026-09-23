"use client";

import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { ContactHeroVisual } from "./ContactHeroVisual";
import { MessageSquare, Sparkles, Rocket, Clock, ShieldCheck } from "lucide-react";

export function ContactHero() {
  return (
    <section className="relative overflow-hidden bg-transparent pt-8 pb-10 sm:pt-14 sm:pb-16">
      {/* Background Radial Glow */}
      <div
        className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[600px] w-[1000px] -translate-x-1/2 rounded-full bg-gradient-to-tr from-blue-600/15 via-gold-400/12 to-transparent blur-3xl opacity-80"
        aria-hidden="true"
      />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center">
          {/* Left Column: Heading & Highlight */}
          <div className="lg:col-span-6">
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-white/90 px-4 py-1.5 text-xs font-extrabold text-blue-800 shadow-xs backdrop-blur-md">
                <MessageSquare className="h-3.5 w-3.5 text-blue-600" />
                <span>Start Your Project Journey</span>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <h1 className="mt-5 text-[clamp(2.5rem,4.5vw,4rem)] font-black leading-[1.08] tracking-tight text-ink text-balance">
                Get in{" "}
                <span className="bg-gradient-to-r from-blue-700 via-blue-900 to-gold-600 bg-clip-text text-transparent">
                  Touch
                </span>
              </h1>
            </Reveal>

            <Reveal delay={0.12}>
              <p className="mt-4 text-base sm:text-lg font-medium leading-relaxed text-muted text-balance">
                Have a question or want to discuss your project? We'd love to hear from you. Tell us about your vision and we'll help bring it to life. Our team of experts is ready to transform your ideas into reality.
              </p>
            </Reveal>

            {/* Quick Hero Banner Badge */}
            <Reveal delay={0.16}>
              <div className="mt-6 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs font-bold text-ink/80 pt-4 border-t border-ink/8">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-blue-600" />
                  <span>100% Confidential Consultation</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-gold-500" />
                  <span>Guaranteed Response &lt; 24 Hours</span>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column: 3D Holographic Console */}
          <div className="lg:col-span-6 relative flex justify-center">
            <Reveal delay={0.15}>
              <ContactHeroVisual />
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
