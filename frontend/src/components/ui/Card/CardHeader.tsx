import type { CardSectionProps } from "./card.types";
import { cardHeaderStyles } from "./card.styles";

const CardHeader = ({
  children,
  className = "",
}: CardSectionProps) => {
  return (
    <header
      className={`
        ${cardHeaderStyles}
        relative overflow-hidden rounded-t-2xl
        px-6 py-8
        flex flex-col items-center text-center
        bg-gradient-to-br from-indigo-50 via-white to-violet-50
        dark:from-slate-900 dark:via-slate-900 dark:to-slate-800
        ${className}
      `}
    >
      {/* Decorative Blur */}
      <div className="absolute -top-12 -left-12 h-32 w-32 rounded-full bg-indigo-400/20 blur-3xl" />
      <div className="absolute -bottom-12 -right-12 h-32 w-32 rounded-full bg-violet-500/20 blur-3xl" />

      {/* Top Accent */}
      <div className="absolute top-0 left-1/2 h-1 w-24 -translate-x-1/2 rounded-full bg-gradient-to-r from-indigo-500 via-violet-500 to-pink-500" />

      <div className="relative z-10 w-full">
        {children}
      </div>
    </header>
  );
};

export default CardHeader;