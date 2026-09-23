"use client";

import { useState } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { 
  Sparkles, 
  Search, 
  BrainCircuit, 
  Palette, 
  Code2, 
  Smartphone, 
  Camera, 
  ArrowUpRight,
  Orbit,
  CheckCircle2
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const PILLARS = [
  {
    title: "Digital Marketing & Paid Ads",
    shortTitle: "Performance Ads",
    icon: Sparkles,
    href: "/services/paid-advertisement-services",
    description: "Data-driven PPC campaigns across Google, Meta, LinkedIn & TikTok optimizing for ROI.",
    capabilities: ["ROAS Optimization", "Audience Targeting", "Multi-Channel Retargeting"],
  },
  {
    title: "SEO Services",
    shortTitle: "SEO Strategy",
    icon: Search,
    href: "/services/seo",
    description: "Technical search engine optimization, content velocity, and domain authority acceleration.",
    capabilities: ["Keyword Clustering", "Technical Audits", "High-Intent Rankings"],
  },
  {
    title: "AEO & GEO Services",
    shortTitle: "AEO & GEO",
    icon: BrainCircuit,
    href: "/services/aeo-geo",
    description: "Answer & Generative Engine Optimization for ChatGPT, Perplexity, Claude, and AI search engines.",
    capabilities: ["AI Share of Voice", "Knowledge Graph Graphing", "Citation Engineering"],
  },
  {
    title: "Branding & Content Strategy",
    shortTitle: "Branding & Strategy",
    icon: Palette,
    href: "/services/branding",
    description: "Strategic brand positioning, identity design, and scalable content frameworks.",
    capabilities: ["Visual Identity", "Brand Positioning", "Content Guidelines"],
  },
  {
    title: "Website & Conversion Optimization",
    shortTitle: "Web Dev & CRO",
    icon: Code2,
    href: "/services/website-development",
    description: "High-speed WebGL & Next.js websites built specifically for max conversion velocity.",
    capabilities: ["Next.js Architecture", "Sub-Second Speed", "Conversion Rate Optimization"],
  },
  {
    title: "Mobile App Development",
    shortTitle: "Mobile Apps",
    icon: Smartphone,
    href: "/services/mobile-app-development",
    description: "Native & cross-platform iOS/Android mobile applications designed for active retention.",
    capabilities: ["iOS & Android Apps", "Seamless UX", "Scalable Cloud Backends"],
  },
  {
    title: "Influencer Marketing & UGC",
    shortTitle: "Influencer & UGC",
    icon: Camera,
    href: "/services/influencer-ugc-marketing",
    description: "High-converting user-generated content and strategic creator partnership campaigns.",
    capabilities: ["Creator Network", "Viral UGC Assets", "Authentic Brand Outreach"],
  },
];

export function AboutCapabilityOrbit() {
  const [selectedIdx, setSelectedIdx] = useState<number>(0);
  const activePillar = PILLARS[selectedIdx];
  const ActiveIcon = activePillar.icon;

  return (
    <section className="relative overflow-hidden bg-transparent py-14 sm:py-24" aria-labelledby="capability-orbit-heading">
      <div className="pointer-events-none absolute right-1/4 top-1/2 -z-10 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-gradient-to-tr from-blue-600/10 via-gold-400/10 to-transparent blur-3xl opacity-70" />

      <Container>
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-50/80 px-3.5 py-1.5 text-xs font-extrabold text-blue-900 shadow-sm backdrop-blur-md">
              <Orbit className="h-3.5 w-3.5 text-blue-600" />
              <span>Interactive Capability Orbit</span>
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 id="capability-orbit-heading" className="mt-3 text-3xl font-black tracking-tight text-ink sm:text-4xl">
              Seven Specialized Capability Pillars
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-3 text-sm sm:text-base font-medium text-muted">
              Select any capability pillar to inspect its specialized role within the unified Altiora Growth System.
            </p>
          </Reveal>
        </div>

        {/* DESKTOP INTERACTIVE ORBIT (hidden on mobile, visible lg:flex) */}
        <div className="hidden lg:grid grid-cols-12 gap-8 items-center">
          {/* Radial SVG Wheel Left Side */}
          <div className="col-span-6 relative aspect-square max-w-[460px] mx-auto flex items-center justify-center">
            {/* Background Radial Orbit Rings */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
              <circle cx="200" cy="200" r="150" fill="none" stroke="#2563eb" strokeWidth="1.5" strokeDasharray="4 4" className="opacity-30" />
              <circle cx="200" cy="200" r="110" fill="none" stroke="#d3ac3c" strokeWidth="1" className="opacity-40" />
            </svg>

            {/* Central Altiora Growth System Hub Node */}
            <div className="relative z-10 flex h-32 w-32 flex-col items-center justify-center rounded-full border-2 border-gold-400 bg-gradient-to-br from-blue-950 via-blue-900 to-ink text-center text-white shadow-2xl p-2">
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-gold-400">Altiora Engine</span>
              <span className="text-xs font-black text-white mt-1 leading-tight">GROWTH SYSTEM</span>
            </div>

            {/* 7 Orbiting Capability Buttons around central hub */}
            {PILLARS.map((pil, idx) => {
              const angle = (idx / PILLARS.length) * Math.PI * 2 - Math.PI / 2;
              const radius = 150; // px radius
              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius;
              const isSelected = selectedIdx === idx;
              const Icon = pil.icon;

              return (
                <button
                  key={pil.title}
                  onClick={() => setSelectedIdx(idx)}
                  style={{ transform: `translate(${x}px, ${y}px)` }}
                  className={`absolute z-20 flex h-12 w-12 items-center justify-center rounded-2xl border transition-all duration-300 shadow-md ${
                    isSelected
                      ? "bg-gradient-to-br from-blue-600 to-indigo-700 border-gold-400 text-white scale-125 shadow-blue-500/40 ring-4 ring-gold-400/30"
                      : "bg-white border-ink/10 text-ink/70 hover:bg-blue-50 hover:text-blue-600 hover:scale-110"
                  }`}
                  title={pil.title}
                >
                  <Icon className="h-5 w-5" />
                </button>
              );
            })}
          </div>

          {/* Active Pillar Card Display Right Side */}
          <div className="col-span-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={activePillar.title}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="rounded-3xl border border-ink/10 bg-white p-8 shadow-2xl space-y-6"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-900 to-ink text-gold-400 shadow-lg">
                    <ActiveIcon className="h-7 w-7" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-gold-600">
                      Capability Node 0{selectedIdx + 1}
                    </span>
                    <h3 className="text-2xl font-black text-ink">{activePillar.title}</h3>
                  </div>
                </div>

                <p className="text-sm sm:text-base font-medium leading-relaxed text-muted">
                  {activePillar.description}
                </p>

                <div className="space-y-2 pt-2 border-t border-ink/5">
                  <span className="text-xs font-mono font-bold uppercase text-ink/60">Core Deliverables:</span>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {activePillar.capabilities.map((cap) => (
                      <span
                        key={cap}
                        className="inline-flex items-center gap-1.5 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-extrabold text-blue-900"
                      >
                        <CheckCircle2 className="h-3.5 w-3.5 text-blue-600" />
                        {cap}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4">
                  <Link
                    href={activePillar.href}
                    className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-3 text-xs font-bold text-white shadow-lg shadow-blue-600/20 hover:scale-[1.02] transition-transform"
                  >
                    <span>Inspect Dedicated Service</span>
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* MOBILE RESPONSIVE VERTICAL SEQUENCE (visible on mobile < lg) */}
        <div className="lg:hidden space-y-4">
          {PILLARS.map((pil, idx) => {
            const Icon = pil.icon;
            const isSelected = selectedIdx === idx;

            return (
              <div
                key={pil.title}
                className={`rounded-2xl border p-5 transition-all duration-300 ${
                  isSelected ? "bg-white border-blue-500 shadow-xl" : "bg-white/70 border-ink/10"
                }`}
              >
                <button
                  onClick={() => setSelectedIdx(idx)}
                  className="w-full flex items-center justify-between text-left"
                >
                  <div className="flex items-center gap-3">
                    <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${isSelected ? "bg-blue-600 text-white" : "bg-surface text-ink/70"}`}>
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono font-bold uppercase text-gold-600">Pillar 0{idx + 1}</span>
                      <h4 className="text-base font-extrabold text-ink">{pil.title}</h4>
                    </div>
                  </div>
                </button>

                {isSelected && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    className="mt-4 pt-4 border-t border-ink/5 space-y-3"
                  >
                    <p className="text-xs text-muted leading-relaxed">{pil.description}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {pil.capabilities.map((c) => (
                        <span key={c} className="text-[11px] font-bold text-blue-900 bg-blue-50 px-2.5 py-1 rounded-md">
                          {c}
                        </span>
                      ))}
                    </div>
                    <div className="pt-2">
                      <Link href={pil.href} className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600">
                        <span>View Service Details</span>
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </Link>
                    </div>
                  </motion.div>
                )}
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
