import type { LucideIcon } from "lucide-react";
import {
  Users,
  Megaphone,
  Camera,
  Music2,
  Video,
  Play,
  Compass,
  Briefcase,
  LineChart,
  ShieldCheck,
  Share2,
  BadgeCheck,
  Heart,
  BarChart3,
  FileCheck,
  Layers,
  Search,
  Send,
  Rocket,
  TrendingUp,
} from "lucide-react";

export const influencerHero = {
  eyebrow: "Influencer & UGC Marketing",
  heading: "Authentic Content That Drives Trust, Reach & Revenue",
  description:
    "Connect your brand with relevant creators and authentic content that builds trust, expands reach, and drives measurable results.",
  cta: { label: "Launch a Creator Campaign", href: "/contact" },
};

export type CreatorType = { label: string; icon: LucideIcon; detail: string };

export const influencerOverview = {
  eyebrow: "Service Overview",
  heading: "What Is Influencer & UGC Marketing?",
  p1: "Influencer and UGC marketing connects your brand with creators who can showcase your products through authentic, engaging content.",
  p2: "At Altiora Infotech, we handle creator discovery, campaign management, UGC production, content licensing, and performance tracking.",
  coverHeading: "Creator Types",
  capabilities: [
    { label: "Nano & Micro Influencers", icon: Users, detail: "Reach niche audiences with authentic, highly engaged content" },
    { label: "Macro Influencers", icon: Megaphone, detail: "Expand your brand reach through established creators" },
    { label: "UGC Creators", icon: Camera, detail: "Create authentic, ad-ready content for your marketing campaigns" },
    { label: "TikTok & Reels Creators", icon: Music2, detail: "Produce engaging short-form content designed for discovery" },
    { label: "Instagram Creators", icon: Video, detail: "Build visual brand stories through posts, Stories, and Reels" },
    { label: "YouTube & Podcast Creators", icon: Play, detail: "Build deeper audience trust through long-form content" },
  ] as CreatorType[],
};

export type InfluencerService = { title: string; icon: LucideIcon; description: string; metric: string };

export const influencerServices: InfluencerService[] = [
  {
    title: "Influencer Strategy & Discovery",
    icon: Compass,
    description: "Find creators based on audience quality, engagement, and brand fit.",
    metric: "Foundation Layer",
  },
  {
    title: "Campaign Management",
    icon: Briefcase,
    description: "Manage creator outreach, negotiations, contracts, briefs, and timelines.",
    metric: "End-to-End Coordination",
  },
  {
    title: "UGC Content Creation",
    icon: Camera,
    description: "Source authentic, ad-ready content with appropriate usage rights.",
    metric: "Licensed Content",
  },
  {
    title: "Performance Tracking",
    icon: LineChart,
    description: "Measure reach, engagement, traffic, conversions, and campaign ROI.",
    metric: "Real-Time Reporting",
  },
  {
    title: "Brand Safety & Compliance",
    icon: ShieldCheck,
    description: "Vet creators and manage brand safety, disclosures, and campaign requirements.",
    metric: "Vetted & Compliant",
  },
  {
    title: "Content Amplification",
    icon: Share2,
    description: "Repurpose creator content across paid ads, social media, email, and your website.",
    metric: "Cross-Channel Reach",
  },
];

export type WhyChoosePoint = { title: string; icon: LucideIcon; description: string };

export const whyChooseInfluencer: WhyChoosePoint[] = [
  { title: "Vetted Creator Network", icon: BadgeCheck, description: "Connect with creators selected for audience quality and brand fit." },
  { title: "Authentic Content", icon: Heart, description: "Create content that feels genuine and connects with real audiences." },
  { title: "Data-Driven Selection", icon: BarChart3, description: "Use audience and performance data to guide creator partnerships." },
  { title: "Full Campaign Management", icon: Briefcase, description: "We manage your campaign from discovery through reporting." },
  { title: "Multi-Platform Reach", icon: Layers, description: "Reach audiences across Instagram, TikTok, YouTube, and more." },
  { title: "Transparent ROI", icon: FileCheck, description: "Track how creator campaigns contribute to traffic, leads, and revenue." },
];

export type ProcessStep = { number: string; title: string; icon: LucideIcon; description: string };

export const influencerProcess: ProcessStep[] = [
  { number: "01", title: "Strategy", icon: Compass, description: "Define your campaign goals and target audience." },
  { number: "02", title: "Creator Discovery", icon: Search, description: "Identify relevant creators and evaluate their audiences." },
  { number: "03", title: "Outreach & Briefing", icon: Send, description: "Manage communication, contracts, and creative direction." },
  { number: "04", title: "Content Creation", icon: Camera, description: "Creators produce authentic, brand-aligned content." },
  { number: "05", title: "Campaign Launch", icon: Rocket, description: "Publish and distribute content across selected platforms." },
  { number: "06", title: "Measure & Scale", icon: TrendingUp, description: "Analyze performance and scale successful campaigns." },
];

export const influencerCta = {
  heading: "Ready to Build a Creator Campaign?",
  description: "Connect with the right creators and turn authentic content into measurable business growth.",
  primaryCta: { label: "Book Strategy Call", href: "/contact" },
  secondaryCta: { label: "Get Campaign Quote", href: "/contact" },
};
