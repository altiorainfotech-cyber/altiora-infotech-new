import type { LucideIcon } from "lucide-react";
import {
  Compass,
  Palette,
  MessageCircle,
  BookOpen,
  Target,
  RefreshCw,
  SearchCheck,
  Layers,
  Users,
  TrendingUp,
  Award,
  Rocket,
} from "lucide-react";

export const brandingHero = {
  eyebrow: "Branding Services",
  heading: "Branding Services That Build Trust",
  subheading: "Shape Perception, Build Authority & Drive Business Growth",
  cta: { label: "Build Your Brand", href: "/contact" },
};

export type BrandCapability = { label: string; icon: LucideIcon; detail: string };

const capabilities: BrandCapability[] = [
  { label: "Brand Strategy", icon: Compass, detail: "Define vision, values, positioning & competitive edge" },
  { label: "Visual Identity", icon: Palette, detail: "Cohesive logo, colors, typography & visual language" },
  { label: "Brand Messaging", icon: MessageCircle, detail: "Craft unique voice, tone, taglines & value props" },
  { label: "Brand Guidelines", icon: BookOpen, detail: "Comprehensive brand standards for team consistency" },
  { label: "Brand Positioning", icon: Target, detail: "Own a distinct, high-value space in customer minds" },
  { label: "Brand Relaunch", icon: RefreshCw, detail: "Modernize established brands while preserving equity" },
];

export const brandingOverview = {
  eyebrow: "Overview",
  heading: "Your Brand Is Your Most Valuable Asset",
  p1: "Your brand is the most valuable asset your business owns — yet most businesses treat it as an afterthought.",
  p2: "At Altiora Infotech, we build brands that shape perception, command premium pricing, and create deep customer trust.",
  paragraph:
    "Your brand is the most valuable asset your business owns — yet most businesses treat it as an afterthought. At Altiora Infotech, we build brands that shape perception, command premium pricing, and create the kind of deep customer trust that drives long-term business growth. From brand strategy and visual identity to messaging frameworks and brand guidelines, we craft every element with strategic intent — ensuring your brand doesn't just look good, but actively works to grow your business.",
  coverHeading: "What We Build",
  capabilities,
  coverage: capabilities,
};

export type BrandBadge = { big: string; small: string };

export type BrandSolution = {
  title: string;
  icon: LucideIcon;
  description: string;
  badges: [BrandBadge, BrandBadge];
  tags: string[];
};

export const brandingSolutionsIntro = {
  eyebrow: "Branding Solutions We Deliver",
  heading: "Branding Solutions We Deliver",
  description:
    "Comprehensive branding services that build cohesive, powerful brand identities from strategy through execution.",
};

export const brandingSolutions: BrandSolution[] = [
  {
    title: "Brand Strategy",
    icon: Compass,
    description:
      "The strategic foundation that defines who you are, what you stand for, and why customers should choose you over every competitor.",
    badges: [
      { big: "100%", small: "Research-Led" },
      { big: "Long", small: "Term Impact" },
    ],
    tags: ["Mission & Vision", "Brand Values", "Competitive Analysis", "Target Audience", "Positioning Statement", "Brand Architecture"],
  },
  {
    title: "Visual Identity",
    icon: Palette,
    description:
      "A cohesive visual system — logo, colors, typography, and imagery — that makes your brand instantly recognizable and visually compelling.",
    badges: [
      { big: "500+", small: "Brands Built" },
      { big: "98%", small: "Satisfaction" },
    ],
    tags: ["Logo Design", "Color Palette", "Typography System", "Imagery Style", "Icon Library", "Visual Language"],
  },
  {
    title: "Brand Messaging",
    icon: MessageCircle,
    description:
      "Your brand's voice, tone, and language crafted to resonate deeply with your target audience and communicate your value with clarity.",
    badges: [
      { big: "Clear", small: "Value Prop" },
      { big: "Unified", small: "Voice & Tone" },
    ],
    tags: ["Brand Voice", "Tagline Creation", "Value Proposition", "Key Messages", "Tone of Voice", "Copywriting Framework"],
  },
  {
    title: "Brand Guidelines",
    icon: BookOpen,
    description:
      "Comprehensive brand standards documentation that ensures perfect consistency across every team member, agency, and platform your brand touches.",
    badges: [
      { big: "Full", small: "Documentation" },
      { big: "Team", small: "Ready" },
    ],
    tags: ["Logo Usage Rules", "Color Codes", "Typography Specs", "Do's & Don'ts", "Application Examples", "Digital & Print"],
  },
  {
    title: "Brand Positioning",
    icon: Target,
    description:
      "Define and own your unique market position — the specific place in your customer's mind where your brand lives and why you're the obvious choice.",
    badges: [
      { big: "Market", small: "Differentiation" },
      { big: "Customer", small: "Clarity" },
    ],
    tags: ["Market Research", "Competitor Analysis", "Positioning Map", "Unique Differentiators", "Perception Strategy", "Customer Promise"],
  },
  {
    title: "Brand Relaunch",
    icon: RefreshCw,
    description:
      "Modernize and reposition established brands for new audiences, changing markets, or business pivots — without losing existing brand equity.",
    badges: [
      { big: "Fresh", small: "Market Entry" },
      { big: "Equity", small: "Preserved" },
    ],
    tags: ["Brand Audit", "Repositioning Strategy", "Visual Refresh", "Message Evolution", "Audience Expansion", "Launch Planning"],
  },
];

export const brandingResults = {
  heading: "Branding That Delivers Measurable Results",
  intro:
    "Strong branding isn't just about looking good — it's a business multiplier. Businesses with consistent, strategic branding see dramatically higher customer trust, faster sales cycles, and the ability to command premium prices in their market.",
  bullets: [
    "127% average increase in brand recognition after rebrand",
    "3x higher revenue impact from consistent brand identity",
    "89% boost in customer trust and perceived credibility",
    "Reduced customer acquisition costs through brand authority",
  ],
};

export const brandingMetrics = {
  heading: "Brand Impact Metrics",
  subheading: "Average results after branding",
  metrics: [
    { value: "+127%", label: "Brand Recognition", sub: "Avg increase" },
    { value: "+89%", label: "Customer Trust", sub: "Trust score lift" },
    { value: "Top 10%", label: "Market Position", sub: "Industry ranking" },
    { value: "3x", label: "Revenue Impact", sub: "ROI on branding" },
  ],
};

export type BrandService = { title: string; icon: LucideIcon; description: string; metric: string };

export const brandingServicesIntro = {
  eyebrow: "End-to-End Execution",
  heading: "Our Branding Services",
  description:
    "End-to-end branding solutions designed to build a powerful brand identity that attracts your ideal customers and drives business growth.",
};

export const brandingServices: BrandService[] = [
  {
    title: "Brand Strategy",
    icon: Compass,
    description:
      "A comprehensive brand strategy defining your mission, values, positioning, and competitive differentiation to guide every business decision.",
    metric: "Foundation Layer",
  },
  {
    title: "Visual Identity",
    icon: Palette,
    description:
      "Complete visual identity systems — logo, colors, typography, and imagery — that make your brand instantly recognizable across all touchpoints.",
    metric: "500+ Brands Built",
  },
  {
    title: "Brand Messaging",
    icon: MessageCircle,
    description:
      "Compelling brand voice, taglines, value propositions, and messaging frameworks that communicate your unique value with clarity and confidence.",
    metric: "Unified Voice & Tone",
  },
  {
    title: "Brand Guidelines",
    icon: BookOpen,
    description:
      "Comprehensive brand standards documentation ensuring perfect consistency across every team, agency, and platform your brand appears on.",
    metric: "Team-Ready Docs",
  },
  {
    title: "Brand Positioning",
    icon: Target,
    description:
      "Strategic market positioning that carves out your unique space in the competitive landscape and makes you the obvious choice for your ideal customer.",
    metric: "Market Differentiation",
  },
  {
    title: "Brand Audit",
    icon: SearchCheck,
    description:
      "A thorough analysis of your current brand health, perception gaps, and opportunities — the essential first step before any brand evolution.",
    metric: "Perception Gap Analysis",
  },
];

export type WhyChoosePoint = { title: string; icon: LucideIcon; description: string };

export const whyChooseBrandingIntro = {
  eyebrow: "The Altiora Advantage",
  heading: "Why Choose Our Branding Services?",
  description:
    "We build brands that don't just look impressive — they actively work to grow your business and command premium market positioning.",
};

export const whyChooseBranding: WhyChoosePoint[] = [
  { title: "Strategic Foundation", icon: Compass, description: "Every branding decision we make is rooted in research, competitive analysis, and a deep understanding of your target audience's psychology and decision-making." },
  { title: "Consistent Identity", icon: Layers, description: "We build visual and messaging systems that maintain perfect consistency across every touchpoint — from social media to print to packaging to website." },
  { title: "Memorable Positioning", icon: Target, description: "We help you own a distinct, ownable position in the market that makes your brand the first and only name that comes to mind for your ideal customer." },
  { title: "Audience Clarity", icon: Users, description: "Deep understanding of your target audience's motivations, fears, and aspirations ensures your brand speaks directly to the people most likely to buy from you." },
  { title: "Long-Term Value", icon: TrendingUp, description: "Great branding is an investment, not an expense. We build brands that appreciate in value over time, reducing customer acquisition costs and commanding premium pricing." },
  { title: "Expert Team", icon: Award, description: "Seasoned brand strategists, designers, and copywriters who've built brands across industries — bringing the depth of expertise your brand deserves." },
];

export type ProcessStep = { number: string; title: string; icon: LucideIcon; description: string };

export const brandingProcess: ProcessStep[] = [
  { number: "01", title: "Discovery & Audit", icon: SearchCheck, description: "Understand your business, audience, competitors, and current brand perception." },
  { number: "02", title: "Strategy & Positioning", icon: Compass, description: "Define your mission, values, and the unique market position you'll own." },
  { number: "03", title: "Visual Identity Design", icon: Palette, description: "Design your logo, color system, typography, and visual language." },
  { number: "04", title: "Messaging & Voice", icon: MessageCircle, description: "Craft your brand voice, taglines, and core messaging framework." },
  { number: "05", title: "Guidelines & Systemization", icon: BookOpen, description: "Document brand standards so every team and platform stays consistent." },
  { number: "06", title: "Launch & Implementation", icon: Rocket, description: "Roll out your new brand across all touchpoints — website, social media, collateral, and communications — with strategic launch support." },
];

export type WhyWorkPoint = { label: [string, string]; title: string; description: string };

export const whyWorkWithUsIntro = {
  heading: "Why Work With Altiora Infotech?",
  description: "Partner with branding experts who build brands that become business assets.",
};

export const whyWorkWithUs: WhyWorkPoint[] = [
  { label: ["Strategic", "Depth"], title: "Strategic Depth", description: "We start with strategy, not aesthetics, ensuring every design decision serves your business goals." },
  { label: ["Holistic", "Approach"], title: "Holistic Approach", description: "From strategy and identity to messaging and guidelines, we handle your brand as a complete ecosystem." },
  { label: ["Research", "Driven"], title: "Research-Driven", description: "Every decision is backed by audience research, competitive analysis, and market positioning data." },
  { label: ["Proven", "Results"], title: "Proven Results", description: "A track record of building brands that command premium positioning and drive measurable business growth." },
  { label: ["Long-Term", "Partnership"], title: "Long-Term Partnership", description: "We invest in understanding your business deeply so we can continue evolving your brand as you grow." },
  { label: ["Full", "Ownership"], title: "Full Ownership", description: "You own 100% of all brand assets, files, and intellectual property created during our engagement." },
];

export const brandingCta = {
  eyebrow: "Branding Services",
  heading: "Ready to Build a Brand That Stands Apart?",
  description: "Your brand is the foundation everything else is built on. At Altiora Infotech, we build brands that attract premium customers, command higher prices, and create lasting business value.",
  p1: "Your brand is the foundation everything else is built on. At Altiora Infotech, we build brands that attract premium customers, command higher prices, and create lasting business value through strategic identity and consistent presence.",
  p2: "Share your business goals and brand vision, and we'll create a comprehensive branding proposal including strategy, visual concepts, and a clear roadmap for your brand transformation.",
  primaryCta: { label: "Book Brand Strategy Call", href: "/contact" },
  secondaryCta: { label: "Get Custom Quote", href: "/contact" },
};
