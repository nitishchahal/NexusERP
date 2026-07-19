import type {
  ButtonSize,
  ButtonVariant,
} from "./button.types";

export const buttonVariants: Record<ButtonVariant, string> = {
  primary:
    "bg-indigo-600 text-white hover:bg-indigo-700",

  secondary:
    "bg-slate-200 text-slate-900 hover:bg-slate-300",

  outline:
    "border border-slate-300 bg-transparent hover:bg-slate-100",

  danger:
    "bg-red-600 text-white hover:bg-red-700",

  success:
    "bg-green-600 text-white hover:bg-green-700",

  ghost:
    "bg-transparent hover:bg-slate-100",

  gradient:
    "bg-gradient-to-r from-indigo-500 to-violet-600 text-white shadow-lg shadow-indigo-950/40 hover:from-indigo-400 hover:to-violet-500 transition-transform hover:scale-[1.01] active:scale-[0.99]",
};

export const buttonSizes: Record<ButtonSize, string> = {
  sm: "px-3 py-2 text-sm",
  md: "px-4 py-2",
  lg: "px-6 py-3 text-lg",
};