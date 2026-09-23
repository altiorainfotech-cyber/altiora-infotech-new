import type { LucideIcon } from "lucide-react";
import {
  Smartphone,
  Bot,
  Layers,
  Blocks,
  Server,
  Palette,
  Award,
  Gauge,
  ShieldCheck,
  Users,
  Zap,
  Handshake,
  Compass,
  Code2,
  SearchCheck,
  Rocket,
  RefreshCw,
  Wrench,
} from "lucide-react";

const CONTACT_URL = "https://altiorainfotech.ca/contact";
const CALENDLY_URL = "https://calendly.com/altiorainfotech/30min";

export const mobileAppHero = {
  eyebrow: "Mobile App Development",
  heading: "Build High-Performance Mobile Apps That Users Love",
  description:
    "Design and develop powerful mobile apps for iOS, Android, and cross-platform platforms with seamless UX, scalable technology, and reliable performance.",
  cta: { label: "Start Your App", href: CONTACT_URL },
};

export type AppCapability = { label: string; icon: LucideIcon; detail: string };

export const mobileAppOverview = {
  eyebrow: "Service Overview",
  heading: "What Are Mobile App Development Services?",
  p1: "Mobile app development covers strategy, UI/UX design, development, API integration, testing, deployment, and ongoing optimization.",
  p2: "At Altiora Infotech, we build scalable mobile solutions tailored to your business goals, users, and technology needs.",
  coverHeading: "We Build",
  capabilities: [
    { label: "iOS Apps", icon: Smartphone, detail: "Swift & SwiftUI" },
    { label: "Android Apps", icon: Bot, detail: "Kotlin & Jetpack Compose" },
    { label: "React Native Apps", icon: Layers, detail: "Cross-platform development" },
    { label: "Flutter Apps", icon: Blocks, detail: "Multi-platform applications" },
    { label: "Backend & APIs", icon: Server, detail: "REST, GraphQL & cloud infrastructure" },
    { label: "Mobile UI/UX", icon: Palette, detail: "Research-driven app experiences" },
  ] as AppCapability[],
};

export type AppService = { title: string; icon: LucideIcon; description: string; metric: string };

export const mobileAppServices: AppService[] = [
  {
    title: "iOS App Development",
    icon: Smartphone,
    description: "Native iOS apps built for performance, usability, and seamless App Store deployment.",
    metric: "Foundation Layer",
  },
  {
    title: "Android App Development",
    icon: Bot,
    description: "Scalable Android applications optimized across devices and screen sizes.",
    metric: "Device-Optimized",
  },
  {
    title: "Cross-Platform Development",
    icon: Layers,
    description: "React Native and Flutter apps with a shared, maintainable codebase.",
    metric: "Shared Codebase",
  },
  {
    title: "Mobile UI/UX Design",
    icon: Palette,
    description: "Intuitive wireframes, prototypes, and interfaces designed around user needs.",
    metric: "User-Tested Design",
  },
  {
    title: "Backend & API Integration",
    icon: Server,
    description: "Secure APIs, cloud backends, authentication, and real-time functionality.",
    metric: "Secure Infrastructure",
  },
  {
    title: "App Maintenance & Support",
    icon: Wrench,
    description: "Ongoing updates, bug fixes, performance monitoring, and feature improvements.",
    metric: "Continuous Support",
  },
];

export type WhyChoosePoint = { title: string; icon: LucideIcon; description: string };

export const whyChooseMobileApp: WhyChoosePoint[] = [
  { title: "Full-Stack Expertise", icon: Award, description: "Native, cross-platform, backend, and API development under one team." },
  { title: "Performance-First Engineering", icon: Gauge, description: "Fast, responsive, and optimized applications built for real-world devices." },
  { title: "Security by Design", icon: ShieldCheck, description: "Secure APIs, encrypted data, authentication, and modern security practices." },
  { title: "User-Centered Design", icon: Users, description: "Clean, intuitive experiences focused on usability and engagement." },
  { title: "Agile Delivery", icon: Zap, description: "Clear milestones, regular updates, and transparent development cycles." },
  { title: "Post-Launch Support", icon: Handshake, description: "Continuous maintenance, optimization, updates, and feature development." },
];

export type ProcessStep = { number: string; title: string; icon: LucideIcon; description: string };

export const mobileAppProcess: ProcessStep[] = [
  { number: "01", title: "Discovery & Strategy", icon: Compass, description: "Define goals, users, features, and technical requirements." },
  { number: "02", title: "UI/UX Design", icon: Palette, description: "Create user flows, wireframes, and high-fidelity designs." },
  { number: "03", title: "Development", icon: Code2, description: "Build the app, backend, APIs, and required integrations." },
  { number: "04", title: "Testing & QA", icon: SearchCheck, description: "Test functionality, performance, security, and device compatibility." },
  { number: "05", title: "Launch", icon: Rocket, description: "Prepare and deploy your app to the App Store and Google Play." },
  { number: "06", title: "Optimize & Scale", icon: RefreshCw, description: "Monitor performance and continuously improve the product." },
];

export const mobileAppCta = {
  heading: "Ready to Build Your Mobile App?",
  description: "Turn your app idea into a scalable, market-ready product with Altiora Infotech.",
  primaryCta: { label: "Book Free App Consultation", href: CALENDLY_URL },
  secondaryCta: { label: "Get Started", href: CONTACT_URL },
};
