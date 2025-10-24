import type { ReactNode } from "react";

export type Incident = {
  id: string;
  title: string;
  location: string;
  severity: "low" | "medium" | "high";
  reportedAt: string;
  status: "open" | "in_progress" | "resolved";
};

export type IncidentsCardProps = {
  title: string;
  ctaLabel?: string;
  onAdd?: () => void;
  actions?: ReactNode;
  incidents: Incident[];
};

const severityColor: Record<Incident["severity"], string> = {
  low: "bg-emerald-500/80",
  medium: "bg-amber-500/80",
  high: "bg-rose-500/80",
};

const statusCopy: Record<Incident["status"], string> = {
  open: "Open",
  in_progress: "In Progress",
  resolved: "Resolved",
};

export function IncidentsCard({
  title,
  ctaLabel = "+ Report",
  onAdd,
  actions,
  incidents,
}: IncidentsCardProps) {
  return (
    <section className="flex h-full flex-col rounded-2xl border border-white/10 bg-slate-900/60 p-6 shadow-lg shadow-slate-950/40 backdrop-blur-xl">
      <header className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h2 className="text-lg font-semibold text-white">{title}</h2>
          <p className="mt-1 text-sm text-slate-300">
            Track active incidents and respond quickly.
          </p>
        </div>
        {actions ?? (
          <button
            type="button"
            onClick={onAdd}
            className="inline-flex items-center rounded-full bg-emerald-500 px-4 py-2 text-sm font-semibold text-emerald-950 shadow focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400"
          >
            {ctaLabel}
          </button>
        )}
      </header>
      <ul className="mt-6 flex flex-1 flex-col gap-4 overflow-hidden">
        {incidents.map((incident) => (
          <li
            key={incident.id}
            className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-slate-200 shadow-inner shadow-slate-950/40"
          >
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <p className="text-base font-medium text-white">{incident.title}</p>
                <p className="text-xs uppercase tracking-wide text-slate-400">
                  {incident.location}
                </p>
              </div>
              <span
                className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-semibold text-white ${severityColor[incident.severity]}`}
              >
                {incident.severity.toUpperCase()}
              </span>
            </div>
            <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-slate-300">
              <span className="inline-flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-400" aria-hidden />
                {statusCopy[incident.status]}
              </span>
              <span className="text-slate-400">Reported {incident.reportedAt}</span>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
