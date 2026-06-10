export default function Hero() {
  return (
    <section className="py-20 text-center px-6">
      <div className="max-w-5xl mx-auto">

        <div className="inline-flex px-5 py-2 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-400 mb-8">
          🚀 AI Powered Productivity Platform
        </div>

        <h1 className="text-6xl md:text-8xl font-bold leading-tight">
          Manage Projects
          <br />
          Faster With AI
        </h1>

        <p className="mt-8 text-xl text-zinc-500 dark:text-zinc-400 max-w-3xl mx-auto">
          TaskFlow AI helps teams automate workflows,
          collaborate efficiently and boost productivity.
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-5 mt-10">
          <button className="px-8 py-4 rounded-2xl bg-purple-600 hover:bg-purple-700 transition font-semibold">
            Start Free Trial
          </button>

          <button className="px-8 py-4 rounded-2xl border border-zinc-700 hover:border-purple-500 transition">
            Watch Demo
          </button>
        </div>

      </div>
    </section>
  );
}