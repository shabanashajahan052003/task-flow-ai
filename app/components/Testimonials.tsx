const reviews = [
  {
    quote: "Amazing product for project management.",
    author: "John Smith",
  },
  {
    quote: "Our productivity increased by 40%.",
    author: "Sarah Johnson",
  },
  {
    quote: "Best SaaS tool we have used.",
    author: "Michael Brown",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-32 max-w-7xl mx-auto px-6"
    >
      <h2 className="text-6xl font-bold text-center mb-16">
        Loved By Teams
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {reviews.map((review) => (
          <div
            key={review.author}
            className="
             bg-white
text-black
border
border-zinc-200

dark:bg-zinc-950
dark:text-white
dark:border-zinc-800
              rounded-3xl
              p-8
            "
          >
            <p className="text-xl text-zinc-600 dark:text-zinc-400 mb-6">
              "{review.quote}"
            </p>

            <h4 className="font-semibold">
              {review.author}
            </h4>
          </div>
        ))}
      </div>
    </section>
  );
}