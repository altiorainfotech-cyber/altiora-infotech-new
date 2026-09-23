"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { influencerServices, InfluencerService } from "@/data/influencerUgc";
import { Sparkles, Cpu, Play, Pause } from "lucide-react";
import { InfluencerOptimizationLoop } from "./InfluencerOptimizationLoop";

export function InfluencerServicesGrid() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeNode, setActiveNode] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setActiveNode((prev) => (prev + 1) % influencerServices.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.8", "end 0.2"],
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 90, damping: 22 });

  return (
    <section ref={containerRef} className="relative overflow-hidden bg-transparent py-14 sm:py-24" aria-labelledby="influencer-services-heading">
      <Container>
        <div className="max-w-2xl">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/40 bg-blue-50/80 px-3.5 py-1 text-xs font-extrabold text-blue-800">
              <Sparkles className="h-3.5 w-3.5 text-blue-600" />
              <span>CREATOR ARCHITECTURE</span>
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 id="influencer-services-heading" className="mt-3 text-3xl font-black tracking-tight text-ink sm:text-5xl leading-tight">
              Creator Intelligence System
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-3 text-sm sm:text-base leading-relaxed text-muted font-medium">
              Six core influencer and UGC disciplines working in a unified viral feedback loop.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 rounded-3xl border border-ink/10 bg-gradient-to-br from-slate-900 via-blue-950 to-ink p-6 sm:p-12 text-white shadow-2xl relative overflow-hidden">
          <div
            className="pointer-events-none absolute inset-0 opacity-15"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
          />

          <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-4 max-w-xl mx-auto mb-10 text-center sm:text-left">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-blue-400">Interactive Creator Engine</span>
              <h3 className="text-xl sm:text-3xl font-black text-white mt-1">Continuous Campaign Optimization</h3>
            </div>
            <button
              onClick={() => setIsPaused(!isPaused)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-blue-400/40 bg-blue-400/10 text-xs font-mono font-bold text-blue-300 hover:bg-blue-400/20 transition-colors"
            >
              {isPaused ? <Play className="h-3 w-3" /> : <Pause className="h-3 w-3" />}
              <span>{isPaused ? "RESUME AUTOPLAY" : "AUTOPLAYING"}</span>
            </button>
          </div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 relative flex items-center justify-center aspect-square max-w-[460px] mx-auto w-full">
              <svg className="w-full h-full overflow-visible" viewBox="0 0 440 440">
                <defs>
                  <linearGradient id="influencerLoopGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#3b82f6" />
                    <stop offset="50%" stopColor="#d3ac3c" />
                    <stop offset="100%" stopColor="#10b981" />
                  </linearGradient>
                </defs>

                <g transform="translate(220, 220)" className="z-20">
                  <circle r="52" fill="#1c4fa1" stroke="#d3ac3c" strokeWidth="3" className="shadow-2xl" />
                  <foreignObject x="-42" y="-42" width="84" height="84">
                    <div className="flex flex-col items-center justify-center h-full text-white text-center">
                      <Cpu className="h-7 w-7 text-gold-400 animate-spin" style={{ animationDuration: "12s" }} />
                      <span className="text-[9px] font-black uppercase tracking-tight mt-1 leading-none text-gold-300">
                        Creator Hub
                      </span>
                    </div>
                  </foreignObject>
                </g>

                <motion.g
                  animate={isPaused ? { rotate: 0 } : { rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 35, ease: "linear" }}
                  style={{ transformOrigin: "220px 220px" }}
                >
                  <circle cx="220" cy="220" r="150" fill="none" stroke="rgba(255, 255, 255, 0.2)" strokeWidth="3" strokeDasharray="6 6" />

                  {influencerServices.map((service: InfluencerService, i: number) => {
                    const angle = (i / influencerServices.length) * Math.PI * 2 - Math.PI / 2;
                    const radius = 150;
                    const nx = 220 + Math.cos(angle) * radius;
                    const ny = 220 + Math.sin(angle) * radius;
                    const isActive = activeNode === i;
                    const ServiceIcon = service.icon;

                    return (
                      <g key={service.title} className="cursor-pointer" onClick={() => { setActiveNode(i); setIsPaused(true); }}>
                        <line
                          x1="220"
                          y1="220"
                          x2={nx}
                          y2={ny}
                          stroke={isActive ? "url(#influencerLoopGrad)" : "rgba(255, 255, 255, 0.2)"}
                          strokeWidth={isActive ? "3.5" : "1.5"}
                        />

                        <g transform={`translate(${nx}, ${ny})`}>
                          <circle
                            r={isActive ? "28" : "21"}
                            fill={isActive ? "#d3ac3c" : "#1c4fa1"}
                            stroke={isActive ? "#ffffff" : "rgba(255, 255, 255, 0.5)"}
                            strokeWidth="3"
                            className="transition-all duration-300 shadow-xl"
                          />
                          <foreignObject
                            x={isActive ? "-16" : "-12"}
                            y={isActive ? "-16" : "-12"}
                            width={isActive ? "32" : "24"}
                            height={isActive ? "32" : "24"}
                          >
                            <motion.div
                              animate={isPaused ? { rotate: 0 } : { rotate: -360 }}
                              transition={{ repeat: Infinity, duration: 35, ease: "linear" }}
                              style={{ transformOrigin: "center" }}
                              className="flex items-center justify-center h-full"
                            >
                              <ServiceIcon className={`h-4 w-4 ${isActive ? "text-ink font-black" : "text-white"}`} />
                            </motion.div>
                          </foreignObject>
                        </g>
                      </g>
                    );
                  })}
                </motion.g>
              </svg>
            </div>

            <div className="lg:col-span-5 space-y-4">
              <div className="rounded-2xl border border-white/10 bg-white/10 p-6 backdrop-blur-md">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-blue-400">
                  0{activeNode + 1} Discipline
                </span>
                <h4 className="text-xl font-black text-white mt-1">
                  {influencerServices[activeNode].title}
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-white/80 font-medium">
                  {influencerServices[activeNode].description}
                </p>
                <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-blue-400/20 border border-blue-400/40 px-3 py-1 text-xs font-bold text-blue-300">
                  <Sparkles className="h-3.5 w-3.5" />
                  <span>{influencerServices[activeNode].metric}</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2">
                {influencerServices.map((serv: InfluencerService, idx: number) => (
                  <button
                    key={serv.title}
                    onClick={() => { setActiveNode(idx); setIsPaused(true); }}
                    className={`p-2.5 rounded-xl text-left border text-xs font-bold transition-all ${
                      activeNode === idx
                        ? "bg-gold-400 text-ink border-gold-400 shadow-md scale-102"
                        : "bg-white/5 text-white/80 border-white/10 hover:bg-white/10"
                    }`}
                  >
                    0{idx + 1} {serv.title}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <InfluencerOptimizationLoop />
        </div>
      </Container>
    </section>
  );
}
