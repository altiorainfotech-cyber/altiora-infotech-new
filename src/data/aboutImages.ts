/**
 * Centralized, replaceable image source map for the About Page.
 * High-resolution stock visuals for team, strategy, tech & Canadian growth.
 */

function unsplash(id: string, w: number, h: number) {
  return `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&h=${h}&q=80`;
}

export const aboutImages = {
  hero: {
    team: unsplash("1522071820081-009f0129c71c", 1200, 900),
    office: unsplash("1497366216548-37526070297c", 1000, 750),
    growth: unsplash("1460925895917-afdab827c52f", 1000, 750),
  },
  whatWeDo: unsplash("1551836022-d5d88e9218df", 1200, 900),
  vision: unsplash("1486406146926-c627a92ad1ab", 1000, 800),
  mission: unsplash("1552664730-d307ca884978", 1000, 800),
  howWeWork: unsplash("1531403009284-440f080d1e12", 1200, 800),
  experienceImpact: unsplash("1556761175-5973dc0f32e7", 1200, 900),
  whyAltiora: unsplash("1600880292203-757bb62b4baf", 1200, 900),
  cta: unsplash("1542744173-8e7e53415bb0", 1600, 900),
} as const;
