export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 py-16">
      <div className="max-w-lg text-center">
        <p className="text-sm uppercase tracking-[0.4em] text-accent">Northridge Risk</p>
        <h1 className="mt-6 font-display text-4xl font-semibold leading-tight text-background-foreground">
          Welcome to your new product experience
        </h1>
        <p className="mt-4 text-sm text-background-foreground/70">
          This project has been initialized with Next.js, TypeScript, Tailwind CSS, and shared UI
          primitives so you can focus on building rich product journeys.
        </p>
      </div>
    </main>
  );
}
