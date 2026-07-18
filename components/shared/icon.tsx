import {
  ArrowDown,
  ArrowUpRight,
  Boxes,
  Database,
  Download,
  ExternalLink,
  Facebook,
  FileText,
  Github,
  Instagram,
  Layout,
  Linkedin,
  Lock,
  Mail,
  MapPin,
  Phone,
  Radar,
  Server,
  Smartphone,
  Wrench,
  type LucideIcon,
} from 'lucide-react';

/**
 * Curated icon registry.
 *
 * Content files reference icons by *name* (a plain string, so the data stays
 * serializable and framework-agnostic). We map those names to components here
 * instead of importing all of lucide-react, which keeps the bundle small.
 */
const registry = {
  ArrowDown,
  ArrowUpRight,
  Boxes,
  Database,
  Download,
  ExternalLink,
  Facebook,
  FileText,
  Github,
  Instagram,
  Layout,
  Linkedin,
  Lock,
  Mail,
  MapPin,
  Phone,
  Radar,
  Server,
  Smartphone,
  Wrench,
} satisfies Record<string, LucideIcon>;

export type IconName = keyof typeof registry;

export function Icon({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const Component = registry[name as IconName];
  if (!Component) return null;
  return <Component className={className} aria-hidden />;
}
