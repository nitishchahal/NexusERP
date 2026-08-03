import type { SpinnerProps } from "./spinner.types";
import { spinnerSizes } from "./spinner.styles";

const Spinner = ({ size = "md", className }: SpinnerProps) => {
  return (
    <div
      className={[
        "relative inline-flex items-center justify-center",
        spinnerSizes[size],
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div className="absolute inset-0 rounded-full border-2 border-indigo-200" />
      <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-indigo-600 border-r-violet-500 animate-spin" />
      <div className="h-2 w-2 rounded-full bg-indigo-600 animate-pulse" />
    </div>
  );
};

export default Spinner;