import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { SOLUTIONS_DATA } from "@/data/solutions";
import { SolutionDiagnosticWizard } from "@/components/solutions/SolutionDiagnosticWizard";
import { AgencyComparisonMatrix } from "@/components/about/AgencyComparisonMatrix";
import { SITE_NAME, SITE_URL } from "@/lib/constants";
import { Sparkles, ArrowRight, CheckCircle2, Cpu, Code, TrendingUp, Compass } from "lucide-react";

export const metadata: Metadata = {
  title: `Enterprise Solutions | ${SITE_NAME}`,
  description:
    "Tailored enterprise digital growth solutions. AEO & GEO AI search dominance, Next.js 16 speed architecture, performance CAC reduction, and brand motion systems.",
  alternates: {
    canonical: "/solutions",
  },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/solutions`,
    siteName: SITE_NAME,
    title: `Enterprise Solutions | ${SITE_NAME}`,
    description:
      "Tailored enterprise digital growth solutions delivering measurable revenue lift.",
  },
};

const ICON_MAP: Record<string, any> = {
  Cpu,
  Code,
  TrendingUp,
  Sparkles,
};

export default function SolutionsPage() {
  return (
    <main className="relative min-h-screen bg-white text-ink overflow-hidden pb-16">
      {/* Hero Header */}
      <section className="relative overflow-hidden bg-transparent pt-10 pb-16 sm:pt-16 sm:pb-20">
        <div
          className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[550px] w-[950px] -translate-x-1/2 rounded-full bg-gradient-to-tr from-blue-600/15 via-gold-400/12 to-transparent blur-3xl opacity-80"
          aria-hidden="true"
        />

        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-white/90 px-4 py-1.5 text-xs font-extrabold text-blue-800 shadow-xs backdrop-blur-md">
                <Compass className="h-3.5 w-3.5 text-blue-600" />
                <span>Enterprise Growth Blueprints</span>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <h1 className="mt-5 text-[clamp(2.5rem,5vw,4.25rem)] font-black leading-[1.08] tracking-tight text-ink text-balance">
                Architected for{" "}
                <span className="bg-gradient-to-r from-blue-700 via-blue-900 to-gold-600 bg-clip-text text-transparent">
                  Market Dominance
                </span>
              </h1>
            </Reveal>

            <Reveal delay={0.12}>
              <p className="mt-4 text-base sm:text-xl font-medium leading-relaxed text-muted text-balance max-w-2xl mx-auto">
                Purpose-built growth blueprints combining engineering precision, AI search optimization (AEO/GEO), scalable media buying, and brand motion systems.
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Interactive Solution Diagnostic Wizard */}
      <SolutionDiagnosticWizard />

      {/* Solutions Grid */}
      <section className="py-16 sm:py-24 bg-surface/40">
        <Container>
          <div className="max-w-2xl mb-12">
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full border border-gold-400/30 bg-gold-50 px-3.5 py-1 text-xs font-extrabold text-gold-800">
                <Sparkles className="h-3.5 w-3.5 text-gold-600" />
                <span>4 Core Solution Pillars</span>
              </div>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-3 text-3xl sm:text-4xl font-black text-ink">
                Tailored Solutions for Modern Enterprise Challenges
              </h2>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {SOLUTIONS_DATA.map((sol, index) => {
              const IconComp = ICON_MAP[sol.iconName] || Sparkles;

              return (
                <Reveal key={sol.id} delay={index * 0.08}>
                  <div className="group relative flex flex-col justify-between h-full overflow-hidden rounded-3xl border border-ink/10 bg-white p-7 sm:p-8 shadow-sm transition-all duration-300 hover:border-blue-500/40 hover:shadow-xl hover:-translate-y-1">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors shadow-xs">
                          <IconComp className="h-6 w-6" />
                        </div>
                        <span className="rounded-lg bg-surface border border-ink/8 px-3 py-1 text-[11px] font-extrabold text-muted">
                          {sol.badge}
                        </span>
                      </div>

                      <h3 className="text-xl sm:text-2xl font-black text-ink group-hover:text-blue-600 transition-colors">
                        {sol.title}
                      </h3>

                      <p className="mt-3 text-xs sm:text-sm font-medium leading-relaxed text-muted">
                        {sol.description}
                      </p>

                      <div className="mt-6 pt-4 border-t border-ink/8 space-y-2">
                        <div className="text-xs font-extrabold text-ink uppercase tracking-wider">Key Outcomes:</div>
                        {sol.outcomes.map((out, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-xs font-semibold text-muted">
                            <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
                            <span>{out}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mt-8 pt-4 border-t border-ink/8 flex items-center justify-between">
                      <span className="text-xs font-bold text-muted">{sol.bestFor}</span>
                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-1.5 text-xs font-extrabold text-blue-600 group-hover:translate-x-1 transition-transform"
                      >
                        Explore
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Agency Comparison Matrix */}
      <AgencyComparisonMatrix />

      {/* Final CTA */}
      <section className="py-16 sm:py-24">
        <Container>
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-ink/10 bg-gradient-to-br from-ink via-blue-950 to-blue-900 p-8 sm:p-14 text-white shadow-2xl">
              <div className="max-w-2xl">
                <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight">
                  Ready to Implement a Scalable Growth Solution?
                </h2>
                <p className="mt-3 text-sm sm:text-base text-blue-100/80 font-medium leading-relaxed">
                  Book a confidential strategy session with our Canadian leadership team to review your growth roadmap.
                </p>
                <div className="mt-8">
                  <Button href="/contact" className="px-8 py-4 text-sm font-bold shadow-lg shadow-gold-500/20">
                    <span className="flex items-center gap-2">
                      Schedule Strategy Audit
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  </Button>
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </main>
  );
}
