import type { BadgeProps } from "./badge.types";
import { badgeVariants } from "./badge.styles";

const Badge = ({
  children,
  variant = "primary",
  className = "",
  ...props
}: BadgeProps) => {
  return (
    <span
      {...props}
      className={[
        "relative inline-flex items-center justify-center overflow-hidden rounded-full",
        "px-3 py-1 text-xs font-semibold tracking-wide",
        "transition-all duration-300 ease-out",
        "backdrop-blur-xl border",
        "before:absolute before:inset-0 before:opacity-0 before:transition-opacity before:duration-300",
        "hover:before:opacity-100 hover:scale-115",
        badgeVariants[variant],
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <span className="relative z-10">{children}</span>
    </span>
  );
};

export default Badge;