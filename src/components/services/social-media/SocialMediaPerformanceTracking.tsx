"use client";

import { useEffect, useRef, useState } from "react";
import { Activity, ArrowUpRight, Zap } from "lucide-react";

const METRICS = [
  { label: "Total Social Reach", value: "3.2M+", trend: "+64%", color: "#3b82f6" },
  { label: "Video Views", value: "1.8M+", trend: "+82%", color: "#60a5fa" },
  { label: "Avg. Engagement Rate", value: "6.8%", trend: "4.2x Avg", color: "#1c4fa1" },
  { label: "Community Growth", value: "48.5K", trend: "+28%", color: "#d3ac3c" },
  { label: "Profile Click-Throughs", value: "24.2K", trend: "+38%", color: "#10b981" },
];

export function SocialMediaPerformanceTracking() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [activeMetric, setActiveMetric] = useState(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = canvas.parentElement?.clientWidth || 600);
    let height = (canvas.height = 240);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = 240;
    };
    window.addEventListener("resize", handleResize);

    const pointsCount = 40;
    let animFrame: number;
    let step = 0;

    const render = () => {
      step += 0.03;
      ctx.clearRect(0, 0, width, height);

      ctx.strokeStyle = "rgba(255, 255, 255, 0.05)";
      ctx.lineWidth = 1;
      const gridSpacing = 40;
      for (let x = 0; x < width; x += gridSpacing) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += gridSpacing) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      const points: { x: number; y: number }[] = [];
      for (let i = 0; i <= pointsCount; i++) {
        const x = (i / pointsCount) * width;
        const baseline = height * 0.55;
        const wave1 = Math.sin(i * 0.3 + step) * 28;
        const wave2 = Math.cos(i * 0.15 - step * 0.8) * 18;
        const noise = Math.sin(i * 0.8 + step * 2) * 8;
        const y = baseline + wave1 + wave2 + noise;
        points.push({ x, y });
      }

      const currentColor = METRICS[activeMetric].color;
      const gradient = ctx.createLinearGradient(0, 0, 0, height);
      gradient.addColorStop(0, currentColor + "40");
      gradient.addColorStop(1, currentColor + "00");

      ctx.beginPath();
      ctx.moveTo(0, height);
      for (let i = 0; i < points.length; i++) {
        if (i === 0) {
          ctx.lineTo(points[i].x, points[i].y);
        } else {
          const xc = (points[i].x + points[i - 1].x) / 2;
          const yc = (points[i].y + points[i - 1].y) / 2;
          ctx.quadraticCurveTo(points[i - 1].x, points[i - 1].y, xc, yc);
        }
      }
      ctx.lineTo(width, height);
      ctx.closePath();
      ctx.fillStyle = gradient;
      ctx.fill();

      ctx.beginPath();
      for (let i = 0; i < points.length; i++) {
        if (i === 0) {
          ctx.moveTo(points[i].x, points[i].y);
        } else {
          const xc = (points[i].x + points[i - 1].x) / 2;
          const yc = (points[i].y + points[i - 1].y) / 2;
          ctx.quadraticCurveTo(points[i - 1].x, points[i - 1].y, xc, yc);
        }
      }
      ctx.strokeStyle = currentColor;
      ctx.lineWidth = 3;
      ctx.shadowColor = currentColor;
      ctx.shadowBlur = 12;
      ctx.stroke();
      ctx.shadowBlur = 0;

      const pulseIdx = Math.floor((step * 8) % points.length);
      const pulsePoint = points[pulseIdx];
      if (pulsePoint) {
        ctx.beginPath();
        ctx.arc(pulsePoint.x, pulsePoint.y, 6, 0, Math.PI * 2);
        ctx.fillStyle = "#ffffff";
        ctx.fill();
        ctx.strokeStyle = currentColor;
        ctx.lineWidth = 2;
        ctx.stroke();
      }

      animFrame = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animFrame);
      window.removeEventListener("resize", handleResize);
    };
  }, [activeMetric]);

  return (
    <div className="relative rounded-3xl border border-blue-900/15 bg-gradient-to-br from-white/95 via-surface/90 to-blue-50/40 p-6 sm:p-8 text-ink shadow-2xl overflow-hidden mt-8 backdrop-blur-2xl">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-blue-900/10">
        <div>
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-blue-800">Section 04</span>
          <h3 className="text-xl sm:text-2xl font-black text-ink mt-1 flex items-center gap-2">
            <Activity className="h-5 w-5 text-blue-600 animate-pulse" />
            Social Engagement Telemetry Sculpture
          </h3>
        </div>
        <div className="flex items-center gap-2 font-mono text-xs font-bold text-blue-900 bg-blue-100/80 border border-blue-300 px-3 py-1 rounded-full shadow-2xs">
          <Zap className="h-3.5 w-3.5 text-blue-600" />
          <span>LIVE SOCIAL TELEMETRY</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-5 mt-6 mb-6">
        {METRICS.map((metric, idx) => (
          <button
            key={metric.label}
            onClick={() => setActiveMetric(idx)}
            className={`flex flex-col p-3 rounded-2xl border text-left transition-all duration-300 ${
              activeMetric === idx
                ? "bg-white border-blue-500 shadow-md scale-102 text-ink"
                : "bg-white/60 border-blue-900/10 hover:bg-white text-ink/80"
            }`}
          >
            <span className="text-[11px] font-mono font-medium text-muted">{metric.label}</span>
            <div className="flex items-center justify-between mt-1">
              <span className="text-base font-black text-ink">{metric.value}</span>
              <span className="text-[10px] font-bold text-emerald-700 flex items-center">
                {metric.trend}
                <ArrowUpRight className="h-3 w-3" />
              </span>
            </div>
          </button>
        ))}
      </div>

      <div className="relative w-full rounded-2xl border border-blue-900/15 bg-gradient-to-br from-white/95 via-blue-50/50 to-white/90 p-2 overflow-hidden shadow-inner">
        <canvas ref={canvasRef} className="w-full h-[240px] block" />
        <div className="absolute top-4 right-4 flex items-center gap-2 text-[10px] font-mono text-blue-900 bg-blue-50/90 px-2.5 py-1 rounded-md backdrop-blur-md border border-blue-900/15">
          <span className="h-1.5 w-1.5 rounded-full bg-blue-600 animate-ping" />
          <span>Social Media Viral Stream</span>
        </div>
      </div>
    </div>
  );
}
