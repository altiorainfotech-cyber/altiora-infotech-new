import type { LucideIcon } from "lucide-react";
import {
  Camera,
  Users,
  Briefcase,
  Music2,
  Play,
  Hash,
  Compass,
  Palette,
  MessageCircle,
  TrendingUp,
  LineChart,
  Handshake,
  BadgeCheck,
  BarChart3,
  Calendar,
  Heart,
  FileCheck,
  Search,
  PenTool,
  Send,
} from "lucide-react";

export const socialMediaHero = {
  eyebrow: "Social Media Management Services",
  heading: "Turn Attention Into Revenue with Strategic Social Presence",
  description:
    "Build a recognizable brand, grow your audience, and generate meaningful engagement across Instagram, Facebook, LinkedIn, TikTok, and YouTube.",
  cta: { label: "Start Growing", href: "/contact" },
};

export type SocialCapability = { label: string; icon: LucideIcon; detail: string };

export const socialMediaOverview = {
  eyebrow: "Service Overview",
  heading: "What Is Social Media Management?",
  p1: "Social media management includes strategy, content creation, publishing, community engagement, and performance tracking.",
  p2: "At Altiora Infotech, we manage your social presence from strategy to reporting, helping your brand stay consistent, engaging, and relevant.",
  coverHeading: "We Manage",
  capabilities: [
    { label: "Instagram", icon: Camera, detail: "Reels, Stories, posts, and audience growth" },
    { label: "Facebook", icon: Users, detail: "Community building, content, and lead generation" },
    { label: "LinkedIn", icon: Briefcase, detail: "Thought leadership and B2B audience growth" },
    { label: "TikTok", icon: Music2, detail: "Short-form video and trend-driven campaigns" },
    { label: "YouTube", icon: Play, detail: "Channel growth, video content, and SEO" },
    { label: "X / Twitter", icon: Hash, detail: "Real-time engagement and brand conversations" },
  ] as SocialCapability[],
};

export type SocialService = { title: string; icon: LucideIcon; description: string; metric: string };

export const socialMediaServices: SocialService[] = [
  {
    title: "Content Strategy",
    icon: Compass,
    description: "Create a clear content direction built around your brand and audience.",
    metric: "Foundation Layer",
  },
  {
    title: "Content Creation",
    icon: Palette,
    description: "Design engaging visuals, captions, Reels, Stories, and short-form videos.",
    metric: "Visual + Video Assets",
  },
  {
    title: "Community Management",
    icon: MessageCircle,
    description: "Manage comments, messages, and conversations to build stronger relationships.",
    metric: "Daily Engagement",
  },
  {
    title: "Audience Growth",
    icon: TrendingUp,
    description: "Use hashtags, trends, collaborations, and platform strategies to grow organically.",
    metric: "Organic Reach",
  },
  {
    title: "Analytics & Reporting",
    icon: LineChart,
    description: "Track reach, engagement, audience growth, and conversions.",
    metric: "Real-Time Reporting",
  },
  {
    title: "Influencer Partnerships",
    icon: Handshake,
    description: "Connect your brand with relevant creators and targeted audiences.",
    metric: "Creator Network",
  },
];

export type WhyChoosePoint = { title: string; icon: LucideIcon; description: string };

export const whyChooseSocialMedia: WhyChoosePoint[] = [
  { title: "Platform Expertise", icon: BadgeCheck, description: "Platform-specific strategies built around how each channel works." },
  { title: "Creative Excellence", icon: Palette, description: "Content designed to capture attention and strengthen your brand." },
  { title: "Data-Driven Strategy", icon: BarChart3, description: "Decisions based on audience behavior and performance data." },
  { title: "Consistent Presence", icon: Calendar, description: "Keep your brand active, relevant, and visible." },
  { title: "Community Focused", icon: Heart, description: "Build genuine relationships beyond likes and followers." },
  { title: "Transparent Reporting", icon: FileCheck, description: "Clear insights into your social media performance." },
];

export type ProcessStep = { number: string; title: string; icon: LucideIcon; description: string };

export const socialMediaProcess: ProcessStep[] = [
  { number: "01", title: "Strategy", icon: Compass, description: "Understand your brand, audience, and goals." },
  { number: "02", title: "Research", icon: Search, description: "Analyze competitors, trends, and content opportunities." },
  { number: "03", title: "Create", icon: PenTool, description: "Produce platform-specific content and creative assets." },
  { number: "04", title: "Publish", icon: Send, description: "Schedule and publish content consistently." },
  { number: "05", title: "Engage", icon: MessageCircle, description: "Manage conversations, comments, and community interactions." },
  { number: "06", title: "Analyze & Grow", icon: TrendingUp, description: "Measure performance and continuously improve the strategy." },
];

export const socialMediaCta = {
  heading: "Ready to Build Your Social Presence?",
  description: "Turn your social media channels into a consistent brand and growth engine.",
  primaryCta: { label: "Book Strategy Call", href: "/contact" },
  secondaryCta: { label: "Get Custom Quote", href: "/contact" },
};
