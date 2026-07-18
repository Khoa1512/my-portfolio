import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { ProjectDetail } from '@/components/sections/project-detail';
import { projects } from '@/content/projects';

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.id === slug);
  if (!project) return {};
  return { title: project.title, description: project.summary.en };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.id === slug);
  if (!project) notFound();

  return <ProjectDetail project={project} />;
}
