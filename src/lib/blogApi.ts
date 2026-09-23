const BLOG_API_BASE = "https://altiorainfotech.ca/api/blogs";
const REVALIDATE_SECONDS = 3600;

export interface BlogPost {
  id: string;
  title: string;
  content?: string;
  excerpt?: string;
  href: string;
  image: string;
  images?: { id: string; url: string; alt: string; caption?: string }[];
  contentSections?: {
    id: string;
    type: "title" | "content";
    value: string;
    fontSize?: string;
    fontWeight?: "normal" | "bold";
    textAlign?: "left" | "center" | "right";
    color?: string;
  }[];
  category: string;
  date: string;
  author: string;
  blogType?: "marketing" | "tech";
  seo?: { metaTitle?: string; metaDescription?: string; keywords?: string[] };
}

export interface BlogPagination {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
  hasNext: boolean;
  hasPrev: boolean;
}

export interface BlogListResponse {
  success: boolean;
  data: { posts: BlogPost[]; pagination: BlogPagination };
  cached?: boolean;
}

export interface BlogPostResponse {
  success: boolean;
  data: BlogPost;
  cached?: boolean;
}

export interface BlogApiError {
  success: false;
  error: { code: string; message: string };
  timestamp: string;
}

export type ListPostsParams = {
  page?: number;
  limit?: number;
  category?: string;
  search?: string;
};

/**
 * Server-side only — the blog API sends no CORS headers, so this must be called
 * from a Server Component / route handler, never from client-side JS.
 */
export async function listPosts(params: ListPostsParams = {}): Promise<BlogListResponse> {
  const query = new URLSearchParams();
  if (params.page) query.set("page", String(params.page));
  if (params.limit) query.set("limit", String(params.limit));
  if (params.category) query.set("category", params.category);
  if (params.search) query.set("search", params.search);

  const url = query.toString() ? `${BLOG_API_BASE}?${query.toString()}` : BLOG_API_BASE;

  const res = await fetch(url, { next: { revalidate: REVALIDATE_SECONDS } });
  if (!res.ok) {
    return {
      success: true,
      data: { posts: [], pagination: { page: 1, limit: params.limit ?? 10, total: 0, totalPages: 0, hasNext: false, hasPrev: false } },
    };
  }
  return res.json() as Promise<BlogListResponse>;
}

/** Server-side only — see note on listPosts. */
export async function getPost(slug: string): Promise<BlogPost | null> {
  const res = await fetch(`${BLOG_API_BASE}/${encodeURIComponent(slug)}`, {
    next: { revalidate: REVALIDATE_SECONDS },
  });
  if (!res.ok) return null;
  const json = (await res.json()) as BlogPostResponse | BlogApiError;
  if (!json.success) return null;
  return json.data;
}

export function slugFromHref(href: string): string {
  const parts = href.split("/").filter(Boolean);
  return parts[parts.length - 1] ?? href;
}

function stripHtml(value: string): string {
  return value.replace(/<[^>]*>/g, "").trim();
}

/** No read-time field in the API — estimated from word count at ~200wpm. */
export function estimateReadTime(post: BlogPost): string {
  const text = post.contentSections?.length
    ? post.contentSections.map((section) => section.value).join(" ")
    : post.content ?? "";
  const words = stripHtml(text).split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.round(words / 200));
  return `${minutes} min read`;
}

export interface TocItem {
  id: string;
  title: string;
}

/**
 * No table-of-contents field in the API — derived from "title" contentSections,
 * or from `<h2 id="...">` headings in raw HTML content. Returns [] if neither
 * is present, so callers should hide the TOC UI rather than show an empty one.
 */
export function getTableOfContents(post: BlogPost): TocItem[] {
  if (post.contentSections?.length) {
    return post.contentSections
      .filter((section) => section.type === "title")
      .map((section) => ({ id: section.id, title: stripHtml(section.value) }))
      .filter((item) => item.title.length > 0);
  }

  if (post.content) {
    const items: TocItem[] = [];
    const headingPattern = /<h2[^>]*id="([^"]+)"[^>]*>(.*?)<\/h2>/gi;
    let match: RegExpExecArray | null;
    while ((match = headingPattern.exec(post.content)) !== null) {
      items.push({ id: match[1], title: stripHtml(match[2]) });
    }
    return items;
  }

  return [];
}

/**
 * Categories come back per-post with no dedicated list endpoint, so this
 * derives the distinct set from a larger fetched batch. Cached alongside
 * listPosts via the same ISR window.
 */
export async function listCategories(): Promise<string[]> {
  const { data } = await listPosts({ limit: 100 });
  const unique = Array.from(new Set(data.posts.map((post) => post.category).filter(Boolean)));
  return ["All", ...unique];
}
