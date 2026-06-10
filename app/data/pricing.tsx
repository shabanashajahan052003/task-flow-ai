export default function Pricing() {
  return (
    <section className="py-32 px-8">
      <h2 className="text-6xl font-bold text-center mb-16">
        Pricing Plans
      </h2>

      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
        <div className="border border-zinc-800 rounded-3xl p-8">
          <h3 className="text-3xl font-bold mb-4">Starter</h3>
          <p className="text-5xl font-bold mb-8">$9</p>
          <p className="text-zinc-400">Perfect for individuals.</p>
        </div>

        <div className="border border-white rounded-3xl p-8">
          <h3 className="text-3xl font-bold mb-4">Pro</h3>
          <p className="text-5xl font-bold mb-8">$29</p>
          <p className="text-zinc-400">Most popular plan.</p>
        </div>

        <div className="border border-zinc-800 rounded-3xl p-8">
          <h3 className="text-3xl font-bold mb-4">Enterprise</h3>
          <p className="text-5xl font-bold mb-8">$99</p>
          <p className="text-zinc-400">Large scale organizations.</p>
        </div>
      </div>
    </section>
  );
}