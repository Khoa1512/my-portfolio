import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';

import { Mdx } from '@/components/shared/mdx';
import { Badge } from '@/components/ui/badge';
import { getPost, getPostSlugs } from '@/lib/mdx';


export function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug }));
}


export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return { title: post.title, description: post.description };
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <article className="mx-auto max-w-2xl px-4 py-20 sm:px-6 md:py-28">
      <Link
        href="/blog"
        className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="size-4" />
        Notes
      </Link>

      <header className="mt-6">
        <time className="font-mono text-xs text-muted-foreground">
          {new Date(post.date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
          })}
        </time>
        <h1 className="mt-3 font-heading text-3xl font-bold tracking-tight md:text-4xl">
          {post.title}
        </h1>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {post.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="font-mono text-[11px]">
              {tag}
            </Badge>
          ))}
        </div>
      </header>

      <div className="mt-8">
        <Mdx source={post.content} />
      </div>
    </article>
  );
}
