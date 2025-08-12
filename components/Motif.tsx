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
          top: '-12vw',
          left: '-12vw',
          width: '28vw',
          height: '28vw',
          borderRadius: '50%',
          background: '#e2e8f0',
          filter: 'blur(3vw)',
          opacity: 0.8,
        }}
      />
      {/* Bottom-right blurred blob */}
      <div
        style={{
          position: 'absolute',
          right: '-15vw',
          top: '28%',
          width: '34vw',
          height: '34vw',
          borderRadius: '50%',
          background: 'rgba(13,148,136,.15)',
          filter: 'blur(3vw)',
          opacity: 0.8,
        }}
      />
      {/* Center-top accent blob */}
      <div
        style={{
          position: 'absolute',
          top: '-8vw',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '18vw',
          height: '18vw',
          borderRadius: '50%',
          background: 'rgba(13,148,136,0.13)', // teal-600/13
          filter: 'blur(2.5vw)',
          opacity: 0.7,
        }}
      />
      {/* Bottom-center accent blob */}
      <div
        style={{
          position: 'absolute',
          bottom: '0vw',
          left: '70%',
          transform: 'translateX(-50%)',
          width: '40vw',
          height: '20vw',
          borderRadius: '50%',
          background: 'rgba(13,148,136,0.14)', // teal-600/14
          filter: 'blur(2.7vw)',
          opacity: 0.7,
        }}
      />
      {/* bottom left accent blob */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          transform: 'translateX(-50%)',
          width: '22vw',
          height: '22vw',
          borderRadius: '50%',
          background: '#e2e8f0',
          filter: 'blur(3vw)',
          opacity: 0.8,
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
