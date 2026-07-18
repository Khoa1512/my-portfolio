import fs from 'node:fs';
import path from 'node:path';

import matter from 'gray-matter';

/**
 * Tiny file-based content layer for the blog.
 *
 * Posts are `.mdx` files in `content/posts` with YAML frontmatter. These helpers
 * run only on the server (they touch the filesystem), so they're safe to call
 * from Server Components / generateStaticParams without leaking `fs` to the client.
 */

const POSTS_DIR = path.join(process.cwd(), 'content', 'posts');

export type PostMeta = {
  slug: string;
  title: string;
  description: string;
  /** ISO date string */
  date: string;
  tags: string[];
};

export type Post = PostMeta & { content: string };

function readPostFile(slug: string) {
  const fullPath = path.join(POSTS_DIR, `${slug}.mdx`);
  const raw = fs.readFileSync(fullPath, 'utf8');
  return matter(raw);
}

function toMeta(slug: string, data: Record<string, unknown>): PostMeta {
  return {
    slug,
    title: String(data.title ?? slug),
    description: String(data.description ?? ''),
    date: String(data.date ?? ''),
    tags: Array.isArray(data.tags) ? (data.tags as string[]) : [],
  };
}

export function getAllPosts(): PostMeta[] {
  if (!fs.existsSync(POSTS_DIR)) return [];

  return fs
    .readdirSync(POSTS_DIR)
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => {
      const slug = file.replace(/\.mdx$/, '');
      const { data } = readPostFile(slug);
      return toMeta(slug, data);
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostSlugs(): string[] {
  return getAllPosts().map((post) => post.slug);
}

export function getPost(slug: string): Post | null {
  try {
    const { data, content } = readPostFile(slug);
    return { ...toMeta(slug, data), content };
  } catch {
    return null;
  }
}
