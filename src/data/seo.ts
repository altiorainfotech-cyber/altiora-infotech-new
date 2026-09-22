import type { LucideIcon } from "lucide-react";
import {
  Search,
  Code2,
  FileText,
  MapPin,
  Link as LinkIcon,
  PenTool,
  Bot,
  LineChart,
  BarChart3,
  ShieldCheck,
  FileCheck,
  Sliders,
  RefreshCw,
  SearchCheck,
  Settings,
  Award,
  ClipboardList,
} from "lucide-react";

export const seoHero = {
  eyebrow: "Professional SEO Services",
  heading: "Grow Your Rankings. Attract More Customers.",
  description:
    "Drive consistent organic traffic and qualified leads with strategic SEO services built around your business goals.",
  cta: { label: "Get SEO Growth Plans", href: "/contact" },
};

export type SeoCapability = { label: string; icon: LucideIcon; detail: string };

export const seoOverview = {
  eyebrow: "Service Overview",
  heading: "What Are SEO Services?",
  p1: "SEO services improve your website's visibility across Google, Bing, and AI-powered search engines.",
  p2: "We combine technical SEO, content, keyword strategy, local SEO, and authority building to help your business grow organically.",
  coverHeading: "Our SEO Services",
  capabilities: [
    { label: "Technical SEO", icon: Code2, detail: "Improve site performance, crawlability, indexing & Core Web Vitals" },
    { label: "Keyword Research", icon: Search, detail: "Target high-intent keywords that attract potential customers" },
    { label: "On-Page SEO", icon: FileText, detail: "Optimize content, headings, metadata, internal links & schema" },
    { label: "Local SEO", icon: MapPin, detail: "Improve Google Business Profile visibility and local rankings" },
    { label: "Link Building", icon: LinkIcon, detail: "Build relevant backlinks and strengthen domain authority" },
    { label: "Content Strategy", icon: PenTool, detail: "Create SEO-focused content that builds topical authority" },
    { label: "AEO & GEO", icon: Bot, detail: "Optimize content for AI search and answer engines" },
    { label: "SEO Analytics", icon: LineChart, detail: "Track rankings, traffic, conversions & ongoing growth" },
  ] as SeoCapability[],
};

export type WhyChoosePoint = { title: string; icon: LucideIcon };

export const whyChooseSeo: WhyChoosePoint[] = [
  { title: "Data-driven SEO strategies", icon: BarChart3 },
  { title: "Technical SEO expertise", icon: Code2 },
  { title: "White-hat practices", icon: ShieldCheck },
  { title: "Transparent reporting", icon: FileCheck },
  { title: "Customized strategies", icon: Sliders },
  { title: "Continuous optimization", icon: RefreshCw },
];

export type ProcessStep = { number: string; title: string; icon: LucideIcon };

export const seoProcess: ProcessStep[] = [
  { number: "01", title: "SEO Audit", icon: SearchCheck },
  { number: "02", title: "Keyword Research", icon: Search },
  { number: "03", title: "Optimization", icon: Settings },
  { number: "04", title: "Content & Authority", icon: Award },
  { number: "05", title: "Tracking & Reporting", icon: ClipboardList },
];

export const seoCta = {
  heading: "Ready to Grow Your Search Visibility?",
  description:
    "Turn your website into a consistent source of organic traffic and qualified leads with a customized SEO strategy.",
  primaryCta: { label: "Book SEO Audit", href: "/contact" },
  secondaryCta: { label: "Get SEO Quote", href: "/contact" },
};
