import type { LucideIcon } from "lucide-react";
import {
  Megaphone,
  Search,
  Bot,
  Sparkles,
  Globe,
  Smartphone,
  Users,
  Compass,
  Target,
  SearchCheck,
  Workflow,
  Rocket,
  LineChart,
  BarChart3,
  TrendingUp,
  Award,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

export const aboutHero = {
  eyebrow: "About Us",
  companyName: "Altiora Infotech",
  subtitle:
    "A growth-focused digital marketing and technology company helping Canadian businesses build, scale, and compete in today's digital landscape.",
};

export const aboutStats = [
  { value: "80+", label: "Projects Delivered", icon: Award, subtext: "Across 12+ Canadian industries" },
  { value: "12+", label: "Industries", icon: ShieldCheck, subtext: "Real estate, health, finance & more" },
  { value: "3-5×", label: "Avg. ROI", icon: TrendingUp, subtext: "Data-driven performance campaigns" },
  { value: "Growing", label: "Canadian Clients", icon: Users, subtext: "Startups to scale-ups nation-wide" },
];

export type ExpertiseItem = {
  title: string;
  href: string;
  icon: LucideIcon;
};

export const whatWeDo = {
  heading: "What We Do",
  p1: "We are a growth-focused digital marketing and technology company helping Canadian businesses build, scale, and compete in today's digital landscape.",
  p2: "At Altiora Infotech, we combine data-driven marketing, creative execution, and modern technology to deliver measurable results. Our focus is not just visibility it's generating qualified leads, increasing conversions, and driving long-term growth.",
  p3: "We work with startups, small businesses, and growing companies across Canada to build strong digital foundations and scalable growth systems.",
  expertise: [
    {
      title: "Digital Marketing & Performance Advertising",
      href: "/services/paid-advertisement-services",
      icon: Megaphone,
    },
    {
      title: "Search Engine Optimization (SEO)",
      href: "/services/seo",
      icon: Search,
    },
    {
      title: "Answer Engine Optimization (AEO) & Generative Engine Optimization (GEO)",
      href: "/services/aeo-geo",
      icon: Bot,
    },
    {
      title: "Branding & Content Strategy",
      href: "/services/branding",
      icon: Sparkles,
    },
    {
      title: "Website & Conversion Optimization",
      href: "/services/website-development-services",
      icon: Globe,
    },
    {
      title: "Mobile App Development",
      href: "/services/mobile-app-development",
      icon: Smartphone,
    },
    {
      title: "Influencer Marketing & UGC Campaigns",
      href: "/services/influencer-ugc-marketing",
      icon: Users,
    },
  ] as ExpertiseItem[],
  outcomeTagline: "Every solution we deliver is aligned with business outcomes not vanity metrics.",
};

export const visionMission = {
  vision: {
    title: "Vision",
    icon: Compass,
    text: "To become a trusted digital growth partner for businesses across Canada, delivering innovative marketing and technology solutions that drive measurable and sustainable success.",
  },
  mission: {
    title: "Mission",
    icon: Target,
    text: "Our mission is to help businesses grow through data-driven marketing, modern technology, and strategic execution. We aim to deliver solutions that are reliable, scalable, and results-oriented, enabling brands to attract, convert, and retain customers in an increasingly competitive digital market.",
  },
};

export const howWeWork = {
  heading: "How We Work",
  intro:
    "Our approach is strategic, transparent, and performance-driven. We begin by understanding your business goals, target market, and competitive landscape in Canada. From there, we build tailored strategies designed to attract the right audience and convert them into customers.",
  steps: [
    "Market research & audience targeting",
    "Funnel and growth strategy development",
    "Campaign execution across digital channels",
    "Continuous optimization through analytics and A/B testing",
    "Clear, consistent reporting",
  ],
  stepIcons: [SearchCheck, Workflow, Rocket, LineChart, BarChart3],
  outcome:
    "We focus on delivering predictable growth, measurable ROI, and scalable systems that evolve with your business.",
};

export const experienceImpact = {
  heading: "Experience & Impact",
  text: "With 80+ projects delivered across industries including real estate, healthcare, finance, e-commerce, and professional services, we bring proven expertise in delivering measurable results.",
  teamText:
    "We work as an extension of your team, aligning our strategies with your business goals and market demands.",
  focusText: "Our focus is simple: generate leads, improve conversions, and increase revenue.",
  industries: ["Real Estate", "Healthcare", "Finance", "E-commerce", "Professional Services"],
  focusPoints: ["Generate leads", "Improve conversions", "Increase revenue"],
};

export const whyAltiora = {
  heading: "Why Altiora Infotech",
  subheading: "We measure success by your growth.",
  intro:
    "Our approach is transparent, data-driven, and focused on real business outcomes not vanity metrics.",
  points: [
    "Strategies aligned with key metrics (Leads, ROI, CAC, LTV)",
    "Performance-driven marketing campaigns",
    "SEO, AEO & GEO for future-ready search visibility",
    "Conversion-focused websites and funnels",
    "Continuous optimization through data and testing",
    "Clear communication and reporting",
  ],
  conclusion:
    "We don't just provide services we build scalable growth systems that help your business succeed in the Canadian market.",
};

export const aboutCta = {
  heading: "Ready to grow your business in Canada?",
  description:
    "Tell us your goals more leads, better conversions, or stronger brand presence and we'll build a strategy designed to deliver real, measurable results.",
  ctaLabel: "Let’s talk",
  ctaHref: "/contact",
};
