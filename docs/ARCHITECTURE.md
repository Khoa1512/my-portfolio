# Kiến trúc & Quyết định thiết kế

Tài liệu giải thích cách dự án được tổ chức và **tại sao** lại làm như vậy — vừa để
maintain, vừa để dùng làm "talking points" khi phỏng vấn. Q&A phỏng vấn chi tiết nằm
ở [INTERVIEW-NOTES.md](./INTERVIEW-NOTES.md).

## Stack

| Layer        | Công nghệ                                                      |
| ------------ | ------------------------------------------------------------- |
| Framework    | Next.js 16 (App Router, Turbopack), React 19                  |
| Ngôn ngữ     | TypeScript (strict)                                           |
| Styling      | Tailwind CSS v4 (config-in-CSS), shadcn/ui (Radix)            |
| Animation    | Framer Motion (scroll reveal), Lenis (smooth scroll)          |
| 3D           | React Three Fiber 9 + drei 10 + three.js (hero constellation) |
| Form         | React Hook Form + Zod + **Server Action** (nodemailer)        |
| Nội dung     | i18n tự build (EN/VI) + MDX cho blog (`next-mdx-remote/rsc`)  |
| Test         | Vitest + React Testing Library                                |

## Sơ đồ thư mục

```
app/                  # App Router — CHỈ lo routing (mỏng)
  layout.tsx          # fonts, providers, metadata SEO
  page.tsx            # trang chủ single-page (Server Component, đọc posts)
  blog/               # /blog (list) + /blog/[slug] (detail, async params)
  sitemap.ts robots.ts opengraph-image.tsx   # SEO
components/
  ui/                 # shadcn primitives
  layout/             # header (scroll-spy), footer
  sections/           # hero, about, experience, projects, skills, notes, contact
  providers/          # theme, language (i18n), smooth-scroll (Lenis)
  shared/             # icon, toggles, reveal, section-heading, mdx
  three/              # tech-constellation (R3F, client-only)
content/              # NỘI DUNG tách khỏi code: site/profile/experience/
                      # projects/skills/dictionary (song ngữ) + posts/*.mdx
lib/                  # actions (server action), i18n, validators, mdx, utils
hooks/                # use-active-section (scroll-spy)
docs/                 # tài liệu này + interview notes
```

> Quy ước theo Next.js: `app/` mỏng, logic/UI/nội dung tách ra `components`/`lib`/`content`.
> Không dùng `src/` (đặt mọi folder ở root — một trong hai cách chuẩn của Next.js).

## Các quyết định chính

1. **Single-page + scroll-spy.** Recruiter scan nhanh; mọi section nằm trên `/`, header
   highlight section đang xem bằng `IntersectionObserver` ([hooks/use-active-section.ts](../hooks/use-active-section.ts)).

2. **Content layer tách riêng (`content/`).** Component thuần presentational, đọc dữ liệu
   song ngữ dạng `{ en, vi }`. Đổi nội dung không cần đụng JSX.

3. **i18n tự build thay vì next-intl.** Site chỉ 2 ngôn ngữ, 1 trang → một React Context +
   helper `t()` là đủ, không cần routing theo locale. Persist `localStorage`, mặc định EN.

4. **Server Action cho form contact.** Logic gửi mail (nodemailer + `GMAIL_APP_PASSWORD`)
   chạy hoàn toàn trên server, không lộ credential. Validate Zod **2 lớp** (client cho UX,
   server cho an toàn). Xem [lib/actions/contact.ts](../lib/actions/contact.ts).

5. **Dark-first design system.** Token màu oklch trong [app/globals.css](../app/globals.css)
   (`@theme` + `:root`/`.dark` + `@theme inline`). 1 accent cyan duy nhất.

6. **3D có chừng mực.** Tech-constellation chỉ ở hero, **lazy-load `ssr:false`**, ẩn trên
   mobile, tôn trọng `prefers-reduced-motion`. Đẹp/ấn tượng nhưng không hi sinh perf.

7. **Không nhồi lib thừa.** Không dùng TanStack Query/Storybook vì site tĩnh không có nhu
   cầu thật (xem lý do trong INTERVIEW-NOTES).

## Chạy dự án

```bash
yarn install
yarn dev            # http://localhost:3000
yarn build          # production build (type-check luôn)
yarn start          # chạy bản build
yarn lint           # ESLint flat config (typescript-eslint + next + react-hooks)
yarn test           # Vitest
```

### Cần bổ sung
- Đặt file CV vào `public/CV_TranNamDangKhoa.pdf` (nút **Download CV** trỏ tới đây).
- Tạo `.env.local` với `GMAIL_APP_PASSWORD=<app password gmail>` để form contact gửi được mail.
- (Tuỳ chọn) Thêm ảnh project vào `public/` rồi gắn vào `content/projects.ts`.
