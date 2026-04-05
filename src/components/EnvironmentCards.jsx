import { environments } from "../data/pipelineData";

const statusConfig = {
  healthy: { dot: "bg-green-500", badge: "bg-green-900 text-green-300", label: "Healthy" },
  warning: { dot: "bg-yellow-500", badge: "bg-yellow-900 text-yellow-300", label: "Warning" },
  down: { dot: "bg-red-500", badge: "bg-red-900 text-red-300", label: "Down" },
};

export default function EnvironmentCards() {
  return (
    <div className="mb-6">
      <h2 className="text-white font-semibold text-base mb-3">Environments</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {environments.map((env) => {
          const config = statusConfig[env.status];
          return (
            <div key={env.name} className="bg-slate-800 border border-slate-700 rounded-xl p-4">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <span className={`w-2 h-2 rounded-full ${config.dot}`} />
                  <span className="text-white font-medium">{env.name}</span>
                </div>
                <span className={`text-xs px-2 py-0.5 rounded-full ${config.badge}`}>
                  {config.label}
                </span>
              </div>
              <p className="text-indigo-400 text-sm mb-3">{env.url}</p>
              <div className="grid grid-cols-3 gap-2 text-center">
                <div>
                  <p className="text-slate-400 text-xs">Version</p>
                  <p className="text-white text-sm font-medium">{env.version}</p>
                </div>
                <div>
                  <p className="text-slate-400 text-xs">Uptime</p>
                  <p className="text-green-400 text-sm font-medium">{env.uptime}</p>
                </div>
                <div>
                  <p className="text-slate-400 text-xs">Last Deploy</p>
                  <p className="text-white text-sm font-medium">{env.lastDeploy}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
