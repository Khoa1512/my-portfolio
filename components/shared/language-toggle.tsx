'use client';

import { useLanguage } from '@/components/providers/language-provider';
import { Button } from '@/components/ui/button';

/** Compact EN/VI switch wired to LanguageProvider. */
export function LanguageToggle() {
  const { lang, toggle } = useLanguage();

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggle}
      aria-label={`Switch language (current: ${lang})`}
      className="font-mono text-xs font-semibold tracking-wider"
    >
      <span className={lang === 'en' ? 'text-primary' : 'text-muted-foreground'}>
        EN
      </span>
      <span className="text-muted-foreground/40">/</span>
      <span className={lang === 'vi' ? 'text-primary' : 'text-muted-foreground'}>
        VI
      </span>
    </Button>
  );
}
