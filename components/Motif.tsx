export default function Motif({ className = "" }: { className?: string }) {
  return (
    <div
      className={`pointer-events-none absolute inset-0 -z-10 overflow-hidden ${className}`}
      aria-hidden
    >
      {/* Top-left blurred circle */}
      <div className="absolute -top-[25%] -left-[10%] h-[28rem] w-[28rem] rounded-full bg-gray-200/60 blur-3xl" />
      {/* Bottom-right blurred circle */}
      <div className="absolute -bottom-[30%] -right-[15%] h-[36rem] w-[36rem] rounded-full bg-teal-600/20 blur-3xl" />
      {/* Diagonal grid overlay */}
      <div className="absolute inset-0 bg-[repeating-linear-gradient(135deg,rgba(2,6,23,0.05)_0,rgba(2,6,23,0.05)_1px,transparent_1px,transparent_24px)] opacity-25" />
    </div>
  );
}
