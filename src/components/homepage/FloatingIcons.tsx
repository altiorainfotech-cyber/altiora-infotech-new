import {
  Sparkles,
  TrendingUp,
  Target,
  Search,
  Globe,
  BarChart3,
  Rocket,
  Share2,
  LineChart,
  Cpu,
  Layers,
  Zap,
} from "lucide-react";

interface IconSpot {
  Icon: typeof Sparkles;
  top: string;
  side: "left" | "right";
  offset: string;
  size: string;
  tone: "blue" | "gold";
  drift: "a" | "b" | "c";
  duration: string;
  delay: string;
  hideOnMobile?: boolean;
}

const ICONS: IconSpot[] = [
  { Icon: Sparkles, top: "6%", side: "right", offset: "6%", size: "h-5 w-5", tone: "gold", drift: "a", duration: "30s", delay: "0s" },
  { Icon: Search, top: "14%", side: "left", offset: "4%", size: "h-6 w-6", tone: "blue", drift: "b", duration: "38s", delay: "2s", hideOnMobile: true },
  { Icon: TrendingUp, top: "24%", side: "right", offset: "3%", size: "h-7 w-7", tone: "blue", drift: "c", duration: "26s", delay: "1s" },
  { Icon: Target, top: "33%", side: "left", offset: "7%", size: "h-5 w-5", tone: "gold", drift: "a", duration: "34s", delay: "4s", hideOnMobile: true },
  { Icon: Globe, top: "41%", side: "right", offset: "8%", size: "h-6 w-6", tone: "blue", drift: "b", duration: "42s", delay: "0.5s" },
  { Icon: BarChart3, top: "49%", side: "left", offset: "3%", size: "h-5 w-5", tone: "blue", drift: "c", duration: "29s", delay: "3s" },
  { Icon: Rocket, top: "58%", side: "right", offset: "5%", size: "h-6 w-6", tone: "gold", drift: "a", duration: "36s", delay: "1.5s", hideOnMobile: true },
  { Icon: Share2, top: "66%", side: "left", offset: "8%", size: "h-5 w-5", tone: "blue", drift: "b", duration: "31s", delay: "2.5s" },
  { Icon: LineChart, top: "74%", side: "right", offset: "4%", size: "h-7 w-7", tone: "blue", drift: "c", duration: "40s", delay: "0s", hideOnMobile: true },
  { Icon: Cpu, top: "82%", side: "left", offset: "5%", size: "h-5 w-5", tone: "gold", drift: "a", duration: "33s", delay: "3.5s" },
  { Icon: Layers, top: "90%", side: "right", offset: "7%", size: "h-6 w-6", tone: "blue", drift: "b", duration: "37s", delay: "1s" },
  { Icon: Zap, top: "96%", side: "left", offset: "4%", size: "h-5 w-5", tone: "gold", drift: "c", duration: "27s", delay: "2s", hideOnMobile: true },
];

const TONE_CLASS: Record<IconSpot["tone"], string> = {
  blue: "text-blue-400/[0.14]",
  gold: "text-gold-400/[0.16]",
};

const DRIFT_CLASS: Record<IconSpot["drift"], string> = {
  a: "animate-drift-a",
  b: "animate-drift-b",
  c: "animate-drift-c",
};

/**
 * Ambient, decorative-only icon field spanning the full page height.
 * Pure CSS animation (no client JS, no hooks) — costs nothing at runtime
 * and automatically honors the sitewide prefers-reduced-motion rule in
 * globals.css. Kept low-opacity, small, and margin-anchored so it never
 * competes with real content.
 */
export function FloatingIcons() {
  return (
    <div className="pointer-events-none absolute inset-0 z-[1] overflow-hidden" aria-hidden="true">
      {ICONS.map(({ Icon, top, side, offset, size, tone, drift, duration, delay, hideOnMobile }, i) => (
        <div
          key={i}
          className={`absolute ${hideOnMobile ? "hidden sm:block" : ""}`}
          style={{ top, [side]: offset }}
        >
          <Icon className={`${size} ${TONE_CLASS[tone]} ${DRIFT_CLASS[drift]}`} style={{ animationDuration: duration, animationDelay: delay }} />
        </div>
      ))}
    </div>
  );
}
