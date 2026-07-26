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
        <div className="relative mb-7">
          {/* Soft ambient glow */}
          <div className="absolute inset-0 scale-150 rounded-full bg-slate-300/20 blur-3xl" />

          {/* Glass circle */}
          <div className="relative flex h-20 w-20 items-center justify-center rounded-3xl border border-white/60 bg-white/70 shadow-[0_12px_40px_rgba(15,23,42,0.08)] backdrop-blur-2xl">
            {icon}
          </div>
        </div>
      )}

      <h1 className="text-3xl font-semibold tracking-[-0.04em] text-slate-900 sm:text-[2rem]">
        {title}
      </h1>

      {subtitle && (
        <p className="mt-3 max-w-sm text-[15px] leading-7 text-slate-500">
          {subtitle}
        </p>
      )}

      {/* Elegant divider */}
      <div className="mt-8 h-px w-20 bg-gradient-to-r from-transparent via-slate-300 to-transparent" />
    </header>
  );
};

export default AuthHeader;