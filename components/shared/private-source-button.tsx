'use client';

import { useEffect, useState } from 'react';
import { Github, Info } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

import { useLanguage } from '@/components/providers/language-provider';
import { dict } from '@/content/dictionary';
import { t } from '@/lib/i18n';


export function PrivateSourceButton({ className }: { className?: string }) {
  const { lang } = useLanguage();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={className}
      >
        <Github className="size-4" />
        {t(dict.sourceCode, lang)}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
          >
            <button
              type="button"
              aria-label="Close"
              className="absolute inset-0 bg-black/70 backdrop-blur-sm"
              onClick={() => setOpen(false)}
            />
            <motion.div
              role="dialog"
              aria-modal="true"
              className="relative w-full max-w-sm rounded-2xl glass bg-background/95 p-8 text-center"
              initial={{ opacity: 0, scale: 0.95, y: 8 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 8 }}
              transition={{ duration: 0.18, ease: 'easeOut' }}
            >
              <span className="mx-auto flex size-14 items-center justify-center rounded-full border border-white/15 text-foreground">
                <Info className="size-6" />
              </span>
              <h3 className="mt-4 font-heading text-lg font-bold">
                {t(dict.privateSourceTitle, lang)}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {t(dict.privateSourceDesc, lang)}
              </p>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="mt-6 w-full rounded-lg bg-white/10 px-4 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-white/20"
              >
                {t(dict.understand, lang)}
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
