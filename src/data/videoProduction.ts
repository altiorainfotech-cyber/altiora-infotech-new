import type { LucideIcon } from "lucide-react";
import {
  Film,
  Camera,
  Wand2,
  Heart,
  Play,
  Briefcase,
  Clapperboard,
  Sparkles,
  PenTool,
  MonitorSmartphone,
  Layers,
  Zap,
  Target,
  Compass,
  Eye,
  Send,
} from "lucide-react";

export const videoProductionHero = {
  eyebrow: "Video Production Services",
  heading: "Story-Driven Video That Captivates & Converts",
  description:
    "Create engaging, professional videos that build brand awareness, connect with your audience, and drive business results.",
  cta: { label: "Start Your Video", href: "/contact" },
};

export type VideoCapability = { label: string; icon: LucideIcon; detail: string };

export const videoProductionOverview = {
  eyebrow: "Service Overview",
  heading: "What Are Video Production Services?",
  p1: "Video production covers concept development, scripting, filming, animation, editing, and final delivery.",
  p2: "At Altiora Infotech, we create strategic video content designed for your brand, audience, and marketing goals.",
  coverHeading: "We Produce",
  capabilities: [
    { label: "Brand Films", icon: Film, detail: "Tell your brand story through cinematic video" },
    { label: "Social Media Reels", icon: Camera, detail: "Create engaging short-form content for Instagram, TikTok, and YouTube Shorts" },
    { label: "Explainer Animation", icon: Wand2, detail: "Simplify complex products and ideas through engaging animation" },
    { label: "Testimonial Videos", icon: Heart, detail: "Build trust with authentic customer stories and experiences" },
    { label: "Product Demos", icon: Play, detail: "Showcase your product features, benefits, and use cases" },
    { label: "Corporate Films", icon: Briefcase, detail: "Create professional videos for training, recruitment, culture, and business communication" },
  ] as VideoCapability[],
};

export type VideoService = { title: string; icon: LucideIcon; description: string; metric: string };

export const videoProductionServices: VideoService[] = [
  {
    title: "Brand Film",
    icon: Clapperboard,
    description: "Create cinematic stories that communicate your brand's vision and values.",
    metric: "Foundation Layer",
  },
  {
    title: "Social Media Reels",
    icon: Camera,
    description: "Produce short-form videos optimized for social platforms and engagement.",
    metric: "Platform-Ready Cuts",
  },
  {
    title: "Explainer Animation",
    icon: Wand2,
    description: "Turn complex ideas into simple, engaging visual stories.",
    metric: "Motion Graphics",
  },
  {
    title: "Testimonial Videos",
    icon: Heart,
    description: "Showcase real customer experiences to build trust and credibility.",
    metric: "Authentic Stories",
  },
  {
    title: "Product Demo",
    icon: Play,
    description: "Highlight product features and benefits through compelling demonstrations.",
    metric: "Feature Showcase",
  },
  {
    title: "Corporate Films",
    icon: Briefcase,
    description: "Create professional content for company communication, training, recruitment, and events.",
    metric: "Business Communication",
  },
];

export type WhyChoosePoint = { title: string; icon: LucideIcon; description: string };

export const whyChooseVideoProduction: WhyChoosePoint[] = [
  { title: "Cinematic Quality", icon: Sparkles, description: "Professional visuals, audio, editing, and color treatment." },
  { title: "Story-Driven", icon: PenTool, description: "Every video starts with a clear story and purpose." },
  { title: "Platform-Optimized", icon: MonitorSmartphone, description: "Videos formatted for websites, social media, ads, and other platforms." },
  { title: "Full-Service Production", icon: Layers, description: "From scripting and filming to animation, editing, and delivery." },
  { title: "Fast Turnaround", icon: Zap, description: "Efficient production without compromising creative quality." },
  { title: "Conversion-Focused", icon: Target, description: "Video content designed to support real marketing and business goals." },
];

export type ProcessStep = { number: string; title: string; icon: LucideIcon; description: string };

export const videoProductionProcess: ProcessStep[] = [
  { number: "01", title: "Concept", icon: Compass, description: "Define your goals, audience, message, and creative direction." },
  { number: "02", title: "Pre-Production", icon: PenTool, description: "Develop scripts, storyboards, locations, and production plans." },
  { number: "03", title: "Production", icon: Clapperboard, description: "Film and capture the required video content." },
  { number: "04", title: "Post-Production", icon: Wand2, description: "Edit, animate, color-grade, and enhance the footage." },
  { number: "05", title: "Review", icon: Eye, description: "Refine the video based on your feedback." },
  { number: "06", title: "Delivery", icon: Send, description: "Deliver optimized final videos ready for publishing." },
];

export const videoProductionCta = {
  heading: "Ready to Tell Your Story Through Video?",
  description: "Create engaging video content that captures attention, builds trust, and supports your business growth.",
  primaryCta: { label: "Book Video Consultation", href: "/contact" },
  secondaryCta: { label: "Get Custom Quote", href: "/contact" },
};
