import {
  forwardRef,
  useId,
  useState,
  type ChangeEvent,
} from "react";
import { Eye, EyeOff, X } from "lucide-react";

import type { InputProps } from "./input.types";
import {
  inputBaseStyles,
  inputErrorStyles,
} from "./input.styles";
import { cn } from "../../../lib/cn";

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      id,
      label,
      error,
      helperText,
      leftIcon,
      rightIcon,
      type = "text",
      className = "",
      required,
      disabled,
      value,
      defaultValue,
      onChange,
      ...props
    },
    ref
  ) => {
    const generatedId = useId();
    const inputId = id ?? generatedId;

    const helperId = `${inputId}-helper`;
    const errorId = `${inputId}-error`;

    const [showPassword, setShowPassword] = useState(false);
    const [hasValue, setHasValue] = useState(
      value !== undefined
        ? String(value).length > 0
        : defaultValue !== undefined
        ? String(defaultValue).length > 0
        : false
    );

    const isPassword = type === "password";
    const isSearch = type === "search";

    const actualType = isPassword
      ? showPassword
        ? "text"
        : "password"
      : type;

    const hasRightAction = isPassword || isSearch;
    const hasRightContent = rightIcon || hasRightAction;

    const describedBy = error
      ? errorId
      : helperText
      ? helperId
      : undefined;

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
      setHasValue(event.target.value.length > 0);
      onChange?.(event);
    };

    const handleClear = () => {
      if (disabled) return;

      // Clear works best for uncontrolled inputs when the parent
      // also supplies a ref.
      const input = document.getElementById(
        inputId
      ) as HTMLInputElement | null;

      if (!input) return;

      const nativeSetter = Object.getOwnPropertyDescriptor(
        HTMLInputElement.prototype,
        "value"
      )?.set;

      nativeSetter?.call(input, "");

      input.dispatchEvent(
        new Event("input", {
          bubbles: true,
        })
      );

      input.focus();
      setHasValue(false);
    };

    return (
      <div className="w-full space-y-2">
        {label && (
          <label
            htmlFor={inputId}
            className={cn(
              "block text-sm font-medium tracking-tight",
              "text-slate-700",
              "dark:text-slate-200",
              disabled && "cursor-not-allowed opacity-60"
            )}
          >
            {label}

            {required && (
              <span
                aria-hidden="true"
                className="ml-1 text-rose-500"
              >
                *
              </span>
            )}
          </label>
        )}

        <div className="group relative">
          {/* Left icon */}
          {leftIcon && (
            <div
              aria-hidden="true"
              className={cn(
                "pointer-events-none absolute left-3.5 top-1/2 z-10",
                "-translate-y-1/2",
                "text-slate-400",
                "transition-colors duration-200",
                "group-focus-within:text-indigo-500",
                "dark:text-slate-500",
                "dark:group-focus-within:text-indigo-400",
                error && "text-rose-400",
                disabled && "opacity-50"
              )}
            >
              {leftIcon}
            </div>
          )}

          <input
            {...props}
            ref={ref}
            id={inputId}
            type={actualType}
            value={value}
            defaultValue={defaultValue}
            required={required}
            disabled={disabled}
            aria-invalid={error ? true : undefined}
            aria-describedby={describedBy}
            aria-required={required ? true : undefined}
            onChange={handleChange}
            className={cn(
              inputBaseStyles,

              // Base
              "w-full rounded-xl border",
              "bg-white",
              "px-4 py-3",
              "text-sm text-slate-800",
              "placeholder:text-slate-400",
              "shadow-sm",
              "outline-none",
              "transition-all duration-200",

              // Border
              "border-slate-200",
              "hover:border-slate-300",
              "focus:border-indigo-500",
              "focus:ring-4 focus:ring-indigo-500/10",

              // Dark mode
              "dark:border-slate-700",
              "dark:bg-slate-900",
              "dark:text-slate-100",
              "dark:placeholder:text-slate-500",
              "dark:hover:border-slate-600",
              "dark:focus:border-indigo-400",
              "dark:focus:ring-indigo-400/10",

              // Disabled
              "disabled:cursor-not-allowed",
              "disabled:bg-slate-50",
              "disabled:text-slate-400",
              "disabled:hover:border-slate-200",
              "dark:disabled:bg-slate-800/50",
              "dark:disabled:hover:border-slate-700",

              // Icons
              leftIcon && "pl-10",
              hasRightContent && "pr-11",

              // Search clear button
              isSearch && hasValue && "pr-20",

              // Error
              error && inputErrorStyles,
              error &&
                "border-rose-400",
              error &&
                "focus:border-rose-500",
              error &&
                "focus:ring-rose-500/10",
              error &&
                "dark:border-rose-500/70",
              error &&
                "dark:focus:border-rose-400",

              className
            )}
          />

          {/* Password toggle */}
          {isPassword ? (
            <button
              type="button"
              onClick={() =>
                setShowPassword((prev) => !prev)
              }
              disabled={disabled}
              aria-label={
                showPassword
                  ? "Hide password"
                  : "Show password"
              }
              aria-pressed={showPassword}
              className={cn(
                "absolute right-3.5 top-1/2 z-10",
                "-translate-y-1/2",
                "rounded-md p-1",
                "text-slate-400",
                "transition-all duration-200",
                "hover:bg-slate-100",
                "hover:text-slate-600",
                "focus:outline-none",
                "focus:ring-2",
                "focus:ring-indigo-500/20",
                "disabled:pointer-events-none",
                "disabled:opacity-50",
                "dark:hover:bg-slate-800",
                "dark:hover:text-slate-300"
              )}
            >
              {showPassword ? (
                <EyeOff
                  size={17}
                  strokeWidth={1.8}
                />
              ) : (
                <Eye
                  size={17}
                  strokeWidth={1.8}
                />
              )}
            </button>
          ) : isSearch && hasValue ? (
            /* Search clear button */
            <button
              type="button"
              onClick={handleClear}
              disabled={disabled}
              aria-label="Clear search"
              className={cn(
                "absolute right-3.5 top-1/2 z-10",
                "-translate-y-1/2",
                "rounded-md p-1",
                "text-slate-400",
                "transition-all duration-200",
                "hover:bg-slate-100",
                "hover:text-slate-600",
                "focus:outline-none",
                "focus:ring-2",
                "focus:ring-indigo-500/20",
                "dark:hover:bg-slate-800",
                "dark:hover:text-slate-300"
              )}
            >
              <X size={16} strokeWidth={2} />
            </button>
          ) : (
            rightIcon && (
              <div
                aria-hidden="true"
                className={cn(
                  "pointer-events-none absolute right-3.5 top-1/2",
                  "-translate-y-1/2",
                  "text-slate-400",
                  "transition-colors duration-200",
                  "group-focus-within:text-indigo-500",
                  "dark:text-slate-500",
                  "dark:group-focus-within:text-indigo-400",
                  error && "text-rose-400",
                  disabled && "opacity-50"
                )}
              >
                {rightIcon}
              </div>
            )
          )}
        </div>

        {/* Error message */}
        {error ? (
          <p
            id={errorId}
            role="alert"
            className="
              flex items-center gap-1
              text-xs font-medium
              text-rose-500
              dark:text-rose-400
            "
          >
            <span
              aria-hidden="true"
              className="inline-block h-1.5 w-1.5 rounded-full bg-current"
            />

            {error}
          </p>
        ) : (
          helperText && (
            <p
              id={helperId}
              className="
                text-xs
                text-slate-400
                dark:text-slate-500
              "
            >
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