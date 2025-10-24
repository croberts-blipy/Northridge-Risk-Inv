import type { ReactNode } from "react";

export type ShiftDetail = {
  teamName: string;
  lead: string;
  schedule: string;
  location: string;
  notes?: string;
  badges?: Array<{ label: string; color?: string }>;
};

export type ShiftCardProps = {
  title: string;
  description?: string;
  shift: ShiftDetail;
  action?: ReactNode;
};

export function ShiftCard({ title, description, shift, action }: ShiftCardProps) {
  return (
    <section className="rounded-2xl border border-white/10 bg-slate-900/60 p-6 shadow-lg shadow-slate-950/40 backdrop-blur-xl">
      <header className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h2 className="text-lg font-semibold text-white">{title}</h2>
          {description ? (
            <p className="mt-1 text-sm text-slate-300">{description}</p>
          ) : null}
        </div>
        {action ?? null}
      </header>
      <dl className="mt-6 grid gap-4 text-sm text-slate-200 sm:grid-cols-2">
        <div>
          <dt className="text-slate-400">Team</dt>
          <dd className="mt-1 text-base font-medium text-white">{shift.teamName}</dd>
        </div>
        <div>
          <dt className="text-slate-400">Lead</dt>
          <dd className="mt-1 text-base font-medium text-white">{shift.lead}</dd>
        </div>
        <div>
          <dt className="text-slate-400">Schedule</dt>
          <dd className="mt-1 text-base font-medium text-white">{shift.schedule}</dd>
        </div>
        <div>
          <dt className="text-slate-400">Location</dt>
          <dd className="mt-1 text-base font-medium text-white">{shift.location}</dd>
        </div>
      </dl>
      {shift.badges && shift.badges.length > 0 ? (
        <ul className="mt-6 flex flex-wrap gap-2">
          {shift.badges.map((badge) => (
            <li key={badge.label}>
              <span
                className={`inline-flex items-center rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-medium uppercase tracking-wide text-white ${
                  badge.color ?? ""
                }`}
              >
                {badge.label}
              </span>
            </li>
          ))}
        </ul>
      ) : null}
      {shift.notes ? (
        <p className="mt-6 rounded-xl border border-white/10 bg-slate-900/80 p-4 text-sm text-slate-300">
          {shift.notes}
        </p>
      ) : null}
    </section>
  );
}
