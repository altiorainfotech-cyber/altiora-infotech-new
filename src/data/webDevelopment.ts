import type { LucideIcon } from "lucide-react";
import {
  Building2,
  ShoppingCart,
  MousePointerClick,
  Palette,
  LayoutDashboard,
  Globe,
  Code2,
  Users,
  RefreshCw,
  Gauge,
  Wrench,
  Sparkles,
  Search,
  Target,
  ShieldCheck,
  Cpu,
  Compass,
  PenTool,
  Link as LinkIcon,
  SearchCheck,
  Rocket,
} from "lucide-react";

export const webDevHero = {
  eyebrow: "Website Development Services",
  heading: "Build a Website That Converts Visitors Into Customers",
  description:
    "Create fast, modern, secure websites designed to strengthen your online presence, engage visitors, and drive business growth.",
  cta: { label: "Start Your Project", href: "/contact" },
};

export type WebDevCapability = { label: string; icon: LucideIcon; detail: string };

export const webDevOverview = {
  eyebrow: "Service Overview",
  heading: "What Are Website Development Services?",
  p1: "Website development includes design, development, integrations, performance optimization, SEO, and ongoing improvements.",
  p2: "At Altiora Infotech, we build custom websites using modern technologies and scalable solutions tailored to your business goals.",
  coverHeading: "We Build",
  capabilities: [
    { label: "Business Websites", icon: Building2, detail: "Professional websites designed to build trust and generate leads" },
    { label: "E-Commerce Stores", icon: ShoppingCart, detail: "High-converting online stores with secure payments and product management" },
    { label: "Landing Pages", icon: MousePointerClick, detail: "Focused pages designed to turn visitors into leads and customers" },
    { label: "Portfolio Websites", icon: Palette, detail: "Modern websites that showcase your work and build credibility" },
    { label: "SaaS & Web Apps", icon: LayoutDashboard, detail: "Scalable applications with custom features, dashboards, and integrations" },
    { label: "WordPress Websites", icon: Globe, detail: "Custom, responsive WordPress websites that are easy to manage" },
  ] as WebDevCapability[],
};

export type WebDevService = { title: string; icon: LucideIcon; description: string; metric: string };

export const webDevServices: WebDevService[] = [
  {
    title: "Custom Website Development",
    icon: Code2,
    description: "Build a unique website tailored to your brand, audience, and business goals.",
    metric: "Foundation Layer",
  },
  {
    title: "E-Commerce Development",
    icon: ShoppingCart,
    description: "Create secure, scalable online stores with smooth shopping experiences.",
    metric: "Secure Checkout",
  },
  {
    title: "SaaS & Web App Development",
    icon: LayoutDashboard,
    description: "Develop powerful web applications with custom workflows and integrations.",
    metric: "Custom Dashboards",
  },
  {
    title: "CRM Development",
    icon: Users,
    description: "Build custom CRM solutions to manage customers, sales, and business processes.",
    metric: "Sales Pipeline Tools",
  },
  {
    title: "UI/UX Design",
    icon: Palette,
    description: "Create intuitive interfaces that improve user experience and conversions.",
    metric: "User-Tested Design",
  },
  {
    title: "Landing Page Development",
    icon: MousePointerClick,
    description: "Build fast, focused landing pages designed for lead generation.",
    metric: "Built to Convert",
  },
  {
    title: "Website Redesign",
    icon: RefreshCw,
    description: "Modernize outdated websites with better design, UX, and performance.",
    metric: "Modernized UX",
  },
  {
    title: "Performance Optimization",
    icon: Gauge,
    description: "Improve speed, Core Web Vitals, mobile performance, and technical SEO.",
    metric: "Core Web Vitals",
  },
  {
    title: "Website Maintenance",
    icon: Wrench,
    description: "Keep your website secure, updated, fast, and running smoothly.",
    metric: "Ongoing Support",
  },
];

export type WhyChoosePoint = { title: string; icon: LucideIcon; description: string };

export const whyChooseWebDev: WhyChoosePoint[] = [
  { title: "Custom-Built", icon: Sparkles, description: "Unique websites designed around your business—not generic templates." },
  { title: "Performance-First", icon: Gauge, description: "Fast-loading websites optimized for Core Web Vitals and user experience." },
  { title: "SEO-Ready", icon: Search, description: "Clean structure and technical foundations built for search visibility." },
  { title: "Conversion-Focused", icon: Target, description: "Strategic layouts designed to turn visitors into customers." },
  { title: "Secure & Scalable", icon: ShieldCheck, description: "Reliable architecture built to grow with your business." },
  { title: "Modern Technology", icon: Cpu, description: "Built with modern frameworks, tools, and development practices." },
];

export type ProcessStep = { number: string; title: string; icon: LucideIcon; description: string };

export const webDevProcess: ProcessStep[] = [
  { number: "01", title: "Discovery", icon: Compass, description: "Understand your goals, audience, and requirements." },
  { number: "02", title: "Strategy & Design", icon: PenTool, description: "Plan the structure, user experience, and visual direction." },
  { number: "03", title: "Development", icon: Code2, description: "Build the website with clean, responsive, scalable code." },
  { number: "04", title: "Integrations", icon: LinkIcon, description: "Connect forms, APIs, payments, CRM, analytics, and other tools." },
  { number: "05", title: "Testing & Optimization", icon: SearchCheck, description: "Test performance, responsiveness, security, and functionality." },
  { number: "06", title: "Launch & Support", icon: Rocket, description: "Launch your website and provide ongoing support and improvements." },
];

export const webDevCta = {
  heading: "Ready to Build Your Website?",
  description: "Create a fast, modern, and conversion-focused website built around your business goals.",
  primaryCta: { label: "Book Strategy Call", href: "/contact" },
  secondaryCta: { label: "Get Custom Quote", href: "/contact" },
};
