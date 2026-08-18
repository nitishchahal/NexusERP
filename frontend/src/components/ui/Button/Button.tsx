import { Loader2 } from "lucide-react";
import type { ButtonProps } from "./button.types";
import { buttonSizes, buttonVariants } from "./button.styles";

const Button = ({
  children,
  variant = "primary",
  size = "md",
  loading = false,
  fullWidth = false,
  className = "",
  disabled,
  ...props
}: ButtonProps) => {
  return (
    <button
      {...props}
      disabled={disabled || loading}
      className={`
        relative overflow-hidden group
        inline-flex items-center justify-center gap-3
        rounded-xl font-semibold
        transition-all duration-400 ease-out
        disabled:cursor-not-allowed disabled:opacity-60

        before:absolute before:inset-0
        before:bg-gradient-to-r
        before:from-white/20
        before:via-white/5
        before:to-transparent
        before:opacity-0
        before:transition-opacity
        before:duration-300

        hover:before:opacity-100
        hover:-translate-y-0.5
        active:translate-y-0
        active:scale-[0.98]

        ${buttonVariants[variant]}
        ${buttonSizes[size]}
        ${fullWidth ? "w-full" : ""}
        ${className}
      `}
    >
      {/* Animated Glow */}
      <span
        className="
          absolute inset-0
          bg-gradient-to-r
          from-cyan-400/10
          via-fuchsia-500/10
          to-cyan-400/10
          opacity-0
          blur-xl
          transition-opacity
          duration-300
          group-hover:opacity-100
        "
      />

      {/* Shine Effect */}
      <span
        className="
          absolute -left-20 top-0 h-full w-16
          rotate-12
          bg-white/20 blur-md
          transition-all duration-700
          group-hover:left-[120%]
        "
      />

      <span className="relative flex items-center gap-2">
        {loading && <Loader2 className="h-4 w-4 animate-spin" />}
        {children}
      </span>
    </button>
  );
};

export default Button;