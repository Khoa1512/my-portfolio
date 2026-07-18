import type { Localized } from '@/lib/i18n';

/** Hero headline + the "about" narrative, distilled from the CV summary. */

export type Stat = {
  value: string;
  label: Localized;
};

export const hero = {
  // Short, punchy value proposition shown under the name in the hero.
  tagline: {
    en: 'Fullstack developer building production web apps end-to-end — Next.js/React frontends, ASP.NET Core/Python backends, and the real-time features that connect them.',
    vi: 'Fullstack developer xây web app production end-to-end — frontend Next.js/React, backend ASP.NET Core/Python, cùng các tính năng real-time kết nối chúng.',
  } satisfies Localized,

  // Rotating titles for the hero typing effect.
  roles: [
    { en: 'Fullstack Developer', vi: 'Fullstack Developer' },
    { en: 'React · Next.js · TypeScript', vi: 'React · Next.js · TypeScript' },
    { en: 'ASP.NET Core · Python', vi: 'ASP.NET Core · Python' },
  ] satisfies Localized[],
};

export const about = {
  paragraphs: [
    {
      en: 'I\'m a fullstack developer. I currently work at an early-stage UAV/robotics startup, where as one of 4 engineers I own the web frontend of a real-time fleet management platform — live telemetry over WebSockets, interactive 2D/3D maps, video streaming, and a Flutter companion app for the Ground Control Station.',
      vi: 'Tôi là fullstack developer. Hiện tôi làm tại một startup UAV/robotics giai đoạn đầu, là 1 trong 4 kỹ sư và phụ trách frontend web của một nền tảng quản lý đội drone real-time — telemetry trực tiếp qua WebSocket, bản đồ 2D/3D tương tác, streaming video, và một app Flutter đồng hành cho Ground Control Station.',
    },
    {
      en: 'Before that I worked as a freelancer alongside a senior developer, shipping 4 client websites and a React Native app to production. I care about writing clean, maintainable code and I use AI tools deliberately to move faster, not to skip understanding what I ship.',
      vi: 'Trước đó tôi làm freelance cùng một senior developer, đưa 4 website khách hàng và một app React Native lên production. Tôi chú trọng viết code sạch, dễ bảo trì, và dùng công cụ AI một cách có chủ đích để làm nhanh hơn chứ không phải để bỏ qua việc hiểu rõ những gì mình làm ra.',
    },
  ] satisfies Localized[],

  stats: [
    { value: '2+', label: { en: 'Years building products', vi: 'Năm làm sản phẩm' } },
    { value: '15+', label: { en: 'Modules standardized', vi: 'Module chuẩn hoá' } },
    { value: '5+', label: { en: 'Projects shipped', vi: 'Dự án đã ship' } },
  ] satisfies Stat[],
};
