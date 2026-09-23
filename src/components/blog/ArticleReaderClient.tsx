"use client";

import { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useSpring } from "framer-motion";
import type { BlogPost } from "@/lib/blogApi";
import { getTableOfContents, estimateReadTime } from "@/lib/blogApi";
import { Container } from "@/components/ui/Container";
import { BlogCard } from "@/components/blog/BlogCard";
import { BlogContentSections } from "@/components/blog/BlogContentSections";
import { BlogImageGallery } from "@/components/blog/BlogImageGallery";
import { AuthorAvatar } from "@/components/blog/AuthorAvatar";
import {
  Calendar,
  Clock,
  ChevronRight,
  ArrowLeft,
  Share2,
  Check,
  Sparkles,
  BookOpen,
  Tag,
  Bookmark,
} from "lucide-react";

function formatDate(value: string) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;
  return date.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
}

interface ArticleReaderClientProps {
  post: BlogPost;
  relatedPosts: BlogPost[];
}

export function ArticleReaderClient({ post, relatedPosts }: ArticleReaderClientProps) {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const tableOfContents = useMemo(() => getTableOfContents(post), [post]);
  const keywords = post.seo?.keywords ?? [];

  const [activeTocId, setActiveTocId] = useState<string>("");
  const [copied, setCopied] = useState<boolean>(false);
  const [bookmarked, setBookmarked] = useState<boolean>(false);

  useEffect(() => {
    if (tableOfContents.length === 0) return;

    const handleScroll = () => {
      const headings = tableOfContents.map((item) => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 200;

      for (let i = headings.length - 1; i >= 0; i--) {
        const heading = headings[i];
        if (heading && heading.offsetTop <= scrollPosition) {
          setActiveTocId(tableOfContents[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [tableOfContents]);

  const handleCopyLink = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <article className="relative min-h-screen bg-white text-ink pb-16">
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-blue-500 to-gold-400 transform-origin-0 z-50"
      />

      <div className="relative border-b border-ink/8 bg-gradient-to-b from-blue-50/40 via-surface/60 to-white pt-8 pb-12 sm:pt-12 sm:pb-16">
        <Container>
          <div className="flex items-center gap-2 text-xs font-bold text-muted mb-6">
            <Link href="/" className="hover:text-ink transition-colors">
              Home
            </Link>
            <ChevronRight className="h-3.5 w-3.5 text-muted/60" />
            <Link href="/blog" className="hover:text-ink transition-colors">
              Blog
            </Link>
            {post.category && (
              <>
                <ChevronRight className="h-3.5 w-3.5 text-muted/60" />
                <span className="text-blue-700 font-extrabold">{post.category}</span>
              </>
            )}
          </div>

          <div className="max-w-4xl">
            <div className="flex flex-wrap items-center gap-3 text-xs font-bold text-muted mb-4">
              {post.category && (
                <span className="rounded-lg bg-blue-600 px-3 py-1 text-white font-extrabold shadow-sm">
                  {post.category}
                </span>
              )}
              <div className="flex items-center gap-1.5">
                <Calendar className="h-3.5 w-3.5 text-muted/70" />
                <span>{formatDate(post.date)}</span>
              </div>
              <span>•</span>
              <div className="flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5 text-muted/70" />
                <span>{estimateReadTime(post)}</span>
              </div>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-ink leading-[1.15]">
              {post.title}
            </h1>

            {post.excerpt && (
              <p className="mt-5 text-base sm:text-xl font-medium leading-relaxed text-muted">{post.excerpt}</p>
            )}

            <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-ink/10 pt-6">
              <div className="flex items-center gap-3.5">
                <AuthorAvatar name={post.author} size={48} />
                <div>
                  <div className="text-sm font-black text-ink">{post.author}</div>
                  <div className="text-xs font-medium text-muted">Altiora Infotech</div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handleCopyLink}
                  className="inline-flex items-center gap-1.5 rounded-xl border border-ink/10 bg-white px-3.5 py-2 text-xs font-bold text-ink shadow-xs transition-all hover:bg-surface hover:border-blue-500/30"
                >
                  {copied ? (
                    <>
                      <Check className="h-3.5 w-3.5 text-emerald-600" />
                      <span className="text-emerald-700">Link Copied!</span>
                    </>
                  ) : (
                    <>
                      <Share2 className="h-3.5 w-3.5 text-muted" />
                      <span>Share</span>
                    </>
                  )}
                </button>

                <button
                  type="button"
                  onClick={() => setBookmarked((b) => !b)}
                  className={`inline-flex items-center gap-1.5 rounded-xl border px-3.5 py-2 text-xs font-bold transition-all ${
                    bookmarked
                      ? "border-gold-400 bg-gold-50 text-gold-800"
                      : "border-ink/10 bg-white text-ink hover:bg-surface"
                  }`}
                >
                  <Bookmark className={`h-3.5 w-3.5 ${bookmarked ? "fill-gold-500 text-gold-600" : "text-muted"}`} />
                  <span>{bookmarked ? "Saved" : "Save"}</span>
                </button>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {post.image && (
        <Container className="mt-8">
          <div className="relative aspect-[21/9] w-full overflow-hidden rounded-3xl border border-ink/10 shadow-2xl">
            <Image
              src={post.image}
              alt={post.title}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1200px) 100vw, 1200px"
            />
          </div>
        </Container>
      )}

      <Container className="mt-12 sm:mt-16">
        <div className={`grid grid-cols-1 gap-12 ${tableOfContents.length > 0 ? "lg:grid-cols-12" : ""}`}>
          {tableOfContents.length > 0 && (
            <aside className="hidden lg:block lg:col-span-3">
              <div className="sticky top-28 space-y-6">
                <div className="rounded-2xl border border-ink/8 bg-surface p-5 backdrop-blur-md">
                  <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-ink mb-4 pb-2 border-b border-ink/8">
                    <BookOpen className="h-4 w-4 text-blue-600" />
                    <span>Table of Contents</span>
                  </div>

                  <nav className="space-y-2">
                    {tableOfContents.map((item) => (
                      <a
                        key={item.id}
                        href={`#${item.id}`}
                        className={`block text-xs font-bold leading-relaxed transition-all rounded-lg px-2.5 py-1.5 ${
                          activeTocId === item.id
                            ? "bg-blue-600 text-white shadow-xs"
                            : "text-muted hover:text-ink hover:bg-white"
                        }`}
                      >
                        {item.title}
                      </a>
                    ))}
                  </nav>
                </div>

                <div className="rounded-2xl border border-blue-500/20 bg-gradient-to-br from-blue-900 to-ink p-5 text-white shadow-lg">
                  <Sparkles className="h-5 w-5 text-gold-400 mb-2 fill-gold-400" />
                  <h4 className="text-sm font-extrabold text-white">Need Custom Growth Strategy?</h4>
                  <p className="mt-1.5 text-xs text-blue-100/80 leading-relaxed">
                    Altiora helps brands implement these frameworks with guaranteed ROI.
                  </p>
                  <Link
                    href="/contact"
                    className="mt-4 block w-full rounded-xl bg-gold-500 py-2.5 text-center text-xs font-extrabold text-ink transition-transform hover:bg-gold-400 hover:scale-[1.02]"
                  >
                    Book Strategy Call
                  </Link>
                </div>
              </div>
            </aside>
          )}

          <main className={tableOfContents.length > 0 ? "lg:col-span-9 max-w-3xl" : "max-w-3xl mx-auto w-full"}>
            {post.contentSections && post.contentSections.length > 0 ? (
              <BlogContentSections sections={post.contentSections} />
            ) : post.content ? (
              <div
                className="prose prose-lg max-w-none text-ink/90 prose-headings:font-black prose-headings:tracking-tight prose-headings:text-ink prose-h2:text-2xl sm:prose-h2:text-3xl prose-h2:mt-10 prose-h2:mb-4 prose-p:text-base sm:prose-p:text-lg prose-p:leading-relaxed prose-p:text-muted prose-li:text-base prose-strong:text-ink prose-strong:font-black"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            ) : null}

            <BlogImageGallery images={post.images} />

            {keywords.length > 0 && (
              <div className="mt-12 pt-6 border-t border-ink/10 flex flex-wrap items-center gap-2">
                <span className="text-xs font-bold text-muted mr-2">Article Tags:</span>
                {keywords.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1 rounded-lg bg-surface border border-ink/8 px-3 py-1 text-xs font-bold text-ink/80"
                  >
                    <Tag className="h-3 w-3 text-blue-600" />
                    {tag}
                  </span>
                ))}
              </div>
            )}

            <div className="mt-10 rounded-3xl border border-ink/10 bg-surface p-6 sm:p-8 flex flex-col sm:flex-row items-center sm:items-start gap-5">
              <AuthorAvatar name={post.author} size={64} />
              <div className="text-center sm:text-left">
                <div className="text-xs font-extrabold uppercase tracking-wider text-blue-600">Written by</div>
                <h3 className="text-lg font-black text-ink mt-0.5">{post.author}</h3>
                <p className="mt-2 text-xs sm:text-sm text-muted leading-relaxed">
                  Insights from the Altiora Infotech team, focused on growth strategy and technology execution.
                </p>
              </div>
            </div>

            <div className="mt-10 pt-6 border-t border-ink/8">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-xs font-extrabold text-blue-600 hover:text-blue-800 transition-colors"
              >
                <ArrowLeft className="h-4 w-4" />
                <span>Back to All Articles</span>
              </Link>
            </div>
          </main>
        </div>
      </Container>

      {relatedPosts.length > 0 && (
        <div className="mt-20 border-t border-ink/8 bg-surface/50 py-16">
          <Container>
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-black text-ink">Related Insights &amp; Articles</h2>
              <Link href="/blog" className="text-xs font-bold text-blue-600 hover:underline">
                View All →
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {relatedPosts.map((relPost, index) => (
                <BlogCard key={relPost.id} post={relPost} index={index} />
              ))}
            </div>
          </Container>
        </div>
      )}
    </article>
  );
}
