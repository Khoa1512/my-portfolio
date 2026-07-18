'use client';

import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowLeft,
  ChevronRight,
  Code2,
  ExternalLink,
  Github,
  Layers,
  Lock,
  Star,
} from 'lucide-react';

import { useLanguage } from '@/components/providers/language-provider';
import { PrivateSourceButton } from '@/components/shared/private-source-button';
import { Reveal } from '@/components/shared/reveal';
import { ScreenshotGallery } from '@/components/shared/screenshot-gallery';
import { Badge } from '@/components/ui/badge';
import { dict } from '@/content/dictionary';
import type { Project } from '@/content/projects';
import { t } from '@/lib/i18n';

export function ProjectDetail({ project }: { project: Project }) {
  const { lang } = useLanguage();
  const liveLink = project.links.find((link) => link.type === 'live');
  const sourceLink = project.links.find((link) => link.type === 'source');

  return (
    <article className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-28">
      <Reveal>
        <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
          <Link
            href="/#portfolio"
            className="inline-flex items-center gap-1.5 transition-colors hover:text-foreground"
          >
            <ArrowLeft className="size-4" />
            {t(dict.back, lang)}
          </Link>
          <ChevronRight className="size-3.5" />
          <Link href="/#portfolio" className="transition-colors hover:text-foreground">
            {t(dict.tabProjects, lang)}
          </Link>
          <ChevronRight className="size-3.5" />
          <span className="text-foreground">{project.title}</span>
        </div>
      </Reveal>

      <div className="mt-8 grid gap-10 lg:grid-cols-2 lg:items-start">
        <Reveal delay={0.05}>
          <h1 className="font-heading text-3xl font-bold tracking-tight md:text-4xl">
            {project.title}
          </h1>
          <div className="mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-white/80 to-transparent" />

          <p className="mt-6 text-muted-foreground">{t(project.summary, lang)}</p>

          <div className="mt-6 grid grid-cols-2 gap-3">
            <div className="flex items-center gap-3 rounded-2xl glass p-4">
              <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-white/10 text-primary">
                <Code2 className="size-4" />
              </span>
              <div>
                <p className="font-heading text-xl font-bold">{project.tech.length}</p>
                <p className="text-xs text-muted-foreground">{t(dict.statTech, lang)}</p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-2xl glass p-4">
              <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-white/10 text-primary">
                <Layers className="size-4" />
              </span>
              <div>
                <p className="font-heading text-xl font-bold">
                  {project.highlights.length}
                </p>
                <p className="text-xs text-muted-foreground">{t(dict.statFeatures, lang)}</p>
              </div>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            {liveLink && (
              <a
                href={liveLink.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 rounded-lg bg-white/10 px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-white/20"
              >
                <ExternalLink className="size-4" />
                {t(dict.liveDemo, lang)}
              </a>
            )}
            {sourceLink && (
              <a
                href={sourceLink.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 rounded-lg bg-white/5 px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-white/10"
              >
                <Github className="size-4" />
                {t(dict.sourceCode, lang)}
              </a>
            )}
            {!sourceLink && project.sourcePrivate && (
              <PrivateSourceButton className="inline-flex items-center gap-1.5 rounded-lg bg-white/5 px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-white/10" />
            )}
            {!liveLink && !sourceLink && !project.sourcePrivate && (
              <span className="inline-flex items-center gap-1.5 rounded-lg bg-white/5 px-3 py-2 text-sm text-muted-foreground">
                <Lock className="size-4" />
                {t(dict.confidential, lang)}
              </span>
            )}
          </div>

          <div className="mt-8">
            <h2 className="flex items-center gap-2 font-heading text-sm font-semibold">
              <Code2 className="size-4 text-primary" />
              {t(dict.technologiesUsed, lang)}
            </h2>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {project.tech.map((tech) => (
                <Badge key={tech} variant="secondary" className="font-mono text-[11px]">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="relative aspect-video overflow-hidden rounded-2xl border border-white/10">
            {project.image ? (
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            ) : (
              <div className="flex size-full items-center justify-center bg-gradient-to-br from-white/10 via-white/5 to-transparent">
                <span className="font-heading text-7xl font-bold text-white/15">
                  {project.title.charAt(0)}
                </span>
              </div>
            )}
          </div>

          <div className="mt-6 rounded-2xl glass p-6">
            <h2 className="flex items-center gap-2 font-heading text-sm font-semibold">
              <Star className="size-4 text-primary" />
              {t(dict.keyFeatures, lang)}
            </h2>
            <ul className="mt-4 space-y-3">
              {project.highlights.map((highlight, j) => (
                <li key={j} className="flex gap-2.5 text-sm text-muted-foreground">
                  <span className="mt-1.5 size-1 shrink-0 rounded-full bg-primary/70" />
                  <span>{t(highlight, lang)}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>

      {project.screenshots && project.screenshots.length > 0 && (
        <Reveal delay={0.1} className="mt-16">
          <h2 className="flex items-center gap-2 font-heading text-sm font-semibold">
            <Layers className="size-4 text-primary" />
            {t(dict.screenshots, lang)}
          </h2>
          <div className="mt-4">
            <ScreenshotGallery images={project.screenshots} alt={project.title} />
          </div>
        </Reveal>
      )}
    </article>
  );
}
