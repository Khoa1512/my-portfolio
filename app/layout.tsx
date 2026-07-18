import type { Metadata } from 'next';
import {
  JetBrains_Mono,
  Mona_Sans,
  Space_Grotesk,
} from 'next/font/google';

import { Footer } from '@/components/layout/footer';
import { Header } from '@/components/layout/header';
import { AnimatedBackground } from '@/components/shared/animated-background';
import { LanguageProvider } from '@/components/providers/language-provider';
import { SmoothScroll } from '@/components/providers/smooth-scroll';
import { ThemeProvider } from '@/components/providers/theme-provider';
import { Toaster } from '@/components/ui/sonner';
import { site } from '@/content/site';
import { cn } from '@/lib/utils';

import './globals.css';

// next/font self-hosts these at build time (no layout shift, no extra request).
// Each exposes a CSS variable consumed by the @theme block in globals.css.
const fontSans = Mona_Sans({ subsets: ['latin'], variable: '--font-sans-google' });
const fontHeading = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-heading-google',
});
const fontMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono-google',
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.role.en}`,
    template: `%s · ${site.name}`,
  },
  description:
    'Frontend-focused fullstack developer building real-time web & mobile products: live tracking maps, streaming dashboards and clean, scalable frontends with React, Next.js and TypeScript.',
  keywords: [
    'Tran Nam Dang Khoa',
    'Fullstack Developer',
    'Frontend Developer',
    'React',
    'Next.js',
    'TypeScript',
    'Real-time',
    'Portfolio',
  ],
  authors: [{ name: site.name, url: site.url }],
  openGraph: {
    type: 'website',
    url: site.url,
    title: `${site.name} — ${site.role.en}`,
    description:
      'Real-time web & mobile products with React, Next.js and TypeScript.',
    siteName: site.name,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${site.name} — ${site.role.en}`,
    description:
      'Real-time web & mobile products with React, Next.js and TypeScript.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // suppressHydrationWarning: next-themes sets the `class` on <html> before
    // React hydrates, which would otherwise trip a mismatch warning.
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={cn(
          'min-h-screen font-sans',
          fontSans.variable,
          fontHeading.variable,
          fontMono.variable,
        )}
      >
        <ThemeProvider
          attribute="class"
          forcedTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <LanguageProvider>
            <SmoothScroll>
              <AnimatedBackground />
              <div className="relative flex min-h-screen flex-col">
                <Header />
                <main className="flex-1">{children}</main>
                <Footer />
              </div>
              <Toaster richColors position="top-center" />
            </SmoothScroll>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
