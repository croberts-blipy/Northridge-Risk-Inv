import { IncidentsCard, MediaPreviewCard, ShiftCard, StatusCard } from "@/components/dashboard";

const navigation = [
  { name: "Overview", href: "#" },
  { name: "Incidents", href: "#" },
  { name: "Teams", href: "#" },
  { name: "Reports", href: "#" },
  { name: "Settings", href: "#" },
];

type DashboardData = Awaited<ReturnType<typeof getDashboardData>>;

async function getDashboardData() {
  // TODO: Replace with real data fetching from the backend API layer.
  return {
    metrics: [
      {
        label: "Active Sites",
        value: "27",
        trend: { direction: "up" as const, value: "+4", label: "vs. last week" },
      },
      {
        label: "Open Incidents",
        value: "8",
        accent: "from-rose-500/40 via-rose-500/10 to-transparent",
        trend: { direction: "down" as const, value: "-2", label: "resolved today" },
      },
      {
        label: "On Duty",
        value: "54",
        accent: "from-emerald-500/40 via-emerald-500/10 to-transparent",
        trend: { direction: "steady" as const, value: "~", label: "shift change in 2h" },
      },
      {
        label: "Response Time",
        value: "03:42",
        accent: "from-sky-500/40 via-indigo-500/20 to-transparent",
        trend: { direction: "up" as const, value: "12%", label: "faster this week" },
      },
    ],
    shift: {
      title: "Night Operations",
      description: "Monitoring critical energy infrastructure across the valley.",
      shift: {
        teamName: "Delta Response",
        lead: "Lt. Caroline Marsh",
        schedule: "19:00 - 07:00 PST",
        location: "Command Center A",
        badges: [
          { label: "Redundant comms" },
          { label: "Drone patrol", color: "bg-sky-500/30" },
        ],
        notes: "Thermal imaging drone launch scheduled for 21:30. Coordinate with airspace control.",
      },
    },
    incidents: [
      {
        id: "INC-1201",
        title: "Perimeter breach alert",
        location: "Solar Farm 3B",
        severity: "high" as const,
        reportedAt: "12 min ago",
        status: "open" as const,
      },
      {
        id: "INC-1198",
        title: "Unidentified vehicle tracking",
        location: "Logistics Hub 2",
        severity: "medium" as const,
        reportedAt: "34 min ago",
        status: "in_progress" as const,
      },
      {
        id: "INC-1196",
        title: "Camera outage",
        location: "Pipeline Access North",
        severity: "low" as const,
        reportedAt: "1 hr ago",
        status: "resolved" as const,
      },
    ],
    media: [
      {
        id: "feed-10",
        title: "Thermal sweep SE quadrant",
        timestamp: "15 minutes ago",
        thumbnailUrl: "https://images.unsplash.com/photo-1504208434309-cb69f4fe52b0?auto=format&fit=crop&w=600&q=80",
        description: "No anomalies detected in the last drone sweep.",
      },
      {
        id: "feed-9",
        title: "Access road overview",
        timestamp: "28 minutes ago",
        thumbnailUrl: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=600&q=80",
        description: "Increased vehicle activity near west entrance.",
      },
      {
        id: "feed-8",
        title: "Thermal imaging perimeter",
        timestamp: "54 minutes ago",
        thumbnailUrl: "https://images.unsplash.com/photo-1523966211575-eb4a01e7dd51?auto=format&fit=crop&w=600&q=80",
      },
      {
        id: "feed-7",
        title: "South gate patrol",
        timestamp: "1 hour ago",
        thumbnailUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80",
      },
    ],
  };
}

function Sidebar({ active }: { active: string }) {
  return (
    <aside className="hidden w-72 flex-col justify-between border-r border-white/10 bg-slate-950/70 p-6 backdrop-blur xl:flex">
      <div>
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-sky-500 text-lg font-bold text-slate-950">
            NR
          </span>
          <div>
            <p className="text-sm font-semibold text-white">Northridge Risk</p>
            <p className="text-xs text-slate-400">Operations Command</p>
          </div>
        </div>
        <nav className="mt-10 space-y-1 text-sm font-medium text-slate-300">
          {navigation.map((item) => {
            const isActive = item.name === active;
            return (
              <a
                key={item.name}
                href={item.href}
                className={`flex items-center justify-between rounded-xl px-4 py-3 transition ${
                  isActive
                    ? "bg-sky-500/20 text-white shadow-inner shadow-sky-500/30"
                    : "hover:bg-white/5 hover:text-white"
                }`}
                aria-current={isActive ? "page" : undefined}
              >
                <span>{item.name}</span>
                {isActive ? (
                  <span className="h-2 w-2 rounded-full bg-sky-400" aria-hidden />
                ) : null}
              </a>
            );
          })}
        </nav>
      </div>
      <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-sky-500/20 via-slate-900/80 to-slate-950 p-4 text-xs text-slate-200">
        <p className="font-semibold text-white">Operational tip</p>
        <p className="mt-2">
          Review drone telemetry every 30 minutes and sync with incident logs to ensure full situational awareness.
        </p>
      </div>
    </aside>
  );
}

function TopBar() {
  return (
    <header className="sticky top-0 z-20 border-b border-white/10 bg-slate-950/70 px-6 py-5 backdrop-blur">
      <div className="mx-auto flex w-full max-w-7xl flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold text-white">Command Dashboard</h1>
          <p className="text-sm text-slate-400">Coordinated response for all critical assets</p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <label className="relative block text-sm" aria-label="Search">
            <span className="sr-only">Search</span>
            <input
              type="search"
              placeholder="Search incidents, teams..."
              className="w-64 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-400/60"
            />
          </label>
          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white transition hover:border-white/20"
          >
            Notifications
            <span className="h-2 w-2 rounded-full bg-rose-400" aria-hidden />
          </button>
          <div className="flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-white">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-sky-500 text-slate-950 font-semibold">
              CM
            </span>
            <div className="text-left">
              <p className="font-medium">C. Marsh</p>
              <p className="text-xs text-slate-300">Night Lead</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default async function DashboardPage() {
  const data: DashboardData = await getDashboardData();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      <div className="flex min-h-screen">
        <Sidebar active="Overview" />
        <div className="flex flex-1 flex-col">
          <TopBar />
          <main className="flex-1 overflow-y-auto">
            <div className="mx-auto w-full max-w-7xl space-y-8 px-6 py-8">
              <section className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
                {data.metrics.map((metric) => (
                  <StatusCard key={metric.label} {...metric} />
                ))}
              </section>
              <section className="grid gap-6 lg:grid-cols-3">
                <div className="lg:col-span-2">
                  <ShiftCard {...data.shift} />
                </div>
                <IncidentsCard title="Incidents" incidents={data.incidents} />
              </section>
              <section>
                <MediaPreviewCard title="Live feeds" items={data.media} />
              </section>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
