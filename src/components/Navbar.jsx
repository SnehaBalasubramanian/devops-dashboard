export default function Navbar() {
  return (
    <nav className="bg-slate-900 border-b border-slate-700 px-6 py-4 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 bg-indigo-500 rounded-lg flex items-center justify-center text-white font-bold text-sm">
          D
        </div>
        <span className="text-white font-semibold text-lg">DevOps Dashboard</span>
      </div>
      <div className="flex items-center gap-4">
        <span className="text-slate-400 text-sm">sneha</span>
        <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center text-white text-sm font-medium">
          S
        </div>
      </div>
    </nav>
  );
}
