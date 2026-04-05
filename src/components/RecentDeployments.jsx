import { recentDeployments } from "../data/pipelineData";

const statusConfig = {
  success: { badge: "bg-green-900 text-green-300", label: "Success" },
  failed: { badge: "bg-red-900 text-red-300", label: "Failed" },
  running: { badge: "bg-blue-900 text-blue-300", label: "Running" },
};

export default function RecentDeployments() {
  return (
    <div>
      <h2 className="text-white font-semibold text-base mb-3">Recent Deployments</h2>
      <div className="bg-slate-800 border border-slate-700 rounded-xl overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b border-slate-700">
              <th className="text-left text-slate-400 text-xs uppercase tracking-wider px-4 py-3">Service</th>
              <th className="text-left text-slate-400 text-xs uppercase tracking-wider px-4 py-3">Environment</th>
              <th className="text-left text-slate-400 text-xs uppercase tracking-wider px-4 py-3">Version</th>
              <th className="text-left text-slate-400 text-xs uppercase tracking-wider px-4 py-3">Status</th>
              <th className="text-left text-slate-400 text-xs uppercase tracking-wider px-4 py-3">Time</th>
            </tr>
          </thead>
          <tbody>
            {recentDeployments.map((dep, i) => {
              const config = statusConfig[dep.status];
              return (
                <tr key={i} className="border-b border-slate-700 last:border-0 hover:bg-slate-700/50 transition-colors">
                  <td className="px-4 py-3 text-white text-sm">{dep.service}</td>
                  <td className="px-4 py-3 text-slate-300 text-sm">{dep.env}</td>
                  <td className="px-4 py-3 text-slate-300 text-sm font-mono">{dep.version}</td>
                  <td className="px-4 py-3">
                    <span className={`text-xs px-2 py-0.5 rounded-full ${config.badge}`}>
                      {config.label}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-slate-400 text-sm">{dep.time}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
