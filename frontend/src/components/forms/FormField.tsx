import type { ReactNode } from "react";

interface FormFieldProps {
  children: ReactNode;
}

const FormField = ({
  children,
}: FormFieldProps) => {
  return (
    <div className="space-y-2">
      {children}
    </div>
  );
};

export default FormField;