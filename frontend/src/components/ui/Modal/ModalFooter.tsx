import type { ModalSectionProps } from "./modal.types";

const ModalFooter = ({
  children,
  className = "",
}: ModalSectionProps) => {
  return (
    <div
      className={`
        flex
        justify-end
        gap-3
        border-t
        px-6
        py-4
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default ModalFooter;