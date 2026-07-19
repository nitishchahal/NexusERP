import type { ModalSectionProps } from "./modal.types";

const ModalBody = ({
  children,
  className = "",
}: ModalSectionProps) => {
  return (
    <div
      className={`
        p-6
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default ModalBody;