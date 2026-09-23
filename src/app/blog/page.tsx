import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { BlogHero } from "@/components/blog/BlogHero";
import { BlogFilterSearch } from "@/components/blog/BlogFilterSearch";
import { FeaturedBlogCard } from "@/components/blog/FeaturedBlogCard";
import { BlogGrid } from "@/components/blog/BlogGrid";
import { BlogNewsletterCTA } from "@/components/blog/BlogNewsletterCTA";
import { BlogPagination } from "@/components/blog/BlogPagination";
import { listPosts, listCategories } from "@/lib/blogApi";
import { SITE_NAME, SITE_URL } from "@/lib/constants";

const PAGE_SIZE = 9;

export const metadata: Metadata = {
  title: `Blog | ${SITE_NAME}`,
  description: "Strategy, marketing, and technology insights from the Altiora Infotech team.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/blog`,
    siteName: SITE_NAME,
    title: `Blog | ${SITE_NAME}`,
    description: "Strategy, marketing, and technology insights from the Altiora Infotech team.",
  },
};

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const params = await searchParams;
  const page = Math.max(1, Number(params.page) || 1);
  const search = typeof params.search === "string" ? params.search : undefined;
  const categoryParam = typeof params.category === "string" ? params.category : undefined;
  const category = categoryParam && categoryParam !== "All" ? categoryParam : undefined;

  const [{ data }, categories] = await Promise.all([
    listPosts({ page, limit: PAGE_SIZE, search, category }),
    listCategories(),
  ]);

  const showFeatured = page === 1 && !search && !category && data.posts.length > 0;
  const featuredPost = showFeatured ? data.posts[0] : null;
  const gridPosts = showFeatured ? data.posts.slice(1) : data.posts;

  return (
    <main className="relative min-h-screen bg-white text-ink">
      <BlogHero search={search} category={category} />
      <BlogFilterSearch
        categories={categories}
        selectedCategory={category ?? "All"}
        total={data.pagination.total}
        search={search}
      />
      <section className="pb-20 pt-10">
        <Container>
          {featuredPost && <FeaturedBlogCard post={featuredPost} />}
          <BlogGrid posts={gridPosts} />
          <BlogPagination pagination={data.pagination} search={search} category={category} />
        </Container>
      </section>
      <BlogNewsletterCTA />
    </main>
  );
}
