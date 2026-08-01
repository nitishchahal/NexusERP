import type { BadgeProps } from "./badge.types";
import { badgeVariants } from "./badge.styles";

const Badge = ({
  children,
  variant = "primary",
  className,
  ...props
}: BadgeProps) => {
  return (
    <span
      {...props}
      className={[
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold",
        badgeVariants[variant],
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </span>
  );
};

export default Badge;