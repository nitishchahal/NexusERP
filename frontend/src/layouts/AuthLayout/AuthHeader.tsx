import type { ReactNode } from "react";

interface AuthHeaderProps {
  title: string;
  subtitle?: string;
  icon?: ReactNode;
}

const AuthHeader = ({ title, subtitle, icon }: AuthHeaderProps) => {
  return (
    <header className="flex flex-col items-center text-center">
      {icon && (
        <div className="relative flex items-center justify-center">
          <div className="absolute h-20 w-20 rounded-full bg-indigo-500/20 blur-2xl" />
          <div className="relative">{icon}</div>
        </div>
      )}

      <h2 className="bg-gradient-to-r from-white via-indigo-100 to-indigo-300 bg-clip-text text-[1.75rem] font-bold tracking-tight text-transparent sm:text-3xl">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-2 max-w-xs text-sm leading-relaxed text-indigo-200/45">
          {subtitle}
        </p>
      )}

      <div className="mt-5 h-px w-12 bg-gradient-to-r from-transparent via-indigo-400/40 to-transparent" />
    </header>
  );
};

export default AuthHeader;