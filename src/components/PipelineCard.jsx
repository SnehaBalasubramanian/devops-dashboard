const statusConfig = {
  success: { color: "bg-green-500", text: "text-green-400", label: "Passed" },
  failed: { color: "bg-red-500", text: "text-red-400", label: "Failed" },
  running: { color: "bg-blue-500 animate-pulse", text: "text-blue-400", label: "Running" },
  pending: { color: "bg-slate-500", text: "text-slate-400", label: "Pending" },
  skipped: { color: "bg-yellow-600", text: "text-yellow-400", label: "Skipped" },
};

function StageBadge({ stage }) {
  const config = statusConfig[stage.status];
  return (
    <div className="flex flex-col items-center gap-1">
      <div className={`w-3 h-3 rounded-full ${config.color}`} />
      <span className="text-slate-400 text-xs">{stage.name}</span>
      <span className={`text-xs ${config.text}`}>{stage.duration}</span>
    </div>
  );
}

function overallStatus(stages) {
  if (stages.some((s) => s.status === "failed")) return "failed";
  if (stages.some((s) => s.status === "running")) return "running";
  if (stages.every((s) => s.status === "success")) return "success";
  return "pending";
}

const triggerColors = {
  push: "bg-indigo-900 text-indigo-300",
  pull_request: "bg-purple-900 text-purple-300",
  schedule: "bg-slate-700 text-slate-300",
};

export default function PipelineCard({ pipeline }) {
  const status = overallStatus(pipeline.stages);
  const config = statusConfig[status];

  return (
    <div className="bg-slate-800 border border-slate-700 rounded-xl p-5 hover:border-slate-500 transition-colors">
      <div className="flex items-start justify-between mb-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className={`w-2 h-2 rounded-full ${config.color}`} />
            <h3 className="text-white font-semibold">{pipeline.name}</h3>
          </div>
          <p className="text-slate-400 text-sm">
            <span className="text-slate-300">{pipeline.branch}</span> · {pipeline.lastRun}
          </p>
        </div>
        <span className={`text-xs px-2 py-1 rounded-full ${triggerColors[pipeline.trigger]}`}>
          {pipeline.trigger}
        </span>
      </div>

      {/* Pipeline stages */}
      <div className="flex items-center justify-between bg-slate-900 rounded-lg p-3 mb-4">
        {pipeline.stages.map((stage, i) => (
          <div key={stage.name} className="flex items-center gap-2">
            <StageBadge stage={stage} />
            {i < pipeline.stages.length - 1 && (
              <div className="w-6 h-px bg-slate-600 mb-4" />
            )}
          </div>
        ))}
      </div>

      <p className="text-slate-400 text-xs truncate">
        <span className="text-slate-500">commit:</span> {pipeline.commit}
      </p>
    </div>
  );
}
