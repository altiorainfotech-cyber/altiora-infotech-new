"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useSpring, useTransform, useMotionValue } from "framer-motion";
import { Sparkles, Terminal, Cpu, Zap, Activity, BookOpen, Layers } from "lucide-react";

const TYPING_PHRASES = [
  "Synthesizing AEO & GEO entity graphs for 2026...",
  "Benchmarking Next.js 16 Partial Prerendering load speed...",
  "Analyzing paid campaign creative velocity & CAC reduction...",
  "Drafting dynamic modern brand design system architecture...",
  "Evaluating organic search intent clusters & LLM retrieval...",
];

export function BlogHeroVisual() {
  // Mouse 3D Tilt Physics Setup
  const cardRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 15 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 15 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["14deg", "-14deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-14deg", "14deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  // Live Typing Terminal Simulation State
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = TYPING_PHRASES[phraseIndex];
    let timer: NodeJS.Timeout;

    if (!isDeleting) {
      if (displayedText.length < currentPhrase.length) {
        timer = setTimeout(() => {
          setDisplayedText(currentPhrase.slice(0, displayedText.length + 1));
        }, 45);
      } else {
        timer = setTimeout(() => setIsDeleting(true), 2400);
      }
    } else {
      if (displayedText.length > 0) {
        timer = setTimeout(() => {
          setDisplayedText(currentPhrase.slice(0, displayedText.length - 1));
        }, 25);
      } else {
        setIsDeleting(false);
        setPhraseIndex((prev) => (prev + 1) % TYPING_PHRASES.length);
      }
    }

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, phraseIndex]);

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full aspect-[4/3.2] sm:aspect-[16/11] max-w-xl mx-auto perspective-1000 group cursor-pointer select-none"
    >
      {/* Background Radial Ambient Glow */}
      <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-blue-600/20 via-gold-400/20 to-blue-400/10 blur-2xl opacity-75 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

      {/* 3D Tilted Glass Card Deck Container */}
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="relative w-full h-full rounded-3xl border border-white/80 bg-gradient-to-br from-white/95 via-surface/90 to-blue-50/50 backdrop-blur-2xl p-6 sm:p-7 shadow-[0_25px_60px_-15px_rgba(20,21,26,0.12)] transition-shadow duration-500 group-hover:shadow-[0_35px_80px_-20px_rgba(22,63,133,0.22)] flex flex-col justify-between overflow-hidden"
      >
        {/* Decorative Grid Mesh Background */}
        <div
          className="absolute inset-0 bg-[linear-gradient(to_right,#14151a08_1px,transparent_1px),linear-gradient(to_bottom,#14151a08_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"
          aria-hidden="true"
        />

        {/* Dynamic Neural Light Rays / SVG Laser Connections */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none stroke-blue-500/20" aria-hidden="true">
          <line x1="20%" y1="20%" x2="80%" y2="40%" strokeWidth="1.5" strokeDasharray="4 4">
            <animate attributeName="stroke-dashoffset" from="16" to="0" dur="2s" repeatCount="indefinite" />
          </line>
          <line x1="80%" y1="40%" x2="30%" y2="75%" strokeWidth="1.5" strokeDasharray="4 4">
            <animate attributeName="stroke-dashoffset" from="0" to="16" dur="2.5s" repeatCount="indefinite" />
          </line>
          <line x1="30%" y1="75%" x2="75%" y2="80%" strokeWidth="1.5" strokeDasharray="4 4">
            <animate attributeName="stroke-dashoffset" from="16" to="0" dur="1.8s" repeatCount="indefinite" />
          </line>
        </svg>

        {/* Top Bar: Header Telemetry */}
        <div style={{ transform: "translateZ(35px)" }} className="relative z-10 flex items-center justify-between">
          <div className="flex items-center gap-2.5 rounded-full border border-ink/10 bg-white/90 px-3.5 py-1.5 shadow-xs backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="text-[11px] font-black uppercase tracking-wider text-ink font-mono">
              Live Knowledge Stream
            </span>
          </div>

          <div className="flex items-center gap-1.5 rounded-xl border border-gold-500/30 bg-gold-50/90 px-3 py-1 text-[11px] font-bold text-gold-800 shadow-xs">
            <Zap className="h-3.5 w-3.5 text-gold-600 fill-gold-500" />
            <span>AI-Synthesized</span>
          </div>
        </div>

        {/* Middle Section: Real-Time Typing Insight Console */}
        <div
          style={{ transform: "translateZ(50px)" }}
          className="relative z-10 my-auto rounded-2xl border border-blue-900/10 bg-white/80 p-4 sm:p-5 shadow-sm backdrop-blur-md"
        >
          <div className="flex items-center justify-between text-xs font-mono text-muted mb-2">
            <div className="flex items-center gap-2">
              <Terminal className="h-4 w-4 text-blue-600" />
              <span className="font-bold text-ink/80">Altiora AI Engine v2.6</span>
            </div>
            <span className="text-[10px] text-blue-600 font-bold bg-blue-50 px-2 py-0.5 rounded">AUTO-UPDATED</span>
          </div>

          <div className="min-h-[44px] flex items-center">
            <p className="text-xs sm:text-sm font-semibold font-mono text-ink leading-relaxed">
              <span className="text-blue-600">&gt; </span>
              {displayedText}
              <span className="inline-block w-2 h-4 bg-blue-600 ml-1 animate-pulse" />
            </p>
          </div>
        </div>

        {/* Floating Neural Constellation Badge 1 (Top Right) */}
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          style={{ transform: "translateZ(65px)" }}
          className="absolute top-14 right-6 z-20 hidden sm:flex items-center gap-2 rounded-xl border border-white/80 bg-white/95 px-3.5 py-2 text-xs font-extrabold text-ink shadow-lg backdrop-blur-md"
        >
          <Cpu className="h-4 w-4 text-blue-600" />
          <span>AEO & GEO Search</span>
        </motion.div>

        {/* Floating Neural Constellation Badge 2 (Bottom Left) */}
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          style={{ transform: "translateZ(60px)" }}
          className="absolute bottom-16 left-6 z-20 hidden sm:flex items-center gap-2 rounded-xl border border-white/80 bg-white/95 px-3.5 py-2 text-xs font-extrabold text-ink shadow-lg backdrop-blur-md"
        >
          <Layers className="h-4 w-4 text-gold-600" />
          <span>Next.js 16 Tech</span>
        </motion.div>

        {/* Bottom Bar: Interactive Metrics & Reader Telemetry */}
        <div style={{ transform: "translateZ(40px)" }} className="relative z-10 flex items-center justify-between pt-2">
          <div className="flex items-center gap-3">
            <div className="flex -space-x-2 overflow-hidden">
              <img
                className="inline-block h-7 w-7 rounded-full ring-2 ring-white object-cover"
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&h=100&q=80"
                alt="Reader"
              />
              <img
                className="inline-block h-7 w-7 rounded-full ring-2 ring-white object-cover"
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&h=100&q=80"
                alt="Reader"
              />
              <img
                className="inline-block h-7 w-7 rounded-full ring-2 ring-white object-cover"
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=100&h=100&q=80"
                alt="Reader"
              />
            </div>
            <div className="text-[11px] font-bold text-ink">
              <span className="text-blue-600">14.8k+</span> Active Readers
            </div>
          </div>

          <div className="flex items-center gap-1.5 text-xs font-bold text-muted">
            <BookOpen className="h-3.5 w-3.5 text-blue-600" />
            <span>6 Curated Articles</span>
          </div>
        </div>

        {/* Metallic Bottom Accent Ribbon */}
        <div className="pointer-events-none absolute inset-x-6 bottom-0 h-1 bg-gradient-to-r from-transparent via-gold-400 to-transparent rounded-full" />
      </motion.div>
    </div>
  );
}
