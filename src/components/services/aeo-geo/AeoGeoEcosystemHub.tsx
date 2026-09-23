"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { aeoGeoOverview, AeoGeoCapability } from "@/data/aeoGeo";
import { Cpu, Zap, Layers, Play, Pause } from "lucide-react";

export function AeoGeoEcosystemHub() {
  const [activeIdx, setActiveIdx] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const items = aeoGeoOverview.coverage || aeoGeoOverview.capabilities;

  const activeItem = items[activeIdx];
  const ActiveIcon = activeItem.icon;

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % items.length);
    }, 2800);

    return () => clearInterval(interval);
  }, [isPaused, items.length]);

  return (
    <div className="relative rounded-3xl border border-ink/8 bg-gradient-to-br from-white via-slate-50 to-blue-50/40 p-6 sm:p-8 shadow-xl overflow-hidden">
      <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-ink/8 pb-5">
        <div>
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-800">Section 05</span>
          <h3 className="text-xl sm:text-2xl font-black text-ink mt-1">Interactive AEO &amp; GEO Ecosystem</h3>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsPaused(!isPaused)}
            className="flex items-center gap-1.5 px-3 py-1 rounded-full border border-blue-300 bg-blue-50 text-[11px] font-mono font-bold text-blue-900 hover:bg-blue-100 transition-colors"
          >
            {isPaused ? <Play className="h-3 w-3" /> : <Pause className="h-3 w-3 text-blue-600 animate-pulse" />}
            <span>{isPaused ? "RESUME" : "AUTOPLAYING"}</span>
          </button>
          <span className="inline-flex items-center gap-1.5 text-xs font-extrabold text-blue-900 bg-blue-100/80 px-3 py-1 rounded-full border border-blue-200">
            <Layers className="h-3.5 w-3.5 text-blue-600" />
            <span>Single AI Engine</span>
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-7 relative flex items-center justify-center aspect-square max-w-[420px] mx-auto w-full">
          <svg className="w-full h-full overflow-visible" viewBox="0 0 400 400">
            <defs>
              <linearGradient id="aeoPathGlow" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#2563eb" />
                <stop offset="100%" stopColor="#d3ac3c" />
              </linearGradient>
            </defs>

            <g transform="translate(200, 200)" className="z-20">
              <circle r="46" fill="#1d4ed8" className="shadow-2xl" />
              <circle r="46" fill="none" stroke="#d3ac3c" strokeWidth="2.5" className="animate-pulse" />
              <foreignObject x="-36" y="-36" width="72" height="72">
                <div className="flex flex-col items-center justify-center h-full text-white text-center">
                  <Cpu className="h-6 w-6 text-gold-400 animate-spin" style={{ animationDuration: "10s" }} />
                  <span className="text-[9px] font-black uppercase tracking-tight leading-none mt-1">
                    AEO Engine
                  </span>
                </div>
              </foreignObject>
            </g>

            <motion.g
              animate={isPaused ? { rotate: 0 } : { rotate: 360 }}
              transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
              style={{ transformOrigin: "200px 200px" }}
            >
              <circle cx="200" cy="200" r="140" fill="none" stroke="rgba(37, 99, 235, 0.2)" strokeWidth="2" strokeDasharray="6 6" />

              {items.map((item: AeoGeoCapability, idx: number) => {
                const angle = (idx / items.length) * Math.PI * 2 - Math.PI / 2;
                const radius = 140;
                const nx = 200 + Math.cos(angle) * radius;
                const ny = 200 + Math.sin(angle) * radius;
                const isActive = activeIdx === idx;
                const NodeIcon = item.icon;

                return (
                  <g key={item.label} className="cursor-pointer" onClick={() => { setActiveIdx(idx); setIsPaused(true); }}>
                    <line
                      x1="200"
                      y1="200"
                      x2={nx}
                      y2={ny}
                      stroke={isActive ? "url(#aeoPathGlow)" : "rgba(20, 21, 26, 0.12)"}
                      strokeWidth={isActive ? "3.5" : "1.5"}
                      strokeDasharray={isActive ? "none" : "3 3"}
                    />

                    <g transform={`translate(${nx}, ${ny})`}>
                      <circle
                        r={isActive ? "26" : "19"}
                        fill={isActive ? "#d3ac3c" : "#ffffff"}
                        stroke={isActive ? "#1d4ed8" : "rgba(20, 21, 26, 0.2)"}
                        strokeWidth="2.5"
                        className="transition-all duration-300 shadow-md"
                      />
                      <foreignObject
                        x={isActive ? "-16" : "-12"}
                        y={isActive ? "-16" : "-12"}
                        width={isActive ? "32" : "24"}
                        height={isActive ? "32" : "24"}
                      >
                        <motion.div
                          animate={isPaused ? { rotate: 0 } : { rotate: -360 }}
                          transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
                          style={{ transformOrigin: "center" }}
                          className="flex items-center justify-center h-full"
                        >
                          <NodeIcon className={`h-4 w-4 ${isActive ? "text-ink font-extrabold" : "text-blue-900"}`} />
                        </motion.div>
                      </foreignObject>
                    </g>
                  </g>
                );
              })}
            </motion.g>
          </svg>
        </div>

        <div className="lg:col-span-5">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeItem.label}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="rounded-2xl border border-ink/10 bg-white p-6 shadow-xl"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-indigo-800 text-gold-400 shadow-md">
                  <ActiveIcon className="h-6 w-6" />
                </div>
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-blue-600">Active Node</span>
                  <h4 className="text-lg font-black text-ink leading-tight">{activeItem.label}</h4>
                </div>
              </div>

              <p className="mt-4 text-sm leading-relaxed text-muted font-medium">
                {activeItem.detail}
              </p>

              <div className="mt-5 flex items-center justify-between border-t border-ink/8 pt-4">
                <span className="text-xs font-bold text-blue-900 flex items-center gap-1.5">
                  <Zap className="h-3.5 w-3.5 text-gold-500" />
                  Connected to AEO Engine
                </span>
                <span className="text-xs font-mono font-bold text-ink/60">Node {activeIdx + 1}/{items.length}</span>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="mt-4 flex flex-wrap gap-1.5">
            {items.map((item: AeoGeoCapability, idx: number) => (
              <button
                key={item.label}
                onClick={() => { setActiveIdx(idx); setIsPaused(true); }}
                className={`rounded-lg px-2.5 py-1 text-[11px] font-bold transition-colors ${
                  activeIdx === idx
                    ? "bg-blue-800 text-white shadow-sm"
                    : "bg-surface text-ink/70 hover:bg-ink/5"
                }`}
              >
                {item.label.split(" ")[0]}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
