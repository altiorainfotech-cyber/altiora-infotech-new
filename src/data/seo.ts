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
  coverage: [
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

export type SeoService = { title: string; icon: LucideIcon; description: string; metric: string };

export const seoServices: SeoService[] = [
  {
    title: "Technical SEO",
    icon: Code2,
    description: "Audit and optimize site architecture, speed, crawlability, indexing, and Core Web Vitals.",
    metric: "Crawl & Speed Optimized",
  },
  {
    title: "Keyword & Entity Strategy",
    icon: Search,
    description: "Identify high-intent keywords, topical clusters, and semantic entities to capture search share.",
    metric: "High-Intent Clustering",
  },
  {
    title: "On-Page SEO",
    icon: FileText,
    description: "Optimize title tags, meta descriptions, headings, content structure, and internal link architecture.",
    metric: "100% On-Page Precision",
  },
  {
    title: "Local SEO & GMB",
    icon: MapPin,
    description: "Optimize Google Business Profile, local citations, map pack rankings, and location pages.",
    metric: "Top Map Pack Visibility",
  },
  {
    title: "Link Building & Authority",
    icon: LinkIcon,
    description: "Acquire high-authority editorial backlinks and digital PR coverage to build domain trust.",
    metric: "High-DA Backlinks",
  },
  {
    title: "SEO Analytics & AEO",
    icon: LineChart,
    description: "Track organic rank positions, conversions, revenue impact, and optimize for AI search engines.",
    metric: "Continuous Growth Tracking",
  },
];

export type WhyChoosePoint = { title: string; icon: LucideIcon; description?: string };

export const whyChooseSeo: WhyChoosePoint[] = [
  { title: "Data-driven SEO strategies", icon: BarChart3, description: "Every optimization is guided by real search volume and intent metrics." },
  { title: "Technical SEO expertise", icon: Code2, description: "Deep technical auditing ensuring flawless crawling and indexing." },
  { title: "White-hat practices", icon: ShieldCheck, description: "100% Google guideline-compliant strategies for sustainable long-term rankings." },
  { title: "Transparent reporting", icon: FileCheck, description: "Clear monthly dashboards detailing keyword movements and conversions." },
  { title: "Customized strategies", icon: Sliders, description: "Tailored campaigns designed specifically for your industry vertical." },
  { title: "Continuous optimization", icon: RefreshCw, description: "Proactive rank tracking and iterative updates to maintain top search share." },
];

export type ProcessStep = { number: string; title: string; icon: LucideIcon; description: string };

export const seoProcess: ProcessStep[] = [
  { number: "01", title: "SEO Audit", icon: SearchCheck, description: "Comprehensive audit of site health, crawlability, indexation & speed." },
  { number: "02", title: "Keyword Research", icon: Search, description: "Target high-intent keywords and competitor content gaps." },
  { number: "03", title: "Optimization", icon: Settings, description: "Optimize on-page elements, technical code, entities & structure." },
  { number: "04", title: "Content & Authority", icon: Award, description: "Create high-value content and acquire authoritative backlinks." },
  { number: "05", title: "Tracking & Scale", icon: ClipboardList, description: "Monitor rankings, CTR, conversions & continuously scale." },
];

export const seoCta = {
  heading: "Ready to Grow Your Search Visibility?",
  description:
    "Turn your website into a consistent source of organic traffic and qualified leads with a customized SEO strategy.",
  primaryCta: { label: "Book SEO Audit", href: "/contact" },
  secondaryCta: { label: "Get SEO Quote", href: "/contact" },
};
