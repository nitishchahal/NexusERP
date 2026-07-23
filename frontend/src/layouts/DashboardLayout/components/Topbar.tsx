import {
  Bell,
  ChevronDown,
  Search,
  Sparkles,
} from "lucide-react";

const Topbar = () => {
  return (
    <header className="sticky top-0 z-30 flex h-20 items-center justify-between border-b border-slate-200 bg-white/80 px-8 backdrop-blur-xl">

      {/* Left */}
      <div>

        <h1 className="text-2xl font-semibold tracking-tight text-slate-900">
          Dashboard
        </h1>

        <p className="mt-1 text-sm text-slate-500">
          Welcome back. Here's what's happening today.
        </p>

      </div>

      {/* Right */}
      <div className="flex items-center gap-5">

        {/* Search */}
        <div className="group flex h-12 w-[340px] items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 transition-all duration-200 focus-within:border-indigo-500 focus-within:bg-white focus-within:shadow-lg">

          <Search
            size={18}
            className="text-slate-400 transition group-focus-within:text-indigo-600"
          />

          <input
            type="text"
            placeholder="Search modules, customers, invoices..."
            className="w-full bg-transparent text-sm text-slate-700 placeholder:text-slate-400 focus:outline-none"
          />

        </div>

        {/* AI Button */}
        <button className="flex h-11 items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 text-sm font-medium text-slate-700 transition hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-600">

          <Sparkles size={16} />

          AI

        </button>

        {/* Notifications */}
        <button className="relative flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white transition hover:bg-slate-100">

          <Bell
            size={18}
            className="text-slate-700"
          />

          <span className="absolute right-3 top-3 h-2.5 w-2.5 rounded-full bg-rose-500 ring-2 ring-white"></span>

        </button>

        {/* User */}
        <button className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-3 py-2 transition hover:border-slate-300 hover:shadow-sm">

          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-600 to-violet-600 text-sm font-semibold text-white shadow-lg shadow-indigo-200">

            NC

          </div>

          <div className="text-left">

            <p className="text-sm font-semibold text-slate-900">
              Nitish Choudhary
            </p>

            <p className="text-xs text-slate-500">
              Administrator
            </p>

          </div>

          <ChevronDown
            size={18}
            className="text-slate-400"
          />

        </button>

      </div>

    </header>
  );
};

export default Topbar;