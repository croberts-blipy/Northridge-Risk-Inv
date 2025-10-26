export default function Contact() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <h1 className="text-3xl font-bold">Contact</h1>
      <p className="mt-4 text-gray-700">Tell us about your use case and we’ll reach out.</p>
      <form className="mt-8 grid max-w-xl gap-4">
        <input className="rounded-lg border px-4 py-3" placeholder="Your name" />
        <input className="rounded-lg border px-4 py-3" placeholder="Email" type="email" />
        <textarea className="rounded-lg border px-4 py-3" placeholder="What do you need?" rows={5} />
        <button className="rounded-xl bg-black px-5 py-3 text-white hover:opacity-90">Send</button>
      </form>
    </main>
  );
}
