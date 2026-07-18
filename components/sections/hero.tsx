'use client';

import { useMemo } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Sparkles } from 'lucide-react';

import { useLanguage } from '@/components/providers/language-provider';
import { Icon } from '@/components/shared/icon';
import { Typewriter } from '@/components/shared/typewriter';
import { dict } from '@/content/dictionary';
import { hero } from '@/content/profile';
import { site, socials } from '@/content/site';
import { t } from '@/lib/i18n';

// Physics lanyard is heavy + client-only → lazy load, never SSR.
const Lanyard = dynamic(() => import('@/components/three/lanyard'), {
  ssr: false,
  loading: () => null,
});

const HERO_TECH = ['React', 'Next.js', 'TypeScript', 'TailwindCSS', 'Three.js'];

export function Hero() {
  const { lang } = useLanguage();

  // Stable array for the typewriter (resets only when language changes).
  const roleWords = useMemo(
    () => hero.roles.map((role) => t(role, lang)),
    [lang],
  );

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-24 pb-16"
    >
      <div className="mx-auto grid w-full max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 relative z-10 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center lg:text-left pointer-events-auto"
        >
          <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium">
            <Sparkles className="size-3.5 text-primary" />
            {t(dict.openToWork, lang)}
          </span>

          <h1 className="mt-6 font-heading text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl">
            <span className="block text-foreground">Hi, I&apos;m</span>
            <span className="block text-gradient">{site.name}</span>
          </h1>

          <p className="mt-4 font-mono text-lg text-muted-foreground sm:text-xl">
            <Typewriter words={roleWords} />
          </p>

          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted-foreground lg:mx-0">
            {t(hero.tagline, lang)}
          </p>

          {/* Tech pills */}
          <div className="mt-6 flex flex-wrap justify-center gap-2 lg:justify-start">
            {HERO_TECH.map((tech) => (
              <span
                key={tech}
                className="rounded-lg glass px-3 py-1 font-mono text-xs text-muted-foreground"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
            <Link
              href="/#portfolio"
              className="group inline-flex items-center gap-2 rounded-xl bg-white px-5 py-2.5 text-sm font-semibold text-black shadow-lg shadow-white/10 transition-transform hover:scale-[1.03]"
            >
              {t(dict.viewWork, lang)}
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <a
              href={site.cvPath}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl glass px-5 py-2.5 text-sm font-semibold transition-colors hover:bg-white/10"
            >
              <Download className="size-4" />
              {t(dict.downloadCV, lang)}
            </a>

            <div className="flex items-center gap-1">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.name}
                  className="rounded-full p-2 text-muted-foreground transition-colors hover:bg-white/10 hover:text-foreground"
                >
                  <Icon name={social.icon} className="size-5" />
                </a>
              ))}
            </div>
          </div>
        </motion.div>

      </div>

      {/* Draggable physics lanyard — absolutely positioned, shifted right to place the card in the right column, while maintaining a huge canvas width for dragging */}
      <div className="absolute top-0 right-[-20vw] h-full w-[100vw] z-0 hidden lg:block">
        <Lanyard position={[0, 0, 16]} gravity={[0, -40, 0]} frontImage="/dangkhoa.jpg" backImage="/dangkhoa.jpg" lanyardWidth={0.7} />
      </div>
    </section>
  );
}
