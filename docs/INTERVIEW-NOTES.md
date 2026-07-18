# Ghi chú ôn phỏng vấn — React / Next.js / TypeScript

> Q&A bám sát chính codebase portfolio này. Mỗi câu đều có thể chỉ vào file thật để
> chứng minh khi phỏng vấn. Đọc kèm [ARCHITECTURE.md](./ARCHITECTURE.md).

---

## 1. Next.js có phải để thay React không?

**Không.** Next.js là **framework xây *trên* React**. Khi dùng Next, bạn vẫn viết React
(component, hooks, JSX). Next thêm: routing (App Router), render phía server (SSR/RSC),
bundler (Turbopack), tối ưu ảnh/font, API/Server Actions... Vì vậy `package.json` luôn có
cả `next` lẫn `react` + `react-dom` — `react` là thư viện UI nền, `next` là framework bọc ngoài.

---

## 2. Server Components (RSC) vs Client Components

- Trong App Router, **mặc định mọi component là Server Component** — render trên server,
  **ship 0 KB JS** cho chính nó, có thể đọc file/DB trực tiếp.
- Thêm `'use client'` **chỉ khi cần trình duyệt**: `useState`/`useEffect`, event handler,
  browser API (`localStorage`, `IntersectionObserver`, WebGL...).
- **Nguyên tắc: đẩy ranh giới client xuống thấp nhất.** Đừng `'use client'` cả trang chỉ vì
  1 nút bấm — tách nút đó thành "client island".

**Trong repo:** [app/page.tsx](../app/page.tsx) là Server Component (đọc blog posts từ disk
qua `getAllPosts()`), rồi truyền xuống các client island (`Hero`, `Contact`, toggles...).
Blog detail [app/blog/[slug]/page.tsx](../app/blog/%5Bslug%5D/page.tsx) render MDX hoàn toàn
trên server.

---

## 3. Server Actions vs API Routes

- **API Route** (`app/api/.../route.ts`): một HTTP endpoint, client phải `fetch` thủ công.
- **Server Action** (`'use server'`): một hàm async chạy trên server, **gọi trực tiếp từ
  client như hàm thường**, type-safe end-to-end, không cần viết fetch/endpoint.

**Trong repo:** form contact gọi `sendContactMessage()` ([lib/actions/contact.ts](../lib/actions/contact.ts)).
Credential SMTP (`GMAIL_APP_PASSWORD`) **không bao giờ vào client bundle** vì hàm chỉ chạy server.

**Validate 2 lớp:** Zod chạy ở client (qua `zodResolver` của React Hook Form) để UX phản hồi
tức thì, và **chạy lại trong Server Action** vì client có thể bị bypass — *never trust the client*.
Cùng 1 schema dùng cho cả hai: [lib/validators.ts](../lib/validators.ts).

**`useActionState` là gì?** Hook React 19 để bind 1 form trực tiếp vào server action và nhận
state trả về (pending/result), hỗ trợ progressive enhancement (chạy cả khi chưa có JS). Ở đây
mình chọn RHF + gọi action như hàm async để showcase cả RHF lẫn Server Action; với form thuần
không cần JS thì `<form action={...}>` + `useActionState` là lựa chọn gọn hơn.

---

## 4. App Router & breaking change Next 15 → 16: `params` là async

Trong Next 16, `params` và `searchParams` của route động là **Promise**, phải `await`:

```ts
export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;   // <-- await
}
```

Lý do: cho phép Next streaming/optimize tốt hơn. Xem [app/blog/[slug]/page.tsx](../app/blog/%5Bslug%5D/page.tsx).

---

## 5. Chiến lược render: SSG / SSR / ISR

- **SSG** (Static): build sẵn HTML. Blog dùng `generateStaticParams()` để prerender mọi bài.
- **SSR**: render mỗi request (khi cần dữ liệu động/cá nhân hoá).
- **ISR**: SSG + tự revalidate sau N giây (`export const revalidate = ...`).

Portfolio này gần như **toàn bộ static** (xem output `yarn build`: các route đánh dấu `○`/`●`)
→ nhanh, rẻ, dễ deploy lên Vercel/CDN.

---

## 6. i18n tự build (không dùng next-intl)

Site chỉ 2 ngôn ngữ + 1 trang nên không cần thư viện nặng. Cách làm:
- Nội dung dạng `{ en, vi }` (`Localized<T>` trong [lib/i18n.ts](../lib/i18n.ts)).
- `LanguageProvider` (Context) giữ `lang`, persist `localStorage`, đồng bộ `<html lang>`.
- Helper `t(value, lang)` chọn đúng ngôn ngữ khi render.

**Tránh hydration mismatch:** state khởi tạo = `DEFAULT_LANG` ở cả server và client; chỉ đọc
`localStorage` trong `useEffect` *sau* khi mount (xem [language-provider.tsx](../components/providers/language-provider.tsx)).

---

## 7. Tailwind CSS v4 khác v3 thế nào?

- **v4 cấu hình ngay trong CSS** bằng `@theme` (không còn `tailwind.config.js` bắt buộc).
- Token màu dùng **oklch** (gamut rộng, dễ chỉnh sáng/độ bão hoà).
- Dark mode: `@custom-variant dark (&:is(.dark *))`.
- `@theme inline` map token semantic (`--background`, `--primary`...) thành utility
  (`bg-background`, `text-primary`). Xem [app/globals.css](../app/globals.css).

---

## 8. Tối ưu font & ảnh

- `next/font/google` (Space Grotesk / Mona Sans / JetBrains Mono): **self-host lúc build**,
  không request runtime, không layout shift; expose CSS variable cho `@theme`.
- `next/image`: lazy + responsive `sizes` + `priority` cho ảnh hero.

---

## 9. SEO với Metadata API

- `export const metadata` / `generateMetadata()` thay cho `<Head>` thủ công.
- `metadataBase`, `title.template`, `openGraph`, `twitter` trong [app/layout.tsx](../app/layout.tsx).
- **OG image động** bằng `ImageResponse` (`next/og`) trong [app/opengraph-image.tsx](../app/opengraph-image.tsx).
- `sitemap.ts` + `robots.ts` sinh `/sitemap.xml`, `/robots.txt` tự động.

---

## 10. 3D với React Three Fiber — và chuyện performance

- **R3F** = React renderer cho three.js: viết scene 3D bằng JSX (`<mesh>`, `<sphereGeometry>`).
- Component 3D **phải là client** (WebGL chỉ chạy ở trình duyệt).
- **Tối ưu:** lazy-load `dynamic(() => import(...), { ssr: false })` để không chặn first paint,
  **ẩn trên mobile** (đỡ nặng), tôn trọng `prefers-reduced-motion` (tắt auto-rotate).
- Xem [components/three/tech-constellation.tsx](../components/three/tech-constellation.tsx) +
  cách nhúng trong [hero.tsx](../components/sections/hero.tsx).

**Bài học phỏng vấn:** 3D đẹp nhưng nặng → dùng *có chừng mực*, đo đánh đổi wow vs tốc độ.

---

## 11. Smooth scroll (Lenis) + Framer Motion

- **Lenis**: scroll quán tính kiểu "award site". Mình hijack click anchor để `scrollTo` mượt
  (offset cho sticky header) và **tắt khi `prefers-reduced-motion`** → [smooth-scroll.tsx](../components/providers/smooth-scroll.tsx).
- **Framer Motion**: `whileInView` cho hiệu ứng reveal khi cuộn ([reveal.tsx](../components/shared/reveal.tsx)).

---

## 12. Tránh hydration mismatch

Mismatch xảy ra khi HTML server ≠ render client lần đầu. Cách xử lý trong repo:
- `next-themes`: đặt class theme lên `<html>` trước hydrate → cần `suppressHydrationWarning`.
- Theme toggle render icon **sau mount** ([theme-toggle.tsx](../components/shared/theme-toggle.tsx)).
- Language: init bằng default, đọc localStorage trong effect.

---

## 13. TypeScript: `satisfies`

Dùng `satisfies Localized` trong `content/*` để **vừa kiểm tra kiểu vừa giữ literal type** (không
bị widen). Nhơn `: Localized` ở chỗ vẫn suy luận được giá trị cụ thể.

---

## 14. Vì sao KHÔNG dùng TanStack Query / Storybook ở đây?

- **TanStack Query**: dùng để quản lý *server state* (fetch/cache/refetch). Portfolio tĩnh
  không có data fetch runtime → đưa vào là **thừa, sai mục đích**. (Mình *biết* dùng — đã dùng
  ở dự án drone thật, nhưng clean code = không nhồi lib không cần.)
- **Storybook**: tài liệu hoá UI component — đáng cho design system lớn; với ~8 primitive thì
  chi phí setup > lợi ích. Ghi nhận là hướng mở rộng tương lai.

> Trả lời được "vì sao KHÔNG dùng X" thường ghi điểm hơn là kể "đã dùng X".

---

## 15. Testing

- **Vitest** (nhanh, API giống Jest) + **React Testing Library** (test theo hành vi người dùng).
- Test mẫu: logic i18n, `cn()`, render component. Xem `*.test.ts(x)`.
- `vitest.config.ts` map alias `@/*` khớp `tsconfig` để import trong test giống app.

---

## 16. Accessibility & Performance (điểm cộng)

- `prefers-reduced-motion` được tôn trọng ở 3D, smooth scroll, framer-motion.
- Semantic HTML (`<section>`, `<article>`, `<time>`, `<nav>`), `aria-label` cho nút icon.
- Lazy 3D + static rendering + self-host font → LCP/TTI tốt.
