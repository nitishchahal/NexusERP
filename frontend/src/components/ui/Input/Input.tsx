import { forwardRef, useState } from "react";
import { Eye, EyeOff } from "lucide-react";

import type { InputProps } from "./input.types";
import {
  inputBaseStyles,
  inputErrorStyles,
} from "./input.styles";
import { cn } from "../../../lib/cn"; // adjust path to your actual lib location

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
      <div className="w-full space-y-1.5">
        {label && (
          <label className="text-xs font-medium text-indigo-800/70">
            {label}
          </label>
        )}

        <div className="relative">
          {leftIcon && (
            <div className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-indigo-300/50 transition-colors peer-focus:text-indigo-300">
              {leftIcon}
            </div>
          )}

          <input
            ref={ref}
            type={isPassword ? (showPassword ? "text" : "password") : type}
            className={cn(
              inputBaseStyles,
              error && inputErrorStyles,
              leftIcon && "pl-10",
              (rightIcon || isPassword) && "pr-10",
              className
            )}
            {...props}
          />

          {isPassword ? (
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              tabIndex={-1}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-indigo-300/50 transition-colors hover:text-indigo-200"
            >
              {showPassword ? <EyeOff size={17} /> : <Eye size={17} />}
            </button>
          ) : (
            rightIcon && (
              <div className="absolute right-3.5 top-1/2 -translate-y-1/2 text-indigo-300/50">
                {rightIcon}
              </div>
            )
          )}
        </div>

        {error ? (
          <p className="text-xs text-rose-100">{error}</p>
        ) : (
          helperText && (
            <p className="text-xs text-indigo-200/40">{helperText}</p>
          )
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;