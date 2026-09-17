# Altiora Infotech — Homepage Redesign Development Requirements

## 1. Scope

This document defines the implementation requirements for the redesigned **Altiora Infotech homepage**.

Primary objective:

> Redesign the homepage UI/UX and content presentation while preserving the existing brand color system and font.

The implementation should be production-ready, responsive, accessible, SEO-friendly, and component-driven.

---

# 2. Non-Negotiable Requirements

- [ ] Existing brand colors remain unchanged.
- [ ] Existing font family remains unchanged.
- [ ] Existing logo remains unchanged unless separately approved.
- [ ] Homepage content hierarchy is redesigned.
- [ ] Existing useful content is retained and reorganized.
- [ ] Long homepage paragraphs are shortened/editorially condensed.
- [ ] Detailed information should live on the relevant inner service page.
- [ ] Homepage must not become longer simply because content was retained.
- [ ] Add multiple sliders/carousels.
- [ ] Do not add unnecessary product-like features.
- [ ] Do not invent statistics.
- [ ] Do not invent client results.
- [ ] Do not invent testimonials.
- [ ] Do not claim unverified awards, certifications, partnerships, rankings, or industry experience.
- [ ] Existing service URLs should remain valid unless redirects are intentionally planned.
- [ ] Existing SEO-critical content should not be removed without review.

---

# 3. Current Source Content to Preserve

The current homepage establishes Altiora as a digital marketing company in Canada and describes:

- Performance marketing
- Paid advertising
- Strategic content
- SEO
- Conversion systems
- AEO
- GEO
- Websites
- Brand strategy
- Social media
- Business consulting
- Influencer/UGC marketing

Existing proof points include:

- 80+ clients served
- $5M+ revenue generated
- 12+ industries covered

These values should remain only if they are still current and approved.

---

# 4. Homepage Route

Expected route:

```text
/
```

If the existing application uses another homepage route, retain the current routing architecture.

---

# 5. Component Requirements

Create reusable components.

Recommended structure:

```text
components/
└── homepage/
    ├── HeroSlider
    ├── TrustStrip
    ├── QuickAnswer
    ├── GrowthMetrics
    ├── ServicesCarousel
    ├── ServiceCard
    ├── WhyAltiora
    ├── ServiceEcosystem
    ├── ProcessTimeline
    ├── ResultsCarousel
    ├── IndustriesCarousel
    ├── TestimonialsCarousel
    ├── AeoGeoSection
    ├── FinalCTA
    └── Footer
```

Components should not contain large amounts of hardcoded repeated JSX.

Prefer structured content objects.

Example:

```ts
const services = [
  {
    title: "Search Engine Optimization",
    description: "...",
    bullets: ["...", "...", "..."],
    href: "/services/seo",
    icon: "..."
  }
];
```

---

# 6. Content Architecture

Separate content from layout where practical.

Recommended:

```text
content/
└── homepage.ts
```

or:

```text
data/
└── homepage.ts
```

Structure:

```ts
export const homepageContent = {
  hero: [],
  proof: [],
  quickAnswer: {},
  services: [],
  process: [],
  results: [],
  industries: [],
  testimonials: [],
  aeoGeo: {},
  finalCta: {}
};
```

This makes future content updates easier without editing component structure.

---

# 7. Hero Slider Requirements

Create 3 slides.

Required fields:

```ts
type HeroSlide = {
  eyebrow: string;
  title: string;
  description: string;
  primaryCta: {
    label: string;
    href: string;
  };
  secondaryCta?: {
    label: string;
    href: string;
  };
  image?: string;
};
```

Requirements:

- Responsive.
- Keyboard accessible.
- Previous/next controls.
- Pagination indicators.
- Optional autoplay.
- Pause on hover/focus.
- Reduced-motion support.
- No layout shift.
- First slide must be available immediately for SEO/LCP.
- Do not make the hero dependent on JavaScript for essential text visibility.

Recommended implementation:

```text
Embla Carousel
+
Framer Motion only for lightweight transitions
```

---

# 8. Services Carousel Requirements

The current homepage contains 11 service categories.

Do not render all 11 as huge vertical blocks.

Render them as a carousel.

Desktop:

```text
3 cards visible
```

Tablet:

```text
2 cards visible
```

Mobile:

```text
1 card visible
```

Each card:

```text
Icon
Category
Title
Short description
3–5 benefits
CTA
```

Service links must preserve existing service routes.

---

# 9. Long Content Requirement

This is a core implementation requirement.

The homepage should **not** use large paragraphs simply because the existing source contains them.

For each section:

```text
Full source content
        ↓
Editorial summary
        ↓
Homepage component
        ↓
Detailed service page
```

Use a concise homepage description.

Recommended content constraints:

```text
Hero description:
~20–45 words

Section intro:
~20–60 words

Service card description:
~25–45 words

Card benefits:
3–5 short bullets

Process step:
~20–40 words
```

These are guidelines, not a requirement to delete important information.

---

# 10. Content Fitting Rules

When text is longer than expected:

1. Rewrite/condense the copy.
2. Reduce unnecessary wording.
3. Reduce spacing slightly.
4. Use responsive typography.
5. Use compact card variants.
6. Move detailed explanation to the inner page.

Do NOT:

```text
overflow: hidden
```

to hide meaningful content.

Do NOT:

```text
height: 500px
```

for arbitrary fixed-height content containers.

Do NOT reduce the font below an accessible reading size just to fit a card.

Use `line-clamp` only for short preview text where the full content exists elsewhere.

---

# 11. Responsive Requirements

Required breakpoints should follow the existing Tailwind/project system where available.

Suggested:

```text
sm  640px
md  768px
lg  1024px
xl  1280px
2xl 1536px
```

The design must work at:

```text
320px
375px
390px
430px
768px
1024px
1280px
1440px
1920px
```

No:

- horizontal overflow
- clipped CTA text
- broken slider controls
- overlapping headings
- oversized whitespace
- unreadable text

---

# 12. Typography Requirements

Keep the existing font.

Use responsive typography:

```css
clamp()
```

for major headings.

Do not introduce another font merely to make the redesign look more premium.

Recommended hierarchy:

```text
H1 → Hero
H2 → Section
H3 → Card
Body → Supporting copy
Eyebrow → Small uppercase label
```

Do not skip heading levels for visual styling.

---

# 13. Spacing Requirements

Create a consistent spacing scale.

Example:

```text
4
8
12
16
24
32
48
64
80
96
120
```

Do not use arbitrary spacing values throughout individual sections.

Desktop sections should generally use:

```text
80–120px vertical spacing
```

depending on section importance.

Mobile:

```text
48–72px
```

Adjust according to actual visual density.

---

# 14. Slider #1 — Hero

Required.

Content:

- Growth
- Search + AI
- Full-funnel marketing

Controls:

- Previous
- Next
- Pagination

---

# 15. Slider #2 — Services

Required.

All approved homepage services should be represented.

Do not duplicate service cards elsewhere unless the visual purpose is different.

---

# 16. Slider #3 — Results / Work

Required if approved case studies or project content is available.

Data structure:

```ts
type ResultSlide = {
  category: string;
  title: string;
  description: string;
  image: string;
  href?: string;
  metrics?: {
    label: string;
    value: string;
  }[];
};
```

Metrics must only contain verified data.

If no verified project content is available:

- Keep the component ready.
- Do not create fake case studies.
- Do not display fake metrics.

---

# 17. Slider #4 — Industries

Required.

Use only industries Altiora can legitimately support.

Data structure:

```ts
type IndustrySlide = {
  title: string;
  description: string;
  services: string[];
  href?: string;
  image?: string;
};
```

---

# 18. Slider #5 — Testimonials

Conditional.

Only implement visible testimonials when approved real testimonials exist.

Do not fabricate:

- client name
- company
- role
- quote
- rating

If testimonials are not available, remove the section from the production homepage.

---

# 19. Navigation Requirements

Header must contain only the navigation items that exist in the actual website architecture.

Recommended:

```text
Services
Solutions
Industries
About
Insights
Contact / Let's Talk
```

Do not create links to pages that do not exist.

---

# 20. CTA Requirements

Primary CTA should be consistent across the homepage.

Recommended label:

```text
Let's Get Started
```

or:

```text
Schedule a Consultation
```

Use the final approved wording consistently.

Avoid having 10 different CTA labels that all mean the same thing.

---

# 21. SEO Requirements

Maintain:

- One H1.
- Logical H2/H3 hierarchy.
- Existing important service links.
- Descriptive anchor text.
- Semantic HTML.
- Image alt text.
- Metadata.
- Open Graph metadata.
- Canonical URL.
- Structured data where already supported by the site strategy.

Do not keyword-stuff the homepage.

The homepage should naturally target the core digital marketing positioning while service pages handle specific service keywords.

---

# 22. AEO/GEO Content Requirements

Keep the existing AEO/GEO positioning.

The homepage should clearly communicate that Altiora works on:

- Answer Engine Optimization
- Generative Engine Optimization
- AI search visibility
- Featured snippets
- Structured data
- Voice search

Avoid claims that imply guaranteed inclusion in ChatGPT, Google AI Overviews, or other systems.

Use factual, defensible language.

---

# 23. Accessibility Requirements

Target:

```text
WCAG 2.1 AA
```

Requirements:

- Keyboard accessible navigation.
- Keyboard accessible carousels.
- Focus-visible states.
- Semantic buttons.
- Semantic links.
- Correct ARIA only when needed.
- Accessible labels.
- Meaningful alt text.
- Decorative images ignored by screen readers.
- Reduced-motion support.
- Good contrast using the existing brand palette.

Do not use color as the only method of communicating meaning.

---

# 24. Performance Requirements

The redesign must not significantly degrade performance.

Requirements:

- Use `next/image` where applicable.
- Proper width/height or aspect ratio.
- Responsive image sizes.
- Lazy-load below-fold images.
- Optimize hero/LCP image.
- Avoid oversized background images.
- Avoid unnecessary JavaScript.
- Avoid unnecessary animation libraries if CSS is sufficient.
- Use dynamic imports for genuinely heavy below-fold components when appropriate.

Target:

```text
LCP: good
CLS: minimal
INP: good
```

---

# 25. Animation Requirements

Motion should communicate hierarchy.

Allowed:

- Fade
- Slide
- Scale
- Small hover movement
- Number reveal
- Section reveal

Avoid:

- Continuous animation everywhere.
- Heavy parallax.
- Large spinning objects.
- Distracting particles.
- Excessive scroll-triggered animations.

Respect:

```css
@media (prefers-reduced-motion: reduce)
```

---

# 26. Component Library Recommendation

Before adding dependencies, inspect the existing package.json.

Prefer existing packages.

If a library is not already present and the project allows new dependencies:

### Recommended

```text
Embla Carousel
Framer Motion
Lucide React
Radix UI / shadcn/ui
```

Use one library for each responsibility.

Do not install several carousel libraries.

Do not install several icon libraries.

---

# 27. Suggested Technical Stack

Assuming the existing application is Next.js/React:

```text
Next.js
React
TypeScript
Tailwind CSS
Existing design tokens
Embla Carousel
Framer Motion
Lucide React
```

Use the project's existing architecture if it differs.

Do not migrate frameworks as part of this homepage redesign unless separately requested.

---

# 28. Data / Content Model

Suggested:

```ts
export const homepageServices = [
  {
    title: "Paid Advertisement Services",
    slug: "paid-advertisement-services",
    description: "...",
    benefits: [],
    href: "/services/paid-advertisement-services"
  }
];
```

Do the same for:

```text
heroSlides
services
metrics
processSteps
results
industries
testimonials
```

---

# 29. Image Requirements

Images should support the content rather than simply fill space.

Use:

- Real project images where available.
- Approved company photography.
- High-quality service illustrations.
- Consistent image treatment.

Avoid:

- Generic unrelated stock images.
- Repeated identical stock imagery.
- Huge image files.
- Decorative images that distract from the CTA.

Every meaningful image needs meaningful alt text.

---

# 30. Design QA Checklist

## Desktop

- [ ] 1280px layout checked.
- [ ] 1440px layout checked.
- [ ] 1920px layout checked.
- [ ] No excessive max-width whitespace.
- [ ] Hero looks balanced.
- [ ] Cards have consistent height.
- [ ] Slider controls work.
- [ ] CTA hierarchy is clear.

## Tablet

- [ ] 768px checked.
- [ ] 1024px checked.
- [ ] Navigation adapts.
- [ ] Carousel changes visible slide count.
- [ ] Typography remains readable.

## Mobile

- [ ] 320px checked.
- [ ] 375px checked.
- [ ] 390px checked.
- [ ] 430px checked.
- [ ] No horizontal scrolling.
- [ ] CTA buttons fit.
- [ ] Hero does not become excessively tall.
- [ ] Slider is easy to operate.
- [ ] Text remains readable.

---

# 31. SEO QA Checklist

- [ ] One H1.
- [ ] Logical H2/H3 structure.
- [ ] Existing important links preserved.
- [ ] No broken internal links.
- [ ] No accidental localhost URLs.
- [ ] Canonical points to production URL.
- [ ] Metadata reviewed.
- [ ] OG metadata reviewed.
- [ ] Images have appropriate alt text.
- [ ] No duplicate homepage copy.
- [ ] No keyword stuffing.

Important implementation note:

The source content currently contains `localhost:3001` links. These must never be deployed to production.

Production links must use the real Altiora domain.

---

# 32. Content QA Checklist

- [ ] Existing service names reviewed.
- [ ] Service descriptions edited for homepage length.
- [ ] Statistics verified.
- [ ] Case-study numbers verified.
- [ ] Testimonials verified.
- [ ] Industry claims verified.
- [ ] CTA destinations verified.
- [ ] Contact information verified.
- [ ] No placeholder text in production.
- [ ] No fake reviews.
- [ ] No fake client logos.
- [ ] No fake awards.

---

# 33. Final Homepage Acceptance Criteria

The redesign is complete only when:

1. The existing brand colors are unchanged.
2. The existing font is unchanged.
3. The homepage has a clear visual hierarchy.
4. The hero communicates the business within seconds.
5. The service section is significantly more compact.
6. Long content does not create oversized cards.
7. At least three polished sliders are implemented.
8. The sliders are responsive and accessible.
9. Existing service URLs work.
10. No localhost URLs remain.
11. No fake claims have been introduced.
12. The homepage works from 320px through large desktop.
13. Performance remains strong.
14. SEO structure is preserved/improved.
15. The page feels like a global digital growth agency rather than a basic local agency template.

---

# 34. Recommended Implementation Order

```text
PHASE 1
Audit existing components + tokens
↓
PHASE 2
Build homepage content model
↓
PHASE 3
Build Header + Hero Slider
↓
PHASE 4
Build Proof + Quick Answer
↓
PHASE 5
Build Services Carousel
↓
PHASE 6
Build Why Altiora + Ecosystem
↓
PHASE 7
Build Process Timeline
↓
PHASE 8
Build Results + Industries sliders
↓
PHASE 9
Build AEO/GEO section
↓
PHASE 10
Build Final CTA + Footer
↓
PHASE 11
Responsive QA
↓
PHASE 12
SEO + accessibility + performance QA
```

---

# 35. Reference Direction

The redesign should take **design-system and information-architecture inspiration**, not copy, from established agencies.

Useful references reviewed during this specification:

- Major Tom — integrated strategy, marketing, development, creative, and measurable-results positioning.
- WebFX — strong revenue-oriented positioning, proof metrics, service architecture, and conversion CTAs.
- NP Digital — global positioning, search/AI visibility, integrated solutions, and clear service grouping.

These references should be used to understand patterns such as:

- Outcome-focused messaging.
- Service ecosystems rather than isolated service lists.
- Strong proof sections.
- Clear conversion paths.
- Global positioning.
- Search + AI visibility positioning.

Do not copy their branding, text, layouts, imagery, or proprietary claims.

---

# 36. Definition of Done

The homepage should look substantially different from the current page while still clearly belonging to Altiora.

The final result should communicate:

```text
ALTiora
    ↓
Strategy
    ↓
Digital Execution
    ↓
Search + AI Visibility
    ↓
Conversion
    ↓
Measurable Growth
```

The redesign is successful when a visitor can understand the company, services, differentiators, process, proof, and next action without reading large blocks of text.


# 37. Premium Color & Visual Requirements

The redesign must use a premium visual direction suitable for a **digital marketing and IT company**.

Requested palette:

```text
Premium Golden
Premium Blue
Black
White
```

## Color implementation

Before changing tokens:

1. Inspect the existing brand color variables.
2. Confirm whether the existing brand palette already contains the requested colors.
3. Preserve exact approved brand HEX values where they already exist.
4. If the current brand palette does not contain the requested golden/blue/black/white combination, define approved tokens before implementation.
5. Do not introduce unrelated accent colors.

Use the palette approximately as:

```text
Golden → primary accent / CTA / highlights
Blue   → technology / trust / secondary accent
Black  → premium dark backgrounds / contrast
White  → clean content backgrounds
```

The final result must feel:

```text
Premium
Corporate
Modern
Technology-focused
Global
Trustworthy
```

It must not resemble a generic SaaS, crypto, gaming, or template website.

---

# 38. Premium UI/UX Requirements

Every major component must have intentional visual design.

Avoid:

- Generic Bootstrap-looking cards.
- Repeated identical sections.
- Excessive rounded cards.
- Huge text blocks.
- Random gradients.
- Cartoon-style icons.
- Excessive glassmorphism.
- Excessive animations.

Prefer:

- Editorial layouts.
- Strong typography hierarchy.
- Fine borders.
- Controlled shadows.
- Dark/light section contrast.
- Premium golden accents.
- Blue technology accents.
- High-quality imagery.
- Deliberate whitespace.
- Subtle interaction states.

---

# 39. Online Temporary Images

For the first implementation, **online images are explicitly allowed**.

The purpose is to quickly establish the visual design before final company imagery is available.

Requirements:

- Use professional, relevant images.
- Prefer reliable image/CDN sources.
- Do not use low-quality random stock imagery.
- Do not permanently hotlink unstable assets in production.
- Keep image URLs/data in a centralized content/config file.
- Make every image replaceable without changing the component structure.
- Respect image licensing/usage rights.

Recommended temporary subjects:

```text
Digital marketing analytics
Technology
AI/search
Business strategy
Global teams
Data visualization
Modern enterprise environments
```

Avoid generic laptop-on-desk stock imagery unless it strongly supports the composition.

---

# 40. Slider Quality Requirements

Sliders are a major visual component and must feel premium.

Required sliders:

1. Hero Slider
2. Services Slider
3. Results/Work Slider
4. Industries Slider
5. Testimonials Slider — only when real testimonials exist

Every slider must have:

- Responsive behavior.
- Touch/swipe support.
- Keyboard support.
- Previous/next controls.
- Pagination/progress indication.
- Accessible labels.
- Reduced-motion behavior.
- No layout shift.
- Smooth but restrained transitions.

Do not use browser-default-looking carousel controls.

---

# 41. Hero Slider Visual Requirements

Hero slider should contain 3 carefully designed slides.

Each slide should combine:

```text
Strong headline
Short supporting copy
Primary CTA
Optional secondary CTA
Premium image/visual
Slide number
Progress indicator
```

The visual should use the approved:

```text
Golden + Blue + Black + White
```

system.

Use dark image overlays when needed for readability.

---

# 42. Services Slider Visual Requirements

Instead of rendering all services as large vertical sections:

```text
Desktop → 3 cards
Tablet  → 2 cards
Mobile  → 1 card
```

Show part of the next card where appropriate to communicate horizontal interaction.

Cards must have:

```text
Icon
Service category
Title
Short description
3–5 benefits
CTA
```

Use the existing service content as the source.

---

# 43. Results / Work Slider

If verified case studies/projects exist, create a premium case-study slider.

Each card can contain:

```text
Project image
Industry
Project title
Challenge/solution summary
Verified result(s)
View Case Study
```

Never invent:

- Results
- Revenue
- Percentages
- Client names
- Case studies

If verified case-study data is unavailable, do not create fake examples.

---

# 44. Industries Slider

Create a premium industry carousel.

Use only industries that Altiora can substantiate.

Recommended presentation:

```text
Image
+
Dark overlay
+
Industry name
+
Short value proposition
+
Services
+
Explore →
```

Use golden/blue hover accents.

---

# 45. Image Replacement Architecture

Do not embed temporary image URLs directly inside JSX.

Use a centralized model:

```ts
export const homepageImages = {
  hero: {
    growth: "...",
    aiSearch: "...",
    fullFunnel: "..."
  },
  services: {},
  results: {},
  industries: {}
};
```

This allows future replacement with:

```text
/Images
/CDN
/CMS
Cloud storage
```

without redesigning components.

---

# 46. Premium Visual QA

Before marking the homepage complete, check:

- [ ] Golden/blue/black/white palette is consistent.
- [ ] No unrelated accent colors appear.
- [ ] Hero looks premium at 1440px.
- [ ] Hero looks premium at 1920px.
- [ ] Mobile hero remains compact.
- [ ] Sliders do not look like default library components.
- [ ] Images are high quality.
- [ ] Temporary online images are centralized and replaceable.
- [ ] Cards do not become excessively tall.
- [ ] Long content has been editorially condensed.
- [ ] Dark/light sections have a deliberate rhythm.
- [ ] CTAs are visually clear.
- [ ] Hover states feel polished.
- [ ] Animations are subtle.
- [ ] Accessibility remains intact.
- [ ] No horizontal overflow.
- [ ] No layout shift from images.


# 47. Final White Premium Design System

This is the final visual direction.

```text
PAGE BACKGROUND = WHITE
TITLES = BLACK
PRIMARY BUTTONS = BLUE
SMALL TEXT / EYEBROWS / ICONS / MICRO ACCENTS = PREMIUM GOLDEN
```

Do not use large colored backgrounds as the default.

The visual system should feel premium, global, corporate and technology-focused.

---

# 48. Advanced Motion Requirements

Every major section should have a meaningful animation or interaction.

Required patterns where appropriate:

- Scroll reveal.
- Staggered content reveal.
- Image masking.
- Hover transformation.
- Number count-up.
- Timeline progress.
- Carousel transitions.
- Button micro-interactions.
- Interactive image depth.
- Subtle parallax.

Use:

```text
Framer Motion
GSAP
Intersection Observer
```

based on existing project dependencies.

Do not use multiple libraries for the same animation job.

---

# 49. Three.js / WebGL Requirement

Three.js/WebGL may be used for premium 3D visuals.

Priority:

```text
Hero → recommended
Service ecosystem → optional
Final CTA → optional
```

Do not use WebGL everywhere.

Requirements:

- Lazy-load heavy 3D code.
- Static fallback.
- Mobile performance protection.
- Reduced-motion support.
- No content dependency on WebGL.
- Avoid excessive GPU usage.
- Avoid blocking LCP.
- Keep 3D visual secondary to the business message.

---

# 50. Slider Implementation Requirement

Do not implement basic/default sliders.

The sliders must use:

- Partial next-slide visibility.
- Progress indicators.
- Slide numbers.
- Drag/swipe.
- Keyboard controls.
- Smooth transitions.
- Active-slide scaling/depth.
- Image reveal/masking.
- Responsive behavior.
- Accessible labels.

Preferred implementation:

```text
Embla Carousel
+
Framer Motion / GSAP
```

Only use existing project dependencies if they already provide equivalent functionality.

---

# 51. Section-by-Section Build Requirements

## Section 01 — Hero

White background.

Black headline.

Golden eyebrow.

Blue CTA.

Premium interactive image/3D/WebGL visual.

Modern cinematic slider.

---

## Section 02 — Trust

Black metrics.

Golden labels.

Animated count-up.

Minimal white layout.

---

## Section 03 — Quick Answer

Editorial two-column composition.

Black title.

Golden micro-label.

Short content.

Scroll reveal.

---

## Section 04 — Services

Interactive modern carousel.

Do not use basic card slider.

Three desktop cards / two tablet / one mobile.

Partial next-card visibility.

Hover depth.

Golden icons.

Blue CTA.

---

## Section 05 — Why Altiora

Asymmetric editorial composition.

Scroll-driven Strategy → Execution → Optimization.

Black titles.

Golden numbers.

Blue active states.

---

## Section 06 — Service Ecosystem

Interactive network visualization.

Three.js/WebGL optional.

Golden/blue connection lines.

Black labels.

---

## Section 07 — Process

Scroll-progress timeline.

Animated line.

Golden step numbers.

Blue active step.

---

## Section 08 — Results

Cinematic case-study slider.

Temporary online images allowed.

Verified results only.

Image masking and depth transition.

---

## Section 09 — Industries

Image-led carousel.

Black titles.

Golden labels.

Blue actions.

Hover image zoom.

---

## Section 10 — Testimonials

Editorial quote slider.

Only real approved testimonials.

No fake reviews.

---

## Section 11 — AEO/GEO

AI-search visualization.

Animated SVG/WebGL allowed.

Black typography.

Golden labels.

Blue interaction paths.

---

## Section 12 — Final CTA

White background.

Large black headline.

Blue CTA.

Golden technical details.

Optional lightweight WebGL visual.

---

# 52. Content-Length Rules

For every section:

```text
One primary message.
Short homepage copy.
Detailed explanation on inner page.
```

If source content is large:

1. Condense it.
2. Preserve meaning.
3. Keep the strongest information.
4. Move supporting detail to the relevant page.
5. Use expandable/reveal interaction only when it improves UX.

Do not solve content problems by:

- shrinking fonts excessively;
- creating extremely tall sections;
- clipping text;
- hiding required information.

---

# 53. Performance Rules for Premium Motion

Premium animation must not sacrifice usability.

Required:

- No layout shift.
- Hero/LCP optimized.
- WebGL lazy loaded.
- Images optimized.
- Below-fold media lazy loaded.
- Reduced-motion mode.
- Mobile GPU protection.
- No unnecessary animation libraries.
- No blocking 3D initialization.

---

# 54. Acceptance Criteria — Final Visual Quality

The homepage is not complete unless:

- [ ] White is the dominant background.
- [ ] Titles are black.
- [ ] Primary buttons are blue.
- [ ] Small text/icons/micro accents are golden.
- [ ] Hero is premium and interactive.
- [ ] No basic-looking slider remains.
- [ ] Services slider feels editorial/interactive.
- [ ] Results slider feels cinematic.
- [ ] Scroll animations are polished.
- [ ] Hover states exist for meaningful interactive elements.
- [ ] At least one selective WebGL/3D experience is implemented where performance permits.
- [ ] Mobile remains fast and usable.
- [ ] Every section has deliberate visual composition.
- [ ] Long content is condensed appropriately.
- [ ] Temporary online images are replaceable.
- [ ] No fake business claims are introduced.
- [ ] The design is original rather than copied from Dribbble or another site.
