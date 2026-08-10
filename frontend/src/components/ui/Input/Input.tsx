import { forwardRef, useState } from "react";
import { Eye, EyeOff } from "lucide-react";

import type { InputProps } from "./input.types";
import {
  inputBaseStyles,
  inputErrorStyles,
} from "./input.styles";
import { cn } from "../../../lib/cn";

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      error,
      helperText,
      leftIcon,
      rightIcon,
      type = "text",
      className = "",
      ...props
    },
    ref
  ) => {
    const [showPassword, setShowPassword] = useState(false);

    const isPassword = type === "password";

    return (
      <div className="w-full space-y-2">
        {label && (
          <label className="block text-sm font-medium tracking-tight text-slate-700">
            {label}
          </label>
        )}

        <div className="group relative">
          {leftIcon && (
            <div
              className={cn(
                "pointer-events-none absolute left-3.5 top-1/2 z-10",
                "-translate-y-1/2 text-slate-400",
                "transition-colors duration-200",
                "group-focus-within:text-indigo-500",
                error && "text-rose-400"
              )}
            >
              {leftIcon}
            </div>
          )}

          <input
            ref={ref}
            type={
              isPassword
                ? showPassword
                  ? "text"
                  : "password"
                : type
            }
            className={cn(
              inputBaseStyles,
              "w-full rounded-xl border bg-white",
              "px-4 py-3 text-sm text-slate-800",
              "placeholder:text-slate-400",
              "shadow-sm",
              "outline-none",
              "transition-all duration-200",
              "border-slate-200",
              "hover:border-slate-300",
              "focus:border-indigo-500",
              "focus:ring-4 focus:ring-indigo-500/10",
              "disabled:cursor-not-allowed",
              "disabled:bg-slate-50",
              "disabled:text-slate-400",
              leftIcon && "pl-10",
              (rightIcon || isPassword) && "pr-11",
              error && inputErrorStyles,
              error && "border-rose-400 focus:border-rose-500 focus:ring-rose-500/10",
              className
            )}
            {...props}
          />

          {isPassword ? (
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              aria-label={showPassword ? "Hide password" : "Show password"}
              tabIndex={-1}
              className={cn(
                "absolute right-3.5 top-1/2 z-10",
                "-translate-y-1/2",
                "rounded-md p-1",
                "text-slate-400",
                "transition-all duration-200",
                "hover:bg-slate-100 hover:text-slate-600",
                "focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
              )}
            >
              {showPassword ? (
                <EyeOff size={17} strokeWidth={1.8} />
              ) : (
                <Eye size={17} strokeWidth={1.8} />
              )}
            </button>
          ) : (
            rightIcon && (
              <div
                className={cn(
                  "pointer-events-none absolute right-3.5 top-1/2",
                  "-translate-y-1/2 text-slate-400",
                  "transition-colors duration-200",
                  "group-focus-within:text-indigo-500",
                  error && "text-rose-400"
                )}
              >
                {rightIcon}
              </div>
            )
          )}
        </div>

        {error ? (
          <p className="text-xs font-medium text-rose-500">
            {error}
          </p>
        ) : (
          helperText && (
            <p className="text-xs text-slate-400">
              {helperText}
            </p>
          )
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;