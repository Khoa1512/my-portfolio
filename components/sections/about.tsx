'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Download } from 'lucide-react';

import { useLanguage } from '@/components/providers/language-provider';
import { Reveal } from '@/components/shared/reveal';
import { SectionHeading } from '@/components/shared/section-heading';
import { about } from '@/content/profile';
import { dict } from '@/content/dictionary';
import { site } from '@/content/site';
import { t } from '@/lib/i18n';

export function About() {
  const { lang } = useLanguage();

  return (
    <section id="about" className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
      <SectionHeading
        title={t(dict.aboutTitle, lang)}
        subtitle={t(dict.aboutSubtitle, lang)}
      />

      <div className="grid items-center gap-10 md:grid-cols-[320px_1fr] md:gap-14">
        {/* Photo with gradient glow */}
        <Reveal className="mx-auto w-full max-w-[320px]">
          <div className="relative">
            <div className="absolute -inset-3 rounded-3xl bg-gradient-to-tr from-white/10 to-white/5 blur-2xl" />
            <div className="relative aspect-square overflow-hidden rounded-3xl glass">
              <Image
                src="/aboutdangkhoa.jpg"
                alt={site.name}
                fill
                sizes="320px"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="space-y-6">
          <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">
            {about.paragraphs.map((paragraph, i) => (
              <p key={i}>{t(paragraph, lang)}</p>
            ))}
          </div>

          {/* Glass stat cards */}
          <div className="grid grid-cols-3 gap-3 sm:gap-4">
            {about.stats.map((stat) => (
              <div key={stat.value} className="rounded-2xl glass p-4 text-center">
                <div className="font-heading text-2xl font-bold text-gradient sm:text-3xl">
                  {stat.value}
                </div>
                <div className="mt-1 text-xs text-muted-foreground">
                  {t(stat.label, lang)}
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href={site.cvPath}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-2.5 text-sm font-semibold text-black shadow-lg shadow-white/10 transition-transform hover:scale-[1.03]"
            >
              <Download className="size-4" />
              {t(dict.downloadCV, lang)}
            </a>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 rounded-xl glass px-5 py-2.5 text-sm font-semibold transition-colors hover:bg-white/10"
            >
              {t(dict.getInTouch, lang)}
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
