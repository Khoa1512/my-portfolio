'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

import { useLanguage } from '@/components/providers/language-provider';
import { LanguageToggle } from '@/components/shared/language-toggle';
import { useActiveSection } from '@/hooks/use-active-section';
import { navItems, site } from '@/content/site';
import { t } from '@/lib/i18n';
import { cn } from '@/lib/utils';

export function Header() {
  const { lang } = useLanguage();
  const [open, setOpen] = useState(false);

  const sectionIds = useMemo(() => navItems.map((item) => item.id), []);
  const active = useActiveSection(sectionIds);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto mt-3 flex h-14 max-w-6xl items-center justify-between rounded-2xl glass px-4 sm:px-5">
        <Link href="/#home" className="font-heading text-lg font-bold tracking-tight">
          {site.brand}
          <span className="text-gradient">.</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.id}
              href={`/#${item.id}`}
              className={cn(
                'rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground',
                active === item.id && 'text-foreground',
              )}
            >
              {t(item.label, lang)}
            </Link>
          ))}
          <Link
            href="/blog"
            className="rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            {lang === 'vi' ? 'Bài viết' : 'Blog'}
          </Link>
        </nav>

        <div className="flex items-center gap-1">
          <LanguageToggle />
          <button
            type="button"
            className="md:hidden rounded-lg p-2 text-foreground"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((prev) => !prev)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {open && (
        <nav className="mx-auto mt-2 max-w-6xl rounded-2xl glass p-3 md:hidden">
          <div className="flex flex-col gap-1">
            {navItems.map((item) => (
              <Link
                key={item.id}
                href={`/#${item.id}`}
                onClick={() => setOpen(false)}
                className={cn(
                  'rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-white/5 hover:text-foreground',
                  active === item.id && 'text-foreground',
                )}
              >
                {t(item.label, lang)}
              </Link>
            ))}
            <Link
              href="/blog"
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-white/5 hover:text-foreground"
            >
              {lang === 'vi' ? 'Bài viết' : 'Blog'}
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
