import { ImageResponse } from 'next/og';

import { site } from '@/content/site';

export const alt = `${site.name} — ${site.role.en}`;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
          background: '#0c1119',
          color: '#f1f5f9',
          fontFamily: 'sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            color: '#5fc8e6',
            fontSize: 28,
            letterSpacing: 4,
            textTransform: 'uppercase',
          }}
        >
          {site.brand} · Portfolio
        </div>
        <div
          style={{
            marginTop: 24,
            fontSize: 76,
            fontWeight: 700,
            lineHeight: 1.1,
          }}
        >
          {site.name}
        </div>
        <div style={{ marginTop: 20, fontSize: 38, color: '#94a3b8' }}>
          {site.role.en}
        </div>
        <div
          style={{
            marginTop: 48,
            height: 8,
            width: 160,
            borderRadius: 999,
            background: '#5fc8e6',
          }}
        />
      </div>
    ),
    size,
  );
}
