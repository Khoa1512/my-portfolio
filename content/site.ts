import type { Localized } from '@/lib/i18n';

/**
 * Single source of truth for identity, links and navigation.
 * Keeping it in `content/` (not scattered in components) makes the site easy to
 * rebrand and keeps components purely presentational.
 */

export type SocialLink = {
  name: string;
  /** lucide-react icon name, resolved in components via an icon map */
  icon: 'Github' | 'Linkedin' | 'Facebook' | 'Instagram';
  href: string;
};

export type NavItem = {
  /** matches the section `id` on the home page (anchor target) */
  id: string;
  label: Localized;
};

export const site = {
  brand: 'Kelvin',
  name: 'Tran Nam Dang Khoa',
  role: {
    en: 'Frontend-focused Fullstack Developer',
    vi: 'Fullstack Developer (thiên Frontend)',
  } satisfies Localized,
  email: 'dangkhoa1512.work@gmail.com',
  phone: '+84 344 117 735',
  location: {
    en: 'Ho Chi Minh City, Vietnam',
    vi: 'TP. Hồ Chí Minh, Việt Nam',
  } satisfies Localized,
  url: 'https://kelvindev-portfolio.vercel.app',
  cvPath: '/CV_TranNamDangKhoa.pdf',
} as const;

export const socials: SocialLink[] = [
  { name: 'GitHub', icon: 'Github', href: 'https://github.com/Khoa1512' },
  {
    name: 'LinkedIn',
    icon: 'Linkedin',
    href: 'https://www.linkedin.com/in/kelvindev1512/',
  },
  {
    name: 'Facebook',
    icon: 'Facebook',
    href: 'https://www.facebook.com/khoaaa152/',
  },
  {
    name: 'Instagram',
    icon: 'Instagram',
    href: 'https://www.instagram.com/khoaaaa__152/',
  },
];

export const navItems: NavItem[] = [
  { id: 'home', label: { en: 'Home', vi: 'Trang chủ' } },
  { id: 'about', label: { en: 'About', vi: 'Giới thiệu' } },
  { id: 'portfolio', label: { en: 'Portfolio', vi: 'Dự án' } },
  { id: 'contact', label: { en: 'Contact', vi: 'Liên hệ' } },
];
