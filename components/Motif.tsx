export default function Motif({ className = '' }: { className?: string }) {
  return (
    <div className={`pointer-events-none absolute inset-0 -z-10 overflow-hidden ${className}`} aria-hidden>
      <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-slate-200/50 blur-3xl" />
      <div className="absolute -bottom-24 -left-16 h-80 w-80 rounded-full bg-teal-600/10 blur-3xl" />
      <div className="absolute top-1/3 -right-28 rotate-12 opacity-10">
        <svg width="280" height="180" viewBox="0 0 280 180" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 180 L140 0 L280 180 Z" className="fill-slate-300" />
        </svg>
      </div>
    </div>
  );
}
