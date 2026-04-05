import { stats } from "../data/pipelineData";

export default function StatsBar() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
      {stats.map((stat) => (
        <div key={stat.label} className="bg-slate-800 border border-slate-700 rounded-xl p-4">
          <p className="text-slate-400 text-xs uppercase tracking-wider mb-1">{stat.label}</p>
          <p className="text-white text-2xl font-bold">{stat.value}</p>
          <p className="text-indigo-400 text-xs mt-1">{stat.change}</p>
        </div>
      ))}
    </div>
  );
}
