export const pipelines = [
  {
    id: 1,
    name: "Frontend Service",
    branch: "main",
    trigger: "push",
    stages: [
      { name: "Build", status: "success", duration: "1m 12s" },
      { name: "Test", status: "success", duration: "2m 34s" },
      { name: "Docker", status: "success", duration: "0m 58s" },
      { name: "Deploy", status: "success", duration: "1m 05s" },
    ],
    lastRun: "2 mins ago",
    commit: "feat: add dashboard UI",
    author: "sneha",
  },
  {
    id: 2,
    name: "Backend API",
    branch: "develop",
    trigger: "pull_request",
    stages: [
      { name: "Build", status: "success", duration: "0m 48s" },
      { name: "Test", status: "running", duration: "..." },
      { name: "Docker", status: "pending", duration: "-" },
      { name: "Deploy", status: "pending", duration: "-" },
    ],
    lastRun: "Just now",
    commit: "fix: resolve auth token issue",
    author: "sneha",
  },
  {
    id: 3,
    name: "Notification Service",
    branch: "main",
    trigger: "schedule",
    stages: [
      { name: "Build", status: "success", duration: "0m 32s" },
      { name: "Test", status: "failed", duration: "1m 10s" },
      { name: "Docker", status: "skipped", duration: "-" },
      { name: "Deploy", status: "skipped", duration: "-" },
    ],
    lastRun: "1 hour ago",
    commit: "chore: update dependencies",
    author: "sneha",
  },
];

export const environments = [
  {
    name: "Development",
    status: "healthy",
    url: "dev.myapp.io",
    lastDeploy: "5 mins ago",
    version: "v1.4.2",
    uptime: "99.8%",
  },
  {
    name: "Staging",
    status: "healthy",
    url: "staging.myapp.io",
    lastDeploy: "2 hours ago",
    version: "v1.4.1",
    uptime: "99.5%",
  },
  {
    name: "Production",
    status: "warning",
    url: "myapp.io",
    lastDeploy: "1 day ago",
    version: "v1.3.9",
    uptime: "99.9%",
  },
];

export const recentDeployments = [
  { service: "Frontend Service", env: "Development", status: "success", time: "5 mins ago", version: "v1.4.2" },
  { service: "Backend API", env: "Development", status: "running", time: "Just now", version: "v1.4.2" },
  { service: "Frontend Service", env: "Staging", status: "success", time: "2 hours ago", version: "v1.4.1" },
  { service: "Notification Service", env: "Development", status: "failed", time: "1 hour ago", version: "v1.4.1" },
  { service: "Backend API", env: "Production", status: "success", time: "1 day ago", version: "v1.3.9" },
];

export const stats = [
  { label: "Total Pipelines", value: "3", change: "+1 this week" },
  { label: "Success Rate", value: "87%", change: "+3% vs last week" },
  { label: "Avg Build Time", value: "4m 12s", change: "-30s vs last week" },
  { label: "Deployments Today", value: "8", change: "3 in progress" },
];
