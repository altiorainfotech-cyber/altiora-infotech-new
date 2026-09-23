"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Sparkles, Calculator, TrendingUp, DollarSign, Target, Cpu, ArrowRight } from "lucide-react";

const SERVICE_CHANNELS = [
  { id: "aeo", label: "AEO & AI Search (ChatGPT/SGE)", multiplier: 2.8, cacReduction: 38 },
  { id: "web", label: "Next.js Web Tech & Speed", multiplier: 2.4, cacReduction: 25 },
  { id: "paid", label: "Performance Paid Marketing", multiplier: 3.2, cacReduction: 32 },
  { id: "brand", label: "Brand Identity & Positioning", multiplier: 2.1, cacReduction: 20 },
  { id: "social", label: "Social Commerce & UGC", multiplier: 2.6, cacReduction: 29 },
];

export function GrowthCalculatorWidget() {
  const [monthlyBudget, setMonthlyBudget] = useState<number>(15000);
  const [selectedChannel, setSelectedChannel] = useState<string>("aeo");

  const channel = SERVICE_CHANNELS.find((c) => c.id === selectedChannel) || SERVICE_CHANNELS[0];

  // Dynamic calculations
  const projectedRevenue = Math.round(monthlyBudget * channel.multiplier * 3);
  const estimatedReach = Math.round((monthlyBudget / 12) * 1000).toLocaleString();
  const projectedCacReduction = channel.cacReduction;
  const citationLift = Math.min(Math.round((monthlyBudget / 1000) * 8.5), 98);

  return (
    <section className="relative py-16 sm:py-24 bg-transparent overflow-hidden">
      {/* Background Radial Glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[600px] w-[950px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-tr from-blue-600/15 via-gold-400/12 to-transparent blur-3xl opacity-80"
        aria-hidden="true"
      />

      <Container>
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-white/90 px-4 py-1.5 text-xs font-extrabold text-blue-800 shadow-xs backdrop-blur-md">
              <Calculator className="h-3.5 w-3.5 text-blue-600" />
              <span>Interactive ROI &amp; Growth Simulator</span>
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <h2 className="mt-4 text-3xl sm:text-5xl font-black tracking-tight text-ink">
              Simulate Your{" "}
              <span className="bg-gradient-to-r from-blue-700 via-blue-900 to-gold-600 bg-clip-text text-transparent">
                Growth Potential
              </span>
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-3 text-sm sm:text-base text-muted font-medium max-w-xl mx-auto">
              Adjust your monthly investment and primary focus area to see real-time performance projections backed by Altiora's benchmark data.
            </p>
          </Reveal>
        </div>

        {/* Main Calculator Card */}
        <Reveal delay={0.15}>
          <div className="relative overflow-hidden rounded-3xl border border-white/90 bg-gradient-to-br from-white/95 via-surface/90 to-blue-50/40 p-6 sm:p-10 shadow-2xl backdrop-blur-2xl">
            {/* Top Accent Line */}
            <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-blue-600 via-blue-500 to-gold-400" />

            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center">
              {/* Controls Column (Left) */}
              <div className="lg:col-span-6 space-y-7">
                {/* 1. Monthly Budget Slider */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-xs font-extrabold text-ink uppercase tracking-wider flex items-center gap-1.5">
                      <DollarSign className="h-4 w-4 text-blue-600" />
                      <span>Monthly Growth Budget</span>
                    </label>
                    <span className="text-lg font-black font-mono text-blue-700 bg-blue-50 px-3 py-1 rounded-xl border border-blue-200">
                      ${monthlyBudget.toLocaleString()} / mo
                    </span>
                  </div>

                  <input
                    type="range"
                    min={5000}
                    max={100000}
                    step={2500}
                    value={monthlyBudget}
                    onChange={(e) => setMonthlyBudget(Number(e.target.value))}
                    className="w-full h-2 bg-ink/10 rounded-lg appearance-none cursor-pointer accent-blue-600"
                  />

                  <div className="flex justify-between text-[11px] font-mono font-bold text-muted mt-1.5">
                    <span>$5,000</span>
                    <span>$50,000</span>
                    <span>$100,000+</span>
                  </div>
                </div>

                {/* 2. Channel Focus Selection */}
                <div>
                  <label className="text-xs font-extrabold text-ink uppercase tracking-wider flex items-center gap-1.5 mb-3">
                    <Target className="h-4 w-4 text-gold-600" />
                    <span>Select Core Strategy Discipline</span>
                  </label>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {SERVICE_CHANNELS.map((ch) => {
                      const isSelected = selectedChannel === ch.id;
                      return (
                        <button
                          key={ch.id}
                          type="button"
                          onClick={() => setSelectedChannel(ch.id)}
                          className={`p-3 rounded-2xl text-left text-xs font-bold transition-all border ${
                            isSelected
                              ? "bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-600/20"
                              : "bg-white text-ink border-ink/10 hover:border-blue-300 hover:bg-surface"
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <span>{ch.label}</span>
                            <span className={`text-[10px] px-1.5 py-0.5 rounded font-mono ${isSelected ? "bg-white/20 text-white" : "bg-blue-50 text-blue-700"}`}>
                              {ch.multiplier}x
                            </span>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs font-semibold text-muted pt-2 border-t border-ink/8">
                  <Cpu className="h-4 w-4 text-blue-600" />
                  <span>Projections computed via Altiora Performance Engine benchmarks.</span>
                </div>
              </div>

              {/* Dynamic Telemetry Results Column (Right) */}
              <div className="lg:col-span-6">
                <div className="rounded-3xl border border-blue-900/20 bg-gradient-to-br from-ink via-blue-950 to-blue-900 p-6 sm:p-8 text-white shadow-2xl relative overflow-hidden">
                  {/* Subtle Glow */}
                  <div
                    className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full bg-gold-500/15 blur-2xl"
                    aria-hidden="true"
                  />

                  <div className="relative z-10 space-y-6">
                    <div className="flex items-center justify-between pb-4 border-b border-white/10">
                      <div className="flex items-center gap-2 text-xs font-extrabold text-gold-300 uppercase tracking-wider">
                        <Sparkles className="h-4 w-4 text-gold-400 fill-gold-400" />
                        <span>Projected 90-Day Telemetry</span>
                      </div>
                      <span className="text-[10px] font-mono font-bold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-md border border-emerald-400/20">
                        ESTIMATED LIFT
                      </span>
                    </div>

                    {/* Result 1: Revenue Multiplier */}
                    <div>
                      <div className="text-xs font-bold text-blue-200/80">Projected 90-Day Revenue Pipeline</div>
                      <div className="text-3xl sm:text-4xl font-black font-mono text-white mt-1">
                        ${projectedRevenue.toLocaleString()}
                        <span className="text-sm font-bold text-gold-400 ml-2">({channel.multiplier}x Multiplier)</span>
                      </div>
                    </div>

                    {/* Result Grid 2: CAC Reduction & Reach */}
                    <div className="grid grid-cols-2 gap-4 pt-2">
                      <div className="rounded-2xl bg-white/5 p-4 border border-white/10 backdrop-blur-md">
                        <div className="text-[11px] font-bold text-blue-200/70">CAC Reduction</div>
                        <div className="text-2xl font-black font-mono text-emerald-400 mt-1">
                          -{projectedCacReduction}%
                        </div>
                        <div className="text-[10px] font-medium text-blue-200/60 mt-0.5">Lower Acquisition Cost</div>
                      </div>

                      <div className="rounded-2xl bg-white/5 p-4 border border-white/10 backdrop-blur-md">
                        <div className="text-[11px] font-bold text-blue-200/70">AI Engine Citation Lift</div>
                        <div className="text-2xl font-black font-mono text-gold-400 mt-1">
                          +{citationLift}%
                        </div>
                        <div className="text-[10px] font-medium text-blue-200/60 mt-0.5">Generative Visibility</div>
                      </div>
                    </div>

                    {/* Result 3: Reach */}
                    <div className="flex items-center justify-between text-xs font-medium text-blue-100/80 pt-2 border-t border-white/10">
                      <span>Est. Monthly Audience Impressions:</span>
                      <strong className="text-white font-mono font-bold">{estimatedReach}+</strong>
                    </div>

                    {/* Action CTA */}
                    <a
                      href="/contact"
                      className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-gold-500 to-gold-600 px-6 py-3.5 text-xs font-black text-ink shadow-lg shadow-gold-500/20 transition-all hover:from-gold-400 hover:to-gold-500 hover:scale-[1.02]"
                    >
                      <span>Claim Your Custom Growth Blueprint</span>
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
