import type { LucideIcon } from "lucide-react";
import {
  Bot,
  Cpu,
  Mic,
  Sparkles,
  MonitorSmartphone,
  Quote,
  Braces,
  Award,
  Compass,
  PenTool,
  Activity,
  Layers,
  BarChart3,
  Rocket,
  SearchCheck,
  Search,
  Settings,
  RefreshCw,
} from "lucide-react";

export const aeoGeoHero = {
  eyebrow: "AEO & GEO Services",
  heading: "Get Found in AI Search, Voice & Generative Engines",
  description:
    "Improve your brand visibility across ChatGPT, Google AI Overviews, Perplexity, Bing Copilot, and voice search with AI-focused search optimization.",
  cta: { label: "Get AI Visibility Audit", href: "/contact" },
};

export type AeoGeoCapability = { label: string; icon: LucideIcon; detail: string };

const capabilities: AeoGeoCapability[] = [
  { label: "ChatGPT", icon: Bot, detail: "Improve your chances of being referenced in AI-generated answers" },
  { label: "Google AI Overviews", icon: Sparkles, detail: "Optimize content for Google's AI-powered search results" },
  { label: "Perplexity", icon: Cpu, detail: "Build content and authority signals that support AI citations" },
  { label: "Bing Copilot", icon: MonitorSmartphone, detail: "Improve visibility across Microsoft's AI-powered search experience" },
  { label: "Voice Search", icon: Mic, detail: "Optimize for conversational and question-based queries" },
  { label: "Featured Snippets", icon: Quote, detail: "Structure content to capture direct-answer opportunities" },
  { label: "Schema & Structured Data", icon: Braces, detail: "Help search engines and AI systems understand your content" },
  { label: "Entity & Authority Building", icon: Award, detail: "Strengthen your brand's credibility and online presence" },
];

export const aeoGeoOverview = {
  eyebrow: "Service Overview",
  heading: "What Are AEO & GEO Services?",
  p1: "AEO and GEO services optimize your website and content to help AI-powered search engines understand, reference, and recommend your brand.",
  p2: "At Altiora Infotech, we combine content strategy, structured data, entity authority, and AI visibility monitoring to strengthen your presence across modern search.",
  coverHeading: "We Optimize For",
  capabilities,
  coverage: capabilities,
};

export type AiPlatform = { name: string; icon: LucideIcon; description: string; services: string[] };

export const aiSearchPlatforms: AiPlatform[] = [
  {
    name: "ChatGPT",
    icon: Bot,
    description: "Optimize your content for AI-generated answers and brand references.",
    services: ["Content Authority", "Q&A Content", "Entity Signals"],
  },
  {
    name: "Google AI Overviews",
    icon: Sparkles,
    description: "Improve your chances of appearing in AI-generated search summaries.",
    services: ["Search Intent", "Structured Content", "Schema"],
  },
  {
    name: "Perplexity",
    icon: Cpu,
    description: "Build authoritative content designed for AI-powered citations.",
    services: ["Citations", "Topic Authority", "Content Structure"],
  },
  {
    name: "Bing Copilot",
    icon: MonitorSmartphone,
    description: "Strengthen your visibility across Microsoft's AI search ecosystem.",
    services: ["Search Optimization", "Entity Signals", "Structured Data"],
  },
  {
    name: "Voice Search",
    icon: Mic,
    description: "Capture conversational searches across voice assistants.",
    services: ["Natural Language", "FAQs", "Long-Tail Queries"],
  },
];

export type AeoGeoService = { title: string; icon: LucideIcon; description: string; metric: string };

export const aeoGeoServices: AeoGeoService[] = [
  {
    title: "AEO Strategy",
    icon: Compass,
    description: "Structure your content to directly answer the questions your audience is asking.",
    metric: "Foundation Layer",
  },
  {
    title: "GEO Optimization",
    icon: Cpu,
    description: "Optimize your brand for citations and references across generative AI platforms.",
    metric: "Generative AI Citations",
  },
  {
    title: "AI Content Optimization",
    icon: PenTool,
    description: "Create clear, authoritative content designed for AI-powered search.",
    metric: "Clarity + Authority",
  },
  {
    title: "Schema & Structured Data",
    icon: Braces,
    description: "Implement structured data that helps AI systems understand your website.",
    metric: "Machine-Readable Markup",
  },
  {
    title: "Entity & Authority Building",
    icon: Award,
    description: "Strengthen brand signals, citations, and E-E-A-T across the web.",
    metric: "E-E-A-T Signals",
  },
  {
    title: "AI Visibility Monitoring",
    icon: Activity,
    description: "Track brand mentions, citations, featured snippets, and AI search visibility.",
    metric: "Real-Time AI Tracking",
  },
];

export type WhyChoosePoint = { title: string; icon: LucideIcon; description: string };

export const whyChooseAeoGeo: WhyChoosePoint[] = [
  { title: "AI-First Expertise", icon: Bot, description: "Deep understanding of AI search and generative engines." },
  { title: "Multi-Engine Strategy", icon: Layers, description: "Optimize your visibility across multiple AI platforms." },
  { title: "Structured Data Expertise", icon: Braces, description: "Make your website easier for search engines and AI systems to understand." },
  { title: "Authority Content", icon: Award, description: "Build content that strengthens trust and topical authority." },
  { title: "Future-Ready Approach", icon: Rocket, description: "Prepare your brand for the evolving AI search landscape." },
  { title: "Measurable Visibility", icon: BarChart3, description: "Track your brand's presence across AI-powered search results." },
];

export const whyChooseAeoGeoConclusion =
  "We help your brand become the source AI engines understand, trust, and reference.";

export type ProcessStep = { number: string; title: string; icon: LucideIcon; description: string };

export const aeoGeoProcess: ProcessStep[] = [
  { number: "01", title: "Audit", icon: SearchCheck, description: "Analyze your current AI search visibility." },
  { number: "02", title: "Research", icon: Search, description: "Identify questions, topics, entities, and opportunities." },
  { number: "03", title: "Optimize", icon: Settings, description: "Improve content, structure, and schema." },
  { number: "04", title: "Build Authority", icon: Award, description: "Strengthen citations, entities, and topical authority." },
  { number: "05", title: "Monitor", icon: Activity, description: "Track AI mentions, snippets, and visibility." },
  { number: "06", title: "Improve & Scale", icon: RefreshCw, description: "Continuously refine your AI search strategy." },
];

export const aeoGeoCta = {
  heading: "Ready to Be the Answer?",
  description:
    "Improve your visibility across AI-powered search and position your brand where customers are looking for answers.",
  primaryCta: { label: "Book AI Visibility Audit", href: "/contact" },
  secondaryCta: { label: "Get AEO & GEO Quote", href: "/contact" },
};
