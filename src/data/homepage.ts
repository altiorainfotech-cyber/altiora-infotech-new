import type { LucideIcon } from "lucide-react";
import {
  Megaphone,
  Search,
  Smartphone,
  Globe,
  Share2,
  Palette,
  Sparkles,
  Video,
  Briefcase,
  Users,
  Bot,
  Compass,
  Hammer,
  TrendingUp,
  ClipboardList,
  Rocket,
  LineChart,
  Stethoscope,
  ShoppingCart,
  Building2,
  Store,
  Cpu,
  GraduationCap,
  Home,
} from "lucide-react";
import { homepageImages } from "./homepageImages";

export type HeroSlide = {
  eyebrow: string;
  title: string;
  description: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  image: string;
};

export const heroSlides: HeroSlide[] = [
  {
    eyebrow: "Digital Growth Partner",
    title: "Digital Marketing Engineered for Measurable Growth",
    description:
      "Performance marketing, SEO, paid advertising, and conversion systems built as one scalable growth engine for your business.",
    primaryCta: { label: "Let's Get Started", href: "/contact" },
    secondaryCta: { label: "Explore Services", href: "/services" },
    image: homepageImages.hero.growth,
  },
  {
    eyebrow: "Search + AI Visibility",
    title: "Be Found Where Your Customers Search — From Google to AI",
    description:
      "AEO and GEO built for Google, ChatGPT, Perplexity, and AI Overviews so your brand shows up wherever discovery happens next.",
    primaryCta: { label: "Explore AEO & GEO", href: "/services/aeo-geo" },
    secondaryCta: { label: "Explore Services", href: "/services" },
    image: homepageImages.hero.aiSearch,
  },
  {
    eyebrow: "Strategy → Execution → Growth",
    title: "One Partner for Your Digital Growth Ecosystem",
    description:
      "Strategy, paid media, SEO, websites, social, and creative working together as a single, conversion-focused execution engine.",
    primaryCta: { label: "Talk to Our Team", href: "/contact" },
    secondaryCta: { label: "Explore Services", href: "/services" },
    image: homepageImages.hero.fullFunnel,
  },
];

export const quickAnswer = {
  eyebrow: "Quick Answer",
  question: "What is digital marketing and how does Altiora approach it?",
  answer:
    "Digital marketing is how modern businesses earn visibility, traffic, and revenue across search, social, and AI platforms. Altiora combines strategy, performance media, and search visibility into one growth engine — built around measurable outcomes, not vanity metrics.",
  chips: [
    "SEO",
    "Google Ads",
    "Paid Social",
    "Social Media",
    "Websites",
    "Branding",
    "Growth Strategy",
    "AEO & GEO",
  ],
};

export const growthMetrics = [
  { value: "80+", label: "Clients Served", icon: Users },
  { value: "$5M+", label: "Revenue Generated", icon: TrendingUp },
  { value: "12+", label: "Industries Covered", icon: Building2 },
];

export type Service = {
  category: string;
  title: string;
  slug: string;
  description: string;
  benefits: string[];
  href: string;
  icon: LucideIcon;
};

export const services: Service[] = [
  {
    category: "Performance Media",
    title: "Paid Advertising (PPC)",
    slug: "paid-advertisement-services",
    description:
      "Full-funnel paid media across search, social, and display — built for efficient spend and measurable return.",
    benefits: ["Google & Meta Ads", "Conversion-focused targeting", "Transparent reporting"],
    href: "/services/paid-advertisement-services",
    icon: Megaphone,
  },
  {
    category: "Search Visibility",
    title: "SEO",
    slug: "seo",
    description:
      "Technical, on-page, and authority-building SEO that compounds organic traffic and qualified leads over time.",
    benefits: ["Technical SEO audits", "Content & keyword strategy", "Authority link building"],
    href: "/services/seo",
    icon: Search,
  },
  {
    category: "Search Visibility",
    title: "AEO & GEO",
    slug: "aeo-geo",
    description:
      "Answer and generative engine optimization built for how AI tools like ChatGPT and Google AI Overviews surface answers.",
    benefits: ["AI-answer visibility", "Structured data & schema", "Featured snippet targeting"],
    href: "/services/aeo-geo",
    icon: Bot,
  },
  {
    category: "Product",
    title: "Website Development Services",
    slug: "website-development",
    description:
      "Fast, conversion-focused websites built on modern architecture with SEO and growth baked in.",
    benefits: ["Conversion-focused UX", "Performance & Core Web Vitals", "Scalable architecture"],
    href: "/services/website-development",
    icon: Globe,
  },
  {
    category: "Social",
    title: "Social Media Management",
    slug: "social-media-management",
    description:
      "Consistent, on-brand social presence that builds community and feeds the growth funnel.",
    benefits: ["Content calendars", "Community management", "Platform-specific strategy"],
    href: "/services/social-media-management",
    icon: Share2,
  },
  {
    category: "Social",
    title: "Influencer & UGC Marketing",
    slug: "influencer-ugc-marketing",
    description:
      "Creator partnerships and authentic user-generated content that build trust at scale.",
    benefits: ["Creator sourcing & outreach", "UGC content programs", "Campaign management"],
    href: "/services/influencer-ugc-marketing",
    icon: Users,
  },
  {
    category: "Creative",
    title: "Graphic Design",
    slug: "graphic-design",
    description:
      "Distinct, premium visual design across digital and print touchpoints that keeps your brand consistent.",
    benefits: ["Marketing collateral", "Digital ad creative", "Brand-consistent design systems"],
    href: "/services/graphic-design",
    icon: Palette,
  },
  {
    category: "Brand",
    title: "Branding",
    slug: "branding",
    description:
      "Positioning, identity, and messaging systems that make your business memorable and credible.",
    benefits: ["Brand strategy & positioning", "Visual identity systems", "Messaging frameworks"],
    href: "/services/branding",
    icon: Sparkles,
  },
  {
    category: "Creative",
    title: "Video Production",
    slug: "video-production",
    description:
      "Scroll-stopping video content built for social, ads, and brand storytelling.",
    benefits: ["Short-form ad creative", "Brand & product video", "Editing & motion graphics"],
    href: "/services/video-production",
    icon: Video,
  },
  {
    category: "Advisory",
    title: "Business Consulting",
    slug: "business-consulting",
    description:
      "Growth strategy and market guidance for businesses scaling into new channels and markets.",
    benefits: ["Growth strategy sessions", "Market & competitor analysis", "Channel planning"],
    href: "/services/business-consulting",
    icon: Briefcase,
  },
  {
    category: "Product",
    title: "Mobile App Development",
    slug: "mobile-app-development",
    description:
      "iOS and Android apps engineered for performance, usability, and long-term scalability.",
    benefits: ["Native & cross-platform builds", "UX-first design", "Ongoing support"],
    href: "/services/mobile-app-development",
    icon: Smartphone,
  },
];

export const whyAltiora = {
  heading: "A Digital Growth Partner Built Around Your Business Goals",
  panels: [
    {
      number: "01",
      icon: Compass,
      title: "Start with the right direction.",
      description:
        "Market research, audience understanding, competitor analysis, and channel strategy set the foundation before any execution begins.",
    },
    {
      number: "02",
      icon: Hammer,
      title: "Turn strategy into high-performance digital assets.",
      description:
        "SEO, paid media, websites, social, content, and creative come together as one coordinated execution system.",
    },
    {
      number: "03",
      icon: TrendingUp,
      title: "Continuously improve what drives growth.",
      description:
        "We measure performance, identify opportunities, and optimize campaigns to scale what's already working.",
    },
  ],
};

export const ecosystem = {
  heading: "One Ecosystem, Built for Growth",
  description:
    "Every service works together — strategy informs execution, execution feeds data, and data drives the next decision.",
  layers: [
    { label: "Digital Strategy" },
    { label: "SEO" },
    { label: "Paid Media" },
    { label: "Content" },
    { label: "Website" },
    { label: "Conversions" },
    { label: "Growth" },
  ],
};

export const processSteps = [
  {
    number: "01",
    icon: ClipboardList,
    title: "Strategy & Market Research",
    description: "We study your market, audience, and competitors to define the right growth plan.",
  },
  {
    number: "02",
    icon: Hammer,
    title: "Build & Optimize",
    description: "Websites, campaigns, and content are built and refined for performance from day one.",
  },
  {
    number: "03",
    icon: Rocket,
    title: "Traffic & Lead Generation",
    description: "Paid, organic, and social channels are activated to drive qualified traffic and leads.",
  },
  {
    number: "04",
    icon: LineChart,
    title: "Measure, Improve & Scale",
    description: "We track what matters, optimize continuously, and scale the channels that perform.",
  },
];

export type ResultSlide = {
  category: string;
  title: string;
  description: string;
  image: string;
  href?: string;
  metrics?: { label: string; value: string }[];
};

// Populate with verified, approved case studies only. Left empty until
// real project data is available — see requirements doc §16.
export const results: ResultSlide[] = [];

export type IndustrySlide = {
  title: string;
  description: string;
  services: string[];
  href?: string;
  image: string;
};

export const industries: IndustrySlide[] = [
  {
    title: "Healthcare",
    description: "Patient acquisition and local visibility for clinics and healthcare providers.",
    services: ["SEO", "Paid Media", "Web", "Content"],
    href: "/industries/healthcare",
    image: homepageImages.industries.healthcare,
  },
  {
    title: "E-commerce",
    description: "Full-funnel growth systems for online retailers, from traffic to conversion.",
    services: ["Paid Media", "SEO", "Web", "Content"],
    href: "/industries/ecommerce",
    image: homepageImages.industries.ecommerce,
  },
  {
    title: "Professional Services",
    description: "Lead generation and authority building for firms and service providers.",
    services: ["SEO", "Web", "Branding", "Content"],
    href: "/industries/professional-services",
    image: homepageImages.industries["professional-services"],
  },
  {
    title: "Local Businesses",
    description: "Local search visibility and demand generation for community-focused businesses.",
    services: ["SEO", "Paid Media", "Social", "Web"],
    href: "/industries/local-businesses",
    image: homepageImages.industries["local-businesses"],
  },
  {
    title: "Technology",
    description: "Positioning and demand generation for software and technology companies.",
    services: ["SEO", "Content", "Web", "Paid Media"],
    href: "/industries/technology",
    image: homepageImages.industries.technology,
  },
  {
    title: "Education",
    description: "Enrollment and visibility growth for schools and education providers.",
    services: ["SEO", "Paid Media", "Social", "Web"],
    href: "/industries/education",
    image: homepageImages.industries.education,
  },
  {
    title: "Real Estate",
    description: "Lead generation and brand visibility for agents, brokers, and developers.",
    services: ["SEO", "Paid Media", "Web", "Content"],
    href: "/industries/real-estate",
    image: homepageImages.industries["real-estate"],
  },
];

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company?: string;
};

// Only populate with approved, verified testimonials. Left empty —
// section is omitted from the page until real content exists.
export const testimonials: Testimonial[] = [];

export const aeoGeo = {
  eyebrow: "Search Is Changing",
  heading: "Be visible beyond traditional search.",
  description:
    "Answer Engine Optimization and Generative Engine Optimization help your business show up across the platforms customers now use to find answers.",
  targets: ["Google", "ChatGPT", "Perplexity", "AI Overviews", "Voice Search", "Featured Snippets"],
  image: homepageImages.aeoGeo,
};

export const finalCta = {
  heading: "Ready to Build Your Digital Growth Engine?",
  description:
    "Let's talk about where your business is today and build the strategy to get it where it needs to go.",
  primaryCta: { label: "Schedule a Consultation", href: "/contact" },
  secondaryCta: { label: "Explore Services", href: "/services" },
  image: homepageImages.finalCta,
};

export const footerContent = {
  positioning:
    "A digital growth partner delivering performance marketing, search visibility, and conversion-focused execution for global brands.",
  columns: [
    {
      heading: "Services",
      links: [
        { label: "SEO", href: "/services/seo" },
        { label: "Paid Media", href: "/services/paid-advertisement-services" },
        { label: "Website Development", href: "/services/website-development" },
        { label: "Social Media", href: "/services/social-media-management" },
        { label: "Branding", href: "/services/branding" },
        { label: "AEO & GEO", href: "/services/aeo-geo" },
      ],
    },
    {
      heading: "Company",
      links: [
        { label: "About", href: "/about" },
        { label: "Contact", href: "/contact" },
        { label: "Industries", href: "/industries" },
        { label: "Insights", href: "/insights" },
      ],
    },
    {
      heading: "Locations",
      links: [
        { label: "Canada", href: "/locations/canada" },
        { label: "United States", href: "/locations/united-states" },
      ],
    },
  ],
  social: [
    { label: "LinkedIn", href: "https://linkedin.com" },
    { label: "Instagram", href: "https://instagram.com" },
    { label: "Facebook", href: "https://facebook.com" },
    { label: "YouTube", href: "https://youtube.com" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/legal/privacy-policy" },
    { label: "Terms", href: "/legal/terms" },
    { label: "Cookie Policy", href: "/legal/cookie-policy" },
  ],
};

export const industryIcons: Record<string, LucideIcon> = {
  Healthcare: Stethoscope,
  "E-commerce": ShoppingCart,
  "Professional Services": Building2,
  "Local Businesses": Store,
  Technology: Cpu,
  Education: GraduationCap,
  "Real Estate": Home,
};
