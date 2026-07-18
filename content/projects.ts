import type { Localized } from '@/lib/i18n';

export type ProjectLink = {
  type: 'live' | 'source';
  href: string;
};

export type Project = {
  id: string;
  title: string;
  /** short tagline shown under the title */
  summary: Localized;
  role: Localized;
  period: Localized;
  highlights: Localized[];
  tech: string[];
  links: ProjectLink[];
  /** true when the source repo is private (shows a GitHub button that explains why, instead of a dead link) */
  sourcePrivate?: boolean;
  /** optional screenshot in /public; falls back to a styled placeholder */
  image?: string;
  /** extra UI/UX screenshots in /public, shown in a gallery on the detail page — useful when there's no public live demo (sign-in gated systems, native apps) */
  screenshots?: string[];
};

export const projects: Project[] = [
  {
    id: 'drone-platform',
    title: 'Real-time Fleet Management Platform',
    summary: {
      en: 'Live fleet management system for drones, with real-time tracking, 2D/3D maps and video streaming.',
      vi: 'Hệ thống quản lý đội drone real-time, với theo dõi trực tiếp, bản đồ 2D/3D và streaming video.',
    },
    role: { en: 'Web Frontend Developer (1 of 4 engineers)', vi: 'Frontend Web (1 trong 4 kỹ sư)' },
    period: { en: '2025 — Present', vi: '2025 — Hiện tại' },
    highlights: [
      {
        en: 'Owned the full web architecture end-to-end, from component design to deployment.',
        vi: 'Sở hữu toàn bộ kiến trúc web end-to-end, từ thiết kế component đến deployment.',
      },
      {
        en: 'Real-time telemetry over SignalR with adaptive buffering + position smoothing for unstable GPS.',
        vi: 'Telemetry real-time qua SignalR với buffering thích ứng + làm mượt vị trí cho GPS chập chờn.',
      },
      {
        en: 'Interactive 2D/3D maps (Cesium, deck.gl, MapLibre) and LiveKit WebRTC video; multi-tenant RBAC.',
        vi: 'Bản đồ 2D/3D tương tác (Cesium, deck.gl, MapLibre) và video WebRTC LiveKit; RBAC đa tenant.',
      },
    ],
    tech: [
      'Next.js',
      'TypeScript',
      'SignalR',
      'Cesium',
      'deck.gl',
      'MapLibre GL',
      'LiveKit',
      'TanStack Query',
    ],
    links: [{ type: 'live', href: 'https://rustsuite.rustechs.com/signin' }],
    sourcePrivate: true,
    image: '/rustsuite/rustsuite-01.jpg',
    screenshots: [
      '/rustsuite/rustsuite-01.jpg',
      '/rustsuite/rustsuite-02.jpg',
      '/rustsuite/rustsuite-03.jpg',
      '/rustsuite/rustsuite-04.jpg',
      '/rustsuite/rustsuite-05.jpg',
      '/rustsuite/rustsuite-06.jpg',
      '/rustsuite/rustsuite-07.jpg',
      '/rustsuite/rustsuite-08.jpg',
      '/rustsuite/rustsuite-09.jpg',
      '/rustsuite/rustsuite-10.jpg',
      '/rustsuite/rustsuite-11.jpg',
      '/rustsuite/rustsuite-12.jpg',
      '/rustsuite/rustsuite-13.jpg',
      '/rustsuite/rustsuite-14.jpg',
      '/rustsuite/rustsuite-15.jpg',
    ],
  },
  {
    id: 'rustechs-landing',
    title: 'Rustechs Corporate Landing Page',
    summary: {
      en: 'Public marketing site for Rustech\'s UAV systems — hero, product showcase, solutions grid and CTA sections.',
      vi: 'Trang landing page giới thiệu hệ thống UAV của Rustech — hero, giới thiệu sản phẩm, lưới giải pháp và các CTA.',
    },
    role: { en: 'Web Frontend Developer', vi: 'Frontend Web' },
    period: { en: '2025 — Present', vi: '2025 — Hiện tại' },
    highlights: [
      {
        en: 'Built the public marketing site for Rustech\'s UAV/drone fleet systems, covering hero, product showcase, a solutions grid segmented by audience, and CTA sections.',
        vi: 'Xây trang marketing công khai giới thiệu hệ thống UAV/drone của Rustech, gồm hero, giới thiệu sản phẩm, lưới giải pháp phân theo đối tượng, và các CTA.',
      },
      {
        en: 'Implemented responsive layouts and scroll-based animations with Framer Motion for a polished, motion-rich brand presentation.',
        vi: 'Xây layout responsive và animation theo scroll bằng Framer Motion để tạo trải nghiệm thương hiệu mượt mà, có chiều sâu.',
      },
      {
        en: 'Optimized images and Core Web Vitals with Next.js Image and static generation for fast load on marketing traffic.',
        vi: 'Tối ưu hình ảnh và Core Web Vitals bằng Next.js Image và static generation để tải nhanh cho traffic marketing.',
      },
    ],
    tech: ['Next.js', 'TypeScript', 'TailwindCSS', 'Framer Motion'],
    links: [{ type: 'live', href: 'https://www.rustechs.com/' }],
    sourcePrivate: true,
    image: '/rustechs/rustechs-01.jpg',
  },
  {
    id: 'gcs',
    title: 'Ground Control Station (GCS)',
    summary: {
      en: 'Cross-platform desktop & mobile app for real-time drone monitoring and control over MAVLink.',
      vi: 'App desktop & mobile đa nền tảng để giám sát và điều khiển drone real-time qua MAVLink.',
    },
    role: { en: 'Flutter Developer', vi: 'Flutter Developer' },
    period: { en: '2025', vi: '2025' },
    highlights: [
      {
        en: 'Self-taught Flutter to build the app; integrated MAVLink over USB/serial telemetry radio.',
        vi: 'Tự học Flutter để xây app; tích hợp MAVLink qua telemetry radio USB/serial.',
      },
      {
        en: 'Real-time dashboards (attitude, GPS, battery) with live charts and offline map tile caching.',
        vi: 'Dashboard real-time (attitude, GPS, pin) với biểu đồ trực tiếp và cache tile bản đồ offline.',
      },
      {
        en: 'Live video, mission planning and text-to-speech voice alerts; synced with the cloud platform.',
        vi: 'Video trực tiếp, lập kế hoạch nhiệm vụ và cảnh báo giọng nói TTS; đồng bộ với nền tảng cloud.',
      },
    ],
    tech: ['Flutter', 'Dart', 'MAVLink', 'WebSocket', 'MQTT'],
    links: [],
    sourcePrivate: true,
  },
  {
    id: 'freelance-work',
    title: 'Freelance Client Work',
    summary: {
      en: '4 responsive marketing sites & dashboards on Next.js, plus a React Native POS app.',
      vi: '4 website marketing & dashboard responsive trên Next.js, cùng một app POS React Native.',
    },
    role: { en: 'Web & Mobile Developer', vi: 'Web & Mobile Developer' },
    period: { en: '2024 — 2025', vi: '2024 — 2025' },
    highlights: [
      {
        en: 'Shipped client websites and landing pages to production on Vercel.',
        vi: 'Đưa website và landing page khách hàng lên production trên Vercel.',
      },
      {
        en: 'Built a React Native POS app handling sales orders and inventory.',
        vi: 'Xây app POS React Native xử lý đơn hàng và quản lý kho.',
      },
    ],
    tech: ['Next.js', 'React Native', 'TypeScript', 'TailwindCSS'],
    links: [{ type: 'live', href: 'https://yoga-lyart.vercel.app/' }],
    image: '/yoga.png',
  },
];
