export default function Stats() {
  return (
    <section className="py-24 border-y border-zinc-900">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-10 text-center">

        <div>
          <h3 className="text-6xl font-bold">10K+</h3>
          <p className="text-zinc-500">Users</p>
        </div>

        <div>
          <h3 className="text-6xl font-bold">500+</h3>
          <p className="text-zinc-500">Teams</p>
        </div>

        <div>
          <h3 className="text-6xl font-bold">99.9%</h3>
          <p className="text-zinc-500">Uptime</p>
        </div>

        <div>
          <h3 className="text-6xl font-bold">24/7</h3>
          <p className="text-zinc-500">Support</p>
        </div>

      </div>
    </section>
  );
}