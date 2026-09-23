"use client";

import { useState } from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { platforms } from "@/data/paidAdvertising";
import { Globe2, ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const PLATFORM_PIPELINES: Record<string, { steps: string[]; tag: string }> = {
  "Google Ads": {
    steps: ["Search Intent", "High-Intent Traffic", "Conversion"],
    tag: "Intent Engine",
  },
  "Facebook & Instagram": {
    steps: ["Audience", "Engagement", "Retargeting", "Conversion"],
    tag: "Social Retargeting",
  },
  LinkedIn: {
    steps: ["Professionals", "Decision Makers", "B2B Lead"],
    tag: "Account-Based Reach",
  },
  TikTok: {
    steps: ["Short-form Creative", "Attention", "Engagement", "Conversion"],
    tag: "Viral Velocity",
  },
  "Microsoft Ads": {
    steps: ["Search", "Audience", "Remarketing"],
    tag: "High-Value Search",
  },
  "Twitter/X": {
    steps: ["Real-time Conversation", "Engagement", "Campaign Interaction"],
    tag: "Real-time Pulse",
  },
};

export function PaidAdsPlatforms() {
  const [selectedIdx, setSelectedIdx] = useState<number>(0);
  const currentPlatform = platforms[selectedIdx];
  const Icon = currentPlatform.icon;
  const pipeline = PLATFORM_PIPELINES[currentPlatform.name] || {
    steps: ["Targeting", "Engagement", "Conversion"],
    tag: "Custom Flow",
  };

  return (
    <section className="relative overflow-hidden bg-transparent py-14 sm:py-20" aria-labelledby="platforms-heading">
      <div className="pointer-events-none absolute right-1/3 top-1/2 -z-10 h-[450px] w-[700px] -translate-y-1/2 rounded-full bg-gradient-to-r from-blue-500/10 via-gold-400/10 to-transparent blur-3xl opacity-70" />

      <Container>
        <div className="max-w-2xl">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-50/80 px-3.5 py-1 text-xs font-extrabold text-blue-800">
              <Globe2 className="h-3.5 w-3.5 text-blue-600" />
              <span>Where We Advertise</span>
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 id="platforms-heading" className="mt-3 text-3xl font-black tracking-tight text-ink sm:text-4xl">
              Advertising Platforms & Platform Switcher
            </h2>
          </Reveal>
        </div>

        {/* Platform Switcher Tab Bar */}
        <div className="mt-8 flex overflow-x-auto pb-2 gap-2 scrollbar-none border-b border-ink/10">
          {platforms.map((plat, idx) => {
            const PlatIcon = plat.icon;
            const isSelected = selectedIdx === idx;

            return (
              <button
                key={plat.name}
                onClick={() => setSelectedIdx(idx)}
                className={`flex items-center gap-2.5 px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm whitespace-nowrap transition-all duration-300 ${
                  isSelected
                    ? "bg-blue-900 text-white shadow-lg shadow-blue-900/20 scale-102"
                    : "bg-surface text-ink/80 hover:bg-ink/5"
                }`}
              >
                <PlatIcon className={`h-4 w-4 ${isSelected ? "text-gold-400" : "text-blue-700"}`} />
                <span>{plat.name}</span>
              </button>
            );
          })}
        </div>

        {/* Interactive Dynamic Visual Environment for Selected Platform */}
        <div className="mt-8 rounded-3xl border border-ink/10 bg-white p-6 sm:p-10 shadow-2xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPlatform.name}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.35 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              {/* Left Column: Platform Details */}
              <div className="lg:col-span-6 space-y-4">
                <div className="flex items-center gap-4">
                  <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-2xl border border-ink/10 shadow-md">
                    <Image
                      src={currentPlatform.image}
                      alt={`${currentPlatform.name} advertising`}
                      fill
                      className="object-cover"
                      sizes="64px"
                    />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-gold-600">
                      {pipeline.tag}
                    </span>
                    <h3 className="text-2xl font-black text-ink">{currentPlatform.name}</h3>
                  </div>
                </div>

                <p className="text-sm sm:text-base leading-relaxed text-muted font-medium">
                  {currentPlatform.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {currentPlatform.services.map((serv) => (
                    <span
                      key={serv}
                      className="inline-flex items-center gap-1.5 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-extrabold text-blue-900"
                    >
                      <CheckCircle2 className="h-3.5 w-3.5 text-blue-600" />
                      {serv}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right Column: Original Visual Pipeline Environment */}
              <div className="lg:col-span-6 rounded-2xl border border-blue-900/20 bg-gradient-to-br from-slate-900 via-blue-950 to-ink p-6 text-white shadow-xl">
                <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-5">
                  <span className="text-xs font-mono font-bold uppercase text-gold-400">Altiora Visual Pipeline</span>
                  <Sparkles className="h-4 w-4 text-gold-400 animate-pulse" />
                </div>

                <div className="space-y-4">
                  {pipeline.steps.map((step, idx) => (
                    <div key={step} className="flex items-center gap-3">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gold-400/20 text-gold-400 font-mono text-xs font-bold border border-gold-400/40">
                        0{idx + 1}
                      </div>
                      <div className="flex-1 rounded-xl bg-white/10 p-3 border border-white/10 flex items-center justify-between">
                        <span className="text-sm font-extrabold text-white">{step}</span>
                        {idx < pipeline.steps.length - 1 && (
                          <ArrowRight className="h-4 w-4 text-gold-400" />
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex items-center justify-between text-[11px] font-mono text-white/60 border-t border-white/10 pt-3">
                  <span>Custom Engine: Configured</span>
                  <span className="text-emerald-400 font-bold">100% Optimized</span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </Container>
    </section>
  );
}
