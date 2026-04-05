import Navbar from "./components/Navbar";
import StatsBar from "./components/StatsBar";
import PipelineCard from "./components/PipelineCard";
import EnvironmentCards from "./components/EnvironmentCards";
import RecentDeployments from "./components/RecentDeployments";
import { pipelines } from "./data/pipelineData";

function App() {
  return (
    <div className="min-h-screen bg-slate-900">
      <Navbar />
      <main className="max-w-7xl mx-auto px-6 py-6">

        <div className="mb-6">
          <h1 className="text-white text-2xl font-bold">Pipeline Overview</h1>
          <p className="text-slate-400 text-sm mt-1">Monitor your CI/CD pipelines and deployments in real time</p>
        </div>

        <StatsBar />
        <EnvironmentCards />

        <div className="mb-6">
          <h2 className="text-white font-semibold text-base mb-3">Active Pipelines</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {pipelines.map((pipeline) => (
              <PipelineCard key={pipeline.id} pipeline={pipeline} />
            ))}
          </div>
        </div>

        <RecentDeployments />
      </main>
    </div>
  );
}

export default App;
