import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { PageHero } from "@/components/shared/PageHero";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { Tag } from "lucide-react";
import blogPosts from "@/data/blog-posts.json";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) notFound();

  return (
    <>
      <PageHero
        title={post.title}
        breadcrumbs={[
          { label: "Blog", path: "/blog" },
          { label: post.title },
        ]}
      />

      <article className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6">
          <AnimatedSection>
            <div className="flex items-center gap-3 mb-8">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-mint-200/50 text-mint-500 text-xs font-semibold rounded-full">
                <Tag className="w-3 h-3" />
                {post.tag}
              </span>
              <span className="text-text-muted text-sm">{post.date}</span>
            </div>

            <div
              className="prose max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </AnimatedSection>

          <AnimatedSection delay={0.2} className="mt-12 pt-8 border-t border-border">
            <Link
              href="/blog"
              className="text-mint-500 hover:text-mint-400 font-medium transition-colors"
            >
              ← Powrót do bloga
            </Link>
          </AnimatedSection>
        </div>
      </article>
    </>
  );
}
