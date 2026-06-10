import { Zap, Users, BarChart3 } from "lucide-react";

const features = [
  {
    title: "AI Automation",
    description:
      "Automate repetitive tasks instantly and save valuable time.",
    icon: Zap,
  },
  {
    title: "Team Collaboration",
    description:
      "Work together seamlessly with your entire team.",
    icon: Users,
  },
  {
    title: "Advanced Analytics",
    description:
      "Track performance and productivity in real-time.",
    icon: BarChart3,
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="py-32 max-w-7xl mx-auto px-6"
    >
      <div className="text-center mb-16">
        <p className="text-purple-500 font-medium mb-3">
          FEATURES
        </p>

        <h2 className="text-5xl md:text-6xl font-bold">
          Powerful Features
        </h2>

        <p className="mt-4 text-zinc-500 dark:text-zinc-400 max-w-2xl mx-auto">
          Everything you need to manage projects,
          automate workflows, and boost team productivity.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {features.map((feature) => {
          const Icon = feature.icon;

          return (
            <div
              key={feature.title}
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
              hover:border-purple-500
              hover:-translate-y-2
              hover:shadow-[0_0_40px_rgba(168,85,247,0.15)]
              transition-all
              duration-300
              "
            >
              <div
                className="
                w-14
                h-14
                rounded-2xl
                bg-purple-500/10
                flex
                items-center
                justify-center
                mb-6
                "
              >
                <Icon
                  size={28}
                  className="text-purple-500"
                />
              </div>

              <h3 className="text-2xl font-semibold mb-4">
                {feature.title}
              </h3>

              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}