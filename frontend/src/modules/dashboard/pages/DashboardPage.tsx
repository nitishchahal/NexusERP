import { dashboardStats } from "../data";
import { StatCard } from "../components";
import {
  Rocket,
  Sparkles,
  Bell,
  Plus,
} from "lucide-react";
import { motion } from "framer-motion";

const DashboardPage = () => {
  const hour = new Date().getHours();

  const greeting =
    hour < 12
      ? "Good Morning ☀️"
      : hour < 18
      ? "Good Afternoon 🌤"
      : "Good Evening 🌙";

  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-white">

      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute -left-32 top-20 h-96 w-96 rounded-full bg-cyan-500/20 blur-[140px]" />
        <div className="absolute right-0 bottom-0 h-[500px] w-[500px] rounded-full bg-purple-600/20 blur-[180px]" />
        <div className="absolute top-0 left-1/2 h-80 w-80 rounded-full bg-pink-500/10 blur-[130px]" />
    </div>

      <div className="relative z-10 p-8 space-y-8">

        {/* Header */}
        <motion.div
          initial={{opacity:0,y:30}}
          animate={{opacity:1,y:0}}
          className="flex items-center justify-between"
        >
          <div>
            <h2 className="text-cyan-400 font-semibold">
              {greeting}
            </h2>

            <h1 className="mt-2 text-5xl font-black bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              NexusERP
            </h1>

            <p className="mt-3 text-slate-300">
              Control every part of your business from one intelligent dashboard.
            </p>
          </div>

          <div className="flex gap-3">
            <button className="rounded-xl bg-cyan-500 p-3 hover:scale-105 transition">
              <Plus size={20}/>
            </button>

            <button className="rounded-xl bg-slate-800 p-3 hover:bg-slate-700 transition">
              <Bell size={20}/>
            </button>
          </div>
        </motion.div>

        {/* Hero */}
        <motion.div
          initial={{opacity:0,scale:.95}}
          animate={{opacity:1,scale:1}}
          className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8"
        >
          <div className="flex justify-between items-center">

            <div>
              <div className="flex items-center gap-2 text-cyan-400">
                <Sparkles size={18}/>
                AI Business Insights
              </div>

              <h2 className="mt-3 text-3xl font-bold">
                Everything is running perfectly.
              </h2>

              <p className="mt-2 text-slate-300 max-w-xl">
                Revenue is growing faster than last month and your productivity
                score increased by 18%.
              </p>
            </div>

            <Rocket
              size={90}
              className="text-cyan-400 animate-bounce"
            />

          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{opacity:0,y:40}}
          animate={{opacity:1,y:0}}
          transition={{delay:.2}}
          className="grid gap-6 md:grid-cols-2 xl:grid-cols-4"
        >
          {dashboardStats.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl bg-white/5 border border-white/10 backdrop-blur-lg hover:scale-105 transition duration-300 hover:shadow-[0_0_40px_rgba(0,255,255,.2)]"
            >
              <StatCard {...item}/>
            </div>
          ))}
        </motion.div>

        {/* Bottom Grid */}
        <div className="grid lg:grid-cols-3 gap-6">

          <div className="lg:col-span-2 rounded-3xl bg-white/5 backdrop-blur-xl p-8 border border-white/10">
            <h2 className="text-xl font-bold mb-5">
              Revenue Overview
            </h2>

            <div className="h-72 flex items-center justify-center text-slate-400">
              📈 Beautiful Chart Here
            </div>
          </div>

          <div className="rounded-3xl bg-white/5 backdrop-blur-xl p-8 border border-white/10">

            <h2 className="text-xl font-bold mb-6">
              Activity
            </h2>

            <div className="space-y-5">

              <div className="flex gap-3">
                <div className="w-3 h-3 rounded-full bg-green-400 mt-2"/>
                New order received
              </div>

              <div className="flex gap-3">
                <div className="w-3 h-3 rounded-full bg-blue-400 mt-2"/>
                Inventory synced
              </div>

              <div className="flex gap-3">
                <div className="w-3 h-3 rounded-full bg-pink-400 mt-2"/>
                Payroll completed
              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default DashboardPage;