import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticleReaderClient } from "@/components/blog/ArticleReaderClient";
import { getPost, listPosts } from "@/lib/blogApi";
import { SITE_NAME, SITE_URL } from "@/lib/constants";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return { title: `Article Not Found | ${SITE_NAME}` };

  const title = post.seo?.metaTitle || post.title;
  const description = post.seo?.metaDescription || post.excerpt;

  return {
    title: `${title} | ${SITE_NAME}`,
    description,
    keywords: post.seo?.keywords,
    alternates: {
      canonical: `/blog/${slug}`,
    },
    openGraph: {
      type: "article",
      url: `${SITE_URL}/blog/${slug}`,
      siteName: SITE_NAME,
      title,
      description,
      images: post.image ? [{ url: post.image }] : undefined,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    notFound();
  }

  const related = await listPosts({ category: post.category, limit: 4 });
  const relatedPosts = related.data.posts.filter((candidate) => candidate.id !== post.id).slice(0, 3);

  return <ArticleReaderClient post={post} relatedPosts={relatedPosts} />;
}
