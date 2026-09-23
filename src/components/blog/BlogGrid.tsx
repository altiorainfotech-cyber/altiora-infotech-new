import { Newspaper } from "lucide-react";
import type { BlogPost } from "@/lib/blogApi";
import { BlogCard } from "./BlogCard";

export function BlogGrid({ posts }: { posts: BlogPost[] }) {
  if (posts.length === 0) {
    return (
      <div className="flex flex-col items-center gap-3 rounded-2xl border border-ink/8 bg-white/60 py-20 text-center">
        <Newspaper className="h-8 w-8 text-muted" aria-hidden="true" />
        <p className="text-sm font-bold text-ink">No articles found.</p>
        <p className="text-xs text-muted">Try a different search or clear your filters.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {posts.map((post, index) => (
        <BlogCard key={post.id} post={post} index={index} />
      ))}
    </div>
  );
}
