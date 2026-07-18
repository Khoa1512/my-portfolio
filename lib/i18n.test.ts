import { describe, expect, it } from 'vitest';

import { isLang, t, type Localized } from '@/lib/i18n';

describe('i18n', () => {
  const greeting: Localized = { en: 'Hello', vi: 'Xin chào' };

  it('t() resolves the value for the active language', () => {
    expect(t(greeting, 'en')).toBe('Hello');
    expect(t(greeting, 'vi')).toBe('Xin chào');
  });

  it('isLang() accepts supported codes and rejects others', () => {
    expect(isLang('en')).toBe(true);
    expect(isLang('vi')).toBe(true);
    expect(isLang('fr')).toBe(false);
    expect(isLang(null)).toBe(false);
    expect(isLang(undefined)).toBe(false);
  });
});
