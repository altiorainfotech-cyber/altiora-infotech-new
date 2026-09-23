"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Radio, MessageSquare, Compass, ShieldCheck, Sparkles, Send, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const RADAR_NODES = [
  {
    id: "inquiry",
    label: "01. New Inquiry",
    tag: "Signal Received",
    icon: MessageSquare,
    summary: "Your project scope and objectives are immediately captured and logged into our executive intake desk.",
    status: "Instant Intake",
  },
  {
    id: "response",
    label: "02. Fast Response",
    tag: "< 24 Hour SLA",
    icon: Send,
    summary: "Our senior strategist analyzes your requirements and responds with preliminary insights within 24 hours.",
    status: "Active SLA",
  },
  {
    id: "strategy",
    label: "03. Strategy Session",
    tag: "Roadmap Blueprint",
    icon: Compass,
    summary: "We conduct a deep-dive consultation to define target metrics, technology stack, and campaign architecture.",
    status: "Strategic Alignment",
  },
  {
    id: "project",
    label: "04. Project Launch",
    tag: "Execution Engine",
    icon: Sparkles,
    summary: "Sprint rollout of design, development, SEO/AEO, and performance ad campaigns with weekly telemetry.",
    status: "Sprint Rollout",
  },
  {
    id: "communication",
    label: "05. Transparent Dialogue",
    tag: "24/7 Direct Desk",
    icon: ShieldCheck,
    summary: "Continuous reporting, real-time Slack/Teams updates, and ongoing campaign optimization.",
    status: "24/7 Desk Active",
  },
];

export function ContactRadarVisual() {
  const [selectedIdx, setSelectedIdx] = useState<number>(0);
  const activeNode = RADAR_NODES[selectedIdx];
  const ActiveIcon = activeNode.icon;

  return (
    <section className="relative overflow-hidden bg-transparent py-12 sm:py-18" aria-labelledby="contact-radar-heading">
      <div className="pointer-events-none absolute right-1/4 top-1/2 -z-10 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-gradient-to-tr from-blue-600/10 via-gold-400/10 to-transparent blur-3xl opacity-70" />

      <Container>
        <div className="text-center max-w-2xl mx-auto mb-10">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-50/80 px-3.5 py-1.5 text-xs font-extrabold text-blue-900 shadow-sm backdrop-blur-md">
              <Radio className="h-3.5 w-3.5 text-blue-600 animate-pulse" />
              <span>Signature Radar Interface</span>
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <h2 id="contact-radar-heading" className="mt-3 text-3xl font-black tracking-tight text-ink sm:text-4xl">
              Inquiry Signal Radar &amp; Lifecycle
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-2 text-sm sm:text-base font-medium text-muted">
              Select any stage on the circular radar to inspect our 5-step inquiry-to-project communication process.
            </p>
          </Reveal>
        </div>

        {/* Circular Radar Interface Grid */}
        <div className="rounded-3xl border border-ink/10 bg-gradient-to-br from-white via-slate-50 to-blue-50/40 p-6 sm:p-10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Column: Radial Radar Graphic Wheel */}
            <div className="lg:col-span-6 relative aspect-square max-w-[420px] mx-auto flex items-center justify-center">
              {/* Radar Rings & Pulse Animations */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
                <circle cx="200" cy="200" r="160" fill="none" stroke="#2563eb" strokeWidth="1.5" strokeDasharray="4 4" className="opacity-30" />
                <circle cx="200" cy="200" r="110" fill="none" stroke="#d3ac3c" strokeWidth="1" className="opacity-40" />
                <circle cx="200" cy="200" r="60" fill="none" stroke="#2563eb" strokeWidth="1" className="opacity-20" />
                {/* Rotating Radar Sweep Line */}
                <line x1="200" y1="200" x2="360" y2="200" stroke="#d3ac3c" strokeWidth="2" className="origin-center animate-[spin_6s_linear_infinite] opacity-60" />
              </svg>

              {/* Central Radar Hub Node */}
              <div className="relative z-10 flex h-28 w-28 flex-col items-center justify-center rounded-full border-2 border-gold-400 bg-gradient-to-br from-blue-950 via-blue-900 to-ink text-center text-white shadow-2xl p-2">
                <Radio className="h-6 w-6 text-gold-400 animate-pulse" />
                <span className="text-[9px] font-mono font-bold uppercase tracking-wider text-white mt-1">INQUIRY RADAR</span>
              </div>

              {/* 5 Radar Stage Buttons */}
              {RADAR_NODES.map((node, idx) => {
                const angle = (idx / RADAR_NODES.length) * Math.PI * 2 - Math.PI / 2;
                const radius = 135;
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;
                const isSelected = selectedIdx === idx;
                const Icon = node.icon;

                return (
                  <button
                    key={node.id}
                    onClick={() => setSelectedIdx(idx)}
                    style={{ transform: `translate(${x}px, ${y}px)` }}
                    className={`absolute z-20 flex h-12 w-12 items-center justify-center rounded-2xl border transition-all duration-300 shadow-md ${
                      isSelected
                        ? "bg-gradient-to-br from-blue-600 to-indigo-700 border-gold-400 text-white scale-125 shadow-blue-500/40 ring-4 ring-gold-400/30"
                        : "bg-white border-ink/10 text-ink/70 hover:bg-blue-50 hover:text-blue-600 hover:scale-110"
                    }`}
                    title={node.label}
                  >
                    <Icon className="h-5 w-5" />
                  </button>
                );
              })}
            </div>

            {/* Right Column: Active Radar Node Card */}
            <div className="lg:col-span-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeNode.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="rounded-3xl border border-ink/10 bg-white p-8 shadow-xl space-y-6"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-900 to-ink text-gold-400 shadow-lg">
                      <ActiveIcon className="h-7 w-7" />
                    </div>
                    <div>
                      <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-gold-600">
                        {activeNode.tag}
                      </span>
                      <h3 className="text-2xl font-black text-ink">{activeNode.label}</h3>
                    </div>
                  </div>

                  <p className="text-sm sm:text-base font-medium leading-relaxed text-muted">
                    {activeNode.summary}
                  </p>

                  <div className="pt-4 border-t border-ink/5 flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-blue-700 flex items-center gap-1.5">
                      <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                      Status: {activeNode.status}
                    </span>
                    <span className="text-xs font-mono text-muted">Step 0{selectedIdx + 1} of 05</span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
