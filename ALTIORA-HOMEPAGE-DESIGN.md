# Altiora Infotech — Homepage Redesign Design Specification

## 1. Purpose

Redesign the **homepage only** of Altiora Infotech into a more premium, global, conversion-focused digital marketing agency website.

The redesign must:

- Keep the **existing brand colors and existing font family exactly as they are**.
- Keep the current brand identity recognizable.
- Completely improve the visual hierarchy, spacing, component design, responsive behavior, and content presentation.
- Make the homepage feel suitable for Canadian, North American, and global clients.
- Reuse the existing service/content themes where they are still relevant.
- Avoid adding unnecessary product-like features.
- Add several polished **content sliders/carousels** as requested.
- Make long content visually compact without making the page feel crowded.
- Be component-driven so the same components can be reused on inner pages.

---

## 2. Existing Homepage Content Inventory

The current homepage contains:

1. Hero / digital marketing company positioning
2. Quick Answer / SEO-AEO style answer block
3. Overview
4. Client/revenue/industry statistics
5. Digital Marketing Services
6. Paid Advertisement Services
7. SEO
8. Mobile App Development
9. Website Development
10. Social Media Management
11. Graphic Design
12. Branding
13. Video Production
14. Business Consulting
15. Influencer & UGC Marketing
16. AEO & GEO
17. Business partnership / value proposition section
18. Three-step value message:
   - You Focus on Business
   - We Drive the Results
   - Together We Grow
19. CTA
20. Four-step delivery process
21. Background/image section
22. Final CTA

The source content also contains existing proof points such as **80+ clients served, $5M+ revenue generated, and 12+ industries covered**. These should be retained unless the business owner provides updated figures.

---

# 3. New Homepage Information Architecture

The new homepage should follow this order:

```text
Header
↓
Hero Slider
↓
Trust / Proof Strip
↓
Quick Answer / What We Do
↓
Growth Metrics
↓
Core Services Slider
↓
Why Altiora / Positioning
↓
Service Ecosystem
↓
How We Work
↓
Results / Work Slider
↓
Industries Slider
↓
Client/Trust/Testimonial Slider
↓
AI Search / AEO-GEO Section
↓
Final CTA
↓
Footer
```

The page should feel like a **guided sales story**, not a long list of services.

---

# 4. Header Design

## Desktop

Create a clean, premium navigation bar:

```text
[ALTiora Logo]    Services    Solutions    Industries    About    Insights
                                                        [Let's Talk]
```

Requirements:

- Existing logo unchanged.
- Existing brand colors unchanged.
- Existing font unchanged.
- More horizontal breathing room.
- Navigation typography should be visually lighter than the primary CTA.
- CTA should be visually dominant without introducing a new brand color.
- Header can use a subtle border/shadow when the page is scrolled.
- Avoid oversized navigation height.

## Mobile

```text
[Logo]                         [Menu]
```

Use a clean mobile menu component.

Recommended component source:

- Radix UI / shadcn-style navigation primitives
- Existing project navigation can also be reused if already implemented.

---

# 5. Hero Slider

## Goal

The hero should immediately explain:

**Who Altiora is + what Altiora does + why the visitor should care + what to do next.**

Do not put a large paragraph block above the fold.

## Slider

Create a **3-slide hero carousel**.

### Slide 1 — Growth

Eyebrow:

`DIGITAL GROWTH PARTNER`

Headline:

`Digital Marketing Engineered for Measurable Growth`

Supporting copy:

Use the existing core positioning about scalable growth engines, performance marketing, SEO, paid advertising, content, and conversion systems.

CTA:

`Let's Get Started`

Secondary CTA:

`Explore Services`

Visual:

Premium abstract growth / marketing dashboard composition.

---

### Slide 2 — Search + AI

Eyebrow:

`SEARCH + AI VISIBILITY`

Headline:

`Be Found Where Your Customers Search — From Google to AI`

Supporting copy:

Use the existing AEO/GEO positioning around Google, ChatGPT, Perplexity, Google AI Overviews, featured snippets, and voice/search discovery.

CTA:

`Explore AEO & GEO`

Visual:

Search results + AI answer interface style composition.

---

### Slide 3 — Full-Funnel

Eyebrow:

`STRATEGY → EXECUTION → GROWTH`

Headline:

`One Partner for Your Digital Growth Ecosystem`

Supporting copy:

Communicate the combination of strategy, paid media, SEO, websites, social, creative, and conversion-focused execution.

CTA:

`Talk to Our Team`

Visual:

Connected funnel / ecosystem graphic.

---

## Hero Layout

Desktop:

```text
┌──────────────────────────────────────────────────────────┐
│ Eyebrow                                                  │
│ Large headline                         Visual / Motion   │
│ Supporting copy                         Composition       │
│                                                          │
│ [Primary CTA] [Secondary CTA]                            │
│                                                          │
│                     • 01 • 02 • 03                       │
└──────────────────────────────────────────────────────────┘
```

Mobile:

```text
Eyebrow
Headline
Short copy
CTA
Visual
Slider controls
```

Rules:

- Hero height should be visually substantial but not consume the entire first screen.
- Do not use a huge fixed height.
- Use responsive `clamp()` typography.
- Hero copy max-width: approximately 620–700px.
- Do not let long headlines create awkward 5–6 line blocks.
- Slider transition should be subtle.
- Auto-play can be used, but must pause on hover/focus and respect reduced-motion preferences.

Recommended library:

- **Embla Carousel** for lightweight carousel behavior.
- **Framer Motion** for entrance/exit animation.

---

# 6. Trust / Proof Strip

Immediately after the hero.

Example:

```text
80+ Clients        $5M+ Revenue Generated        12+ Industries
```

Design:

- Compact horizontal strip.
- Large number.
- Small descriptive label.
- Minimal visual noise.
- On mobile, convert into a 2-column/scrolling proof strip.

Do not create fake awards, ratings, logos, or client names.

---

# 7. Quick Answer Section

The existing "Quick Answer" content should be redesigned rather than removed.

## Layout

Left:

```text
Quick Answer
What is digital marketing
and how does Altiora
approach it?
```

Right:

Short answer paragraph.

Below:

8 compact service chips:

- SEO
- Google Ads
- Paid Social
- Social Media
- Websites
- Branding
- Growth Strategy
- AEO & GEO

This section should feel like an authoritative answer block rather than an article.

## SEO requirement

Keep the semantic heading structure.

Use one clear H2 and supporting H3/list markup.

---

# 8. Growth Metrics Section

Use the existing proof points:

```text
80+
Clients Served

$5M+
Revenue Generated

12+
Industries Covered
```

Add a visual progression line or subtle connecting element.

Do not invent additional numbers.

---

# 9. Core Services Slider

This is one of the primary new sliders.

Instead of displaying 10 large service cards vertically, create a **horizontal service carousel**.

## Desktop

Show approximately 3 cards at a time.

## Tablet

Show 2 cards.

## Mobile

Show 1 card.

## Card structure

```text
[Icon]

SERVICE CATEGORY

Service Name

Short 2–3 line description

✓ Benefit
✓ Benefit
✓ Benefit

Explore →
```

## Services

Use the existing services:

1. Paid Advertisement Services
2. SEO
3. Mobile App Development
4. Website Development
5. Social Media Management
6. Graphic Design
7. Branding
8. Video Production
9. Business Consulting
10. Influencer & UGC Marketing
11. AEO & GEO

The existing descriptions and bullets should be reused where appropriate.

Do not create unnecessary new services.

---

# 10. Service Card Content Density Rules

This is critical.

The design must handle long content without making cards excessively tall.

## Rules

### Short content

Normal card layout.

### Medium content

Reduce vertical spacing slightly.

### Long content

Use:

- Smaller body font within the approved typography scale.
- Reduced gap between heading and body.
- Tighter list spacing.
- Maximum readable content width.
- `line-clamp` only for **preview text**, never to silently remove required content.
- Keep full content available on the linked service page.

### Important

Never solve long content by:

- Shrinking text until it becomes difficult to read.
- Making the entire section extremely tall.
- Overflowing the card.
- Cutting off meaningful content without a clear continuation.
- Creating inconsistent card heights.

Preferred approach:

```text
Service Card
→ concise homepage summary
→ full explanation on service page
```

Homepage content should be editorially shortened rather than squeezed.

---

# 11. Why Altiora Section

Replace the current generic "You Focus / We Drive / Together We Grow" section with a more premium three-part layout.

## Heading

`A Digital Growth Partner Built Around Your Business Goals`

Three panels:

### 01 — Strategy

`Start with the right direction.`

Market research, audience understanding, competitor analysis, channel strategy.

### 02 — Execution

`Turn strategy into high-performance digital assets.`

SEO, paid media, websites, social, content, creative, and conversion systems.

### 03 — Optimization

`Continuously improve what drives growth.`

Measure performance, identify opportunities, optimize campaigns and scale what works.

Each panel should have:

- Large number
- Small icon
- Short headline
- 2–3 sentence explanation

---

# 12. Service Ecosystem Section

Create a visual relationship between the services.

Suggested structure:

```text
                    DIGITAL STRATEGY
                          │
       ┌──────────────────┼──────────────────┐
       ↓                  ↓                  ↓
     SEO              PAID MEDIA          CONTENT
       ↓                  ↓                  ↓
       └────────────── WEBSITE ──────────────┘
                          ↓
                    CONVERSIONS
                          ↓
                       GROWTH
```

Do not build this as a complex interactive feature.

It can be a simple visual composition using:

- CSS
- SVG
- existing icon library
- lightweight motion

---

# 13. How We Work

Use the existing four-step process:

1. Strategy & Market Research
2. Build & Optimize
3. Traffic & Lead Generation
4. Measure, Improve & Scale

## Design

Use a horizontal timeline on desktop.

Use a vertical timeline on mobile.

Example:

```text
01 ───── 02 ───── 03 ───── 04

Research  Build    Traffic  Scale
```

Each step should have:

- Number
- Short heading
- 2–3 line description
- Icon

Avoid large paragraphs.

---

# 14. Results / Work Slider

Add a new content slider for proof and portfolio storytelling.

This is a **content presentation component**, not a new product feature.

## Slide structure

```text
[Large Project Image]

INDUSTRY / SERVICE

Project / Client Name

Short challenge → approach → outcome summary

[View Case Study →]
```

Important:

- Only publish real clients/projects.
- Do not invent results.
- If case-study data is unavailable, use approved portfolio/project descriptions instead.
- Keep numeric performance claims only when verified.

Desktop: image + content side-by-side.

Mobile: stacked.

---

# 15. Industries Slider

Create a second new slider.

Suggested categories based on the existing positioning:

- Healthcare
- E-commerce
- Professional Services
- Local Businesses
- Technology
- Education
- Real Estate
- Other approved industries

Do not claim experience in an industry unless Altiora can verify it.

Card structure:

```text
INDUSTRY

How we help [industry]

SEO
Paid Media
Web
Content

Explore →
```

This slider makes the site feel broader and more global without adding unnecessary homepage length.

---

# 16. Client / Testimonial Slider

Add a testimonial slider only when real testimonials are available.

Structure:

```text
“Short verified testimonial.”

Client Name
Role / Company

[01 / 05]
```

Optional:

- Client logo
- Industry
- Service delivered

Never create placeholder testimonials that look real.

If testimonials are not available, omit this section until approved content exists.

---

# 17. AEO / GEO Section

Make AEO/GEO one of the major differentiators.

## Layout

Left:

```text
SEARCH IS CHANGING

Be visible beyond traditional search.
```

Right:

```text
Google
ChatGPT
Perplexity
AI Overviews
Voice Search
Featured Snippets
```

Use the existing AEO/GEO service content.

Add a subtle animated search/AI visual.

Avoid exaggerated claims such as guaranteed citations or guaranteed rankings.

---

# 18. Final CTA

Use a strong but simple closing section.

Heading:

`Ready to Build Your Digital Growth Engine?`

Supporting copy:

Use the existing final CTA positioning, shortened for clarity.

Primary CTA:

`Schedule a Consultation`

Secondary:

`Explore Services`

The CTA should feel like the natural conclusion of the page.

---

# 19. Footer

Recommended structure:

```text
Logo + short positioning

Services
SEO
Paid Media
Web Development
Social Media
Branding
AEO & GEO

Company
About
Contact
Industries
Insights

Locations
Canada
United States
Other approved locations

Contact
Email
Phone
Address

Social
LinkedIn
Instagram
Facebook
YouTube

Legal
Privacy Policy
Terms
Cookie Policy
```

Only include actual locations/contact details that are approved and available.

---

# 20. Responsive Design

Breakpoints:

```text
Mobile:  < 640px
Tablet:  640px – 1023px
Desktop: 1024px+
Large:   1440px+
```

Do not design separate desktop and mobile websites.

Use one responsive component system.

## Typography

Keep the existing font.

Use responsive sizing with `clamp()`.

Example:

```css
font-size: clamp(2.5rem, 5vw, 5.5rem);
```

Exact values should be tuned against the existing brand typography.

## Container

Use a consistent global container:

```css
max-width: 1280px;
margin-inline: auto;
padding-inline: clamp(20px, 4vw, 64px);
```

Adjust to the existing project design tokens.

---

# 21. Content-Length Handling

Create a reusable content-density strategy.

## Rules

```text
H1:
Maximum 2–3 lines on desktop.

H2:
Maximum 2 lines where practical.

Card title:
Maximum 2 lines.

Card preview:
2–4 lines.

Body:
Prefer 45–75 characters per line.

Section:
Avoid unnecessary vertical whitespace.

Lists:
Maximum 3–5 visible homepage bullets.

Long copy:
Move detailed content to the inner page.
```

Do not alter the meaning of approved business content just to make it fit.

---

# 22. Animation Direction

Use restrained motion.

Recommended:

- Hero fade/slide
- Card entrance
- Number reveal
- Timeline reveal
- Carousel transition
- Image scale on hover
- Button micro-interaction

Avoid:

- Excessive parallax
- Large continuous motion
- Distracting particle effects
- Heavy 3D animations
- Animation on every element

Respect:

```css
prefers-reduced-motion
```

---

# 23. Component Architecture

Suggested React/Next.js component tree:

```text
app/
└── page.tsx

components/
└── homepage/
    ├── HomeHeader.tsx
    ├── HeroSlider.tsx
    ├── TrustStrip.tsx
    ├── QuickAnswer.tsx
    ├── GrowthMetrics.tsx
    ├── ServicesCarousel.tsx
    ├── ServiceCard.tsx
    ├── WhyAltiora.tsx
    ├── ServiceEcosystem.tsx
    ├── ProcessTimeline.tsx
    ├── ResultsCarousel.tsx
    ├── IndustriesCarousel.tsx
    ├── TestimonialsCarousel.tsx
    ├── AeoGeoSection.tsx
    ├── FinalCTA.tsx
    └── HomeFooter.tsx
```

---

# 24. Reusable UI Libraries

Use existing project dependencies first.

If additional libraries are allowed:

### shadcn/ui

Use for:

- Buttons
- Cards
- Dialogs
- Navigation primitives
- Tabs where necessary

### Radix UI

Use for accessible primitives.

### Embla Carousel

Recommended for:

- Hero slider
- Services slider
- Results slider
- Industries slider
- Testimonials slider

### Framer Motion

Use for:

- Section reveals
- Hero transitions
- Micro-interactions

### Lucide React

Use for consistent interface icons if the project does not already have a preferred icon system.

Do not install multiple libraries that solve the same problem.

---

# 25. Visual Design Rules

Do:

- Strong whitespace hierarchy.
- Large editorial headlines.
- Shorter homepage copy.
- Strong contrast using existing colors.
- Consistent border radius.
- Consistent icon sizing.
- Consistent card padding.
- High-quality photography/illustration.
- Strong section transitions.
- Clear CTA hierarchy.

Do not:

- Change the brand colors.
- Change the brand font.
- Use random gradients unrelated to the existing brand.
- Use generic template-looking cards everywhere.
- Create huge walls of text.
- Use 10 identical cards in a vertical list.
- Overuse rounded pills.
- Add unnecessary UI controls.

---

# 26. Accessibility

Every homepage component must support:

- Semantic HTML.
- Correct heading hierarchy.
- Keyboard navigation.
- Visible focus states.
- Accessible carousel controls.
- Accessible button labels.
- Alt text for meaningful images.
- Decorative images marked appropriately.
- Sufficient contrast using the existing palette.
- Reduced-motion support.

Carousel requirements:

- Previous/next controls.
- Slide indicators.
- Keyboard support.
- Screen-reader status.
- Pause behavior where auto-play is used.

---

# 27. Performance

The redesigned homepage should not become slower because of the new visuals.

Requirements:

- Next.js image optimization.
- Responsive image sizes.
- Lazy-load below-the-fold images.
- Do not lazy-load the main hero image if it is the LCP element.
- Avoid huge video backgrounds.
- Avoid unnecessary third-party scripts.
- Avoid loading entire icon libraries when only a few icons are used.
- Keep carousel dependencies lightweight.
- Avoid animation that causes layout shifts.

Target:

- Excellent Core Web Vitals.
- Minimal layout shift.
- Fast mobile rendering.
- No unnecessary JavaScript for static content.

---

# 28. Homepage Content Strategy

The homepage should answer these questions in order:

```text
1. Who are you?
2. What do you do?
3. Who do you help?
4. Why should I trust you?
5. What services can you provide?
6. How do you work?
7. What evidence do you have?
8. Can you help my industry?
9. What is different about you?
10. What should I do next?
```

---

# 29. Final Visual Flow

```text
HEADER
   ↓
HERO SLIDER
   ↓
TRUST / METRICS
   ↓
QUICK ANSWER
   ↓
SERVICES CAROUSEL
   ↓
WHY ALTIORA
   ↓
SERVICE ECOSYSTEM
   ↓
PROCESS
   ↓
RESULTS SLIDER
   ↓
INDUSTRIES SLIDER
   ↓
TESTIMONIALS SLIDER
   ↓
AEO / GEO
   ↓
FINAL CTA
   ↓
FOOTER
```

The final homepage should feel like a **global digital growth agency**, not a traditional local-service brochure.


# 37. Premium Visual Direction — Golden + Blue + Black + White

This is a **premium digital marketing + IT company** visual direction.

The approved visual palette for the redesign is:

```text
Premium Golden — primary accent / highlights / key CTAs
Premium Blue   — technology / trust / interactive accents
Black          — premium dark surfaces / strong typography / contrast
White          — primary light surfaces / readability
```

## Important Color Rule

Do not introduce unrelated accent colors.

The existing brand color system should be audited first. If the current approved brand palette already contains these colors, retain the exact existing tokens/HEX values.

If the current palette does not contain the requested premium golden + blue + black + white system, define the final HEX values only after checking the existing brand guidelines. Do not randomly replace the brand palette with arbitrary colors.

Recommended visual relationship:

```text
BLACK / DARK SURFACE
        ↓
PREMIUM GOLDEN ACCENT
        ↓
BLUE TECHNOLOGY ACCENT
        ↓
WHITE CONTENT SURFACE
```

The result should feel:

- Premium
- Corporate
- Modern
- Technology-focused
- Trustworthy
- Global
- High-end
- Conversion-focused

It must **not** look like a generic SaaS template or cryptocurrency website.

---

# 38. Premium UI Component Language

Every major component should receive deliberate visual treatment.

## Buttons

Primary:

```text
Premium Golden background
Dark/black text
Subtle hover elevation
```

Secondary:

```text
Transparent / white / dark surface
Border using approved palette
```

Use subtle arrow/motion interactions.

Avoid oversized pill buttons.

## Cards

Use:

- Dark and white card variants.
- Fine borders.
- Controlled radius.
- Premium shadows only where useful.
- Small golden/blue accent details.
- Strong typography hierarchy.

Avoid putting every section into a floating rounded rectangle.

## Icons

Use consistent professional icons.

Preferred:

```text
Lucide / existing icon system
```

Use outline or refined duotone treatment.

Avoid cartoonish icons.

---

# 39. Premium Hero Visual

The hero should be the strongest visual section.

Use a premium online image temporarily for development.

Preferred image subjects:

- Digital marketing analytics
- Technology / digital strategy
- Global business teams
- AI/search interfaces
- Modern business data visualization
- Abstract technology environments

Image treatment:

```text
Dark overlay
+
Blue ambient glow
+
Subtle golden highlight
```

The image must remain professional and relevant.

Do not use:

- Random office stock photos
- Low-quality generic marketing imagery
- Overly artificial AI faces
- Cryptocurrency visuals
- Generic laptop-on-desk imagery unless composition is exceptional

Temporary online images are acceptable during development and can later be replaced with approved company photography/assets.

---

# 40. Premium Slider Direction

The sliders must look like designed experiences, not default carousel widgets.

## Hero Slider

Use:

- Full-bleed visual composition.
- Content overlay or split layout.
- Large typography.
- Progress indicator.
- Elegant transition.
- Arrow controls.
- Slide number.

Example:

```text
01 / 03

Digital Growth
Engineered for
Measurable Growth

[Let's Get Started]

                         [IMAGE]
                         ───────
                         GOLD / BLUE DETAIL
```

## Services Slider

Use a horizontal track with partially visible next card.

This creates a visual indication that more content exists.

Example:

```text
┌──────────────┐ ┌──────────────┐ ┌──────────────┐
│ SEO          │ │ PAID MEDIA   │ │ WEBSITE      │
│              │ │              │ │              │
│ description  │ │ description  │ │ description  │
│              │ │              │ │              │
│ Explore →    │ │ Explore →    │ │ Explore →    │
└──────────────┘ └──────────────┘ └──────────────┘
                         ────────────────→
```

## Results Slider

Use large visual case-study cards.

```text
┌──────────────────────────────────────────────┐
│                                              │
│                PROJECT IMAGE                 │
│                                              │
├──────────────────────┬───────────────────────┤
│ Industry             │ Verified result       │
│ Project title        │ / approved metric     │
│ Short summary        │                       │
│ View Case Study →    │                       │
└──────────────────────┴───────────────────────┘
```

## Industries Slider

Use image-backed cards with dark overlays.

Cards should have a subtle golden or blue interaction state.

---

# 41. Premium Section Transitions

Do not make every section visually identical.

Alternate between:

```text
White
↓
Black
↓
White
↓
Dark/Blue
↓
White
↓
Black
```

while respecting the actual approved brand palette.

Use thin lines, gradients made only from approved colors, image blocks, oversized numbers, and whitespace to create rhythm.

---

# 42. Online Temporary Image Requirement

For initial development:

**Online images may be used as temporary placeholders.**

Implementation should make image replacement easy.

Do not hardcode image URLs throughout components.

Use:

```ts
const homepageImages = {
  hero: "...",
  services: {},
  results: {},
  industries: {}
};
```

Later, replace temporary image URLs with:

```text
/local assets
CDN
CMS
approved company photography
```

without changing component layout.

When using external images during development:

- Prefer reliable image/CDN sources.
- Use optimized image delivery where supported.
- Respect licensing/usage rights.
- Do not permanently depend on an unstable hotlinked image.
- Add a clear replacement path before production.

---

# 43. Premium Image Composition

Images should have consistent aspect ratios.

Recommended:

```text
Hero:
16:9 or wide cinematic

Service:
4:3 / 3:2

Case Study:
16:10 / 16:9

Industry:
4:3
```

Use `aspect-ratio` containers to prevent layout shift.

---

# 44. Premium IT + Digital Marketing Visual Elements

Use visual elements such as:

- Data lines
- Performance graphs
- Search UI fragments
- Abstract grids
- Fine technical lines
- Number counters
- Digital maps
- Connection diagrams
- Browser/device frames
- AI/search interface motifs
- Subtle golden/blue glow
- Layered image cards
- Editorial typography

These are decorative storytelling elements, not new product features.

Avoid overloading the page with animations.

---

# 45. Final Premium Experience

The visitor journey should feel:

```text
ATTENTION
  ↓
TRUST
  ↓
CAPABILITY
  ↓
PROOF
  ↓
DIFFERENTIATION
  ↓
ACTION
```

The site should communicate premium expertise within the first few seconds without requiring the visitor to read a long paragraph.


# 49. Final Creative Direction — Premium White Digital/IT Experience

This is the final visual direction and overrides any earlier conflicting background guidance.

## Canvas

The default homepage canvas is **WHITE**.

```text
Background → White
H1/H2/H3 → Black
Primary Buttons → Blue
Small text / Eyebrows / Icons / Micro-details → Premium Golden
```

Blue and gold are accents, not large competing backgrounds.

The overall result should feel like a premium global technology + digital growth company.

---

# 50. Interaction-First Design

Every major section must have at least one meaningful interaction or motion treatment where appropriate.

Examples:

```text
Hero → cinematic transition + 3D/WebGL visual
Services → magnetic/interactive cards + carousel
Metrics → animated count-up
Process → scroll-progress timeline
Case Studies → image reveal + hover transformation
Industries → interactive card movement
AEO/GEO → animated search/AI visualization
CTA → premium hover/magnetic interaction
```

Do not animate every element independently.

Motion must create hierarchy and storytelling.

---

# 51. Scroll Animation System

Use a consistent scroll animation system.

Recommended:

```text
Framer Motion
GSAP
Intersection Observer
```

Use the existing project libraries first.

Animations may include:

- Fade-up
- Mask reveal
- Image reveal
- Text line reveal
- Horizontal scroll
- Number count-up
- Staggered cards
- SVG line drawing
- Parallax depth
- Section pinning where justified

Do not make scrolling slow or difficult.

Respect:

```css
prefers-reduced-motion
```

---

# 52. Premium WebGL / Three.js Direction

Three.js/WebGL is explicitly allowed and encouraged **where it materially improves the design**.

Do not use WebGL simply because it is technically impressive.

## Best locations

### Hero

Use a lightweight interactive 3D/WebGL visual such as:

- abstract digital network
- flowing data particles
- 3D geometric growth structure
- connected nodes
- dynamic globe/network
- layered data field

The visual should use:

```text
Blue
Golden highlights
Black/dark details
White environment
```

The 3D element should support the business message.

### Service Ecosystem

Optionally use a lightweight 3D network diagram connecting:

```text
Strategy
SEO
Paid Media
Content
Web
Conversion
Growth
```

### Final CTA

Optionally use a very subtle floating 3D object or animated geometric field.

Do not add WebGL to every section.

## Technical requirements

- Lazy-load heavy WebGL where possible.
- Do not block initial page rendering.
- Provide a static fallback for unsupported devices.
- Respect reduced-motion preferences.
- Avoid excessive GPU usage.
- Avoid mobile performance degradation.
- Ensure WebGL is decorative and never required to understand the content.

---

# 53. Modern Slider — Design Pattern

A conventional:

```text
[Previous] [Image] [Next]
```

carousel is NOT acceptable as the primary visual treatment.

Sliders should behave more like **interactive editorial showcases**.

## Preferred pattern

```text
               ACTIVE SLIDE
      ┌─────────────────────────────┐
      │                             │
      │       LARGE VISUAL          │
      │                             │
      │  GOLD EYEBROW               │
      │  BLACK HEADLINE             │
      │  Short description          │
      │                             │
      │  [ BLUE CTA ]               │
      └─────────────────────────────┘

      01 ━━━━━━━━━━━ 02 ━━━ 03
```

Additional treatment:

- Next slide partially visible.
- Previous slide partially visible where useful.
- Progress line.
- Slide number.
- Image transformation.
- Smooth perspective/scale transition.
- Cursor/drag interaction.
- Keyboard support.
- Touch support.

---

# 54. Hero — Section-by-Section Design Prompt

## Design prompt

> Create a premium white-background hero for a global digital marketing and IT company. Use black editorial typography for the headline, premium blue for primary CTA buttons, and restrained golden accents for eyebrow text, icons and micro-details. The hero must feel sophisticated, technical and global rather than like a generic agency template. Use an immersive but lightweight Three.js/WebGL visual showing an abstract digital growth network/data environment. Add cinematic slide transitions, subtle depth, progress navigation and partial adjacent-slide visibility. Use temporary high-quality online imagery if required. Keep the hero content concise and conversion-focused.

## Content structure

```text
GOLD EYEBROW
Digital Growth Partner

BLACK H1
Digital Marketing Engineered for Measurable Growth

Short supporting copy

[ BLUE PRIMARY CTA ] [ Secondary CTA ]

Interactive visual

01 / 03
Progress
```

---

# 55. Trust Strip — Section-by-Section Design Prompt

> Create a minimal premium proof strip on a white canvas. Use large black metrics, tiny golden labels/icons and thin blue/golden divider details. Animate metrics as they enter the viewport. Keep the section compact and editorial.

Content:

```text
80+
Clients Served

$5M+
Revenue Generated

12+
Industries Covered
```

Use only verified values.

---

# 56. Quick Answer — Section-by-Section Design Prompt

> Create a premium editorial two-column section on white. Use a large black question/headline on the left and concise authoritative content on the right. Use a golden eyebrow and small golden icons. Add subtle scroll reveal and a thin animated line connecting the content blocks. Avoid a traditional card-grid layout.

---

# 57. Services — Section-by-Section Design Prompt

> Create a premium interactive services showcase rather than a normal card carousel. Use a large black section headline, golden eyebrow, blue CTA and horizontally draggable service panels. The active card should have stronger elevation and visual depth while neighboring cards remain partially visible. Use image or abstract technical visuals inside cards. On hover, reveal additional information through a smooth height/opacity transformation. Use subtle blue/golden accents. Never make all service cards look identical.

Service cards:

```text
Golden icon
Service category
Black title
Short description
3 concise benefits
Blue "Explore" action
```

---

# 58. Why Altiora — Section-by-Section Design Prompt

> Create an editorial three-stage storytelling section with large black numbers, golden micro-labels and blue interaction accents. Do not use three generic cards. Use an asymmetrical layout with scroll-triggered transitions connecting Strategy → Execution → Optimization.

---

# 59. Service Ecosystem — Section-by-Section Design Prompt

> Create a premium interactive digital ecosystem visualization. Place Digital Strategy at the center and visually connect SEO, Paid Media, Content, Website, Social and Conversion. Use thin golden/blue connection lines, black labels and subtle motion. Where performance permits, use a lightweight Three.js/WebGL network visualization. The section should visually communicate that Altiora operates as one connected growth system.

---

# 60. Process Timeline — Section-by-Section Design Prompt

> Create a scroll-driven horizontal process experience on desktop and vertical experience on mobile. The progress line should animate as the visitor scrolls. Use black titles, golden step numbers and blue active states. Each step should reveal its content progressively instead of showing four static cards.

Steps:

```text
01 Strategy & Market Research
02 Build & Optimize
03 Traffic & Lead Generation
04 Measure, Improve & Scale
```

---

# 61. Results / Case Studies — Section-by-Section Design Prompt

> Create a cinematic case-study slider with large temporary online imagery. Use a white background around the content and black typography, with golden metadata and blue CTA buttons. Each slide should visually transform as it becomes active. Use image masking, subtle scale, horizontal movement and progress navigation. The next case study should partially appear to create depth. Only use verified project information and results.

---

# 62. Industries — Section-by-Section Design Prompt

> Create an image-led industry slider with large editorial images and minimal text overlays. Use white space between slides, black titles, golden category labels and blue actions. On hover, gently zoom the image and reveal additional service information. Avoid generic grid cards.

---

# 63. AEO / GEO — Section-by-Section Design Prompt

> Create a premium AI-search visualization section on white. Show Google, AI Overviews, ChatGPT, Perplexity, featured snippets and voice search as an interconnected discovery environment. Use black typography, golden labels and blue interactive paths. A lightweight WebGL or animated SVG visualization can show information flowing from search intent to answer engines. Avoid claims of guaranteed rankings or citations.

---

# 64. Testimonial Section — Section-by-Section Design Prompt

> If verified testimonials are available, create an editorial testimonial slider rather than quote cards. Use oversized quotation typography, black text, golden metadata and blue navigation controls. Animate the quote and supporting identity independently. If approved testimonials are unavailable, omit the production section.

---

# 65. Final CTA — Section-by-Section Design Prompt

> Create a high-impact white CTA with a strong black headline, concise supporting text, blue primary button and small golden technical details. Add a subtle animated digital field or lightweight WebGL object behind/around the content. The visual should feel like the final destination of the page, not another generic card.

---

# 66. Hover Interaction System

Every interactive element should have a deliberate hover/focus state.

Examples:

### Button

```text
Normal → Blue
Hover → Slight lift + subtle glow/shine
Active → Small press
```

### Service card

```text
Normal → White
Hover → Slight lift + golden icon emphasis + blue action
```

### Image

```text
Normal → 100%
Hover → 103–106% scale
```

### Link

```text
Normal → Black/blue
Hover → Golden underline/accent
```

Keep effects subtle and premium.

---

# 67. Benchmark Direction

The design ambition is **award-level digital design quality**, using contemporary interaction, motion, typography, editorial composition, and immersive visuals.

Dribbble currently surfaces award-oriented web designs featuring patterns such as motion design, scrollytelling, 3D animation, premium landing pages and editorial layouts. citeturn0search2turn0search5

Use these patterns as a quality benchmark, but do not copy individual designs.

The goal is not to reproduce a Dribbble shot.

The goal is to create an original Altiora experience that combines:

```text
Premium visual design
+
Strong UX
+
Clear business messaging
+
Fast performance
+
Accessibility
+
Modern motion
+
Selective WebGL
```

---

# 68. Section Density Rule

If a section contains too much source content:

```text
DO NOT
↓
make the section extremely tall

DO
↓
extract the strongest message
↓
create concise homepage copy
↓
move detailed explanation to inner pages
↓
use interaction to reveal secondary information
```

Each section should have one primary message.

The user should understand the purpose of a section within approximately 2–4 seconds.
