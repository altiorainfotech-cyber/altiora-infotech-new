export interface SolutionTrack {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  description: string;
  badge: string;
  iconName: string;
  outcomes: string[];
  recommendedServices: string[];
  bestFor: string;
}

export const SOLUTIONS_DATA: SolutionTrack[] = [
  {
    id: "ai-search-dominance",
    slug: "ai-search-dominance",
    title: "AI Search & Generative Visibility (AEO/GEO)",
    tagline: "Be the #1 Cited Brand Across ChatGPT, Perplexity, Claude & Google SGE",
    description: "Transition your search strategy from traditional link optimization to Answer Engine Optimization (AEO) and Generative Engine Optimization (GEO). We structure your brand data so AI models cite your products directly.",
    badge: "AI & Search Pioneer",
    iconName: "Cpu",
    outcomes: [
      "Top-tier citation frequency across generative AI engines",
      "Structured schema knowledge graph implementation",
      "Zero-click search intent capture",
    ],
    recommendedServices: ["AEO & GEO Optimization", "Entity Schema Building", "AI Content Strategy"],
    bestFor: "Brands seeking organic market leadership in the AI-first search landscape.",
  },
  {
    id: "enterprise-web-architecture",
    slug: "enterprise-web-architecture",
    title: "Next.js 16 Enterprise Web Architecture",
    tagline: "Sub-500ms Page Speed, Zero Hydration Bloat & High Conversion Tech",
    description: "Re-architect your digital platforms using Next.js 16, React 19, and edge Server Components. We build lightning-fast web applications designed for maximum conversion rates and flawless SEO performance.",
    badge: "Speed-First Tech",
    iconName: "Code",
    outcomes: [
      "Sub-500ms Largest Contentful Paint (LCP)",
      "Up to 60% reduction in client JavaScript bundle size",
      "Enterprise security, edge caching & 99.99% uptime",
    ],
    recommendedServices: ["Custom Web Development", "Core Web Vitals Optimization", "Server Action APIs"],
    bestFor: "Companies needing speed-first, scalable web platforms that turn traffic into revenue.",
  },
  {
    id: "performance-cac-reduction",
    slug: "performance-cac-reduction",
    title: "Performance Marketing & Scalable CAC Reduction",
    tagline: "Full-Funnel Ad Optimization, Creative Velocity & Predictable ROAS",
    description: "Cut customer acquisition costs across Meta, Google, TikTok, and LinkedIn. By pairing rapid weekly creative testing with server-side CAPI data attribution, we scale ad campaigns profitably.",
    badge: "High ROAS Growth",
    iconName: "TrendingUp",
    outcomes: [
      "25% - 40% reduction in Cost Per Acquisition (CAC)",
      "Weekly creative batch testing & hook velocity",
      "First-party server-side attribution tracking",
    ],
    recommendedServices: ["Performance Media Buying", "Creative Velocity Sprints", "CRO Landing Pages"],
    bestFor: "Growth-focused companies looking to scale ad spend without eroding profit margins.",
  },
  {
    id: "brand-identity-system",
    slug: "brand-identity-system",
    title: "Modern Brand Identity & Motion Systems",
    tagline: "Unmistakable Visual Identity, Motion Language & Category Leadership",
    description: "Elevate your brand presence with a cohesive visual system, dynamic 3D identity elements, micro-interactions, and editorial tone of voice that commands instant market authority.",
    badge: "Category Authority",
    iconName: "Sparkles",
    outcomes: [
      "Complete visual identity system & logo guidelines",
      "Digital motion language & UI component library",
      "Premium market positioning trust",
    ],
    recommendedServices: ["Brand Strategy & Audit", "Visual Identity Design", "Motion Branding"],
    bestFor: "Enterprises seeking to modernize their visual identity and outshine competitors.",
  },
];
