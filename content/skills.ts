import type { Localized } from '@/lib/i18n';

export type SkillGroup = {
  id: string;
  title: Localized;
  /** lucide-react icon name, resolved via an icon map in the component */
  icon: string;
  skills: string[];
};

/** Grouped to mirror the CV's "Technical Skills" section. */
export const skillGroups: SkillGroup[] = [
  {
    id: 'frontend',
    title: { en: 'Frontend', vi: 'Frontend' },
    icon: 'Layout',
    skills: [
      'React',
      'Next.js (App Router)',
      'TypeScript',
      'JavaScript (ES6+)',
      'TailwindCSS',
      'Radix UI / shadcn/ui',
      'HTML5 / CSS3',
    ],
  },
  {
    id: 'realtime-maps',
    title: { en: 'Real-time & Maps', vi: 'Real-time & Bản đồ' },
    icon: 'Radar',
    skills: ['SignalR / WebSocket', 'LiveKit (WebRTC)', 'Cesium', 'deck.gl', 'MapLibre GL', 'Turf.js'],
  },
  {
    id: 'state-data',
    title: { en: 'State & Data', vi: 'State & Dữ liệu' },
    icon: 'Database',
    skills: ['TanStack Query', 'TanStack Table', 'React Hook Form', 'Zod', 'SWR'],
  },
  {
    id: 'mobile',
    title: { en: 'Mobile', vi: 'Mobile' },
    icon: 'Smartphone',
    skills: ['React Native', 'Flutter (basic)'],
  },
  {
    id: 'backend',
    title: { en: 'Backend', vi: 'Backend' },
    icon: 'Server',
    skills: ['ASP.NET Core (C#)', 'RESTful APIs', 'JWT / OAuth2', 'Python (basic)'],
  },
  {
    id: 'infra',
    title: { en: 'Database & Infra', vi: 'Database & Hạ tầng' },
    icon: 'Boxes',
    skills: ['SQL Server', 'PostgreSQL', 'Redis', 'Docker (basic)'],
  },
  {
    id: 'tools',
    title: { en: 'Tools & Workflow', vi: 'Công cụ & Quy trình' },
    icon: 'Wrench',
    skills: ['Git / GitHub / GitLab', 'Agile / Scrum', 'AI-assisted dev', 'Vercel'],
  },
];
