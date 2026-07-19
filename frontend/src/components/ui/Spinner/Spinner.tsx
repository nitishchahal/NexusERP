import { Loader2 } from "lucide-react";

import { spinnerSizes } from "./spinner.styles";
import type { SpinnerProps } from "./spinner.types";

const Spinner = ({
  size = "md",
  className = "",
}: SpinnerProps) => {
  return (
    <Loader2
      className={`
        animate-spin
        text-indigo-600
        ${spinnerSizes[size]}
        ${className}
      `}
    />
  );
};

export default Spinner;