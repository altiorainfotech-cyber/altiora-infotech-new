"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SOLUTIONS_DATA, SolutionTrack } from "@/data/solutions";
import {
  Compass,
  CheckCircle2,
  ArrowRight,
  RotateCcw,
  Sparkles,
  Zap,
  Target,
  BarChart3,
  Layers,
} from "lucide-react";

const OBJECTIVES = [
  { id: "ai_search", label: "Dominate AI Search (ChatGPT / SGE)", solutionId: "ai-search-dominance" },
  { id: "web_speed", label: "Build Speed-First Next.js Web App", solutionId: "enterprise-web-architecture" },
  { id: "cut_cac", label: "Scale Paid Ads & Cut Acquisition CAC", solutionId: "performance-cac-reduction" },
  { id: "brand_reposition", label: "Modernize Brand Identity & Motion", solutionId: "brand-identity-system" },
];

const BUSINESS_STAGES = [
  "Early Growth / Seed Stage",
  "Scaling Mid-Market Enterprise",
  "Established Category Leader",
];

export function SolutionDiagnosticWizard() {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [selectedObjective, setSelectedObjective] = useState<string>("ai_search");
  const [selectedStage, setSelectedStage] = useState<string>(BUSINESS_STAGES[0]);

  const recommendedSolution: SolutionTrack =
    SOLUTIONS_DATA.find((s) => s.id === (OBJECTIVES.find((o) => o.id === selectedObjective)?.solutionId || "ai-search-dominance")) ||
    SOLUTIONS_DATA[0];

  return (
    <section className="relative py-16 sm:py-24 bg-transparent overflow-hidden">
      <Container>
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-white/90 px-4 py-1.5 text-xs font-extrabold text-blue-800 shadow-xs backdrop-blur-md">
              <Compass className="h-3.5 w-3.5 text-blue-600" />
              <span>Interactive Solution Matcher</span>
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <h2 className="mt-4 text-3xl sm:text-5xl font-black tracking-tight text-ink">
              Find Your Custom{" "}
              <span className="bg-gradient-to-r from-blue-700 via-blue-900 to-gold-600 bg-clip-text text-transparent">
                Growth Blueprint
              </span>
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-3 text-sm sm:text-base leading-relaxed text-muted font-medium max-w-xl mx-auto">
              Answer 2 quick questions to identify the optimal technology &amp; growth architecture for your business.
            </p>
          </Reveal>
        </div>

        {/* Wizard Panel */}
        <Reveal delay={0.15}>
          <div className="max-w-4xl mx-auto overflow-hidden rounded-3xl border border-white/90 bg-gradient-to-br from-white/95 via-surface/90 to-blue-50/40 p-6 sm:p-10 shadow-2xl backdrop-blur-2xl">
            {/* Top Accent Line */}
            <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-blue-600 via-blue-500 to-gold-400" />

            {/* Stepper Tabs */}
            <div className="mb-8 grid grid-cols-3 gap-2 border-b border-ink/8 pb-6">
              <div
                className={`flex items-center justify-center gap-2 py-2 text-xs font-extrabold rounded-xl ${
                  step === 1 ? "bg-blue-600 text-white shadow-sm" : "text-muted"
                }`}
              >
                <span>1. Core Goal</span>
              </div>
              <div
                className={`flex items-center justify-center gap-2 py-2 text-xs font-extrabold rounded-xl ${
                  step === 2 ? "bg-blue-600 text-white shadow-sm" : "text-muted"
                }`}
              >
                <span>2. Business Stage</span>
              </div>
              <div
                className={`flex items-center justify-center gap-2 py-2 text-xs font-extrabold rounded-xl ${
                  step === 3 ? "bg-emerald-600 text-white shadow-sm" : "text-muted"
                }`}
              >
                <span>3. Recommended Blueprint</span>
              </div>
            </div>

            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.div
                  key="wiz1"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  className="space-y-6"
                >
                  <div className="text-sm font-black text-ink">What is your primary growth priority for 2026?</div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {OBJECTIVES.map((obj) => (
                      <button
                        key={obj.id}
                        type="button"
                        onClick={() => setSelectedObjective(obj.id)}
                        className={`p-4 rounded-2xl text-left border transition-all ${
                          selectedObjective === obj.id
                            ? "border-blue-600 bg-blue-50/80 ring-2 ring-blue-600/20"
                            : "border-ink/10 bg-white hover:border-blue-300"
                        }`}
                      >
                        <div className="text-xs font-extrabold text-ink">{obj.label}</div>
                      </button>
                    ))}
                  </div>

                  <div className="pt-4 flex justify-end">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-xs font-extrabold text-white shadow-md hover:bg-blue-700"
                    >
                      <span>Next: Select Business Stage</span>
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div
                  key="wiz2"
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  className="space-y-6"
                >
                  <div className="text-sm font-black text-ink">Which stage best describes your business?</div>

                  <div className="space-y-3">
                    {BUSINESS_STAGES.map((stg) => (
                      <button
                        key={stg}
                        type="button"
                        onClick={() => setSelectedStage(stg)}
                        className={`w-full p-4 rounded-2xl text-left border transition-all ${
                          selectedStage === stg
                            ? "border-blue-600 bg-blue-50/80 ring-2 ring-blue-600/20"
                            : "border-ink/10 bg-white hover:border-blue-300"
                        }`}
                      >
                        <div className="text-xs font-extrabold text-ink">{stg}</div>
                      </button>
                    ))}
                  </div>

                  <div className="pt-4 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="text-xs font-bold text-muted hover:text-ink"
                    >
                      ← Back
                    </button>
                    <button
                      type="button"
                      onClick={() => setStep(3)}
                      className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-xs font-extrabold text-white shadow-md hover:bg-blue-700"
                    >
                      <span>Generate Blueprint</span>
                      <Sparkles className="h-4 w-4 text-gold-300" />
                    </button>
                  </div>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div
                  key="wiz3"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="space-y-6"
                >
                  <div className="rounded-3xl border border-blue-900/20 bg-gradient-to-br from-ink via-blue-950 to-blue-900 p-6 sm:p-8 text-white shadow-2xl">
                    <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-white/10">
                      <div className="inline-flex items-center gap-2 rounded-full border border-gold-400/30 bg-gold-500/10 px-3.5 py-1 text-xs font-extrabold text-gold-300">
                        <Sparkles className="h-3.5 w-3.5 text-gold-400 fill-gold-400" />
                        <span>Recommended Growth Solution</span>
                      </div>
                      <span className="text-xs font-mono text-blue-200">Matched for: {selectedStage}</span>
                    </div>

                    <h3 className="mt-4 text-2xl sm:text-3xl font-black text-white">{recommendedSolution.title}</h3>
                    <p className="mt-2 text-xs sm:text-sm font-medium text-blue-100/80 leading-relaxed">
                      {recommendedSolution.description}
                    </p>

                    <div className="mt-6 space-y-2">
                      <div className="text-xs font-extrabold text-gold-400 uppercase tracking-wider">Expected Key Deliverables:</div>
                      {recommendedSolution.outcomes.map((out, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs font-semibold text-white">
                          <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                          <span>{out}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-white/10">
                      <button
                        type="button"
                        onClick={() => setStep(1)}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-200 hover:text-white"
                      >
                        <RotateCcw className="h-3.5 w-3.5" />
                        <span>Restart Diagnostic</span>
                      </button>

                      <a
                        href="/contact"
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-gold-500 px-6 py-3.5 text-xs font-black text-ink shadow-lg transition-transform hover:bg-gold-400 hover:scale-[1.02]"
                      >
                        <span>Discuss This Blueprint</span>
                        <ArrowRight className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
