export default function BlogPage() {
  return (
    <div className="max-w-6xl mx-auto py-16 px-6">
      <div className="flex items-center justify-between mb-6">
  <h1 className="text-3xl font-bold font-serif">Blog</h1>
        <a href="/" className="px-4 py-2 rounded-full bg-slate-100 text-slate-800 font-medium border border-slate-200 shadow-sm hover:bg-slate-200 transition">Back to Home Page</a>
      </div>
      <div className="space-y-8">
        <a href="/blog/trigon-vice-president" className="block rounded-2xl border border-slate-200 bg-white shadow-sm transition-shadow duration-300 hover:shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-2">Rebuilding a Culture of Service: My Term as Trigon Vice President</h2>
          <div className="text-sm text-slate-500 mb-1">December 2024</div>
          <p className="text-slate-700">Reflections on reviving Trigon's service culture and leading as Vice President.</p>
        </a>
      </div>
    </div>
  );
}
