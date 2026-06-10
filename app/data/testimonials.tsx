export default function Testimonials() {
  return (
    <section className="py-32 px-8">
      <h2 className="text-6xl font-bold text-center mb-16">
        Loved By Teams
      </h2>

      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
        <div className="border border-zinc-800 rounded-3xl p-8">
          "Amazing product for project management."
        </div>

        <div className="border border-zinc-800 rounded-3xl p-8">
          "Our productivity increased by 40%."
        </div>

        <div className="border border-zinc-800 rounded-3xl p-8">
          "Best SaaS tool we have used."
        </div>
      </div>
    </section>
  );
}