import type { LabelHTMLAttributes, ReactNode } from "react";

interface FormLabelProps
  extends LabelHTMLAttributes<HTMLLabelElement> {
  children: ReactNode;
  required?: boolean;
}

const FormLabel = ({
  children,
  required = false,
  className = "",
  ...props
}: FormLabelProps) => {
  return (
    <label
      className={`mb-2 block text-sm font-medium text-slate-700 ${className}`}
      {...props}
    >
      {children}

      {required && (
        <span className="ml-1 text-red-500">*</span>
      )}
    </label>
  );
};

export default FormLabel;