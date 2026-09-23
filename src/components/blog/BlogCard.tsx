"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { BlogPost } from "@/lib/blogApi";
import { slugFromHref, estimateReadTime } from "@/lib/blogApi";
import { AuthorAvatar } from "@/components/blog/AuthorAvatar";

function formatDate(value: string) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;
  return date.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}

export function BlogCard({ post, index = 0 }: { post: BlogPost; index?: number }) {
  const href = `/blog/${slugFromHref(post.href)}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: (index % 6) * 0.06, ease: "easeOut" }}
      className="h-full"
    >
      <Link
        href={href}
        className="focus-ring group flex h-full flex-col overflow-hidden rounded-2xl border border-white/80 bg-white/85 shadow-sm backdrop-blur-md transition-all duration-300 hover:-translate-y-1.5 hover:border-blue-400/40 hover:shadow-xl"
      >
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-surface">
          {post.image ? (
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          ) : null}
          <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
          {post.category && (
            <span className="absolute bottom-3 left-3 rounded-full bg-white/90 px-3 py-1 text-[11px] font-black uppercase tracking-wide text-blue-800 backdrop-blur-md">
              {post.category}
            </span>
          )}
        </div>

        <div className="flex flex-1 flex-col p-5">
          <h2 className="text-base font-bold leading-snug tracking-tight text-ink transition-colors group-hover:text-blue-700 sm:text-lg">
            {post.title}
          </h2>
          {post.excerpt && (
            <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted">{post.excerpt}</p>
          )}

          <div className="mt-4 flex items-center justify-between border-t border-ink/8 pt-3 text-[11px] font-bold text-muted">
            <span className="flex items-center gap-1.5">
              <AuthorAvatar name={post.author} size={20} />
              {post.author}
            </span>
            <span className="flex items-center gap-2">
              <span>{estimateReadTime(post)}</span>
              <span>&middot;</span>
              <span>{formatDate(post.date)}</span>
            </span>
          </div>

          <span className="mt-3 inline-flex items-center gap-1.5 text-xs font-bold text-blue-700 transition-colors group-hover:text-blue-800">
            Read Article
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
