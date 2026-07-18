/**
 * Fixed, full-screen decorative layer: dark grid background matching
 * the rifqi.dev reference design. Near-black with visible fine grid lines
 * and a subtle radial gradient from the top-left corner for depth.
 */
export function AnimatedBackground() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {/* Base radial gradient — lighter top-left fading to deep black */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(circle at top left, #1a1a1a 0%, #0a0a0a 35%, #050505 100%)',
        }}
      />
      {/* Fine grid lines — 26px spacing, white at ~6% opacity */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(90deg, rgba(255,255,255,0.063) 1px, transparent 1px),
            linear-gradient(180deg, rgba(255,255,255,0.063) 1px, transparent 1px)
          `,
          backgroundSize: '26px 26px',
        }}
      />
    </div>
  );
}
