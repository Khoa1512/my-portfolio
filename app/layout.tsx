import type { Metadata } from "next";
import type React from "react";
import { Mona_Sans as FontSans } from "next/font/google";
import { Content as FontHeading } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";


import { cn } from "@/lib/utils";
import "./globals.css";

import ThemeProvider from '@/components/ThemeProvider';
import Header from '@/components/Header';
import Footer from '@/components/Footer';




const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const fontHeading = FontHeading({
  subsets: ["khmer"],
  weight: ["400", "700"],
  variable: "--font-heading",
});

export const metadata = {
  title: "Portfolio - Final Year Student",
  description: "A portfolio website showcasing my skills and projects",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen gradient-bg font-sans antialiased",
          fontSans.variable,
          fontHeading.variable
        )}
      >
        <ThemeProvider
          attribute='class'
          defaultTheme='light'
          enableSystem
          disableTransitionOnChange
        >
        <div className='relative flex min-h-screen flex-col'>
          <Header />
          <div className='flex-1'>{children}</div>
          <Toaster/>
          <Footer />
        </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
