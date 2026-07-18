import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { getAllPosts } from '@/lib/mdx';

export const metadata: Metadata = {
  title: 'Notes',
  description: 'Short technical write-ups on real-time frontends, maps and Next.js.',
};


export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6 md:py-28">
      <Link
        href="/"
        className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="size-4" />
        Home
      </Link>

      <h1 className="mt-6 font-heading text-4xl font-bold tracking-tight">
        Notes
      </h1>
      <p className="mt-3 text-muted-foreground">
        Short technical write-ups on real-time frontends, maps and Next.js.
      </p>

      <div className="mt-10 space-y-4">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group block rounded-xl border border-border/70 bg-card p-5 transition-colors hover:border-primary/50"
          >
            <div className="flex items-center justify-between">
              <time className="font-mono text-xs text-muted-foreground">
                {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'short',
                  day: 'numeric',
                })}
              </time>
              <ArrowUpRight className="size-4 text-muted-foreground transition-colors group-hover:text-primary" />
            </div>
            <h2 className="mt-3 font-heading text-xl font-bold">{post.title}</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              {post.description}
            </p>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="font-mono text-[11px]">
                  {tag}
                </Badge>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
