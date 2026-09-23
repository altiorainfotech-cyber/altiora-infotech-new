import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock, ArrowUpRight, Sparkles, Tag } from "lucide-react";
import type { BlogPost } from "@/lib/blogApi";
import { slugFromHref, estimateReadTime } from "@/lib/blogApi";
import { AuthorAvatar } from "@/components/blog/AuthorAvatar";

function formatDate(value: string) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;
  return date.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}

export function FeaturedBlogCard({ post }: { post: BlogPost }) {
  const keywords = post.seo?.keywords ?? [];

  return (
    <div className="relative my-8 sm:my-12">
      <Link href={`/blog/${slugFromHref(post.href)}`} className="group block focus-ring rounded-3xl">
        <div className="relative overflow-hidden rounded-3xl border border-ink/10 bg-gradient-to-br from-white via-surface to-blue-50/30 shadow-xl transition-all duration-500 hover:shadow-2xl hover:shadow-blue-600/10 hover:border-blue-500/30">
          <div className="absolute top-0 right-0 h-40 w-40 bg-gradient-to-bl from-gold-400/20 via-transparent to-transparent pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            <div className="lg:col-span-6 relative min-h-[280px] sm:min-h-[360px] overflow-hidden bg-surface">
              {post.image && (
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  priority
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 600px"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/20 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-ink/10 lg:to-ink/40" />

              <div className="absolute top-4 left-4 z-10 flex items-center gap-2 rounded-xl border border-white/80 bg-white/95 px-3.5 py-1.5 text-xs font-extrabold text-ink shadow-md backdrop-blur-md">
                <Sparkles className="h-3.5 w-3.5 text-gold-500 fill-gold-400" />
                <span>Featured</span>
              </div>
            </div>

            <div className="lg:col-span-6 p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
              <div>
                <div className="flex flex-wrap items-center gap-3 text-xs font-bold text-muted">
                  {post.category && (
                    <span className="rounded-lg bg-blue-50 px-3 py-1 font-extrabold text-blue-700 border border-blue-200/60">
                      {post.category}
                    </span>
                  )}
                  <div className="flex items-center gap-1.5">
                    <Calendar className="h-3.5 w-3.5 text-muted/70" />
                    <span>{formatDate(post.date)}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock className="h-3.5 w-3.5 text-muted/70" />
                    <span>{estimateReadTime(post)}</span>
                  </div>
                </div>

                <h2 className="mt-4 text-2xl sm:text-3xl font-black tracking-tight text-ink group-hover:text-blue-600 transition-colors leading-tight">
                  {post.title}
                </h2>

                {post.excerpt && (
                  <p className="mt-4 text-sm sm:text-base font-medium leading-relaxed text-muted line-clamp-3">
                    {post.excerpt}
                  </p>
                )}

                {keywords.length > 0 && (
                  <div className="mt-5 flex flex-wrap gap-2">
                    {keywords.slice(0, 4).map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center gap-1 rounded-md bg-surface px-2.5 py-1 text-[11px] font-bold text-ink/80 border border-ink/8"
                      >
                        <Tag className="h-3 w-3 text-blue-500" />
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              <div className="mt-8 flex items-center justify-between border-t border-ink/8 pt-6">
                <div className="flex items-center gap-3">
                  <AuthorAvatar name={post.author} size={40} />
                  <div className="text-xs font-black text-ink">{post.author}</div>
                </div>

                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-ink text-white transition-all duration-300 group-hover:bg-blue-600 group-hover:scale-110 shadow-md">
                  <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
