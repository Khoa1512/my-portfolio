'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ExternalLink, Lock } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

import { useLanguage } from '@/components/providers/language-provider';
import { Icon } from '@/components/shared/icon';
import { SectionHeading } from '@/components/shared/section-heading';
import { Badge } from '@/components/ui/badge';
import { dict } from '@/content/dictionary';
import { experiences } from '@/content/experience';
import { projects, type Project } from '@/content/projects';
import { skillGroups } from '@/content/skills';
import { t } from '@/lib/i18n';
import { cn } from '@/lib/utils';

type TabId = 'projects' | 'experience' | 'tech';

export function Showcase() {
  const { lang } = useLanguage();
  const [tab, setTab] = useState<TabId>('projects');

  const tabs: { id: TabId; label: string }[] = [
    { id: 'projects', label: t(dict.tabProjects, lang) },
    { id: 'experience', label: t(dict.tabExperience, lang) },
    { id: 'tech', label: t(dict.tabTechStack, lang) },
  ];

  return (
    <section id="portfolio" className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
      <SectionHeading
        title={t(dict.portfolioTitle, lang)}
        subtitle={t(dict.portfolioSubtitle, lang)}
      />

      {/* Tab switcher */}
      <div className="mx-auto mb-10 flex w-fit gap-1 rounded-2xl glass p-1">
        {tabs.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setTab(item.id)}
            className={cn(
              'relative rounded-xl px-4 py-2 text-sm font-medium transition-colors sm:px-6',
              tab === item.id
                ? 'text-white'
                : 'text-muted-foreground hover:text-foreground',
            )}
          >
            {tab === item.id && (
              <motion.span
                layoutId="tab-pill"
                className="absolute inset-0 rounded-xl bg-gradient-to-r from-white/80 to-gray-300"
                transition={{ type: 'spring', duration: 0.4 }}
              />
            )}
            <span className="relative z-10">{item.label}</span>
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={tab}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.25 }}
        >
          {tab === 'projects' && <ProjectsTab />}
          {tab === 'experience' && <ExperienceTab />}
          {tab === 'tech' && <TechTab />}
        </motion.div>
      </AnimatePresence>
    </section>
  );
}

function ProjectsTab() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const { lang } = useLanguage();
  const liveLink = project.links.find((link) => link.type === 'live');

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl glass transition-all hover:-translate-y-1 hover:bg-white/[0.07]">
      <div className="relative aspect-[16/9] overflow-hidden border-b border-white/10">
        {project.image ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex size-full items-center justify-center bg-gradient-to-br from-white/10 via-white/5 to-transparent">
            <span className="font-heading text-6xl font-bold text-white/15">
              {project.title.charAt(0)}
            </span>
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-heading text-lg font-bold">{project.title}</h3>
        <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">
          {t(project.summary, lang)}
        </p>

        <div className="mt-5 flex items-center justify-between gap-4 border-t border-white/10 pt-4">
          {liveLink ? (
            <a
              href={liveLink.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground transition-colors hover:text-primary"
            >
              <ExternalLink className="size-4" />
              {t(dict.liveDemo, lang)}
            </a>
          ) : (
            <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
              <Lock className="size-3.5" />
              {t(dict.confidential, lang)}
            </span>
          )}

          <Link
            href={`/projects/${project.id}`}
            className="inline-flex items-center gap-1.5 rounded-lg bg-white/5 px-3 py-1.5 text-sm font-medium text-foreground transition-colors hover:bg-white/10"
          >
            {t(dict.details, lang)}
            <ArrowRight className="size-3.5" />
          </Link>
        </div>
      </div>
    </article>
  );
}

function ExperienceTab() {
  const { lang } = useLanguage();

  return (
    <div className="relative space-y-8 border-l border-white/10 pl-6 md:pl-10">
      {experiences.map((exp) => (
        <article key={exp.id} className="relative rounded-2xl glass p-6">
          <span className="absolute -left-[31px] top-8 size-3 rounded-full border-2 border-primary bg-background md:-left-[47px]" />
          <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
            <h3 className="font-heading text-xl font-bold">{t(exp.role, lang)}</h3>
            <span className="font-mono text-xs text-muted-foreground">
              {t(exp.period, lang)}
            </span>
          </div>
          <p className="mt-0.5 text-sm font-medium text-primary">{exp.company}</p>
          <p className="mt-3 text-muted-foreground">{t(exp.summary, lang)}</p>
          <ul className="mt-4 space-y-2">
            {exp.highlights.map((highlight, j) => (
              <li key={j} className="flex gap-3 text-sm text-muted-foreground">
                <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary/70" />
                <span>{t(highlight, lang)}</span>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex flex-wrap gap-2">
            {exp.tech.map((tech) => (
              <Badge key={tech} variant="secondary" className="font-mono">
                {tech}
              </Badge>
            ))}
          </div>
        </article>
      ))}
    </div>
  );
}

function TechTab() {
  const { lang } = useLanguage();

  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {skillGroups.map((group) => (
        <div key={group.id} className="h-full rounded-2xl glass p-5">
          <div className="flex items-center gap-3">
            <span className="flex size-10 items-center justify-center rounded-xl bg-white/10 text-primary">
              <Icon name={group.icon} className="size-5" />
            </span>
            <h3 className="font-heading font-semibold">{t(group.title, lang)}</h3>
          </div>
          <ul className="mt-4 flex flex-wrap gap-2">
            {group.skills.map((skill) => (
              <li
                key={skill}
                className="rounded-lg bg-white/5 px-2.5 py-1 text-xs text-muted-foreground"
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
