# Altiora Infotech — Premium Homepage Build Prompt

Use this document as the **implementation prompt** for an AI coding/design agent working on the Altiora homepage.

## MASTER INSTRUCTION

Redesign the existing Altiora Infotech homepage as a premium global **Digital Marketing + IT company** website.

Do not redesign the brand identity from scratch.

Use the existing project architecture, existing font, approved content, existing routes and approved brand assets.

### Final visual system

```text
BACKGROUND → WHITE
HEADINGS → BLACK
PRIMARY BUTTONS → BLUE
SMALL TEXT / EYEBROWS / ICONS / MICRO ACCENTS → PREMIUM GOLDEN
```

The design should be premium, elegant, modern, technical and global.

The quality target is **award-level interaction and visual polish**, inspired by contemporary award-oriented web design patterns such as motion design, scrollytelling, 3D animation, editorial layouts and immersive landing pages. Do not copy any existing website or Dribbble shot.

---

# PHASE 0 — AUDIT BEFORE CODING

Before changing the UI:

1. Inspect the existing repository.
2. Inspect `package.json`.
3. Inspect existing design tokens.
4. Inspect the existing font.
5. Inspect existing colors.
6. Inspect existing header/footer.
7. Inspect existing service routes.
8. Inspect existing image handling.
9. Inspect existing animation libraries.
10. Inspect existing SEO metadata.
11. Identify reusable components.
12. Identify components that should be replaced.

Do not blindly install dependencies.

Reuse existing packages where possible.

---

# PHASE 1 — CONTENT MODEL

Create or update:

```text
content/homepage.ts
```

Separate content from layout.

Create structured data for:

```text
heroSlides
metrics
services
processSteps
results
industries
testimonials
aeoGeo
finalCta
```

Do not invent business claims.

Use the existing homepage content as the source.

The current homepage contains service categories including paid advertising, SEO, mobile app development, website development, social media, graphic design, branding, video production, consulting, influencer/UGC marketing and AEO/GEO. fileciteturn0file0L46-L60 fileciteturn0file0L64-L104 fileciteturn0file0L106-L146 fileciteturn0file0L148-L202

---

# PHASE 2 — GLOBAL DESIGN SYSTEM

Implement:

```text
white page background
black typography
blue buttons
golden micro accents
```

Create reusable tokens.

Example concept:

```css
--color-bg: #ffffff;
--color-text: <approved black>;
--color-primary: <approved blue>;
--color-accent: <approved golden>;
```

Do not guess brand HEX values if existing tokens already define them.

Use the actual approved project values.

---

# PHASE 3 — HEADER

Build a clean premium header.

Desktop:

```text
Logo | Services | Solutions | Industries | About | Insights | [Let's Talk]
```

Mobile:

```text
Logo | Menu
```

Use subtle scroll-state animation.

Do not make the header oversized.

---

# PHASE 4 — HERO

Build a 3-slide premium hero.

Slides:

### Slide 01
Digital Growth

### Slide 02
Search + AI Visibility

### Slide 03
Full-Funnel Digital Growth

Visual requirements:

- White base.
- Black typography.
- Golden eyebrow.
- Blue CTA.
- Premium online image temporarily allowed.
- Three.js/WebGL visual strongly recommended.
- Cinematic transition.
- Partial neighboring slide visibility where appropriate.
- Slide number.
- Progress line.
- Drag/swipe.
- Keyboard controls.

Do NOT create a basic image carousel.

Use:

```text
Embla
+
Framer Motion / GSAP
+
Three.js where appropriate
```

---

# PHASE 5 — TRUST / METRICS

Use existing verified metrics:

```text
80+ Clients Served
$5M+ Revenue Generated
12+ Industries Covered
```

Animate numbers on scroll.

Design:

```text
BLACK NUMBER
GOLD LABEL
WHITE BACKGROUND
```

---

# PHASE 6 — QUICK ANSWER

Create an editorial split layout.

Left:

```text
GOLD EYEBROW
What does Altiora do?
BLACK LARGE HEADING
```

Right:

Short authoritative answer.

Do not display the existing long paragraph unchanged.

Condense it while preserving meaning.

Add subtle line-drawing animation.

---

# PHASE 7 — SERVICES

Build an advanced interactive service carousel.

Requirements:

```text
Desktop: 3 visible
Tablet: 2 visible
Mobile: 1 visible
```

Use partial next-card visibility.

Each card:

```text
Golden icon
Black title
Short description
3 benefits
Blue action
```

Hover:

```text
image/visual moves slightly
card lifts
golden icon intensifies
blue action becomes prominent
```

Do not use default carousel arrows without custom visual treatment.

---

# PHASE 8 — WHY ALTIORA

Create:

```text
01 Strategy
02 Execution
03 Optimization
```

Do not use three generic cards.

Use an asymmetric editorial layout.

Animate each stage as the user scrolls.

---

# PHASE 9 — SERVICE ECOSYSTEM

Create an interactive visual:

```text
                 Strategy
                    |
       ---------------------------
       |            |            |
      SEO        Paid Media    Content
       |            |            |
       -------- Website ----------
                    |
                Conversion
                    |
                  Growth
```

Use SVG animation or lightweight Three.js/WebGL.

Use golden and blue connection lines.

Black labels.

White canvas.

---

# PHASE 10 — PROCESS

Create a scroll-driven timeline:

```text
01 Research
02 Build
03 Generate Traffic
04 Measure & Scale
```

Desktop:

horizontal.

Mobile:

vertical.

Animate the progress line based on scroll.

---

# PHASE 11 — RESULTS

Create a cinematic case-study slider.

Use temporary online images.

Image replacement must be centralized.

Do not hardcode URLs inside JSX.

Each slide:

```text
Image
Industry
Project
Short challenge/solution
Verified result
Blue CTA
```

Only use verified results.

---

# PHASE 12 — INDUSTRIES

Build an image-led horizontal slider.

Each item:

```text
Image
Golden industry label
Black title
Short description
Blue action
```

Hover:

```text
Image scale 103–106%
Overlay reveal
Content moves slightly
```

---

# PHASE 13 — TESTIMONIALS

Only render this section when real approved testimonials exist.

Design as an editorial quote slider.

Do not create fake testimonials.

---

# PHASE 14 — AEO / GEO

Create an immersive AI-search section.

Visualize:

```text
Search Intent
      ↓
Google
      ↓
AI Overviews
      ↓
ChatGPT
      ↓
Perplexity
      ↓
Voice / Featured Answers
```

Use animated SVG or selective WebGL.

Do not claim guaranteed rankings/citations.

---

# PHASE 15 — FINAL CTA

White background.

Large black headline.

Golden micro-details.

Blue CTA.

Optional subtle 3D/WebGL visual.

The CTA should feel like the visual climax of the page.

---

# PHASE 16 — FOOTER

Keep the footer clean.

Use:

```text
Logo
Services
Company
Industries
Insights
Contact
Social
Legal
```

Use black text and restrained golden/blue details.

---

# MOTION SYSTEM

Use motion intentionally.

Required:

- Scroll reveal.
- Hover transitions.
- Button interactions.
- Slider transitions.
- Image reveals.
- Metric count-up.
- Process progress.
- Subtle parallax where useful.

Optional:

- Text mask reveal.
- Magnetic button.
- Cursor-follow effect on desktop.
- SVG line drawing.

Do not use excessive motion.

---

# THREE.JS / WEBGL RULES

Use Three.js only where it improves the experience.

Preferred:

```text
Hero → yes
Service ecosystem → optional
Final CTA → optional
```

Requirements:

- Lazy load.
- Static fallback.
- Reduced-motion fallback.
- Mobile optimization.
- No blocking render.
- No unnecessary GPU load.

---

# IMAGE RULES

For initial development, use high-quality online images.

Preferred themes:

```text
Technology
AI
Digital marketing
Data
Global business
Strategy
Analytics
```

Do not use random generic stock photography.

Centralize all image sources.

Example:

```ts
export const homepageImages = {
  hero: {
    growth: "...",
    ai: "...",
    fullFunnel: "..."
  },
  results: [],
  industries: []
};
```

Later the online URLs can be replaced with local/CDN/CMS assets without changing components.

---

# CONTENT LENGTH RULE

If content is too long:

DO:

```text
Condense
↓
Preserve meaning
↓
Show strongest message
↓
Move details to inner page
```

DO NOT:

```text
Tiny font
Huge card
Fixed height
Overflow hidden
Random truncation
```

Homepage copy should be concise.

---

# RESPONSIVE

Test:

```text
320
375
390
430
768
1024
1280
1440
1920
```

No horizontal overflow.

No broken sliders.

No clipped text.

No oversized mobile hero.

---

# ACCESSIBILITY

Support:

- keyboard navigation
- focus states
- accessible carousel controls
- semantic headings
- alt text
- reduced motion
- sufficient contrast
- touch gestures

---

# PERFORMANCE

Maintain strong Core Web Vitals.

Use:

- Next Image
- optimized images
- lazy loading
- code splitting
- lazy WebGL
- no unnecessary dependencies

Hero LCP must remain optimized.

---

# FINAL QUALITY CHECK

Before completing:

```text
[ ] White background dominates
[ ] Titles black
[ ] Buttons blue
[ ] Small text/icons golden
[ ] Hero looks premium
[ ] Hero slider is not basic
[ ] Services slider is not basic
[ ] Results slider is cinematic
[ ] Scroll animations work
[ ] Hover animations work
[ ] WebGL/3D used selectively
[ ] Temporary online images work
[ ] Images are replaceable
[ ] Long content is condensed
[ ] Mobile works
[ ] Accessibility works
[ ] SEO preserved
[ ] No fake claims
[ ] No localhost URLs
[ ] No copied Dribbble design
[ ] Overall experience feels original, premium and global
```
