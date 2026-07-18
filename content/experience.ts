import type { Localized } from '@/lib/i18n';

export type Experience = {
  id: string;
  company: string;

  role: Localized;
  period: Localized;
  summary: Localized;
  highlights: Localized[];
  tech: string[];
};

export const experiences: Experience[] = [
  {
    id: 'rustech',
    company: 'Rustech JSC',
    role: {
      en: 'Fullstack Developer — UAV / Robotics',
      vi: 'Fullstack Developer — UAV / Robotics',
    },
    period: { en: 'Nov 2025 — Present', vi: 'Th11 2025 — Hiện tại' },
    summary: {
      en: 'As one of 4 engineers at an early-stage startup, built a real-time fleet management platform for drones — I own the web frontend end-to-end, plus a cross-platform Ground Control Station app, synced through the cloud into one ground-to-cloud ecosystem.',
      vi: 'Là 1 trong 4 kỹ sư tại một startup giai đoạn đầu, xây nền tảng quản lý đội drone real-time — tôi phụ trách frontend web end-to-end, cùng app Ground Control Station đa nền tảng, đồng bộ qua cloud thành một hệ sinh thái ground-to-cloud.',
    },
    highlights: [
      {
        en: 'Built a real-time telemetry pipeline over SignalR (WebSocket) driving live tracking maps, with adaptive buffering and position smoothing to stay stable under unstable GPS.',
        vi: 'Xây pipeline telemetry real-time qua SignalR (WebSocket) cho bản đồ theo dõi trực tiếp, với buffering thích ứng và làm mượt vị trí để ổn định khi GPS chập chờn.',
      },
      {
        en: 'Developed interactive 2D/3D map visualization (Cesium, deck.gl, MapLibre GL) for live vehicle tracking and route/mission planning.',
        vi: 'Phát triển trực quan hoá bản đồ 2D/3D tương tác (Cesium, deck.gl, MapLibre GL) cho theo dõi phương tiện và lập kế hoạch tuyến/nhiệm vụ.',
      },
      {
        en: 'Integrated LiveKit (WebRTC) for low-latency live video from drone feeds, and built multi-tenant RBAC with subscription-based feature gating.',
        vi: 'Tích hợp LiveKit (WebRTC) cho video trực tiếp độ trễ thấp từ drone, xây RBAC đa tenant với feature gating theo gói đăng ký.',
      },
      {
        en: 'Architected reusable UI infrastructure (data tables, dynamic forms, server-state) with TanStack Table/Query + React Hook Form + Zod, standardizing 15+ modules.',
        vi: 'Thiết kế hạ tầng UI tái sử dụng (data table, form động, server-state) với TanStack Table/Query + React Hook Form + Zod, chuẩn hoá 15+ module.',
      },
    ],
    tech: [
      'Next.js',
      'React',
      'TypeScript',
      'SignalR',
      'Cesium',
      'deck.gl',
      'LiveKit',
      'TanStack Query',
      'TailwindCSS',
    ],
  },
  {
    id: 'freelance',
    company: 'Freelance',
    role: {
      en: 'Web & Mobile Developer',
      vi: 'Web & Mobile Developer',
    },
    period: { en: 'Jun 2024 — Oct 2025', vi: 'Th6 2024 — Th10 2025' },
    summary: {
      en: 'Worked alongside a senior developer on real client projects — owning features end-to-end, going through code reviews and adopting production-grade Git workflows.',
      vi: 'Làm cùng một senior developer trên các dự án khách hàng thật — tự sở hữu feature end-to-end, qua code review và áp dụng quy trình Git chuẩn production.',
    },
    highlights: [
      {
        en: 'Built and deployed 4 responsive client websites and landing pages with Next.js and TailwindCSS, shipped live on Vercel.',
        vi: 'Xây và triển khai 4 website/landing page khách hàng responsive bằng Next.js và TailwindCSS, chạy live trên Vercel.',
      },
      {
        en: 'Developed a React Native point-of-sale (POS) app handling sales orders and inventory management.',
        vi: 'Phát triển app bán hàng (POS) React Native xử lý đơn hàng và quản lý kho.',
      },
      {
        en: 'Self-learned new tools and frameworks on the job to deliver client requirements independently.',
        vi: 'Tự học công cụ và framework mới trong lúc làm để đáp ứng yêu cầu khách hàng một cách độc lập.',
      },
    ],
    tech: ['Next.js', 'React Native', 'TypeScript', 'TailwindCSS', 'Vercel'],
  },
];
