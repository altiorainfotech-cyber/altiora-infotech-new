"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { whyAltiora } from "@/data/homepage";
import { Layers, Cpu, TrendingUp } from "lucide-react";

const STAGE_ICONS = [Layers, Cpu, TrendingUp];
const STAGE_LABELS = ["01. STRATEGY", "02. EXECUTION", "03. GROWTH"];

export function WhyAltiora() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 25,
    restDelta: 0.001,
  });

  // Transform values for visual elements across Chaos -> Structure -> Growth
  const stageIndex = useTransform(smoothProgress, [0, 0.35, 0.7, 1], [0, 0, 1, 2]);

  // Scatter/Grid positions for Chaos -> Structure transition
  const chaosOpacity = useTransform(smoothProgress, [0, 0.3, 0.45], [1, 0.8, 0.2]);
  const structureOpacity = useTransform(smoothProgress, [0.3, 0.45, 0.65, 0.8], [0, 1, 1, 0.3]);
  const growthScale = useTransform(smoothProgress, [0.65, 0.85, 1], [0.8, 1, 1.2]);
  const growthOpacity = useTransform(smoothProgress, [0.65, 0.8, 1], [0, 1, 1]);

  return (
    <section
      ref={containerRef}
      className="relative h-[250vh] bg-transparent"
      aria-labelledby="why-altiora-heading"
    >
      {/* Sticky Viewport Container */}
      <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden py-12">
        {/* Subtle Background Glow */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(61,114,201,0.08),transparent_70%)]" />

        <Container className="relative z-10">
          <SectionHeading
            headingId="why-altiora-heading"
            eyebrow="Transformation Engine"
            title="Strategy → Execution → Growth"
            description="From fragmented market chaos to a structured, accelerating digital revenue machine."
            align="center"
            className="mx-auto max-w-2xl"
            tone="light"
          />

          {/* Interactive Transformation Stage Card & Visual Canvas */}
          <div className="mt-10 grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
            {/* Visual Canvas Panel (Chaos -> Structure -> Growth) */}
            <div className="relative aspect-square w-full max-w-md mx-auto overflow-hidden rounded-3xl border border-ink/10 bg-white/60 backdrop-blur-xl shadow-xl flex items-center justify-center p-8">
              {/* Outer Pulse Border */}
              <div className="pointer-events-none absolute inset-0 rounded-3xl border border-blue-500/20" />

              {/* Stage 1: CHAOS (Fragmented Scattered Nodes) */}
              <motion.div
                style={{ opacity: chaosOpacity }}
                className="absolute inset-0 flex items-center justify-center pointer-events-none"
              >
                <div className="relative h-64 w-64">
                  {[
                    { top: "15%", left: "20%", size: "h-4 w-4", color: "bg-red-400" },
                    { top: "70%", left: "15%", size: "h-6 w-6", color: "bg-amber-400" },
                    { top: "25%", left: "75%", size: "h-5 w-5", color: "bg-blue-400" },
                    { top: "80%", left: "65%", size: "h-3 w-3", color: "bg-purple-400" },
                    { top: "45%", left: "50%", size: "h-8 w-8", color: "bg-gold-500" },
                    { top: "10%", left: "50%", size: "h-3 w-3", color: "bg-slate-400" },
                  ].map((node, i) => (
                    <motion.div
                      key={i}
                      animate={{
                        x: [0, (i % 2 === 0 ? 12 : -12), 0],
                        y: [0, (i % 3 === 0 ? -12 : 12), 0],
                      }}
                      transition={{ duration: 4 + i, repeat: Infinity, ease: "easeInOut" }}
                      className={`absolute rounded-full shadow-md ${node.size} ${node.color} opacity-70`}
                      style={{ top: node.top, left: node.left }}
                    />
                  ))}
                  <svg className="absolute inset-0 h-full w-full stroke-ink/15" fill="none">
                    <line x1="20%" y1="15%" x2="50%" y2="45%" strokeDasharray="4 4" />
                    <line x1="75%" y1="25%" x2="50%" y2="45%" strokeDasharray="4 4" />
                    <line x1="15%" y1="70%" x2="65%" y2="80%" strokeDasharray="4 4" />
                  </svg>
                </div>
              </motion.div>

              {/* Stage 2: STRUCTURE (Organized Connected Circuit Matrix) */}
              <motion.div
                style={{ opacity: structureOpacity }}
                className="absolute inset-0 flex items-center justify-center pointer-events-none"
              >
                <div className="relative h-64 w-64 flex flex-col justify-between">
                  <div className="grid grid-cols-3 gap-6">
                    {[...Array(9)].map((_, i) => (
                      <div
                        key={i}
                        className="h-12 w-12 rounded-xl border border-blue-500/40 bg-blue-50/80 flex items-center justify-center text-blue-700 font-bold text-xs shadow-sm"
                      >
                        0{i + 1}
                      </div>
                    ))}
                  </div>
                  <svg className="absolute inset-0 h-full w-full pointer-events-none stroke-blue-500/50" strokeWidth="2" fill="none">
                    <path d="M 24 24 L 120 24 L 120 120 L 216 120 L 216 216" strokeDasharray="6 6" />
                    <path d="M 216 24 L 120 120 L 24 216" />
                  </svg>
                </div>
              </motion.div>

              {/* Stage 3: GROWTH (Accelerating Connected System Vector) */}
              <motion.div
                style={{ opacity: growthOpacity, scale: growthScale }}
                className="absolute inset-0 flex items-center justify-center pointer-events-none"
              >
                <div className="relative flex flex-col items-center">
                  <div className="relative flex h-32 w-32 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white shadow-2xl shadow-blue-600/40">
                    <TrendingUp className="h-16 w-16 text-gold-400 animate-pulse" />
                    <div className="absolute inset-0 rounded-full border-2 border-gold-400/50 animate-ping opacity-30" />
                  </div>
                  <span className="mt-4 rounded-full border border-blue-400/30 bg-blue-50 px-4 py-1 text-xs font-black uppercase tracking-widest text-blue-700 shadow-sm">
                    High-Velocity Scaling
                  </span>
                </div>
              </motion.div>
            </div>

            {/* Content Text Stepper Panels */}
            <div className="flex flex-col gap-6">
              {whyAltiora.panels.map((panel, index) => {
                const Icon = STAGE_ICONS[index] ?? Layers;
                const isActive = Math.round(stageIndex.get()) === index;

                return (
                  <motion.div
                    key={panel.number}
                    animate={{
                      scale: isActive ? 1.02 : 0.98,
                      opacity: isActive ? 1 : 0.45,
                    }}
                    transition={{ duration: 0.3 }}
                    className={`rounded-2xl border p-6 transition-colors shadow-sm ${
                      isActive
                        ? "border-blue-500/50 bg-white shadow-md ring-1 ring-blue-500/20"
                        : "border-ink/10 bg-white/40"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-mono font-bold tracking-widest text-blue-600">
                        {STAGE_LABELS[index]}
                      </span>
                      <div className="h-px flex-1 bg-ink/10" />
                    </div>

                    <div className="mt-4 flex items-start gap-4">
                      <div
                        className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-white shadow-md ${
                          isActive
                            ? "bg-gradient-to-br from-blue-600 to-blue-800 shadow-blue-500/30"
                            : "bg-slate-400"
                        }`}
                      >
                        <Icon className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-ink sm:text-xl">
                          {panel.title}
                        </h3>
                        <p className="mt-1.5 text-sm leading-relaxed text-muted">
                          {panel.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
