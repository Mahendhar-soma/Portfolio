"use client";

import { useMemo, useState } from "react";
import { ArrowUpRight, Clock, Search } from "lucide-react";
import { blogPosts } from "@/data/portfolio";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { AnimateIn } from "@/components/shared/AnimateIn";
import { Input } from "@/components/ui/input";
import { formatDate } from "@/lib/utils";

export function BlogSection() {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.toLowerCase();
    if (!q) return blogPosts;
    return blogPosts.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.excerpt.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q)
    );
  }, [query]);

  return (
    <section
      id="blog"
      className="section-padding relative"
      aria-labelledby="blog-heading"
    >
      <div className="container-premium">
        <AnimateIn>
          <SectionHeading
            eyebrow="Blog"
            title="Latest writing"
            description="Notes on AI systems, backend architecture, and shipping modern web products."
          />
        </AnimateIn>

        <AnimateIn delay={0.1}>
          <div className="relative mx-auto mb-10 max-w-md">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search articles…"
              className="pl-10"
              aria-label="Search blog posts"
            />
          </div>
        </AnimateIn>

        <div className="grid gap-6 md:grid-cols-3">
          {filtered.map((post, i) => (
            <AnimateIn key={post.id} delay={0.08 * i}>
              <article className="group flex h-full flex-col overflow-hidden rounded-2xl glass transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-[0_0_28px_rgba(245,158,11,0.12)]">
                <div
                  className="aspect-[16/9] relative overflow-hidden"
                  style={{
                    background: `linear-gradient(135deg, rgba(99,102,241,0.3) ${i * 20}%, rgba(6,182,212,0.2), rgba(245,158,11,0.15))`,
                  }}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="rounded-full border border-white/20 bg-black/30 px-3 py-1 text-xs uppercase tracking-wider backdrop-blur-sm">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <div className="mb-3 flex items-center gap-3 text-xs text-muted">
                    <time dateTime={post.date}>{formatDate(post.date)}</time>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {post.readTime}
                    </span>
                  </div>
                  <h3 className="font-display text-lg font-semibold leading-snug group-hover:text-gradient">
                    {post.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm text-muted leading-relaxed">
                    {post.excerpt}
                  </p>
                  <a
                    href={`#blog`}
                    className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-secondary transition-all group-hover:gap-2"
                    aria-label={`Read more about ${post.title}`}
                  >
                    Read More
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>
              </article>
            </AnimateIn>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="py-12 text-center text-muted">No articles found.</p>
        )}
      </div>
    </section>
  );
}
