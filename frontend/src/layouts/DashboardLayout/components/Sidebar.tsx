import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Package,
  ShoppingCart,
  Users,
  Briefcase,
  Settings,
  ChevronRight,
  Sparkles,
} from "lucide-react";

const menus = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    path: "/dashboard",
  },
  {
    title: "Inventory",
    icon: Package,
    path: "/inventory",
  },
  {
    title: "Sales",
    icon: ShoppingCart,
    path: "/sales",
  },
  {
    title: "HRMS",
    icon: Users,
    path: "/hrms",
  },
  {
    title: "CRM",
    icon: Briefcase,
    path: "/crm",
  },
  {
    title: "Settings",
    icon: Settings,
    path: "/settings",
  },
];

const Sidebar = () => {
  return (
    <aside className="flex h-screen w-72 flex-col border-r border-slate-200 bg-white">

      {/* Brand */}
      <div className="border-b border-slate-200 px-6 py-6">

        <div className="flex items-center gap-4">

          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-600 to-violet-600 shadow-lg shadow-indigo-200">

            <Sparkles
              className="text-white"
              size={20}
            />

          </div>

          <div>

            <h1 className="text-lg font-semibold tracking-tight text-slate-900">
              NexusERP
            </h1>

            <p className="text-xs text-slate-500">
              Enterprise Platform
            </p>

          </div>

        </div>

      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-1 px-4 py-5">

        <p className="mb-3 px-3 text-xs font-semibold uppercase tracking-[0.15em] text-slate-400">
          Workspace
        </p>

        {menus.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `
                group
                relative
                flex
                items-center
                justify-between
                rounded-xl
                px-3
                py-3
                transition-all
                duration-200
                ${
                  isActive
                    ? "bg-slate-900 text-white shadow-sm"
                    : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                }
              `
              }
            >
              <div className="flex items-center gap-3">

                <div
                  className={`
                    flex
                    h-9
                    w-9
                    items-center
                    justify-center
                    rounded-lg
                    transition
                  `}
                >
                  <Icon size={19} strokeWidth={2} />
                </div>

                <span className="font-medium">
                  {item.title}
                </span>

              </div>

              <ChevronRight
                size={16}
                className="opacity-0 transition-all duration-200 group-hover:translate-x-1 group-hover:opacity-100"
              />
            </NavLink>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="border-t border-slate-200 p-5">

        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">

          <p className="text-sm font-semibold text-slate-900">
            NexusERP Pro
          </p>

          <p className="mt-1 text-xs leading-relaxed text-slate-500">
            Unified platform for Inventory, Sales, CRM and HR.
          </p>

        </div>

      </div>

    </aside>
  );
};

export default Sidebar;