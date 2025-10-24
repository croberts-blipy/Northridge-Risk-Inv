import type { ReactNode } from "react";

export type StatusTrend = {
  direction: "up" | "down" | "steady";
  value: string;
  label?: string;
};

export type StatusMetric = {
  label: string;
  value: string;
  icon?: ReactNode;
  trend?: StatusTrend;
};

export type StatusCardProps = StatusMetric & {
  accent?: string;
};

const trendCopy: Record<StatusTrend["direction"], string> = {
  up: "Trending up",
  down: "Trending down",
  steady: "Stable",
};

export function StatusCard({
  label,
  value,
  icon,
  trend,
  accent = "from-sky-500/30 via-sky-500/10 to-transparent",
}: StatusCardProps) {
  return (
    <article
      className="relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/60 p-6 shadow-xl shadow-slate-900/30 backdrop-blur-lg transition hover:border-white/20"
      aria-label={`${label} status card`}
    >
      <div
        className={`pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br ${accent}`}
        aria-hidden
      />
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-medium text-slate-300">{label}</p>
          <p className="mt-2 text-3xl font-semibold text-white">{value}</p>
        </div>
        {icon ? (
          <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-white">
            {icon}
          </span>
        ) : null}
      </div>
      {trend ? (
        <p className="mt-4 flex items-center gap-2 text-sm text-slate-300">
          <span
            className={`inline-flex h-6 min-w-[1.5rem] items-center justify-center rounded-full px-2 text-xs font-semibold text-white ${
              trend.direction === "up"
                ? "bg-emerald-500/80"
                : trend.direction === "down"
                ? "bg-rose-500/80"
                : "bg-slate-500/80"
            }`}
          >
            {trend.value}
          </span>
          <span className="sr-only">{trendCopy[trend.direction]}:</span>
          <span>{trend.label ?? trendCopy[trend.direction]}</span>
        </p>
      ) : null}
    </article>
  );
}
