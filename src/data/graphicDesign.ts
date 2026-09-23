import type { LucideIcon } from "lucide-react";
import {
  Sparkles,
  Image as ImageIcon,
  FileText,
  LayoutTemplate,
  Printer,
  Package,
  Compass,
  Palette,
  BadgeCheck,
  Zap,
  RefreshCw,
  Layers,
  FileCheck,
  Search,
  PenTool,
  Eye,
  Send,
} from "lucide-react";

export const graphicDesignHero = {
  eyebrow: "Graphic Design Services",
  heading: "Creative Design That Connects, Converts & Communicates",
  description:
    "Build a premium, consistent visual identity with creative designs that attract attention, communicate your message, and strengthen your brand.",
  cta: { label: "Start Your Design", href: "/contact" },
};

export type DesignCapability = { label: string; icon: LucideIcon; detail: string };

const capabilities: DesignCapability[] = [
  { label: "Logo & Brand Identity", icon: Sparkles, detail: "Create a distinctive visual identity for your business" },
  { label: "Social Media Graphics", icon: ImageIcon, detail: "Design engaging visuals for Instagram, Facebook, LinkedIn, and TikTok" },
  { label: "Marketing Collateral", icon: FileText, detail: "Create brochures, flyers, presentations, business cards, and more" },
  { label: "UI/UX Design", icon: LayoutTemplate, detail: "Design intuitive digital experiences for websites and applications" },
  { label: "Print Design", icon: Printer, detail: "Produce high-quality artwork for professional print materials" },
  { label: "Packaging Design", icon: Package, detail: "Create packaging that communicates value and attracts customers" },
];

export const graphicDesignOverview = {
  eyebrow: "Service Overview",
  heading: "What Are Graphic Design Services?",
  p1: "Graphic design services cover branding, social media graphics, marketing materials, UI/UX, print, and packaging design.",
  p2: "At Altiora Infotech, we create strategic visuals that keep your brand consistent, professional, and memorable across every touchpoint.",
  coverHeading: "We Design",
  capabilities,
  coverage: capabilities,
};

export type DesignService = { title: string; icon: LucideIcon; description: string; metric: string };

export const graphicDesignServices: DesignService[] = [
  {
    title: "Logo & Brand Identity",
    icon: Compass,
    description: "Build a recognizable brand with a cohesive visual identity.",
    metric: "Foundation Layer",
  },
  {
    title: "Social Media Graphics",
    icon: ImageIcon,
    description: "Create scroll-stopping visuals that strengthen your social presence.",
    metric: "Platform-Ready Visuals",
  },
  {
    title: "Marketing Collateral",
    icon: FileText,
    description: "Design professional materials that support your sales and marketing.",
    metric: "Sales-Ready Assets",
  },
  {
    title: "UI/UX Design",
    icon: Palette,
    description: "Create intuitive interfaces focused on usability and conversion.",
    metric: "Conversion-Focused UX",
  },
  {
    title: "Print Design",
    icon: Printer,
    description: "Deliver print-ready designs for promotional and business materials.",
    metric: "Print-Ready Files",
  },
  {
    title: "Packaging Design",
    icon: Package,
    description: "Create distinctive packaging that stands out and communicates product value.",
    metric: "Shelf-Ready Design",
  },
];

export type WhyChoosePoint = { title: string; icon: LucideIcon; description: string };

export const whyChooseGraphicDesign: WhyChoosePoint[] = [
  { title: "Creative Excellence", icon: Sparkles, description: "Designs created with purpose, strategy, and visual impact." },
  { title: "Brand Consistency", icon: BadgeCheck, description: "Maintain a unified identity across every brand touchpoint." },
  { title: "Fast Delivery", icon: Zap, description: "Professional designs delivered within efficient timelines." },
  { title: "Flexible Revisions", icon: RefreshCw, description: "Refine concepts until the design matches your vision." },
  { title: "Multiple Formats", icon: Layers, description: "Receive files ready for web, print, social media, and marketing." },
  { title: "Full Ownership", icon: FileCheck, description: "Get complete commercial rights and source files for your designs." },
];

export type ProcessStep = { number: string; title: string; icon: LucideIcon; description: string };

export const graphicDesignProcess: ProcessStep[] = [
  { number: "01", title: "Discovery", icon: Compass, description: "Understand your brand, audience, and design goals." },
  { number: "02", title: "Research", icon: Search, description: "Explore your market, competitors, and visual direction." },
  { number: "03", title: "Concept", icon: PenTool, description: "Develop creative concepts aligned with your brand." },
  { number: "04", title: "Design", icon: Palette, description: "Create and refine the selected design direction." },
  { number: "05", title: "Review", icon: Eye, description: "Collect feedback and make final refinements." },
  { number: "06", title: "Deliver", icon: Send, description: "Provide final designs and required file formats." },
];

export const graphicDesignCta = {
  heading: "Ready to Elevate Your Visual Brand?",
  description: "Create premium visuals that make your brand more recognizable, professional, and memorable.",
  primaryCta: { label: "Book Design Consultation", href: "/contact" },
  secondaryCta: { label: "Get Custom Quote", href: "/contact" },
};
