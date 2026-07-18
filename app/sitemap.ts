import type { MetadataRoute } from 'next';

import { site } from '@/content/site';
import { projects } from '@/content/projects';
import { getAllPosts } from '@/lib/mdx';

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts().map((post) => ({
    url: `${site.url}/blog/${post.slug}`,
    lastModified: new Date(post.date),
  }));

  const projectEntries = projects.map((project) => ({
    url: `${site.url}/projects/${project.id}`,
    lastModified: new Date(),
  }));

  return [
    { url: site.url, lastModified: new Date() },
    { url: `${site.url}/blog`, lastModified: new Date() },
    ...posts,
    ...projectEntries,
  ];
}
