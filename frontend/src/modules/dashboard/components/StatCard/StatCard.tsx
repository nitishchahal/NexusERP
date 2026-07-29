import { TrendingDown, TrendingUp } from "lucide-react";

import { Card } from "../../../../components";

import type { StatCardProps } from "./stat-card.types";
import { cardStyles } from "./stat-card.styles";

const StatCard = ({
  title,
  value,
  icon: Icon,
  color = "bg-indigo-500",
  change,
}: StatCardProps) => {
  const isPositive = change?.startsWith("+");

  return (
    <Card
      className={`
        ${cardStyles}
        group
        relative
        overflow-hidden
        rounded-3xl
        border
        border-slate-200/70
        bg-white
        p-6
        shadow-sm
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-slate-300
        hover:shadow-xl
      `}
    >
      {/* Decorative Glow */}
      <div className="absolute right-0 top-0 h-28 w-28 rounded-full bg-slate-100 blur-3xl opacity-70 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="relative flex items-start justify-between">

        <div className="flex-1">

          <p className="text-sm font-medium tracking-wide text-slate-500">
            {title}
          </p>

          <h2 className="mt-3 text-4xl font-bold tracking-tight text-slate-900">
            {value}
          </h2>

          {change && (
            <div
              className={`mt-4 inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-semibold ${
                isPositive
                  ? "bg-emerald-50 text-emerald-700"
                  : "bg-red-50 text-red-600"
              }`}
            >
              {isPositive ? (
                <TrendingUp size={14} />
              ) : (
                <TrendingDown size={14} />
              )}

              <span>{change}</span>

              <span className="font-medium opacity-70">
                vs last month
              </span>
            </div>
          )}
        </div>

        <div
          className={`
            relative
            flex
            h-16
            w-16
            items-center
            justify-center
            rounded-2xl
            ${color}
            text-white
            shadow-lg
            transition-all
            duration-300
            group-hover:scale-105
          `}
        >
          <div className="absolute inset-0 rounded-2xl bg-white/10" />

          <Icon
            size={30}
            strokeWidth={2}
            className="relative"
          />
        </div>

      </div>
    </Card>
  );
};

export default StatCard;