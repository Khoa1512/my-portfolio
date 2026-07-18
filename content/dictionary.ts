import type { Localized } from '@/lib/i18n';

/**
 * UI strings (chrome) that aren't tied to a specific content entity.
 * Section bodies live in their own content files; this is for buttons, labels,
 * headings and micro-copy reused across the app.
 */
export const dict = {
  // Hero CTAs
  viewWork: { en: 'View Work', vi: 'Xem dự án' },
  downloadCV: { en: 'Download CV', vi: 'Tải CV' },
  getInTouch: { en: 'Get in touch', vi: 'Liên hệ' },
  openToWork: { en: 'Open to work', vi: 'Sẵn sàng nhận việc' },

  // Section eyebrows / titles
  aboutTitle: { en: 'About Me', vi: 'Về tôi' },
  aboutSubtitle: {
    en: 'Transforming ideas into real-time digital experiences.',
    vi: 'Biến ý tưởng thành trải nghiệm số real-time.',
  },
  portfolioTitle: { en: 'Portfolio Showcase', vi: 'Dự án & Kỹ năng' },
  portfolioSubtitle: {
    en: 'Explore my journey through projects, experience and the tech I work with.',
    vi: 'Khám phá hành trình qua dự án, kinh nghiệm và công nghệ tôi sử dụng.',
  },
  experienceTitle: { en: 'Experience', vi: 'Kinh nghiệm' },
  projectsTitle: { en: 'Selected projects', vi: 'Dự án tiêu biểu' },
  skillsTitle: { en: 'Skills & tools', vi: 'Kỹ năng & công cụ' },
  notesTitle: { en: 'Notes', vi: 'Bài viết' },
  contactTitle: { en: 'Contact Me', vi: 'Liên hệ' },

  // Showcase tabs
  tabProjects: { en: 'Projects', vi: 'Dự án' },
  tabExperience: { en: 'Experience', vi: 'Kinh nghiệm' },
  tabTechStack: { en: 'Tech Stack', vi: 'Công nghệ' },
  connectWithMe: { en: 'Connect with me', vi: 'Kết nối với tôi' },

  // Projects
  present: { en: 'Present', vi: 'Hiện tại' },
  confidential: { en: 'Confidential · NDA', vi: 'Bảo mật · NDA' },
  liveDemo: { en: 'Live demo', vi: 'Xem demo' },
  sourceCode: { en: 'GitHub', vi: 'GitHub' },
  role: { en: 'Role', vi: 'Vai trò' },
  details: { en: 'Details', vi: 'Chi tiết' },
  back: { en: 'Back', vi: 'Quay lại' },
  keyFeatures: { en: 'Key Features', vi: 'Tính năng nổi bật' },
  technologiesUsed: { en: 'Technologies Used', vi: 'Công nghệ sử dụng' },
  statTech: { en: 'Technologies', vi: 'Công nghệ' },
  statFeatures: { en: 'Key Features', vi: 'Tính năng' },
  privateSourceTitle: { en: 'Private Source Code', vi: 'Mã nguồn riêng tư' },
  privateSourceDesc: {
    en: 'Sorry, the source code for this project is private.',
    vi: 'Xin lỗi, mã nguồn của dự án này ở chế độ riêng tư.',
  },
  understand: { en: 'Understand', vi: 'Đã hiểu' },
  screenshots: { en: 'Screenshots', vi: 'Ảnh chụp giao diện' },

  // Notes / blog
  readArticle: { en: 'Read', vi: 'Đọc' },
  allNotes: { en: 'All notes', vi: 'Tất cả bài viết' },
  noNotes: { en: 'No notes yet.', vi: 'Chưa có bài viết.' },
  backToHome: { en: 'Back to home', vi: 'Về trang chủ' },

  // Contact form
  contactLead: {
    en: "Have a role or project in mind? Send a message and I'll get back to you soon.",
    vi: 'Bạn có vị trí hoặc dự án cần trao đổi? Gửi tin nhắn, tôi sẽ phản hồi sớm.',
  },
  formName: { en: 'Name', vi: 'Họ tên' },
  formEmail: { en: 'Email', vi: 'Email' },
  formSubject: { en: 'Subject', vi: 'Tiêu đề' },
  formMessage: { en: 'Message', vi: 'Nội dung' },
  formSend: { en: 'Send message', vi: 'Gửi tin nhắn' },
  formSending: { en: 'Sending...', vi: 'Đang gửi...' },
  formSuccess: {
    en: "Message sent! I'll get back to you soon.",
    vi: 'Đã gửi! Tôi sẽ phản hồi bạn sớm.',
  },
  formError: {
    en: 'Something went wrong. Please try again later.',
    vi: 'Có lỗi xảy ra. Vui lòng thử lại sau.',
  },

  // Footer
  rights: { en: 'All rights reserved.', vi: 'Bảo lưu mọi quyền.' },
  builtWith: { en: 'Built with Next.js & Tailwind CSS', vi: 'Xây bằng Next.js & Tailwind CSS' },
} satisfies Record<string, Localized>;

export type DictKey = keyof typeof dict;
