export type MediaItem = {
  id: string;
  title: string;
  timestamp: string;
  thumbnailUrl: string;
  description?: string;
};

export type MediaPreviewCardProps = {
  title: string;
  items: MediaItem[];
};

export function MediaPreviewCard({ title, items }: MediaPreviewCardProps) {
  return (
    <section className="h-full rounded-2xl border border-white/10 bg-slate-900/60 p-6 shadow-lg shadow-slate-950/40 backdrop-blur-xl">
      <header className="flex items-center justify-between gap-4">
        <div>
          <h2 className="text-lg font-semibold text-white">{title}</h2>
          <p className="mt-1 text-sm text-slate-300">Latest visual intelligence</p>
        </div>
        <button
          type="button"
          className="text-sm font-medium text-sky-300 transition hover:text-sky-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300"
        >
          View archive
        </button>
      </header>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {items.map((item) => (
          <article
            key={item.id}
            className="group overflow-hidden rounded-xl border border-white/10 bg-white/5 shadow-inner shadow-slate-950/40"
          >
            <div className="relative aspect-video w-full overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={item.thumbnailUrl}
                alt=""
                className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/10 to-transparent" />
            </div>
            <div className="space-y-2 p-4 text-sm">
              <div className="flex items-center justify-between text-xs text-slate-400">
                <span>{item.timestamp}</span>
              </div>
              <h3 className="text-base font-medium text-white">{item.title}</h3>
              {item.description ? (
                <p className="text-slate-300">{item.description}</p>
              ) : null}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
