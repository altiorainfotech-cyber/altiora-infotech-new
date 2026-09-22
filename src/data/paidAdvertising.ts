import type { LucideIcon } from "lucide-react";
import {
  Search,
  Play,
  Share2,
  Briefcase,
  MonitorSmartphone,
  Music2,
  MousePointerClick,
  BarChart3,
  Compass,
  Palette,
  Target,
  Gauge,
  Rocket,
  LineChart,
  BadgeCheck,
  RefreshCw,
  ShieldCheck,
  TrendingUp,
  Settings,
  Hash,
} from "lucide-react";
import { paidAdsImages } from "./paidAdvertisingImages";

export const paidAdsHero = {
  eyebrow: "Paid Advertising Services",
  heading: "Accelerate Growth with Performance-Driven Advertising",
  description:
    "Reach the right audience, generate qualified leads, and increase conversions with targeted paid advertising campaigns across Google, Meta, LinkedIn, TikTok, and Microsoft.",
  cta: { label: "Get Started", href: "/contact" },
};

export type CoverageItem = { label: string; icon: LucideIcon; detail: string };

export const paidAdsOverview = {
  eyebrow: "Service Overview",
  heading: "What Are Paid Advertising Services?",
  p1: "Paid advertising services include campaign strategy, audience targeting, ad creation, media buying, landing pages, and ongoing optimization.",
  p2: "At Altiora Infotech, we manage your campaigns from strategy to performance tracking, helping you make data-driven advertising decisions.",
  coverHeading: "We Cover",
  coverage: [
    { label: "Google Ads & Performance Max", icon: Search, detail: "AI-optimized bidding across Search & Display" },
    { label: "Google Shopping & YouTube Ads", icon: Play, detail: "Product listings plus video reach on YouTube" },
    { label: "Facebook & Instagram Ads", icon: Share2, detail: "Social-native creative built to convert" },
    { label: "LinkedIn B2B Advertising", icon: Briefcase, detail: "Reach decision-makers directly" },
    { label: "Microsoft Ads", icon: MonitorSmartphone, detail: "Untapped search inventory, lower CPCs" },
    { label: "TikTok Advertising", icon: Music2, detail: "Short-form video built to go viral" },
    { label: "Landing Page & CRO", icon: MousePointerClick, detail: "Turn more clicks into customers" },
    { label: "Campaign Analytics & Reporting", icon: BarChart3, detail: "Track leads, CPL, and ROAS that matter" },
  ] as CoverageItem[],
};

export type Platform = {
  name: string;
  icon: LucideIcon;
  description: string;
  services: string[];
  image: string;
};

export const platforms: Platform[] = [
  {
    name: "Facebook & Instagram",
    icon: Share2,
    description:
      "Reach targeted audiences with creative social campaigns designed to generate engagement, leads, and sales.",
    services: ["Audience Targeting", "Reels & Stories", "Lookalike Audiences", "Dynamic Ads"],
    image: paidAdsImages.platforms.facebookInstagram,
  },
  {
    name: "Google Ads",
    icon: Search,
    description:
      "Capture high-intent customers through Search, Shopping, Display, YouTube, and Performance Max campaigns.",
    services: ["Search Ads", "Shopping", "YouTube", "Performance Max"],
    image: paidAdsImages.platforms.googleAds,
  },
  {
    name: "LinkedIn",
    icon: Briefcase,
    description:
      "Generate qualified B2B leads by reaching professionals and decision-makers with targeted campaigns.",
    services: ["Lead Generation", "Sponsored Content", "InMail", "Event Promotion"],
    image: paidAdsImages.platforms.linkedin,
  },
  {
    name: "TikTok",
    icon: Music2,
    description:
      "Connect with audiences through engaging short-form video advertising and creative campaigns.",
    services: ["Video Ads", "Spark Ads", "Audience Targeting", "Creative Campaigns"],
    image: paidAdsImages.platforms.tiktok,
  },
  {
    name: "Microsoft Ads",
    icon: MonitorSmartphone,
    description:
      "Expand your search reach with targeted advertising across the Microsoft advertising network.",
    services: ["Search Ads", "Audience Targeting", "Remarketing", "Campaign Optimization"],
    image: paidAdsImages.platforms.microsoftAds,
  },
  {
    name: "Twitter/X",
    icon: Hash,
    description:
      "Connect with 450M+ users through real-time conversations and trending, viral topics.",
    image: paidAdsImages.platforms.twitterX,
    services: [
      "Promoted Tweets",
      "Trend Takeovers",
      "Real-time Engagement",
      "News & Updates",
      "Twitter Spaces",
      "Follower Campaigns",
    ],
  },
];

export type AdService = { title: string; icon: LucideIcon; description: string; metric: string };

export const adServices: AdService[] = [
  {
    title: "Campaign Strategy",
    icon: Compass,
    description: "Build a clear advertising strategy around your goals, audience, budget, and market.",
    metric: "Foundation Layer",
  },
  {
    title: "Ad Creation",
    icon: Palette,
    description: "Create compelling ads designed to capture attention and drive action.",
    metric: "A/B Tested Creative",
  },
  {
    title: "Audience Targeting",
    icon: Target,
    description: "Reach the right customers with precise audience segmentation.",
    metric: "40+ Targeting Signals",
  },
  {
    title: "Campaign Management",
    icon: Gauge,
    description: "Continuously optimize bids, budgets, keywords, and creative.",
    metric: "24/7 Bid Monitoring",
  },
  {
    title: "Conversion Optimization",
    icon: Rocket,
    description: "Improve campaign journeys to turn more clicks into customers.",
    metric: "CRO + Funnel Testing",
  },
  {
    title: "Analytics & Reporting",
    icon: LineChart,
    description: "Track leads, conversions, CPL, ROAS, and campaign performance.",
    metric: "Real-Time Reporting",
  },
];

export type WhyChoosePoint = { title: string; icon: LucideIcon; description: string };

export const whyChoosePaidAds: WhyChoosePoint[] = [
  { title: "Platform Expertise", icon: BadgeCheck, description: "Experience across major advertising platforms." },
  { title: "Data-Driven Strategy", icon: BarChart3, description: "Campaign decisions backed by performance data." },
  { title: "Creative Excellence", icon: Palette, description: "Engaging ads designed around your target audience." },
  { title: "Continuous Optimization", icon: RefreshCw, description: "Ongoing testing and improvements to campaign performance." },
  { title: "Transparent Reporting", icon: ShieldCheck, description: "Clear reports that show where your advertising budget is going." },
  { title: "Scalable Campaigns", icon: TrendingUp, description: "Strategies designed to grow as your business grows." },
];

export type ProcessStep = { number: string; title: string; icon: LucideIcon; description: string };

export const paidAdsProcess: ProcessStep[] = [
  { number: "01", title: "Strategy", icon: Compass, description: "Understand your goals, audience, and market." },
  { number: "02", title: "Research", icon: Search, description: "Analyze keywords, competitors, audiences, and opportunities." },
  { number: "03", title: "Campaign Setup", icon: Settings, description: "Build campaigns, targeting, creatives, and tracking." },
  { number: "04", title: "Launch", icon: Rocket, description: "Launch campaigns and monitor initial performance." },
  { number: "05", title: "Optimize", icon: RefreshCw, description: "Continuously test and improve campaigns." },
  { number: "06", title: "Report & Scale", icon: LineChart, description: "Review results and scale what is working." },
];

export const paidAdsCta = {
  heading: "Ready to Grow with Paid Advertising?",
  description:
    "Turn your advertising budget into measurable business growth with a strategy built around your goals.",
  primaryCta: { label: "Book a Strategy Call", href: "/contact" },
  secondaryCta: { label: "Get a Custom Quote", href: "/contact" },
};
