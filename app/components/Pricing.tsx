const plans = [
  {
    name: "Starter",
    price: "$9",
    features: [
      "5 Projects",
      "Basic Analytics",
      "Email Support",
    ],
  },
  {
    name: "Pro",
    price: "$29",
    features: [
      "Unlimited Projects",
      "Advanced Analytics",
      "Priority Support",
    ],
  },
  {
    name: "Enterprise",
    price: "$99",
    features: [
      "Custom Integrations",
      "Dedicated Manager",
      "24/7 Support",
    ],
  },
];

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="py-32 max-w-7xl mx-auto px-6"
    >
      <div className="text-center mb-16">
        <p className="text-purple-500 font-medium mb-3">
          PRICING
        </p>

        <h2 className="text-5xl md:text-6xl font-bold">
          Pricing Plans
        </h2>

        <p className="mt-4 text-zinc-500 dark:text-zinc-400">
          Choose the plan that fits your needs.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <div
            key={plan.name}
            className={`
              rounded-3xl
              p-8
              border
              transition-all
              duration-300
              hover:-translate-y-2

              bg-white
              text-black
              border-zinc-200

              dark:bg-zinc-950
              dark:text-white
              dark:border-zinc-800

              ${
                index === 1
                  ? "border-purple-500 shadow-[0_0_40px_rgba(168,85,247,0.2)]"
                  : ""
              }
            `}
          >
            <h3 className="text-3xl font-bold mb-4">
              {plan.name}
            </h3>

            <p className="text-5xl font-bold mb-6">
              {plan.price}
              <span className="text-lg text-zinc-500">
                /month
              </span>
            </p>

            <ul className="space-y-4 mb-8">
              {plan.features.map((feature) => (
                <li
                  key={feature}
                  className="text-zinc-600 dark:text-zinc-400"
                >
                  ✓ {feature}
                </li>
              ))}
            </ul>

            <button
              className="
              w-full
              py-3
              rounded-xl
              font-semibold
              bg-black
              text-white
              dark:bg-white
              dark:text-black
              "
            >
              Choose Plan
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}