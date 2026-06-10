import {
  FolderKanban,
  CheckCircle,
  TrendingUp,
  Bell,
} from "lucide-react";
export default function Dashboard() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">

        <div
          className="
          bg-white
          text-black
          border
          border-zinc-200

          dark:bg-zinc-950
          dark:text-white
          dark:border-zinc-800

          rounded-[32px]
          p-8
          shadow-[0_0_50px_rgba(168,85,247,0.15)]
          "
        >

          {/* Top Bar */}
          <div className="flex gap-2 mb-8">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>

          {/* Dashboard Cards */}
         <div className="grid md:grid-cols-4 gap-6">

  <div className="bg-black dark:bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
    <FolderKanban className="text-purple-500 mb-4" />
    <p className="text-zinc-400">Projects</p>
    <h2 className="text-4xl font-bold">124</h2>
  </div>

  <div className="bg-black dark:bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
    <CheckCircle className="text-green-500 mb-4" />
    <p className="text-zinc-400">Completed</p>
    <h2 className="text-4xl font-bold">4.8K</h2>
  </div>

  <div className="bg-black dark:bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
    <TrendingUp className="text-blue-500 mb-4" />
    <p className="text-zinc-400">Growth</p>
    <h2 className="text-4xl font-bold">+43%</h2>
  </div>

  <div className="bg-black dark:bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
    <Bell className="text-yellow-500 mb-4" />
    <p className="text-zinc-400">Alerts</p>
    <h2 className="text-4xl font-bold">12</h2>
  </div>

</div>

          {/* Progress */}
          <div
            className="
            mt-8
            bg-zinc-100
            text-black
            border
            border-zinc-200

            dark:bg-black
            dark:text-white
            dark:border-zinc-800

            rounded-2xl
            p-6
            "
          >
            <div className="flex justify-between mb-3">
              <span>Monthly Goal</span>
              <span>78%</span>
            </div>

            <div
              className="
              w-full
              h-3
              bg-zinc-300

              dark:bg-zinc-800

              rounded-full
              overflow-hidden
              "
            >
              <div className="w-[78%] h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}