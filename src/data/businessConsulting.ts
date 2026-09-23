import type { LucideIcon } from "lucide-react";
import {
  Compass,
  Settings,
  DollarSign,
  TrendingUp,
  Cpu,
  Users,
  LineChart,
  Award,
  BarChart3,
  Handshake,
  Layers,
  Target,
  FileCheck,
  SearchCheck,
  Rocket,
  RefreshCw,
} from "lucide-react";

export const businessConsultingHero = {
  eyebrow: "Business Consulting Services",
  heading: "Strategic Guidance to Clarify Direction, Accelerate Growth & Maximize Results",
  description:
    "Build a clearer strategy, improve operations, and identify growth opportunities with practical business consulting tailored to your goals.",
  cta: { label: "Book Free Strategy Call", href: "/contact" },
};

export type ConsultingCapability = { label: string; icon: LucideIcon; detail: string };

const capabilities: ConsultingCapability[] = [
  { label: "Business Strategy", icon: Compass, detail: "Define direction, positioning, goals, and growth plans" },
  { label: "Operational Excellence", icon: Settings, detail: "Improve processes, workflows, efficiency, and scalability" },
  { label: "Financial Advisory", icon: DollarSign, detail: "Optimize costs, revenue models, budgets, and financial planning" },
  { label: "Marketing & Growth", icon: TrendingUp, detail: "Develop strategies for customer acquisition, retention, and expansion" },
  { label: "Digital Transformation", icon: Cpu, detail: "Modernize technology, workflows, automation, and digital operations" },
  { label: "Leadership & Team", icon: Users, detail: "Strengthen leadership, team alignment, performance, and organizational growth" },
];

export const businessConsultingOverview = {
  eyebrow: "Service Overview",
  heading: "What Are Business Consulting Services?",
  p1: "Business consulting provides strategic guidance to help businesses solve challenges, improve performance, and plan sustainable growth.",
  p2: "At Altiora Infotech, we combine strategy, data, technology, and hands-on support to help businesses move from uncertainty to action.",
  coverHeading: "We Help With",
  capabilities,
  coverage: capabilities,
};

export type ConsultingService = { title: string; icon: LucideIcon; description: string; metric: string };

export const businessConsultingServices: ConsultingService[] = [
  {
    title: "Strategic Planning",
    icon: Compass,
    description: "Create clear strategies, priorities, roadmaps, and measurable goals.",
    metric: "Foundation Layer",
  },
  {
    title: "Operational Improvement",
    icon: Settings,
    description: "Optimize workflows, processes, and resources for greater efficiency.",
    metric: "Process Efficiency",
  },
  {
    title: "Financial Consulting",
    icon: DollarSign,
    description: "Improve revenue models, cost management, forecasting, and financial planning.",
    metric: "Revenue Modeling",
  },
  {
    title: "Growth Strategy",
    icon: TrendingUp,
    description: "Build customer acquisition, market expansion, and scalable growth strategies.",
    metric: "Market Expansion",
  },
  {
    title: "Digital Transformation",
    icon: Cpu,
    description: "Modernize technology, automation, systems, and digital workflows.",
    metric: "Systems Modernized",
  },
  {
    title: "Performance Analytics",
    icon: LineChart,
    description: "Track KPIs and business performance with actionable insights and reporting.",
    metric: "KPI Tracking",
  },
];

export type WhyChoosePoint = { title: string; icon: LucideIcon; description: string };

export const whyChooseBusinessConsulting: WhyChoosePoint[] = [
  { title: "Strategic Expertise", icon: Award, description: "Clear, practical strategies aligned with your business goals." },
  { title: "Data-Driven Decisions", icon: BarChart3, description: "Use market research, analytics, and performance data to guide decisions." },
  { title: "Hands-On Support", icon: Handshake, description: "We support implementation—not just strategy development." },
  { title: "Scalable Solutions", icon: Layers, description: "Approaches designed to grow with your business." },
  { title: "Measurable Results", icon: Target, description: "Define clear KPIs and track progress throughout the engagement." },
  { title: "Transparent Partnership", icon: FileCheck, description: "Clear communication, milestones, and progress reporting." },
];

export type ProcessStep = { number: string; title: string; icon: LucideIcon; description: string };

export const businessConsultingProcess: ProcessStep[] = [
  { number: "01", title: "Discovery", icon: SearchCheck, description: "Understand your business, challenges, and goals." },
  { number: "02", title: "Analysis", icon: BarChart3, description: "Assess your market, operations, performance, and opportunities." },
  { number: "03", title: "Strategy", icon: Compass, description: "Develop a focused roadmap with priorities and measurable objectives." },
  { number: "04", title: "Implementation", icon: Rocket, description: "Support your team in putting the strategy into action." },
  { number: "05", title: "Measure", icon: LineChart, description: "Track KPIs, progress, and business performance." },
  { number: "06", title: "Optimize & Scale", icon: RefreshCw, description: "Refine the strategy and identify new growth opportunities." },
];

export const businessConsultingCta = {
  heading: "Ready to Transform Your Business Strategy?",
  description: "Get the clarity, strategy, and practical guidance you need to move your business forward.",
  primaryCta: { label: "Book Strategy Call", href: "/contact" },
  secondaryCta: { label: "Get Custom Quote", href: "/contact" },
};
