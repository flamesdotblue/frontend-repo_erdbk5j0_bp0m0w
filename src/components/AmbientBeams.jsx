import React from 'react';

// Subtle animated diagonal beams for a cohesive, premium "Stripe-like" motion theme.
// Renders behind content. Uses inline <style> to define keyframes without touching global CSS.
export default function AmbientBeams() {
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden" aria-hidden>
      {/* Local keyframes for smooth, ultra-subtle motion */}
      <style>{`
        @keyframes beam-pan-x {
          0% { transform: translateX(-20%) rotate(-12deg); }
          50% { transform: translateX(20%) rotate(-12deg); }
          100% { transform: translateX(-20%) rotate(-12deg); }
        }
        @keyframes beam-pan-y {
          0% { transform: translateY(-15%) rotate(-18deg); }
          50% { transform: translateY(10%) rotate(-18deg); }
          100% { transform: translateY(-15%) rotate(-18deg); }
        }
        @keyframes glow-pulse {
          0%,100% { opacity: 0.25; }
          50% { opacity: 0.42; }
        }
      `}</style>

      {/* Very soft noise/texture overlay for depth */}
      <div className="absolute inset-0 opacity-[0.08]" style={{
        backgroundImage:
          'radial-gradient(ellipse at 20% 10%, rgba(255,255,255,0.06), transparent 40%), radial-gradient(ellipse at 80% 50%, rgba(255,255,255,0.04), transparent 45%)',
      }} />

      {/* Warm diagonal beam - aligns with hero asset (red/orange) */}
      <span
        className="absolute -left-1/4 top-1/4 h-[55vh] w-[70vw] blur-3xl"
        style={{
          background:
            'linear-gradient(100deg, rgba(255,95,31,0.16), rgba(255,51,73,0.16) 40%, rgba(255,177,66,0.12))',
          filter: 'saturate(120%)',
          animation: 'beam-pan-x 18s ease-in-out infinite, glow-pulse 12s ease-in-out infinite',
        }}
      />

      {/* Cooler balancing beam for contrast */}
      <span
        className="absolute right-[-20%] top-[55%] h-[45vh] w-[60vw] blur-3xl"
        style={{
          background:
            'linear-gradient(120deg, rgba(64,180,255,0.14), rgba(160,120,255,0.12), rgba(64,180,255,0.08))',
          animation: 'beam-pan-y 22s ease-in-out infinite, glow-pulse 14s ease-in-out infinite',
        }}
      />
    </div>
  );
}
