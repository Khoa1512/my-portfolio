/**
 * Lightweight i18n primitives.
 *
 * Instead of pulling in a full i18n library (overkill for a single-page,
 * two-language site), content is authored as `Localized` objects and resolved
 * with `t()` at render time based on the active language from LanguageProvider.
 */

export const LANGUAGES = ['en', 'vi'] as const;

export type Lang = (typeof LANGUAGES)[number];

export const DEFAULT_LANG: Lang = 'en';

/** A value that exists in every supported language, e.g. `{ en: 'Hello', vi: 'Xin chào' }`. */
export type Localized<T = string> = Record<Lang, T>;

/** Pick the value for the active language. */
export function t<T>(value: Localized<T>, lang: Lang): T {
  return value[lang];
}

/** Narrowing guard for values coming from `localStorage` / untrusted input. */
export function isLang(value: unknown): value is Lang {
  return value === 'en' || value === 'vi';
}
