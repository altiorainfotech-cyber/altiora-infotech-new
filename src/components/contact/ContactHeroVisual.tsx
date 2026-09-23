"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useSpring, useTransform, useMotionValue } from "framer-motion";
import { Mail, Send, MessageSquare, MapPin, Clock, Sparkles, Radio, CheckCircle2, ShieldCheck } from "lucide-react";

const SIGNAL_MESSAGES = [
  "Streamed: New Project Inquiry received...",
  "Routing: Direct to Surrey, BC Studio...",
  "Status: 24/7 Communication Channel Active...",
  "Guarantee: Expert Response in < 24 Hours...",
  "Encryption: TLS 1.3 Secure Data Stream...",
];

export function ContactHeroVisual() {
  const cardRef = useRef<HTMLDivElement>(null);

  // Mouse 3D Tilt Setup
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

  // Live Typing Terminal Simulation
  const [msgIndex, setMsgIndex] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentMsg = SIGNAL_MESSAGES[msgIndex];
    let timer: NodeJS.Timeout;

    if (!isDeleting) {
      if (typedText.length < currentMsg.length) {
        timer = setTimeout(() => {
          setTypedText(currentMsg.slice(0, typedText.length + 1));
        }, 40);
      } else {
        timer = setTimeout(() => setIsDeleting(true), 2200);
      }
    } else {
      if (typedText.length > 0) {
        timer = setTimeout(() => {
          setTypedText(currentMsg.slice(0, typedText.length - 1));
        }, 20);
      } else {
        setIsDeleting(false);
        setMsgIndex((prev) => (prev + 1) % SIGNAL_MESSAGES.length);
      }
    }

    return () => clearTimeout(timer);
  }, [typedText, isDeleting, msgIndex]);

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full aspect-[4/3.2] sm:aspect-[16/11] max-w-xl mx-auto perspective-1000 group cursor-pointer select-none"
    >
      {/* Background Radial Glow */}
      <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-blue-600/25 via-gold-400/20 to-blue-400/15 blur-2xl opacity-75 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

      {/* 3D Glass Communication Card Deck */}
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="relative w-full h-full rounded-3xl border border-white/80 bg-gradient-to-br from-white/95 via-surface/90 to-blue-50/60 backdrop-blur-2xl p-6 sm:p-7 shadow-[0_25px_60px_-15px_rgba(20,21,26,0.14)] transition-shadow duration-500 group-hover:shadow-[0_35px_80px_-20px_rgba(22,63,133,0.25)] flex flex-col justify-between overflow-hidden"
      >
        {/* Signal Radar Pulse Circles (Background) */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="h-48 w-48 rounded-full border border-blue-500/10 animate-ping opacity-30" />
          <div className="h-72 w-72 rounded-full border border-gold-400/10 animate-pulse opacity-20" />
        </div>

        {/* Grid Overlay */}
        <div
          className="absolute inset-0 bg-[linear-gradient(to_right,#14151a08_1px,transparent_1px),linear-gradient(to_bottom,#14151a08_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"
          aria-hidden="true"
        />

        {/* SVG Laser Signal Waves */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none stroke-blue-500/25" aria-hidden="true">
          <line x1="20%" y1="25%" x2="80%" y2="35%" strokeWidth="1.5" strokeDasharray="4 4">
            <animate attributeName="stroke-dashoffset" from="16" to="0" dur="2s" repeatCount="indefinite" />
          </line>
          <line x1="80%" y1="35%" x2="30%" y2="75%" strokeWidth="1.5" strokeDasharray="4 4">
            <animate attributeName="stroke-dashoffset" from="0" to="16" dur="2.5s" repeatCount="indefinite" />
          </line>
        </svg>

        {/* Header Telemetry */}
        <div style={{ transform: "translateZ(35px)" }} className="relative z-10 flex items-center justify-between">
          <div className="flex items-center gap-2 rounded-full border border-ink/10 bg-white/90 px-3.5 py-1.5 shadow-xs backdrop-blur-md">
            <Radio className="h-3.5 w-3.5 text-blue-600 animate-pulse" />
            <span className="text-[11px] font-black uppercase tracking-wider text-ink font-mono">
              Inquiry Signal Radar
            </span>
          </div>

          <div className="flex items-center gap-1.5 rounded-xl border border-emerald-500/30 bg-emerald-50/90 px-3 py-1 text-[11px] font-bold text-emerald-800 shadow-xs">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-ping" />
            <span>Ready to Receive</span>
          </div>
        </div>

        {/* Center Visual: 3D Floating Mail Envelope & Signal Console */}
        <div
          style={{ transform: "translateZ(60px)" }}
          className="relative z-10 my-auto rounded-2xl border border-blue-900/10 bg-white/90 p-5 shadow-md backdrop-blur-md flex flex-col gap-3"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 via-blue-700 to-ink text-white shadow-lg shadow-blue-600/30">
                <Mail className="h-6 w-6" />
              </div>
              <div>
                <div className="text-xs font-black text-ink">Global Direct Desk</div>
                <div className="text-[11px] font-bold text-blue-600">info@altiorainfotech.ca</div>
              </div>
            </div>

            <div className="flex items-center gap-1 rounded-lg bg-gold-50 border border-gold-200 px-2.5 py-1 text-[11px] font-bold text-gold-800">
              <Send className="h-3 w-3 text-gold-600" />
              <span>Dispatch</span>
            </div>
          </div>

          {/* Typing Telemetry Console */}
          <div className="mt-1 rounded-xl bg-ink/5 p-3 border border-ink/8 font-mono text-xs">
            <div className="text-[10px] font-bold text-muted uppercase tracking-wider mb-1">
              Live Communication Stream:
            </div>
            <p className="font-semibold text-ink leading-relaxed">
              <span className="text-blue-600">&gt; </span>
              {typedText}
              <span className="inline-block w-2 h-4 bg-blue-600 ml-1 animate-pulse" />
            </p>
          </div>
        </div>

        {/* Orbiting Badge 1 (Top Right) */}
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          style={{ transform: "translateZ(70px)" }}
          className="absolute top-12 right-6 z-20 hidden sm:flex items-center gap-2 rounded-xl border border-white/80 bg-white/95 px-3.5 py-2 text-xs font-extrabold text-ink shadow-lg backdrop-blur-md"
        >
          <Clock className="h-4 w-4 text-gold-500" />
          <span>&lt; 24h Response</span>
        </motion.div>

        {/* Orbiting Badge 2 (Bottom Left) */}
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          style={{ transform: "translateZ(65px)" }}
          className="absolute bottom-14 left-6 z-20 hidden sm:flex items-center gap-2 rounded-xl border border-white/80 bg-white/95 px-3.5 py-2 text-xs font-extrabold text-ink shadow-lg backdrop-blur-md"
        >
          <MapPin className="h-4 w-4 text-blue-600" />
          <span>Surrey, BC, Canada</span>
        </motion.div>

        {/* Bottom Bar: Telemetry */}
        <div style={{ transform: "translateZ(40px)" }} className="relative z-10 flex items-center justify-between pt-2">
          <div className="flex items-center gap-2 text-xs font-bold text-ink">
            <ShieldCheck className="h-4 w-4 text-emerald-600" />
            <span>Encrypted Enquiry Channel</span>
          </div>

          <div className="flex items-center gap-1 text-[11px] font-mono font-bold text-muted">
            <Sparkles className="h-3.5 w-3.5 text-gold-500 fill-gold-400" />
            <span>Fast Turnaround</span>
          </div>
        </div>

        {/* Metallic Bottom Accent Line */}
        <div className="pointer-events-none absolute inset-x-6 bottom-0 h-1 bg-gradient-to-r from-transparent via-gold-400 to-transparent rounded-full" />
      </motion.div>
    </div>
  );
}
