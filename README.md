# Portfolio — Tran Nam Dang Khoa (Kelvin)

Personal developer portfolio: single-page, dark-first, **bilingual (EN/VI)**, with an
interactive 3D tech constellation and an MDX blog.

Built with **Next.js 16 (App Router) · React 19 · TypeScript · Tailwind v4 · React Three
Fiber · Framer Motion · Lenis · Server Actions**.

## Quick start

```bash
yarn install
yarn dev          # http://localhost:3000
```

Other scripts: `yarn build`, `yarn start`, `yarn lint`, `yarn test`.

## Setup notes

- Put your CV at `public/CV_TranNamDangKhoa.pdf` (the **Download CV** button links here).
- Create `.env.local` with `GMAIL_APP_PASSWORD=<gmail app password>` so the contact form
  (a Server Action) can send mail.

## Docs

- [docs/ARCHITECTURE.md](./docs/ARCHITECTURE.md) — folder structure & design decisions.
- [docs/INTERVIEW-NOTES.md](./docs/INTERVIEW-NOTES.md) — React/Next/TS interview Q&A (tiếng Việt).

## Editing content

All copy lives in `content/` as bilingual `{ en, vi }` objects — edit there, not in the
components: `site.ts`, `profile.ts`, `experience.ts`, `projects.ts`, `skills.ts`,
`dictionary.ts`, and `posts/*.mdx` for the blog.
