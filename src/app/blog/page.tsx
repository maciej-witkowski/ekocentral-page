import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { PageHero } from "@/components/shared/PageHero";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { ArrowRight, Tag } from "lucide-react";
import blogPosts from "@/data/blog-posts.json";

export const metadata: Metadata = {
  title: "Blog - aktualności z branży instalacyjnej",
  description: "Artykuły i porady z branży instalacyjnej, budowlanej oraz energetyki odnawialnej.",
};

export default function BlogPage() {
  notFound();
  return (
    <>
      <PageHero title="Blog" breadcrumbs={[{ label: "Blog" }]} />

      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogPosts.map((post, i) => (
              <AnimatedSection key={post.slug} delay={i * 0.1}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group block rounded-2xl bg-surface-elevated border border-border overflow-hidden hover:shadow-xl hover:shadow-navy-900/5 dark:hover:shadow-black/20 transition-all duration-300 hover:-translate-y-1 h-full"
                >
                  <div className="p-8">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-mint-200/50 text-mint-500 text-xs font-semibold rounded-full">
                        <Tag className="w-3 h-3" />
                        {post.tag}
                      </span>
                      <span className="text-text-muted text-xs">{post.date}</span>
                    </div>
                    <h2 className="text-xl font-bold text-foreground mb-3 group-hover:text-mint-500 transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-text-secondary text-sm leading-relaxed mb-4">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center gap-2 text-mint-500 text-sm font-medium group-hover:gap-3 transition-all">
                      Czytaj więcej
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
