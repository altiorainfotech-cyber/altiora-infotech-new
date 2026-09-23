import { Newspaper, Search, X } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { BlogHeroVisual } from "@/components/blog/BlogHeroVisual";

export function BlogHero({ search, category }: { search?: string; category?: string }) {
  const hasFilter = Boolean(search || category);

  return (
    <section className="relative overflow-hidden bg-transparent pt-10 pb-10 sm:pt-16 sm:pb-14">
      <div
        className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-gradient-to-tr from-blue-600/10 via-gold-400/10 to-transparent blur-3xl opacity-80"
        aria-hidden="true"
      />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-white/80 px-4 py-1.5 text-xs font-extrabold text-blue-800 shadow-sm backdrop-blur-md">
              <Newspaper className="h-3.5 w-3.5 text-blue-600" />
              <span>Insights &amp; Updates</span>
            </div>

            <h1 className="mt-5 text-[clamp(2rem,4.4vw,3.25rem)] font-black leading-[1.1] tracking-tight text-ink text-balance">
              <span className="bg-gradient-to-r from-ink via-blue-900 to-gold-600 bg-clip-text text-transparent">
                The Altiora Blog
              </span>
            </h1>

            <p className="mt-4 max-w-xl text-base sm:text-lg font-medium leading-relaxed text-muted text-balance">
              Strategy, marketing, and technology insights to help you grow.
            </p>

            <form action="/blog" method="get" className="mt-6 flex max-w-md items-center gap-2">
              <div className="relative flex-1">
                <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
                <input
                  type="text"
                  name="search"
                  defaultValue={search}
                  placeholder="Search articles..."
                  className="focus-ring w-full rounded-xl border border-ink/10 bg-white/80 py-2.5 pl-10 pr-3 text-sm font-medium text-ink shadow-sm backdrop-blur-md placeholder:text-muted/70"
                />
              </div>
              {category && <input type="hidden" name="category" value={category} />}
              <button
                type="submit"
                className="focus-ring rounded-xl bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 px-4 py-2.5 text-sm font-bold text-white shadow-[0_6px_20px_rgba(22,63,133,0.3)] transition-transform hover:-translate-y-0.5"
              >
                Search
              </button>
            </form>

            {hasFilter && (
              <div className="mt-3 flex items-center gap-2 text-xs font-bold text-muted">
                <span>
                  Filtering by{search ? ` "${search}"` : ""}
                  {category ? ` in ${category}` : ""}
                </span>
                <a href="/blog" className="focus-ring inline-flex items-center gap-1 rounded-md text-blue-700 hover:text-blue-800">
                  <X className="h-3 w-3" />
                  Clear
                </a>
              </div>
            )}
          </div>

          <div className="lg:col-span-6">
            <BlogHeroVisual />
          </div>
        </div>
      </Container>
    </section>
  );
}
