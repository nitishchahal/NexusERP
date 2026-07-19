import type { BadgeVariant } from "./badge.types";

export const badgeVariants: Record<
  BadgeVariant,
  string
> = {
  primary:
    "bg-indigo-100 text-indigo-700",

  secondary:
    "bg-slate-100 text-slate-700",

  success:
    "bg-green-100 text-green-700",

  warning:
    "bg-yellow-100 text-yellow-700",

  danger:
    "bg-red-100 text-red-700",

  info:
    "bg-sky-100 text-sky-700",
};