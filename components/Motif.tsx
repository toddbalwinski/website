      {/* Bottom-center accent blob */}
      <div
        style={{
          position: 'absolute',
          bottom: -120,
          left: '50%',
          transform: 'translateX(-50%)',
          width: 260,
          height: 260,
          borderRadius: '50%',
          background: 'rgba(13,148,136,0.14)', // teal-600/14
          filter: 'blur(48px)',
          opacity: 0.7,
        }}
      />
export default function Motif({ className = "" }: { className?: string }) {
  return (
    <div
      className={`pointer-events-none absolute inset-0 -z-10 overflow-hidden ${className}`}
      aria-hidden
    >
      {/* Top-left blurred blob */}
      <div
        style={{
          position: 'absolute',
          top: -140,
          left: -140,
          width: 340,
          height: 340,
          borderRadius: '50%',
          background: '#e2e8f0',
          filter: 'blur(54px)',
          opacity: 0.8,
        }}
      />
      {/* Bottom-right blurred blob */}
      <div
        style={{
          position: 'absolute',
          right: -180,
          top: '28%',
          width: 420,
          height: 420,
          borderRadius: '50%',
          background: 'rgba(13,148,136,.15)',
          filter: 'blur(54px)',
          opacity: 0.8,
        }}
      />
      {/* Center-top accent blob */}
      <div
        style={{
          position: 'absolute',
          top: -100,
          left: '50%',
          transform: 'translateX(-50%)',
          width: 220,
          height: 220,
          borderRadius: '50%',
          background: 'rgba(13,148,136,0.13)', // teal-600/13
          filter: 'blur(44px)',
          opacity: 0.7,
        }}
      />
      {/* Subtle radial gradient overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse 80% 60% at 50% 20%, rgba(13,148,136,0.08), transparent 70%)',
          pointerEvents: 'none',
          opacity: 0.7,
        }}
      />
      {/* Diagonal grid overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'repeating-linear-gradient(135deg, rgba(2,6,23,.045) 0 1px, transparent 1px 24px)',
          pointerEvents: 'none',
          opacity: 0.25,
        }}
      />
    </div>
  );
}
