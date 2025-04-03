"use client"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import type { ThemeProviderProps } from "next-themes"
const ThemeProvider = ({ scriptProps, children }: ThemeProviderProps) => {
  return <NextThemesProvider {...scriptProps}>{children}</NextThemesProvider>;
};

export default ThemeProvider
