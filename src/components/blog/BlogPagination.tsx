import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { BlogPagination as Pagination } from "@/lib/blogApi";

function buildHref(page: number, search?: string, category?: string) {
  const params = new URLSearchParams();
  params.set("page", String(page));
  if (search) params.set("search", search);
  if (category) params.set("category", category);
  return `/blog?${params.toString()}`;
}

export function BlogPagination({
  pagination,
  search,
  category,
}: {
  pagination: Pagination;
  search?: string;
  category?: string;
}) {
  if (pagination.totalPages <= 1) return null;

  return (
    <nav className="mt-10 flex items-center justify-between border-t border-ink/8 pt-6" aria-label="Blog pagination">
      {pagination.hasPrev ? (
        <Link
          href={buildHref(pagination.page - 1, search, category)}
          className="focus-ring flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-bold text-ink/70 transition-colors hover:text-blue-700"
        >
          <ChevronLeft className="h-4 w-4" />
          Previous
        </Link>
      ) : (
        <span />
      )}

      <span className="font-mono text-xs font-bold text-ink/40">
        Page {pagination.page} of {pagination.totalPages}
      </span>

      {pagination.hasNext ? (
        <Link
          href={buildHref(pagination.page + 1, search, category)}
          className="focus-ring flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-bold text-ink/70 transition-colors hover:text-blue-700"
        >
          Next
          <ChevronRight className="h-4 w-4" />
        </Link>
      ) : (
        <span />
      )}
    </nav>
  );
}
