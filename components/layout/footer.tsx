'use client';

import { useLanguage } from '@/components/providers/language-provider';
import { Icon } from '@/components/shared/icon';
import { dict } from '@/content/dictionary';
import { site, socials } from '@/content/site';
import { t } from '@/lib/i18n';

export function Footer() {
  const { lang } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border/60 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 sm:px-6 md:flex-row">
        <div className="text-center md:text-left">
          <p className="text-sm text-muted-foreground">
            © {year} {site.name}. {t(dict.rights, lang)}
          </p>
          <p className="mt-1 font-mono text-xs text-muted-foreground/70">
            {t(dict.builtWith, lang)}
          </p>
        </div>

        <div className="flex items-center gap-3">
          {socials.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              aria-label={social.name}
              className="rounded-full p-2 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
            >
              <Icon name={social.icon} className="size-5" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
