"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { whyChooseMobileApp } from "@/data/mobileApp";
import { ShieldCheck, Sparkles, CheckCircle2 } from "lucide-react";

const SYSTEM_LAYERS = [
  { layer: "ARCHITECTURE", title: "Native & Cross-Platform", desc: "Swift, Kotlin, Flutter & React Native tailored for maximum performance" },
  { layer: "PERFORMANCE", title: "99.9% Crash-Free Guarantee", desc: "Rigorous stress testing and real-time crash monitoring" },
  { layer: "UX/UI", title: "Intuitive Touch Interface", desc: "Pixel-perfect mobile design systems adhering to iOS & Android HIG" },
  { layer: "BACKEND", title: "Cloud API Architecture", desc: "Real-time sync, microservices, and push notification infrastructure" },
  { layer: "SECURITY", title: "Biometric & Data Security", desc: "Hardware-level encryption, OAuth 2.0, and PCI-DSS compliance" },
  { layer: "SCALING", title: "App Store Optimization", desc: "ASO strategies designed to drive organic installs and top ratings" },
];

export function MobileAppWhyChoose() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.85", "end 0.4"],
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 90, damping: 20 });

  return (
    <section ref={containerRef} className="relative overflow-hidden bg-transparent py-14 sm:py-20" aria-labelledby="mobile-app-why-choose-heading">
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[500px] w-full -translate-x-1/2 -translate-y-1/2 bg-blue-500/5 blur-[120px]" />

      <Container>
        <div className="max-w-2xl">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-50/80 px-3.5 py-1 text-xs font-extrabold text-blue-800">
              <ShieldCheck className="h-3.5 w-3.5 text-blue-600" />
              <span>Section 09 — Performance Advantage</span>
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 id="mobile-app-why-choose-heading" className="mt-3 text-3xl font-black tracking-tight text-ink sm:text-4xl">
              Why Choose Altiora Infotech for Mobile Apps?
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-2 text-sm sm:text-base text-muted font-medium">
              Six core mobile engineering advantages unified into a single product engine layer around your brand.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 space-y-3">
          {SYSTEM_LAYERS.map((item, idx) => {
            const threshold = (idx / (SYSTEM_LAYERS.length - 1)) * 0.8;
            return (
              <motion.div
                key={item.layer}
                className="group relative flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-2xl border border-ink/8 bg-white p-5 shadow-sm transition-all duration-300 hover:border-blue-400/50 hover:shadow-md"
                style={{
                  opacity: useTransform(smoothProgress, [Math.max(0, threshold - 0.1), threshold], [0.5, 1]),
                  x: useTransform(smoothProgress, [Math.max(0, threshold - 0.1), threshold], [-20, 0]),
                }}
              >
                <div className="flex items-center gap-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-900 text-gold-400 font-mono text-xs font-black">
                    0{idx + 1}
                  </span>
                  <div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-blue-600">
                      LAYER {idx + 1}: {item.layer}
                    </span>
                    <h3 className="text-base font-extrabold text-ink leading-tight">{item.title}</h3>
                  </div>
                </div>

                <p className="text-xs sm:text-sm font-medium text-muted sm:max-w-md">{item.desc}</p>

                <div className="hidden sm:flex items-center gap-1.5 text-xs font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
                  <CheckCircle2 className="h-3.5 w-3.5" />
                  <span>Layer Active</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        <Reveal delay={0.3}>
          <div className="mt-10 flex items-center gap-4 rounded-2xl bg-gradient-to-r from-blue-950 via-indigo-950 to-ink p-6 text-white shadow-xl">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gold-400/20 border border-gold-400/40 text-gold-400">
              <Sparkles className="h-6 w-6" />
            </div>
            <p className="text-xs sm:text-sm font-extrabold leading-relaxed text-balance">
              We craft mobile applications that users love coming back to — high retention, fluid 60fps animations, and zero friction.
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
